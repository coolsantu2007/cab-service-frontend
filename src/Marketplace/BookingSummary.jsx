import React from "react";

const BookingSummary = () => {
        let booking_data = JSON.parse(localStorage.getItem('booking_details'))
        let car_data = JSON.parse(localStorage.getItem('car_details'))
        let agreement_status = localStorage.getItem('agreement_status')
        if(agreement_status === "false"){
          agreement_status = "Not Agreed"
        }else{
          agreement_status = "Agreed"
        }
return (
    <>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Mobile</th>
      <th scope="col">Pickup Address</th>
      <th scope="col">Drop Address</th>
      <th scope="col">Pickup Time</th>
      <th scope="col">Travel Date</th>
      <th scope="col">Car Type</th>
      <th scope="col">Rate</th>
      <th scope="col">Agreement Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{booking_data.item.name}</td>
      <td>{booking_data.item.mobile}</td>
      <td>{booking_data.item.pickup_address}</td>
      <td>{booking_data.item.drop_address}</td>
      <td>{booking_data.item.pickup_time}</td>
      <td>{booking_data.item.travel_date}</td>
      <td>{car_data.item.car_model}</td>
      <td>{car_data.item.rate}</td>
      <td>{agreement_status}</td>
    </tr>
  </tbody>
</table>
      </>
)
}

export default BookingSummary;