import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { MarketplaceHomePage, UserProfile } from './Marketplace/AppPage';
import { LocalCar, OutstationCar, AirportCar } from './Marketplace/CarType.jsx';
import './index.css'
import { useState } from 'react';
import { useGetBookingDataQuery, useGetBookingDataByIdMutation, useCreateBookingMutation, useUpdateBookingToConfirmMutation, useUpdateBookingToCancelMutation } from './Service/bookingOperation';
import { useAdminUserLoginMutation, useAdminUserLogoutMutation } from './Service/adminUserOperation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginDecorator from './LoginDecorator';
import { TfiLocationPin, TfiEmail, TfiHeadphoneAlt, TfiMobile } from 'react-icons/tfi'
import {BiLogInCircle} from 'react-icons/bi'

const Header = () => {
  return (
    <>
      {/*Navbar items.....*/}
      <nav className="navbar navbar-expand-lg bg-primary" style={{ position: "fixed", top: "0", zIndex: "100", width: "100%" }}>
        <div className="container-fluid">
          <img src="https://s3.ap-south-1.amazonaws.com/egcab.com/egcab+logo.PNG" style={{ width: "150px", height: "50px" }} alt="logo" />

          <div style={{ display: "flex" }}>
            <h6 style={{ fontSize: "15px", marginRight: "10px", color: "white" }}><b><u><i>Welcome guest !</i></u></b></h6>
          </div>
        </div>
      </nav>
    </>
  )
}

const HeaderAdmin = () => {
  return (
    <>
      {/*Navbar items*/}
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <Link to="/admin-new-booking"><img src="https://s3.ap-south-1.amazonaws.com/egcab.com/egcab+logo.PNG" style={{ width: "150px", height: "50px" }} alt="logo" /></Link>
          <ul className="nav nav-pills" id="admin-nav">
            <li className="nav-item">
              <Link to="/admin-new-booking" className="nav-link" aria-current="page" style={{ color: "white" }}>New</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin-confirmed-booking" className="nav-link" style={{ color: "white" }} >Confirmed</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin-cancelled-booking" className="nav-link" style={{ color: "white" }} >Cancelled</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

const Footer = () => {
  const [loginData, setloginData] = useState()
  const [emailError, setEmailError] = useState()
  const [passwordError, setPasswordError] = useState()
  const [userLogin, response] = useAdminUserLoginMutation()
  const navigate = useNavigate()

  function store_data(e) {
    let { id, value } = e.target;
    setloginData((prev) => {
      return { ...prev, [id]: value }
    })
  }

  if (response.status === "fulfilled") {
    if (response.data.code === 200 && response.data.status === "success") {
      localStorage.setItem('token', response.data.admindata.token)
      navigate('/admin-new-booking')
      window.location.reload('/admin-new-booking')
    }
  }
  
  return (
    <>
      {/*User signin form modal*/}
      <div className="modal fade" id="adminSignInForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "80%", left: "10%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "green", color: "white" }}>
              <h5>Sign in to your account</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              {/*User Signin Form*/}
              <div className="mb-2">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={store_data} />
                {emailError}
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" onChange={store_data} />
                {passwordError}
              </div>
              {response.isLoading === true && <div className="text-center">
                <div className="spinner-border m-5 text-primary" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>}
              {response.status === "rejected" && <p style={{color: "red"}}>{response.error.data.status}</p>}
              <button type="submit" className="btn btn-primary" onClick={() => {
                if (!loginData.email) {
                  setEmailError(<span style={{ color: "red" }}>Email can't be empty</span>)
                  setPasswordError()
                }
                if (!loginData.password) {
                  setPasswordError(<span style={{ color: "red" }}>Password can't be empty</span>)
                  setEmailError()
                } 
                if(loginData.email && loginData.password){
                  setPasswordError()
                  setEmailError()
                }
                userLogin(loginData)
                toast.success("Processing login request")
              }}>Signin</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="container-{breakpoint} my-6">
        <footer className="text-white text-center text-lg-start bg-primary">
          <div className="container p-4">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4" style={{color: "black"}}>About Us</h5>
                <p>
                ईजी कैब पूर्णिया में ग्राहकों की सुविधा के लिए उपलब्ध कराई जाने वाली अग्रणी कैब सेवा है। 
                </p>
                <p>
                स्थानीय यात्रा, बाहरी यात्रा और हवाई अड्डे के लिए कैब सेवा उपलब्ध है।
                </p>
                <p>
                विवाह समारोह और कॉर्पोरेट के लिए भी कैब सेवा उपलब्ध है।
                </p>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4" style={{color: "black"}}>Contact</h5>
                <div>
                  <TfiLocationPin style={{color: "black"}}/><span className="ms-2">Vill + Post - Kajha, Police Station - K. Nagar, District - Purnea, Bihar - 854304</span><br/>
                  </div>
                <div style={{marginTop: "10px"}}>
                  <TfiEmail style={{color: "black"}}/><span className="ms-2">booking@egcab.com</span><br/>
                  </div>
                <div style={{marginTop: "10px"}}>
                  <TfiHeadphoneAlt style={{color: "black"}}/><span className="ms-2">9631895883</span><br/>
                  </div>
                <div style={{marginTop: "10px"}}>
                  <TfiMobile style={{color: "black"}}/><span className="ms-2">9570378101</span>
                  </div>

              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4" style={{color: "black"}}>Business Central</h5>
                <BiLogInCircle style={{color: "black"}}/>
                  <Link data-bs-toggle="modal" data-bs-target="#adminSignInForm"><span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2" style={{ color: "white" }}>Admin</span></Link>
                
              </div>
            </div>
          </div>
          <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2023 Copyright:
            <a className="text-white" href="/" style={{ marginLeft: "5px" }}>egcab.com</a>
          </div>
        </footer>
      </div>
    </>
  )
}

const FooterAdmin = () => {
  const navigate = useNavigate()
  const [adminLogout, logoutResponse] = useAdminUserLogoutMutation()

  if (logoutResponse.status === "fulfilled") {
    if (logoutResponse.data.code === 200) {
      localStorage.clear('token')
      navigate('/')
    }
  }
  return (
    <>
      {/*User signin form modal*/}
      <div className="modal fade" id="adminLogout" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "60%", left: "10%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "red", color: "white" }}>
              <h5>Logout</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p style={{ marginLeft: "15px" }}>Are you sure, you want to logout?</p>
              <div style={{ display: "flex" }}>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
                  adminLogout()
                  toast.success('Successfully loggedout')
                }} style={{ width: "30%", marginLeft: "10px" }}>Yes</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" style={{ width: "30%", marginLeft: "10px" }}>No</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className="container-{breakpoint} my-6">
        <footer className="text-white text-center text-lg-start bg-primary">
          <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2023 Copyright:
            <Link to='/' className="text-white" style={{ marginLeft: "5px" }}>egcab.com</Link><br />
            <Link to='/' className="text-white" data-bs-toggle="modal" data-bs-target="#adminLogout" onClick={() => { }}>Logout</Link>
          </div>
        </footer>
      </div>
    </>
  )
}

function HomePage() {
  const [bookingInput, setbookingInput] = useState()
  const [newBooking, bookingResponse] = useCreateBookingMutation()

  function store_data(e) {
    let { id, value } = e.target;
    setbookingInput((prev) => {
      return { ...prev, [id]: value }
    })
  }

  return (
    <>
      {/*Modal for booking confirmation message*/}
      <div className="modal fade" id="bookingConfirmationMessage" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "10%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "green", color: "white" }}>
              <h5>Booking Status</h5>
            </div>
            <div className="modal-body">
              {bookingResponse.isLoading === true && <div className="text-center">
                <div className="spinner-border m-5 text-primary" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>}
              {bookingResponse.status === "fulfilled" && 
              <p>You have successfully booked your cab with booking id <b>{bookingResponse.data.booking_id}</b>.<br/><br/> Your booking request has been sent. <br/><br/>EG Cab representative will contact you soon. Thank you for your cab booking with.<br/><br/>
              <button type="button" className="btn btn-primary" onClick={() => { return window.location.reload() }}>CLOSE</button></p>
              }

              {bookingResponse.status === "rejected" && <p style={{color: "red"}}>{bookingResponse.error.data.message}<br/><br/>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">OK</button></p>}
            </div>
          </div>
        </div>
      </div>

      <Header /><br /><br />
      <div id="form">
        <div className="bg-img">
          <div style={{ display: "flex" }}>
            <h2 style={{ marginLeft: "12%", marginTop: "15%", color: "black" }}><b><i>अपनी पसंदीदा कैब यहां बुक करें.</i></b></h2>
            <form className="form-container">
              <h1 style={{ textAlign: "center", fontSize: "20px", color: "blue" }}><u><b>Book Cab</b></u></h1><br />
              <div className="row mb-2">
                <label htmlFor="name" className="col-sm-5" style={{ color: "black" }}><b>Your Name</b></label>
                <div className="col-sm-15">
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" required onChange={store_data} />
                </div>
              </div>

              <div className="row mb-2">
                <label htmlFor="mobile" className="col-sm-5 col-form-label" style={{ color: "black" }}><b>Your Mobile</b></label>
                <div className="col-sm-15">
                  <input type="text" className="form-control" id="mobile" placeholder="Enter your mobile number" required onChange={store_data} />
                </div>
              </div>

              <div className="row mb-2">
                <label htmlFor="pickup_address" className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Pickup Address</b></label>
                <div className="col-sm-15">
                  <input type="text" className="form-control" id="pickup_address" placeholder="Enter your pickup address" required onChange={store_data} />
                </div>
              </div>

              <div className="row mb-2">
                <label htmlFor="drop_address" className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Drop Address</b></label>
                <div className="col-sm-15">
                  <input type="text" className="form-control" id="drop_address" placeholder="Enter your drop address" required onChange={store_data} />
                </div>
              </div>

              <div className="row mb-2">
                <label htmlFor="travel_date" className="col-sm-5 col-form-label" style={{ color: "black" }}><b>Travel Date</b></label>
                <div className="col-sm-15">
                  <input type="date" className="form-control" id="travel_date" required onChange={store_data} />
                </div>
              </div>

              <div className="row mb-2">
                <label htmlFor="pickup_time" className="col-sm-5 col-form-label" style={{ color: "black" }}><b>Pickup Time</b></label>
                <div className="col-sm-15">
                  <input type="time" className="form-control" id="pickup_time" required onChange={store_data} />
                </div>
              </div>

              <div className="row mb-2">
                <label htmlFor="car_type" className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Select Your Favourite Car</b></label>
                <div className="col-sm-15">
                  <select id="car_type" required onChange={store_data}>
                    <option defaultValue>Select</option>
                    <option>Suzuki Wagonr</option>
                    <option>Hyundai Aura</option>
                    <option>Skoda</option>
                    <option>Mercedez</option>
                  </select>
                </div>
              </div><br />
              <Link to='#'><button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingConfirmationMessage" onClick={() => {
                newBooking({
                  customer_name: bookingInput ? bookingInput.name : "",
                  customer_mobile: bookingInput ? bookingInput.mobile : "",
                  pickup_address: bookingInput ? bookingInput.pickup_address : "",
                  drop_address: bookingInput ? bookingInput.drop_address : "",
                  travel_date: bookingInput ? bookingInput.travel_date : "",
                  pickup_time: bookingInput ? bookingInput.pickup_time : "",
                  car_type: bookingInput ? bookingInput.car_type : ""
                })
              }}>Confirm</button></Link>
            </form>
          </div>
        </div><br /><hr style={{ marginTop: "-20px", marginBottom: "3px" }} />
      </div>
      <Footer />
    </>
  );
}

function NewBooking() {
  const [val, newVal] = useState("")//get booking id
  const [confirmData, setConfirmData] = useState()
  const [cancelData, setCancelData] = useState()
  const [pageNum, setPageNum] = useState(1)

  function confirmInput(e) {
    let { id, value } = e.target;
    setConfirmData((prev) => {
      return { ...prev, [id]: value }
    })
  }

  function cancelInput(e) {
    let { id, value } = e.target;
    setCancelData((prev) => {
      return { ...prev, [id]: value }
    })
  }

  const [updateData, response] = useUpdateBookingToConfirmMutation()
  const [cancelledData, resp] = useUpdateBookingToCancelMutation()
  const [bookingDataById, bookingDataByIdResponse] = useGetBookingDataByIdMutation()

  let getBookingParams = {
    page: pageNum,
    limit: 10,
    status: "New"
  }

  const bookingData = useGetBookingDataQuery(getBookingParams)
  const fetchedData = bookingData.data

  if (bookingData.isLoading) {
    return (
      <div className="text-center">
        <div className="spinner-border m-5 text-primary" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    )
  }

  //pagination
  let itemPerPage = 10
  let totalItems = (bookingData.status === "fulfilled")?fetchedData.newBookingData.length:0
  let totalPages = Math.ceil(totalItems / itemPerPage)
  let pageNumber = []

  for (let i = 1; i < totalPages + 1; i++) {
    pageNumber.push(i)
  }

  return (
    <>
      {/*Modal for additional details on booking confirmation status change*/}
      <div className="modal fade" id="additionalDetailsForBookingStatusChangeToConfirm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "25%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "green", color: "white" }}>
              <h6>Please provide below details</h6>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row mb-2">
                <label htmlFor="name" className="col-sm-5" style={{ color: "black" }}><b>Driver Name</b></label>
                <div className="col-sm-15">
                  <input type="text" className="form-control" id="name" placeholder="Enter driver name" onChange={confirmInput} />
                </div>
              </div>

              <div className="row mb-2">
                <label htmlFor="mobile" className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Driver Mobile</b></label>
                <div className="col-sm-15">
                  <input type="text" className="form-control" id="mobile" placeholder="Enter driver mobile number" onChange={confirmInput} />
                </div>
              </div>

              <div className="row mb-2">
                <label htmlFor="fare" className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Estimated Fare</b></label>
                <div className="col-sm-15">
                  <input type="text" className="form-control" id="fare" placeholder="Enter estimated fare" onChange={confirmInput} />
                </div>
              </div><br />
              <Link to='#'><button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingConfirmationMessage" onClick={() => {
                updateData({
                  booking_id: val,
                  new_status: "Confirm",
                  driver_name: confirmData ? confirmData.name : "",
                  driver_mobile: confirmData ? confirmData.mobile : "",
                  estimated_fare: confirmData ? confirmData.fare : ""
                })
              }}>Submit</button></Link>
            </div>
          </div>
        </div>
      </div>

      {/*Modal for additional details on booking cancellation status change*/}
      <div className="modal fade" id="additionalDetailsForBookingStatusChangeToCancel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "25%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "green", color: "white" }}>
              <h6>Please provide below details</h6>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row mb-2">
                <label htmlFor="reason" className="col-sm-8" style={{ color: "black" }}><b>Cancellation Reason</b></label>
                <div className="col-sm-15">
                  <input type="text" className="form-control" id="resaon" placeholder="Enter cancellation reason" onChange={cancelInput} />
                </div>
              </div><br />
              <Link to='#'><button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingCancellationMessage" onClick={() => {
                cancelledData({
                  booking_id: val,
                  new_status: "Cancel",
                  cancellation_reason: cancelData ? cancelData.resaon : ""
                })
              }}>Submit</button></Link>
            </div>
          </div>
        </div>
      </div>

      {/*Modal for booking confirmation message*/}
      <div className="modal fade" id="bookingConfirmationMessage" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "25%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "green", color: "white" }}>
              <h5>New Status</h5>
              <Link to='/admin-new-booking'><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { return window.location.reload() }}></button></Link>
            </div>
            <div className="modal-body">
              {response.isLoading === true && <div className="text-center">
                <div className="spinner-border m-5 text-primary" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>}
              {response.status === "rejected" && <p style={{color: "red"}}>{response.error.data.message}</p>}
              {response.status === "fulfilled" && <h6>You have successfully confirmed this booking</h6>}
            </div>
          </div>
        </div>
      </div>

      {/*Modal for booking cancellation message*/}
      <div className="modal fade" id="bookingCancellationMessage" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "25%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "red", color: "white" }}>
              <h5>New Status</h5>
              <Link to='/admin-new-booking'><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { return window.location.reload() }}></button></Link>
            </div>
            <div className="modal-body">
              {resp.isLoading === true && <div className="text-center">
                <div className="spinner-border m-5 text-primary" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>}
              {resp.status === "rejected" && <p style={{color: "red"}}>{resp.error.data.message}</p>}
              {resp.status === "fulfilled" && <h6>You have successfully cancelled this booking</h6>}
            </div>
          </div>
        </div>
      </div>


      {/*Modal for booking details*/}
      <div className="modal fade" id="bookingDetails" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "15%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "green", color: "white" }}>
              <h5>Booking id - {bookingDataByIdResponse.data && bookingDataByIdResponse.data.newBookingData.booking_id}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Booking Date</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-7 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.newBookingData.booking_date}</label>
                  </div>
                </div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Customer Name</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-7 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.newBookingData.customer_name}</label>
                  </div>
                </div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Customer Mobile</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-7 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.newBookingData.customer_mobile}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Pickup Address</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.newBookingData.pickup_address}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Drop Address</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.newBookingData.drop_address}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Travel Date</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.newBookingData.travel_date}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Pickup Time</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.newBookingData.pickup_time}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Preferred Car</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.newBookingData.favourite_car}</label>
                  </div>
                </div><br />
                <Link to='#'><button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#additionalDetailsForBookingStatusChangeToConfirm" style={{ width: "40%", marginLeft: "10px" }}>Confirm</button></Link>
                <Link to='#'><button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#additionalDetailsForBookingStatusChangeToCancel" style={{ width: "40%", marginLeft: "10px" }}>Cancel</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {(bookingData.status === "fulfilled") ? 
      <div>
        <HeaderAdmin /><br />
        <div style={{display: "flex"}}>
        <h5>New Booking</h5>
      <button style={{marginLeft: "5px"}} onClick={() => { return window.location.reload() }}>Refresh</button>
        </div>
      <table className="table table-responsive-xl">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Travel Date</th>
            <th scope="col">Car Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {fetchedData && fetchedData.newBookingData.length > 0 && fetchedData.newBookingData.map((item, i) => (
            <tr key={i + 1}>
              {/* <th scope="row">{i + 1}</th> */}
              <td>{item.customer_name}</td>
              <td>{item.customer_mobile}</td>
              <td>{item.travel_date}</td>
              <td>{item.favourite_car}</td>
              <td><button data-bs-toggle="modal" data-bs-target="#bookingDetails" value={item.id} onClick={
                e => {
                  bookingDataById({
                    status: "New",
                    booking_id: e.target.value
                  });

                  newVal(e.target.value)
                }
              }>View</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav aria-label="Page navigation pagination-sm">
        <ul className="pagination justify-content-center">
          {pageNumber.length > 0 && pageNumber.map((item) => (
            <li className="page-item" onClick={e => { setPageNum(e.target.innerHTML) }}><Link className="page-link" >{item}</Link></li>
          ))}
        </ul>
      </nav><br /><br />
      <FooterAdmin />
      </div> : <div>
      <HeaderAdmin /><br />
      <h5>New Booking</h5>
      <table className="table table-responsive-xl">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Travel Date</th>
            <th scope="col">Car Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
      <br /><br />
      <p style={{textAlign: "center", color: "red"}}>New booking not found</p>
      <br /><br /><br /><br /><br /><br />
      <FooterAdmin />
        </div>}
    </>
  )
}

function ConfirmedBooking() {
  const [pageNum, setPageNum] = useState(1)

  const [bookingDataById, bookingDataByIdResponse] = useGetBookingDataByIdMutation()

  let getBookingParams = {
    page: pageNum,
    limit: 10,
    status: "Confirmed"
  }

  const bookingData = useGetBookingDataQuery(getBookingParams)
  const fetchedData = bookingData.data

  if (bookingData.isLoading) {
    return (
      <div className="text-center">
        <div className="spinner-border m-5 text-primary" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    )
  }

  //pagination
  let itemPerPage = 10
  let totalItems = (bookingData.status === "fulfilled")?fetchedData.confirmedBookingData.length:0
  let totalPages = Math.ceil(totalItems / itemPerPage)
  let pageNumber = []

  for (let i = 1; i < totalPages + 1; i++) {
    pageNumber.push(i)
  }

  return (
    <>
      {/*Modal for booking details*/}
      <div className="modal fade" id="bookingDetails" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "15%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "green", color: "white" }}>
              <h5>Booking id - {bookingDataByIdResponse.data && bookingDataByIdResponse.data.confirmedBookingData.booking_id}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Booking Date</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-7 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.confirmedBookingData.booking_date}</label>
                  </div>
                </div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Customer Name</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-7 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.confirmedBookingData.customer_name}</label>
                  </div>
                </div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Customer Mobile</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-7 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.confirmedBookingData.customer_mobile}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Pickup Address</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.confirmedBookingData.pickup_address}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Drop Address</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.confirmedBookingData.drop_address}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Travel Date</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.confirmedBookingData.travel_date}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Pickup Time</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.confirmedBookingData.pickup_time}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Preferred Car</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.confirmedBookingData.favourite_car}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Driver Name</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.confirmedBookingData.driver_name}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Driver Mobile</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.confirmedBookingData.driver_mobile}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Estimated Fare</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.confirmedBookingData.estimated_fare}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Status</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.confirmedBookingData.status}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

{(bookingData.status === "fulfilled") ? 
<div>
<HeaderAdmin /><br />
<div style={{display: "flex"}}>
        <h5>Confirmed Booking</h5>
      <button style={{marginLeft: "5px"}} onClick={() => { return window.location.reload() }}>Refresh</button>
        </div>
      <table className="table table-responsive-xl">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Travel Date</th>
            <th scope="col">Car Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {fetchedData && fetchedData.confirmedBookingData.length > 0 && fetchedData.confirmedBookingData.map((item, i) => (
            <tr key={i + 1}>
              {/* <th scope="row">{i + 1}</th> */}
              <td>{item.customer_name}</td>
              <td>{item.customer_mobile}</td>
              <td>{item.travel_date}</td>
              <td>{item.favourite_car}</td>
              <td><button data-bs-toggle="modal" data-bs-target="#bookingDetails" value={item.id} onClick={
                e => {
                  bookingDataById({
                    status: "Confirmed",
                    booking_id: e.target.value
                  });
                }
              }>View</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav aria-label="Page navigation pagination-sm">
        <ul className="pagination justify-content-center">
          {pageNumber.length > 0 && pageNumber.map((item) => (
            <li className="page-item" onClick={e => { setPageNum(e.target.innerHTML) }}><Link className="page-link" >{item}</Link></li>
          ))}
        </ul>
      </nav><br /><br />
      <FooterAdmin />
</div> : <div>
<HeaderAdmin /><br />
      <h5>Confirmed Booking</h5>
      <table className="table table-responsive-xl">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Travel Date</th>
            <th scope="col">Car Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
      <br /><br />
      <p style={{textAlign: "center", color: "red"}}>Confirmed booking not found</p>
      <br /><br /><br /><br /><br /><br />
      <FooterAdmin />
  </div>}
      
    </>
  )
}

function CancelledBooking() {
  const [pageNum, setPageNum] = useState(1)

  const [bookingDataById, bookingDataByIdResponse] = useGetBookingDataByIdMutation()

  let getBookingParams = {
    page: pageNum,
    limit: 10,
    status: "Cancelled"
  }

  const bookingData = useGetBookingDataQuery(getBookingParams)
  const fetchedData = bookingData.data

  if (bookingData.isLoading) {
    return (
      <div className="text-center">
        <div className="spinner-border m-5 text-primary" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    )
  }

  //pagination******
  let itemPerPage = 10
  let totalItems = (bookingData.status === "fulfilled")?fetchedData.cancelledBookingData.length:0
  let totalPages = Math.ceil(totalItems / itemPerPage)
  let pageNumber = []

  for (let i = 1; i < totalPages + 1; i++) {
    pageNumber.push(i)
  }

  return (
    <>
      {/*Modal for booking details*/}
      <div className="modal fade" id="bookingDetails" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "15%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "green", color: "white" }}>
              <h5>Booking id - {bookingDataByIdResponse.data && bookingDataByIdResponse.data.cancelledBookingData.booking_id}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Booking Date</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-7 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.cancelledBookingData.booking_date}</label>
                  </div>
                </div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Customer Name</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-7 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.cancelledBookingData.customer_name}</label>
                  </div>
                </div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Customer Mobile</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-7 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.cancelledBookingData.customer_mobile}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Pickup Address</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.cancelledBookingData.pickup_address}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Drop Address</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.cancelledBookingData.drop_address}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Travel Date</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.cancelledBookingData.travel_date}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Pickup Time</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.cancelledBookingData.pickup_time}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Preferred Car</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.cancelledBookingData.favourite_car}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Cancellation Reason</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.cancelledBookingData.cancellation_reason}</label>
                  </div>
                </div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Status</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataByIdResponse.data && bookingDataByIdResponse.data.cancelledBookingData.status}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{(bookingData.status === "fulfilled") ? 
<div>
<HeaderAdmin /><br />
<div style={{display: "flex"}}>
        <h5>Cancelled Booking</h5>
      <button style={{marginLeft: "5px"}} onClick={() => { return window.location.reload() }}>Refresh</button>
        </div>
      <table className="table table-responsive-xl">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Travel Date</th>
            <th scope="col">Car Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {fetchedData && fetchedData.cancelledBookingData.length > 0 && fetchedData.cancelledBookingData.map((item, i) => (
            <tr key={i + 1}>
              {/* <th scope="row">{i + 1}</th> */}
              <td>{item.customer_name}</td>
              <td>{item.customer_mobile}</td>
              <td>{item.travel_date}</td>
              <td>{item.favourite_car}</td>
              <td><button data-bs-toggle="modal" data-bs-target="#bookingDetails" value={item.id} onClick={
                e => {
                  bookingDataById({
                    status: "Cancelled",
                    booking_id: e.target.value
                  });
                }
              }>View</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav aria-label="Page navigation pagination-sm">
        <ul className="pagination justify-content-center">
          {pageNumber.length > 0 && pageNumber.map((item) => (
            <li className="page-item" onClick={e => { setPageNum(e.target.innerHTML) }}><Link className="page-link" >{item}</Link></li>
          ))}
        </ul>
      </nav><br /><br />
      <FooterAdmin />
</div> : <div>
<HeaderAdmin /><br />
      <h5>Cancelled Booking</h5>
      <table className="table table-responsive-xl">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Travel Date</th>
            <th scope="col">Car Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
      <br /><br />
      <p style={{textAlign: "center", color: "red"}}>Cancelled booking not found</p>
      <br /><br /><br /><br /><br /><br />
      <FooterAdmin />
  </div>}
    </>
  )
}

function PagesRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="marketplace" element={<MarketplaceHomePage />} />
      <Route path="marketplace/local" element={<LocalCar />} />
      <Route path="marketplace/outstation" element={<OutstationCar />} />
      <Route path="marketplace/airport" element={<AirportCar />} />
      <Route path="marketplace/user-profile" element={<UserProfile />} />
      <Route path="admin-new-booking" element={<LoginDecorator Component={NewBooking} />} />
      <Route path="admin-confirmed-booking" element={<LoginDecorator Component={ConfirmedBooking} />} />
      <Route path="admin-cancelled-booking" element={<LoginDecorator Component={CancelledBooking} />} />
    </Routes>
  )
}

export { HomePage, PagesRouter, Header, Footer, HeaderAdmin, NewBooking, ConfirmedBooking, CancelledBooking, FooterAdmin };
