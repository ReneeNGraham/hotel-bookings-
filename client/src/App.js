import { useState, useEffect } from "react";
import './App.css';
import BookingForm from "./components/BookingForm";
import BookingsList from "./containers/BookingsList";
import { getBookings } from "./services/BookingServices";

function App() {
   const[guestBookings, setGuestBookings] = useState([]);

   useEffect(() => {
     getBookings().then((allBookings) => {
       setGuestBookings(allBookings);
     })
    }, []);

    const addBooking = (booking) => {
      const temp = guestBookings.map((s) => s);
      temp.push(booking);
      setGuestBookings(temp);
    };

    const removeBooking = (id) => {
      const temp = guestBookings.map((s) => s);
      const indexToDel = temp.map((s) => s._id).indexOf(id);
      console.log(indexToDel);

      temp.splice(indexToDel, 1);
      setGuestBookings(temp);
    };

  return (
    <>
    <div className="App">
      <BookingForm addBooking={addBooking} />
      <BookingsList bookings={guestBookings}
      removeBooking={removeBooking} />
    </div>
    </>
  );
}

export default App;
