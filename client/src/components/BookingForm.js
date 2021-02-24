import React, {useState} from "react";
import { postBooking } from "../services/BookingServices";


const BookingForm = ( {addBooking} ) => {
    const[formData, setFormData] = useState({});

    const onChange = (event) => {
        formData[event.target.id] = event.target.value;
        setFormData(formData);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        postBooking(formData).then(() => {
            addBooking(formData);
        })
    };

    return (
        <form onSubmit={onSubmit} id="booking-form">
         <h2>Add Guest</h2>
         <div class="formWrap">
             <label for="guest">Guest name: </label>
             <input onChange={onChange} type="text" id="name"/>
         </div>
         <div class="formWrap">
            <label for="email">Guest email: </label>
             <input onChange={onChange} type="text" id="email"/>
         </div>
         <div class="formWrap">
         <label for="checkedIn">CheckIn status:: </label>
             <input onChange={onChange} type="text" id="status"/>
         </div>

         <input type="button" value="Check-in" />

        </form>

    
    );
};
    


export default BookingForm;


