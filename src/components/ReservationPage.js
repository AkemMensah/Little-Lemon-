import { useState } from "react";
import "../styles/booking.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function fetchAPI(date) {
  return ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];
}
function submitAPI(form) {
  console.log("submited");
  return true;
}

function BookingForm({ form, setForm}) {
  
  const [availabilities, setAvailabilities] = useState([]);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const placeholders={
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
  }

  const isInValidForm = () => {
    const res = (form.name && form.name.length>3) &&
      form.phone &&
      form.date &&
      form.time &&
      form.guests &&
      form.occasion &&
      form.special &&
      isValidEmail()
    console.log(res);
    return !res;
  };
  console.log(isInValidForm());

  useEffect(() => {
    console.log(success)
    if (success) {
      navigate("/confirm-booking");
    }
  }, [success]);

  function submitForm(e) {
  e.preventDefault();
  console.log(form);
  setSuccess(submitAPI(form));
  }

  function checkAvailabilities(date){
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
        <label for="name">Name:</label>
        <input
          for="name"
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
        <label for="phone">Phone:</label>
        <input
        // className="form-item"
          for="phone"
          type="tel"
          placeholder={placeholders.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          id="phone"
          //   value={form.phone}
        ></input>
        </div>
        <div className="form-item">
        <label for="email">Email:</label>
        <input
          for="email"
          type="email"
          id="email"
          placeholder={placeholders.email}
          // value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        ></input>
        </div>
        <div className="form-item">
        <label for="res-date">Choose date:</label>
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
        <label for="res-time">Choose time:</label>
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
        <label for="guests">Number of guests:</label>
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
        <label for="occasion">Occasion:</label>
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
        <label for="special">Special Request</label>
        <textarea
          id="special"
          name="special"
          placeholder={placeholders.special}
          // value={form.special}
          onChange={(e) => setForm({ ...form, special: e.target.value })}
        ></textarea>
        </div>
        <button className="form-item" type="submit" value="Make Reservation" disabled={isInValidForm} >
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
    <div className="booking-page" >
      <BookingForm form={form}  setForm={setForm}/>
    </div>
  );
}

export default BookingPage;
