import "./Booking.css"; //importerar stilmall
import {
  mainTransition,
  contentTransition,
  calendarFunctionality,
} from "../animations/BookingTransition"; //importerar animationer
import { useEffect } from "react"; //importerar useEffect-hooken

const Booking = () => {
  //använder useEffect-hooken för animationerna:
  useEffect(() => {
    mainTransition();
    contentTransition();
    calendarFunctionality();
  });

  return (
    <main>
      <div className="form">
        <form action="#" method="post">
          <label htmlFor="Name">Namn:</label>
          <input type="text" name="Name" id="Name" />
          <label htmlFor="PhoneNO">Telefon:</label>
          <input type="tel" name="PhoneNO" id="PhoneNO" />
          <label htmlFor="service">Välj Behandlingar:</label>
          <select name="service" id="service">
            <option value="1">Klippning 30 min</option>
            <option value="2">klippning 50 min</option>
            <option value="3">klippning premium</option>
            <option value="4">Rakning av huvud</option>
            <option value="5">Beardstyling</option>
            <option value="6">Beardstrimming</option>
            <option value="7">
              Rakning av ansikte med kroksabel och eldkastare
            </option>
          </select>
          <div id="calendar-nav">
            <button type="button" id="prevMonth">
              &lt;
            </button>
            <span id="currentMonth"></span>
            <button type="button" id="nextMonth">
              &gt;
            </button>
          </div>
          <div id="calendar"></div>
          <input type="hidden" id="selectedDate" name="date" />
          <p id="feedback" className="hidden">
            Du har valt datumet: <span id="chosenDate"></span>
          </p>
          <button type="submit">Boka tid</button>
        </form>
      </div>
    </main>
  );
};

export default Booking;
