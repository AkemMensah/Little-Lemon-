import { useState } from "react";
import "../styles/booking.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { redirect } from "react-router-dom";

function fetchAPI(date) {
  return ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];
}
function submitAPI(form) {
  const data = {
    name: "front",
    price: 19.54,
    description: "I am from the frontend",
  };
  fetch("http://localhost:8000/menu/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        return false;
      } else {
        return true;
      }
    })
    .catch((error) => {
      return false;
    });
}
function BookingForm({ form, setForm }) {
  const [availabilities, setAvailabilities] = useState([]);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  // const history = useHistory();

  const placeholders = {
    name: "Enter name",
    phone: "Enter phone number",
    date: "Sun Jul 25 2021",
    time: "16:00",
    guests: 1,
    occasion: "Select occasion",
    special: "Any request?",
    email: "Enter email",
  };

  const isValidEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(form.email);
  };
  // alert(form.date);
  const isInValidForm = (form, setForm) => {
    form = () => setForm({ ...form, form: form });
    // (e) => setForm({ ...form, special: e.target.value })
    // const res =
    if (
      form.name === undefined ||
      form.name.length > 3 ||
      form.phone === undefined ||
      form.date === undefined ||
      form.time === undefined ||
      form.guests === undefined ||
      form.occasion === undefined ||
      form.special === undefined ||
      !isValidEmail()
    ) {
      // console.log(form.target)
      return false;
    } else {
      return true;
    }
  };
  console.log(form);

  // alert(isInValidForm(form));

  useEffect(() => {
    if (success) {
      navigate("/confirm-booking");
      // history.push("/confirm-booking");
      // redirect("/confirm-booking");
    }
  }, [success]);

  function submitForm(e) {
    e.preventDefault();
    // console.log(form);
    setSuccess(submitAPI(form));
    // redirect("/confirm-booking");
  }

  function checkAvailabilities(date) {
    setAvailabilities(fetchAPI(date));
  }

  function handleDateChange(e) {
    e.preventDefault();
    setForm({ ...form, date: e.target.value });
    checkAvailabilities(e.target.value);
  }
  return (
    <div className="booking">
      <h1>My Reservation</h1>
      <form onSubmit={submitForm}>
        <div className="details">
          <div className="form-item">
            <label htmlFor="name">Name:</label>
            <input
              htmlFor="name"
              type="text"
              placeholder={placeholders.name}
              id="name"
              required
              // className="form-item"
              //   value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="phone">Phone:</label>
            <input
              // className="form-item"
              htmlFor="phone"
              type="tel"
              placeholder={placeholders.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              id="phone"
              //   value={form.phone}
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="email">Email:</label>
            <input
              htmlFor="email"
              type="email"
              id="email"
              placeholder={placeholders.email}
              // value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="res-date">Choose date:</label>
            <input
              // className="form-item"
              type="date"
              id="res-date"
              name="res-date"
              //   value={form.date}
              min="2021-07-22"
              max="2025-12-31"
              onChange={handleDateChange}
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="res-time">Choose time:</label>
            <select
              id="res-time"
              name="res-time"
              //   value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
            >
              {availabilities.map((time) => (
                <option value={time}>{time}</option>
              ))}
              {/* <option value="16:00">16:00</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option> */}
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="guests">Number of guests:</label>
            <input
              // className="form-item"
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              //   value={form.guests}
              placeholder={placeholders.guests}
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="occasion">Occasion:</label>
            <select
              id="occasion"
              name="occasion"
              placeholder={placeholders.occasion}
              // value={form.occasion}
              className="form-item"
              onChange={(e) => setForm({ ...form, occasion: e.target.value })}
            >
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="business">Business</option>
              <option value="other">Other</option>
              {form.occasion}
            </select>
          </div>
        </div>
        <div className="form-other">
          <div className="form-text">
            <label htmlFor="special">Special Request</label>
            <textarea
              id="special"
              name="special"
              placeholder={placeholders.special}
              // value={form.special}
              onChange={(e) => setForm({ ...form, special: e.target.value })}
            ></textarea>
          </div>
          <button
            className="form-item"
            type="submit"
            value="Make Reservation"
            // onClick={alert(isInValidForm(form))}
            // onClick={alert(isInValidForm)}
            // disabled={!isInValidForm(form)}
          >
            Make Reservation
          </button>
        </div>
      </form>
    </div>
  );
}

function BookingPage() {
  const [form, setForm] = useState({});
  return (
    <div className="booking-page">
      <BookingForm form={form} setForm={setForm} />
    </div>
  );
}

export default BookingPage;
