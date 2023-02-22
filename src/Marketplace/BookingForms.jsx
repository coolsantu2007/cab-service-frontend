import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AgreementModal = (props) => {
  const [status, setStatus] = useState(false)
  function agreement_status(){
    setStatus(true)
  }

  useEffect(() => {
    localStorage.setItem('agreement_status', JSON.stringify(status))
  })
  return (
    <>
    <div style={{display: "flex"}}>
      <div className="form-check" data-bs-toggle="modal" data-bs-target={'#exampleModal_' + props.id}>
        <input className="form-check-input" type="checkbox" id="gridCheck1" />
        </div>
        <u style={{color: "red"}}>Agree terms & conditions</u>
        </div>

      <div className="modal fade" id={'exampleModal_' + props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{width: "500px", left: "25%"}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Cab Booking Terms & Conditions</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            A contract is an agreement that specifies certain legally enforceable rights and obligations pertaining to two or more mutually agreeing parties. A contract typically involves the transfer of goods, services, money, or a promise to transfer any of those at a future date.
            <br/><br/>
            A contract is an agreement that specifies certain legally enforceable rights and obligations pertaining to two or more mutually agreeing parties. A contract typically involves the transfer of goods, services, money, or a promise to transfer any of those at a future date.
            <br/><br/>
            A contract is an agreement that specifies certain legally enforceable rights and obligations pertaining to two or more mutually agreeing parties. A contract typically involves the transfer of goods, services, money, or a promise to transfer any of those at a future date.
            <br/><br/>
            A contract is an agreement that specifies certain legally enforceable rights and obligations pertaining to two or more mutually agreeing parties. A contract typically involves the transfer of goods, services, money, or a promise to transfer any of those at a future date.
            <br/><br/>
            A contract is an agreement that specifies certain legally enforceable rights and obligations pertaining to two or more mutually agreeing parties. A contract typically involves the transfer of goods, services, money, or a promise to transfer any of those at a future date.
            <br/><br/>
            संविदा के पर्यायवाची शब्द इजारा, व्यवस्था, पण, ठीका या ठेका, शर्तनामा तथा समझौता हैं। कानूनी क्षेत्र में यह शब्द संविदा के अर्थ में ही प्रयुक्त होता है। कुछ विद्वानों के मत से इसके अंतर्गत केवल वे ही समझौते लिए जा सकते हैं जो कानूनन लागू किए जा सकते हों। सर्वमान्य न होते हुए भी परिभाषा में यह एक सुधार है।
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="agreeTerms" onClick={agreement_status}>Agreed</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const LocalBookingForms = () => {
  const [item, setItem] = useState()
  function store_data(e){
    let {id, value} = e.target;
    setItem((prev) =>{
      return {...prev, [id]: value}
    })
  }
  useEffect(()=>{
    localStorage.setItem('booking_details', JSON.stringify({item}))
  })
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", fontSize: "15px" }}>Book your local ride</h1>
        <div className="row mb-3">
          <label for="name" className="col-sm-2" style={{ color: "black" }}><b>Your Name</b></label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="name" onChange={store_data}/>
          </div>
        </div>

        <div className="row mb-3">
          <label for="mobile" className="col-sm-2 col-form-label" style={{ color: "black" }}><b>Your Mobile</b></label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="mobile" onChange={store_data}/>
          </div>
        </div>

        <div className="row mb-3">
          <label for="pickup_address" className="col-sm-2 col-form-label" style={{ color: "black" }}><b>Pickup Address</b></label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="pickup_address" onChange={store_data}/>
          </div>
        </div>

        <div className="row mb-3">
          <label for="drop_address" className="col-sm-2 col-form-label" style={{ color: "black" }}><b>Drop Address</b></label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="drop_address" onChange={store_data}/>
          </div>
        </div>

        <div className="row mb-3">
          <label for="travel_date" className="col-sm-2 col-form-label" style={{ color: "black" }}><b>Travel Date</b></label>
          <div className="col-sm-10">
            <input type="date" className="form-control" id="travel_date" onChange={store_data}/>
          </div>
        </div>

        <div className="row mb-3">
          <label for="pickup_time" className="col-sm-2 col-form-label" style={{ color: "black" }}><b>Pickup Time</b></label>
          <div className="col-sm-10">
            <input type="time" className="form-control" id="pickup_time" onChange={store_data}/>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            {<AgreementModal id={1} />}
          </div>
        </div>
        <Link to='local'><button type="submit" className="btn btn-primary" style={{ marginLeft: "35%" }}>Confirm</button></Link>
      </div>
    </>
  )
}

const OutstationBookingForms = () => {
  const [item, setItem] = useState()
  function store_data(e){
    let {id, value} = e.target;
    setItem((prev) =>{
      return {...prev, [id]: value}
    })
  }
  useEffect(()=>{
    localStorage.setItem('booking_details', JSON.stringify({item}))
  })
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", fontSize: "15px" }}>Book your outstation ride</h1>
        <div className="row mb-3">
          <label for="name" className="col-sm-2 col-form-label"><b>Your Name</b></label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="name" onChange={store_data}/>
          </div>
        </div>
        <div className="row mb-3">
          <label for="mobile" className="col-sm-2 col-form-label"><b>Your Mobile</b></label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="mobile" onChange={store_data}/>
          </div>
        </div>
        <div className="row mb-3">
          <label for="pickup-address" className="col-sm-2 col-form-label"><b>Pickup Address</b></label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="pickup-address" onChange={store_data}/>
          </div>
        </div>
        <div className="row mb-3">
          <label for="drop-address" className="col-sm-2 col-form-label"><b>Drop Address</b></label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="drop-address" onChange={store_data}/>
          </div>
        </div>
        <div className="row mb-3">
          <label for="travel-date" className="col-sm-2 col-form-label"><b>Travel Date</b></label>
          <div className="col-sm-10">
            <input type="date" className="form-control" id="travel-date" onChange={store_data}/>
          </div>
        </div>
        <div className="row mb-3">
          <label for="pickup-time" className="col-sm-2 col-form-label"><b>Pickup Time</b></label>
          <div className="col-sm-10">
            <input type="time" className="form-control" id="pickup-time" onChange={store_data}/>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            {<AgreementModal id={2} />}
          </div>
        </div>
        <Link to='outstation'><button type="submit" className="btn btn-primary" style={{ marginLeft: "35%" }}>Confirm</button></Link>
      </div>
    </>
  )
}

const AirportBookingForms = () => {
  const [item, setItem] = useState()
  function store_data(e){
    let {id, value} = e.target;
    setItem((prev) =>{
      return {...prev, [id]: value}
    })
  }
  useEffect(()=>{
    localStorage.setItem('booking_details', JSON.stringify({item}))
  })
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", fontSize: "15px" }}>Book your airport ride</h1>
        <div className="row mb-3">
          <label for="name" className="col-sm-2 col-form-label"><b>Your Name</b></label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="name" onChange={store_data}/>
          </div>
        </div>
        <div className="row mb-3">
          <label for="mobile" className="col-sm-2 col-form-label"><b>Your Mobile</b></label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="mobile" onChange={store_data}/>
          </div>
        </div>
        <div className="row mb-3">
          <label for="pickup-address" className="col-sm-2 col-form-label"><b>Pickup Address</b></label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="pickup-address" onChange={store_data}/>
          </div>
        </div>
        <div className="row mb-3">
          <label for="drop-address" className="col-sm-2 col-form-label"><b>Drop Address</b></label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="drop-address" onChange={store_data}/>
          </div>
        </div>
        <div className="row mb-3">
          <label for="travel-date" className="col-sm-2 col-form-label"><b>Travel Date</b></label>
          <div className="col-sm-10">
            <input type="date" className="form-control" id="travel-date" onChange={store_data}/>
          </div>
        </div>
        <div className="row mb-3">
          <label for="pickup-time" className="col-sm-2 col-form-label"><b>Pickup Time</b></label>
          <div className="col-sm-10">
            <input type="time" className="form-control" id="pickup-time" onChange={store_data}/>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            {<AgreementModal id={3} />}
          </div>
        </div>
        <Link to='airport'><button type="submit" className="btn btn-primary" style={{ marginLeft: "35%" }}>Confirm</button></Link>
      </div>
    </>
  )
}

const BookingForm = () => {
  return (
    <>
      <div style={{ position: "absolute", bottom: "", right: "200px", border: "groove", padding: "5px 5px 5px 5px", fontSize: "10px", top: "75px" }}>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{ marginLeft: "50px" }}>
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Local</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Outstation</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Airport</button>
          </li>
        </ul>
        <hr />
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0"><LocalBookingForms /></div>
          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0"><OutstationBookingForms /></div>
          <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0"><AirportBookingForms /></div>
        </div>
      </div>
    </>
  )
}

export { LocalBookingForms, OutstationBookingForms, AirportBookingForms, BookingForm, AgreementModal };