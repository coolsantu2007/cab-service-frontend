import React, { useState } from "react";
import { useEffect } from "react";
import { HeaderPage } from './AppPage';
import BookingSummary from "./BookingSummary";
import { Link } from "react-router-dom";

const BookingConfirmationModal = (props) => {
  return (
    <>
    {/*Modal to view booking details*/}
    <div className="modal fade" id="bookingDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <h1>Booking Summary</h1>
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <BookingSummary />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingConfirmationMessage">Confirm Booking</button>
            </div>
          </div>
        </div>
      </div>

{/*Modal for booking confirmation message*/}
      <div className="modal fade" id="bookingConfirmationMessage" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "350px", left: "40%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
            <Link to='/'><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></Link>
            </div>
            <div className="modal-body">
              You have successfully booked your cab. Your booking id is - ABC123456. Thank you for your booking.
            </div>
          </div>
        </div>
      </div>

{/*Modal for booking next step after car selection*/}
      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target={'#exampleModal_' + props.id}>Select</button>
      <div className="modal fade" id={'exampleModal_' + props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "350px", left: "40%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{ display: "flex" }}>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingConfirmationMessage">Confirm Booking</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" style={{ marginLeft: "25px" }} data-bs-toggle="modal" data-bs-target="#bookingDetails">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const LocalCar = () => {
  const [item, setItem] = useState({
    car_model: "",
    rate: ""
  })
  function store_data(e) {
    let carS = document.getElementsByClassName("card-body")
    if(carS.length > 0){
      console.log('length', carS[0].getElementsByTagName("h5").car_model.innerHTML, carS[0].getElementsByTagName("p").rate.innerHTML, )
      console.log('button value', e.target.value)
    }
    let car = document.getElementById("car_model").innerHTML;
    let price = document.getElementById("rate").innerHTML;
    setItem({
      car_model: car,
      rate: price
    })
  }
  useEffect(() => {
    localStorage.setItem('car_details', JSON.stringify({ item }))
  })
  return (
    <>
      <HeaderPage />
      <div>
        <h5>Select your favourite car</h5>
        <div style={{ display: "flex" }}>
          <div className="card" style={{ width: "18rem", marginLeft: "15px" }}>
            <img src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=75" className="card-img-top" alt="..." />
            <div className="card-body" id="abc">
              <h5 className="card-title" id="car_model">Hyundai Aura</h5>
              <p className="card-text" id="rate">299/- per ride + Petrol</p>
              <button type="button" className="btn btn-primary" id="1" onClick={store_data}>{<BookingConfirmationModal id={1} />}</button>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", marginLeft: "15px" }}>
            <img src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=75" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" id="car_model">Wagon R</h5>
              <p className="card-text" id="rate">149/- per ride + Petrol</p>
              <button type="button" className="btn btn-primary" value="2" onClick={store_data}>{<BookingConfirmationModal id={2} />}</button>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", marginLeft: "15px" }}>
            <img src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=75" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" id="car_model">Maruti 800</h5>
              <p className="card-text" id="rate">199/- per ride + Petrol</p>
              <button type="button" className="btn btn-primary" value="3" onClick={store_data}>{<BookingConfirmationModal id={3} />}</button>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", marginLeft: "15px", marginRight: "15px" }}>
            <img src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=75" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" id="car_model">Maruti Baleno</h5>
              <p className="card-text" id="rate">399/- per ride + Petrol</p>
              <button type="button" className="btn btn-primary" value="4" onClick={store_data}>{<BookingConfirmationModal id={4} />}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const OutstationCar = () => {
  const [item, setItem] = useState({
    car_model: "",
    rate: ""
  })
  function store_data() {
    let car = document.getElementById("car_model").innerHTML;
    let price = document.getElementById("rate").innerHTML;
    setItem({
      car_model: car,
      rate: price
    })

  }
  useEffect(() => {
    localStorage.setItem('car_details', JSON.stringify({ item }))
  })
  return (
    <>
      <HeaderPage />
      <div>
        <h5>Select your favourite car</h5>
        <div style={{ display: "flex" }}>
          <div className="card" style={{ width: "18rem", marginLeft: "15px" }}>
            <img src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=75" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" id="car_model">Hyundai Aura</h5>
              <p className="card-text" id="rate">1500/- per day + Petrol</p>
              <button type="button" className="btn btn-primary" onClick={store_data}>{<BookingConfirmationModal id={5} />}</button>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", marginLeft: "15px" }}>
            <img src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=75" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" id="car_model">Wagon R</h5>
              <p className="card-text" id="rate">1000/- per day + Petrol</p>
              <button type="button" className="btn btn-primary" onClick={store_data}>{<BookingConfirmationModal id={6} />}</button>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", marginLeft: "15px" }}>
            <img src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=75" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" id="car_model">Maruti 800</h5>
              <p className="card-text" id="rate">1200/- per day + Petrol</p>
              <button type="button" className="btn btn-primary" onClick={store_data}>{<BookingConfirmationModal id={7} />}</button>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", marginLeft: "15px", marginRight: "15px" }}>
            <img src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=75" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" id="car_model">Maruti Baleno</h5>
              <p className="card-text" id="rate">2000/- per day + Petrol</p>
              <button type="button" className="btn btn-primary" onClick={store_data}>{<BookingConfirmationModal id={8} />}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const AirportCar = () => {
  return (
    <>
      <HeaderPage />
      <div>
        <h5>Select your favourite car</h5>
        <div style={{ display: "flex" }}>
          <div className="card" style={{ width: "18rem", marginLeft: "15px" }}>
            <img src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=75" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Hyundai Aura</h5>
              <p className="card-text">3500/- One Way + Toll Tax</p>
              <button type="button" className="btn btn-primary">{<BookingConfirmationModal id={9} />}</button>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", marginLeft: "15px" }}>
            <img src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=75" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Wagon R</h5>
              <p className="card-text">2500/- One Way + Toll Tax</p>
              <button type="button" className="btn btn-primary">{<BookingConfirmationModal id={10} />}</button>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", marginLeft: "15px" }}>
            <img src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=75" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Maruti 800</h5>
              <p className="card-text">3000/- One Way + Toll Tax</p>
              <button type="button" className="btn btn-primary">{<BookingConfirmationModal id={11} />}</button>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", marginLeft: "15px", marginRight: "15px" }}>
            <img src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=75" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Maruti Baleno</h5>
              <p className="card-text">4000/- One Way + Toll Tax</p>
              <button type="button" className="btn btn-primary">{<BookingConfirmationModal id={12} />}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const SelfDriveCar = () => {
  return (
    <>
      <HeaderPage />
      <div>
        <h5>Select your favourite car</h5>
        <div style={{ display: "flex" }}>
          <div className="card" style={{ width: "18rem", marginLeft: "15px" }}>
            <img src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=75" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Hyundai Aura</h5>
              <p className="card-text">750/- per day + Petrol</p>
              <button type="button" className="btn btn-primary">{<BookingConfirmationModal id={13} />}</button>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", marginLeft: "15px" }}>
            <img src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=75" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Hyundai Aura</h5>
              <p className="card-text">750/- per day + Petrol</p>
              <button type="button" className="btn btn-primary">{<BookingConfirmationModal id={14} />}</button>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", marginLeft: "15px" }}>
            <img src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=75" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Hyundai Aura</h5>
              <p className="card-text">750/- per day + Petrol</p>
              <button type="button" className="btn btn-primary">{<BookingConfirmationModal id={15} />}</button>
            </div>
          </div>
          <div className="card" style={{ width: "18rem", marginLeft: "15px", marginRight: "15px" }}>
            <img src="https://imgd.aeplcdn.com/1200x900/n/cw/ec/41652/aura-exterior-right-front-three-quarter-54.jpeg?q=75" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Hyundai Aura</h5>
              <p className="card-text">750/- per day + Petrol</p>
              <button type="button" className="btn btn-primary">{<BookingConfirmationModal id={16} />}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { OutstationCar, LocalCar, AirportCar, SelfDriveCar, BookingConfirmationModal };