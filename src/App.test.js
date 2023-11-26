import { render, screen } from '@testing-library/react';
import App from './App';
import ReservationPage from './components/ReservationPage';
import Main from './components/MainBdy';
import HeroSection from './components/MainBdy';


test('renders learn react link', () => {
  render(<HeroSection />);
  const linkElement = screen.getByText("Little Lemon");
  expect(linkElement).toBeInTheDocument("HeroSection");
});

test("renders the booking heading", () => {
  render(<ReservationPage />);
  const headingElement = screen.getByText("My Reservation");
  expect(headingElement).toBeInTheDocument("ReservationPage");
});