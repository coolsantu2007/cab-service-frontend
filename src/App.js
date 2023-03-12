import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { MarketplaceHomePage, UserProfile } from './Marketplace/AppPage';
import { LocalCar, OutstationCar, AirportCar } from './Marketplace/CarType.jsx';
import './index.css'
import { useState } from 'react';
import { useGetBookingDataQuery, useGetBookingDataByIdMutation, useCreateBookingMutation, useUpdateBookingToConfirmMutation, useUpdateBookingToCancelMutation } from './Service/bookingOperation';
import {useAdminUserLoginMutation, useAdminUserLogoutMutation} from './Service/adminUserOperation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginDecorator from './LoginDecorator';

const Header = () => {
  return (
    <>
      {/*Navbar items.....*/}
      <nav className="navbar navbar-expand-lg bg-primary" style={{ position: "fixed", top: "0", zIndex: "100", width: "100%" }}>
        <div className="container-fluid">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqkDNlPp2adb3ElGmfUb8uAq5uf0SehohOQ&usqp=CAU" style={{ width: "150px", height: "40px" }} alt="logo" />

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
          <Link to="/admin-new-booking"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqkDNlPp2adb3ElGmfUb8uAq5uf0SehohOQ&usqp=CAU" style={{ width: "150px", height: "40px" }} alt="logo" /></Link>
          <ul class="nav nav-pills" id="admin-nav">
            <li class="nav-item">
              <Link to="/admin-new-booking" class="nav-link" aria-current="page" style={{ color: "white" }}>New</Link>
            </li>
            <li class="nav-item">
              <Link to="/admin-confirmed-booking" class="nav-link" style={{ color: "white" }} >Confirmed</Link>
            </li>
            <li class="nav-item">
              <Link to="/admin-cancelled-booking" class="nav-link" style={{ color: "white" }} >Cancelled</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

const Footer = () => {
  const [loginData, setloginData] = useState()
  const [userLogin, response] = useAdminUserLoginMutation()
  const navigate = useNavigate()
  
  function store_data(e){
    let {id, value} = e.target;
    setloginData((prev) =>{
      return {...prev, [id]: value}
    })
  }

  if(response.status === "fulfilled"){
    if(response.data.code === 200 && response.data.status === "success"){
      localStorage.setItem('token', response.data.admindata.token)
      navigate('/admin-new-booking')
      window.location.reload('/admin-new-booking')
    }
  }
  return (
    <>
      {/*User signin form modal*/}
      <div className="modal fade" id="adminSignInForm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "50%", left: "20%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{backgroundColor: "green", color: "white"}}>
              <h5>Sign in to your account</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              {/*User Signin Form*/}
              <div class="mb-2">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={store_data}/>
              </div>
              <div class="mb-2">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" onChange={store_data}/>
              </div>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
                userLogin(loginData)
                toast.success('Successfully loggedin')}}>Signin</button>
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
      <div class="container-{breakpoint} my-6">
        <footer class="text-white text-center text-lg-start bg-primary">
          <div class="container p-4">
            <div class="row mt-4">
              <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-4">About Us</h5>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti.
                </p>
                <p>
                  Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                  molestias.
                </p>
              </div>
              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-4" style={{ marginLeft: "1.65em" }}>Contact</h5>
                <li class="mb-3" style={{ marginLeft: "2.15em" }}>
                  <span class="fa-li"><i class="fas fa-home"></i></span><span class="ms-2">Vill + Post - Kajha, Police Station - K. Nagar, District - Purnea, Pin - 854304</span>
                </li>
                <li class="mb-3" style={{ marginLeft: "2.15em" }}>
                  <span class="fa-li"><i class="fas fa-envelope"></i></span><span class="ms-2">info@example.com</span>
                </li>
                <li class="mb-3" style={{ marginLeft: "2.15em" }}>
                  <span class="fa-li"><i class="fas fa-phone"></i></span><span class="ms-2">9717069846</span>
                </li>
                <li class="mb-3" style={{ marginLeft: "2.15em" }}>
                  <span class="fa-li"><i class="fas fa-print"></i></span><span class="ms-2">8595100344</span>
                </li>

              </div>

              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-4">Business Central</h5>
                <li class="mb-3">
                  <Link data-bs-toggle="modal" data-bs-target="#adminSignInForm"><span class="fa-li"><i class="fas fa-phone"></i></span><span class="ms-2" style={{ color: "white" }}>Admin Login</span></Link>
                </li>
              </div>
            </div>
          </div>
          <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2023 Copyright:
            <a class="text-white" href="/" style={{marginLeft: "5px"}}>egcab.com</a>
          </div>
        </footer>
      </div>
    </>
  )
}

const FooterAdmin = () => {
  const navigate = useNavigate()
  const [adminLogout, logoutResponse] = useAdminUserLogoutMutation()

  if(logoutResponse.status === "fulfilled"){
    if(logoutResponse.data.code === 200){
      localStorage.clear('token')
      navigate('/')
    }
  }
  return (
    <>
      {/*User signin form modal*/}
      <div className="modal fade" id="adminLogout" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "40%", left: "30%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{backgroundColor: "red", color: "white"}}>
              <h5>Logout</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p style={{marginLeft: "15px"}}>Are you sure, you want to logout?</p>
              <div style={{display: "flex"}}>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
                adminLogout()
                toast.success('Successfully loggedout')
                }} style={{width: "30%", marginLeft: "10px"}}>Yes</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" style={{width: "30%", marginLeft: "10px"}}>No</button>
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

      <div class="container-{breakpoint} my-6">
        <footer class="text-white text-center text-lg-start bg-primary">
          <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2023 Copyright:
            <a class="text-white" href="/" style={{marginLeft: "5px"}}>egcab.com</a><br/>
            <a class="text-white" href="/" data-bs-toggle="modal" data-bs-target="#adminLogout" onClick={()=>{}}>Logout</a>
          </div>
        </footer>
      </div>
    </>
  )
}

function HomePage() {
  const [bookingInput, setbookingInput] = useState()
  const [newBooking, bookingResponse] = useCreateBookingMutation()

  function store_data(e){
    let {id, value} = e.target;
    setbookingInput((prev) =>{
      return {...prev, [id]: value}
    })
  }

  return (
    <>
      {/*Modal for booking confirmation message*/}
      <div className="modal fade" id="bookingConfirmationMessage" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "25%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{backgroundColor: "green", color: "white"}}>
            <h5>Booking Status</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{return window.location.reload()}}></button>
            </div>
            <div className="modal-body">
              {bookingResponse.isLoading === true && <div class="text-center">
                <div class="spinner-border m-5 text-primary" role="status">
                  <span class="sr-only"></span>
                </div>
              </div>}
            {bookingResponse.status === "fulfilled" && <h6>You have successfully booked your cab. Your booking request has been sent. EG Cab representative will contact you soon. Thank you for your cab booking with.</h6>}
              <br/><br/>
              <button type="button" className="btn btn-primary" onClick={()=>{return window.location.reload()}}>CLOSE</button>
            </div>
          </div>
        </div>
      </div>

      <Header /><br /><br />
      <div id="form">
      <div class="bg-img">
        <div style={{ display: "flex" }}>
          {/* <h2 style={{ marginLeft: "12%", marginTop: "15%", color: "black" }}><b><i>अपनी पसंदीदा कैब यहां बुक करें.</i></b></h2> */}
          <form class="form-container">
            <h1 style={{ textAlign: "center", fontSize: "20px", color: "blue" }}><u><b>Book Cab</b></u></h1><br />
            <div className="row mb-2">
              <label for="name" className="col-sm-5" style={{ color: "black" }}><b>Your Name</b></label>
              <div className="col-sm-15">
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required onChange={store_data}/>
              </div>
            </div>

            <div className="row mb-2">
              <label for="mobile" className="col-sm-5 col-form-label" style={{ color: "black" }}><b>Your Mobile</b></label>
              <div className="col-sm-15">
                <input type="text" className="form-control" id="mobile" placeholder="Enter your mobile number" required onChange={store_data}/>
              </div>
            </div>

            <div className="row mb-2">
              <label for="pickup_address" className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Pickup Address</b></label>
              <div className="col-sm-15">
                <input type="text" className="form-control" id="pickup_address" placeholder="Enter your pickup address" required onChange={store_data}/>
              </div>
            </div>

            <div className="row mb-2">
              <label for="drop_address" className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Drop Address</b></label>
              <div className="col-sm-15">
                <input type="text" className="form-control" id="drop_address" placeholder="Enter your drop address" required onChange={store_data}/>
              </div>
            </div>

            <div className="row mb-2">
              <label for="travel_date" className="col-sm-5 col-form-label" style={{ color: "black" }}><b>Travel Date</b></label>
              <div className="col-sm-15">
                <input type="date" className="form-control" id="travel_date" required onChange={store_data}/>
              </div>
            </div>

            <div className="row mb-2">
              <label for="pickup_time" className="col-sm-5 col-form-label" style={{ color: "black" }}><b>Pickup Time</b></label>
              <div className="col-sm-15">
                <input type="time" className="form-control" id="pickup_time" required onChange={store_data}/>
              </div>
            </div>

            <div className="row mb-2">
              <label for="car_type" className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Select Your Favourite Car</b></label>
              <div className="col-sm-15">
                <select id="car_type" required onChange={store_data}>
                  <option selected>Select</option>
                  <option>Suzuki Wagonr</option>
                  <option>Hyundai Aura</option>
                  <option>Skoda</option>
                  <option>Mercedez</option>
                </select>
              </div>
            </div><br />
            <Link to='#'><button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingConfirmationMessage" onClick={()=>{
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
  
  function confirmInput(e){
    let {id, value} = e.target;
    setConfirmData((prev) =>{
      return {...prev, [id]: value}
    })
  }

  function cancelInput(e){
    let {id, value} = e.target;
    setCancelData((prev) =>{
      return {...prev, [id]: value}
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
  
if(bookingData.isLoading){
  return (
    <div class="text-center">
  <div class="spinner-border m-5 text-primary" role="status">
    <span class="sr-only"></span>
  </div>
</div>
  )
}

//pagination
  let itemPerPage = 10
  let totalItems = fetchedData.newBookingData.length
  let totalPages = Math.ceil(totalItems/itemPerPage)
  let pageNumber = []

  for(let i = 1; i < totalPages+1; i++){
    pageNumber.push(i)
  }

  return (
    <>
      {/*Modal for additional details on booking confirmation status change*/}
      <div className="modal fade" id="additionalDetailsForBookingStatusChangeToConfirm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "25%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{backgroundColor: "green", color: "white"}}>
              <h6>Please provide below details</h6>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row mb-2">
                <label for="name" className="col-sm-5" style={{ color: "black" }}><b>Driver Name</b></label>
                <div className="col-sm-15">
                  <input type="text" className="form-control" id="name" placeholder="Enter driver name" onChange={confirmInput}/>
                </div>
              </div>

              <div className="row mb-2">
                <label for="mobile" className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Driver Mobile</b></label>
                <div className="col-sm-15">
                  <input type="text" className="form-control" id="mobile" placeholder="Enter driver mobile number" onChange={confirmInput}/>
                </div>
              </div>

              <div className="row mb-2">
                <label for="fare" className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Estimated Fare</b></label>
                <div className="col-sm-15">
                  <input type="text" className="form-control" id="fare" placeholder="Enter estimated fare" onChange={confirmInput}/>
                </div>
              </div><br />
              <Link to='#'><button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingConfirmationMessage" onClick={() => {
                updateData({
                  booking_id: val,
                  new_status: "Confirm",
                  driver_name: confirmData?confirmData.name:"",
                  driver_mobile: confirmData?confirmData.mobile:"",
                  estimated_fare: confirmData?confirmData.fare:""
                })
              }}>Submit</button></Link>
            </div>
          </div>
        </div>
      </div>

      {/*Modal for additional details on booking cancellation status change*/}
      <div className="modal fade" id="additionalDetailsForBookingStatusChangeToCancel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "25%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{backgroundColor: "green", color: "white"}}>
              <h6>Please provide below details</h6>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row mb-2">
                <label for="reason" className="col-sm-8" style={{ color: "black" }}><b>Cancellation Reason</b></label>
                <div className="col-sm-15">
                  <input type="text" className="form-control" id="resaon" placeholder="Enter cancellation reason" onChange={cancelInput}/>
                </div>
              </div><br />
              <Link to='#'><button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingCancellationMessage" onClick={() => {
                cancelledData({
                  booking_id: val,
                  new_status: "Cancel",
                  cancellation_reason: cancelData?cancelData.resaon:""
                })
              }}>Submit</button></Link>
            </div>
          </div>
        </div>
      </div>

      {/*Modal for booking confirmation message*/}
      <div className="modal fade" id="bookingConfirmationMessage" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "25%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{backgroundColor: "green", color: "white"}}>
              <h5>New Status</h5>
              <Link to='/admin-new-booking'><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{return window.location.reload()}}></button></Link>
            </div>
            <div className="modal-body">
            {response.isLoading === true && <div class="text-center">
                <div class="spinner-border m-5 text-primary" role="status">
                  <span class="sr-only"></span>
                </div>
              </div>}
            {response.status === "fulfilled" && <h6>You have successfully confirmed this booking</h6>}
            </div>
          </div>
        </div>
      </div>

      {/*Modal for booking cancellation message*/}
      <div className="modal fade" id="bookingCancellationMessage" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "25%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{backgroundColor: "red", color: "white"}}>
              <h5>New Status</h5>
              <Link to='/admin-new-booking'><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{return window.location.reload()}}></button></Link>
            </div>
            <div className="modal-body">
            {resp.isLoading === true && <div class="text-center">
                <div class="spinner-border m-5 text-primary" role="status">
                  <span class="sr-only"></span>
                </div>
              </div>}
            {resp.status === "fulfilled" && <h6>You have successfully cancelled this booking</h6>}
            </div>
          </div>
        </div>
      </div>


      {/*Modal for booking details*/}
      <div className="modal fade" id="bookingDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "30%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{backgroundColor: "green", color: "white"}}>
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

      <HeaderAdmin /><br />
      <h5>New Booking</h5>
      <table class="table table-responsive-xl">
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
        {fetchedData && fetchedData.newBookingData.length > 0 && fetchedData.newBookingData.map((item, i)=> (
          <tr key={i+1}>
            <th scope="row">{i+1}</th>
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
        <ul class="pagination justify-content-center">
          {pageNumber.length > 0 && pageNumber.map((item)=>(
          <li class="page-item" onClick={e => {setPageNum(e.target.innerHTML)}}><Link className="page-link" >{item}</Link></li>
          ))}
        </ul>
      </nav><br/><br/>
      <FooterAdmin/>
      
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
  
if(bookingData.isLoading){
  return (
    <div class="text-center">
  <div class="spinner-border m-5 text-primary" role="status">
    <span class="sr-only"></span>
  </div>
</div>
  )
}

//pagination
  let itemPerPage = 10
  let totalItems = fetchedData.confirmedBookingData.length
  let totalPages = Math.ceil(totalItems/itemPerPage)
  let pageNumber = []

  for(let i = 1; i < totalPages+1; i++){
    pageNumber.push(i)
  }

  return (
    <>
      {/*Modal for booking details*/}
      <div className="modal fade" id="bookingDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "30%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{backgroundColor: "green", color: "white"}}>
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

      <HeaderAdmin /><br />
      <h5>Confirmed Booking</h5>
      <table class="table table-responsive-xl">
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
        {fetchedData && fetchedData.confirmedBookingData.length > 0 && fetchedData.confirmedBookingData.map((item, i)=> (
          <tr key={i+1}>
            <th scope="row">{i+1}</th>
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
        <ul class="pagination justify-content-center">
          {pageNumber.length > 0 && pageNumber.map((item)=>(
          <li class="page-item" onClick={e => {setPageNum(e.target.innerHTML)}}><Link className="page-link" >{item}</Link></li>
          ))}
        </ul>
      </nav><br/><br/>
      <FooterAdmin/>
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
  
if(bookingData.isLoading){
  return (
    <div class="text-center">
  <div class="spinner-border m-5 text-primary" role="status">
    <span class="sr-only"></span>
  </div>
</div>
  )
}

//pagination
  let itemPerPage = 10
  let totalItems = fetchedData.cancelledBookingData.length
  let totalPages = Math.ceil(totalItems/itemPerPage)
  let pageNumber = []

  for(let i = 1; i < totalPages+1; i++){
    pageNumber.push(i)
  }

  return (
    <>
      {/*Modal for booking details*/}
      <div className="modal fade" id="bookingDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "30%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{backgroundColor: "green", color: "white"}}>
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

      <HeaderAdmin /><br />
      <h5>Cancelled Booking</h5>
      <table class="table table-responsive-xl">
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
        {fetchedData && fetchedData.cancelledBookingData.length > 0 && fetchedData.cancelledBookingData.map((item, i)=> (
          <tr key={i+1}>
            <th scope="row">{i+1}</th>
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
        <ul class="pagination justify-content-center">
          {pageNumber.length > 0 && pageNumber.map((item)=>(
          <li class="page-item" onClick={e => {setPageNum(e.target.innerHTML)}}><Link className="page-link" >{item}</Link></li>
          ))}
        </ul>
      </nav><br/><br/>
      <FooterAdmin/>
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
      <Route path="admin-new-booking" element={<LoginDecorator Component={NewBooking}/>} />
      <Route path="admin-confirmed-booking" element={<LoginDecorator Component={ConfirmedBooking}/>} />
      <Route path="admin-cancelled-booking" element={<LoginDecorator Component={CancelledBooking}/>} />
    </Routes>
  )
}

export { HomePage, PagesRouter, Header, Footer, HeaderAdmin, NewBooking, ConfirmedBooking, CancelledBooking, FooterAdmin };
