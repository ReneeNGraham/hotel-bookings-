import Booking from "../components/Booking";

const BookingsList = ({bookings, removeBooking}) => {
    const list = bookings.map((booking) => {
        return < Booking booking={booking} removeBooking={removeBooking}/> 
    });

     return <>{list}</>;
};

export default BookingsList;