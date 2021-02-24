import { deleteBooking } from "../services/BookingServices";

const Booking = ({ booking, removeBooking}) => {
    console.log(booking)
    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id);
        });
    };

    return (
        <>

        <h1>Booking name: {booking.name}</h1>
        <p>Email: {booking.email}</p>
        <p>CheckedIn? {booking.checkedIn}</p>
        <button onClick={handleDelete} >🗑 = DELETE </button>
        <hr></hr>
        </>

    )
}

export default Booking;