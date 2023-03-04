import { Routes, Route, Link } from 'react-router-dom';
import { MarketplaceHomePage, UserProfile } from './Marketplace/AppPage';
import { LocalCar, OutstationCar, AirportCar } from './Marketplace/CarType.jsx';
import './index.css'
import { useEffect, useState } from 'react';
import { useGetBookingDataQuery, useGetBookingDataByIdQuery, useCreateBookingMutation, useUpdateBookingMutation } from './Service/bookingOperation';

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
              <Link to="/admin-confirmed-booking" class="nav-link" style={{ color: "white" }}>Confirmed</Link>
            </li>
            <li class="nav-item">
              <Link to="/admin-cancelled-booking" class="nav-link" style={{ color: "white" }}>Cancelled</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

const Footer = () => {
  return (
    <>
      {/*User signin form modal*/}
      <div className="modal fade" id="adminSignInForm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "50%", left: "20%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Sign in to your account</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              {/*User Signin Form*/}
              <div class="mb-2">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="mb-2">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="mb-2 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Remember me</label>
              </div>
              <Link to="/admin-new-booking"><button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Signin</button></Link>
            </div>
          </div>
        </div>
      </div>

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
            <a class="text-white" href="/">Mandal Cab Service</a>
          </div>
        </footer>
      </div>
    </>
  )
}

function HomePage() {
  const [newBooking, bookingResponse] = useCreateBookingMutation()
  let data = {
    userId: 1,
    title: "Santu Baba",
    body: "Santosh Kumar Ji Rumpas Office"
  }
  console.log('bookingResponse', bookingResponse)
  return (
    <>
      {/*Modal for booking confirmation message*/}
      <div className="modal fade" id="bookingConfirmationMessage" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "25%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{return window.location.reload()}}></button>
            </div>
            <div className="modal-body">
              You have successfully booked your cab. Your booking id is - ABC123456. Thank you for your booking.
              <button type="button" className="btn-primary" onClick={()=>{newBooking(data)}}>Create</button>
            </div>
          </div>
        </div>
      </div>

      <Header /><br /><br />
      <div id="form">
      <div class="bg-img">
        <div style={{ display: "flex" }}>
          <h2 style={{ marginLeft: "12%", marginTop: "15%", color: "black" }}><b><i>अपनी पसंदीदा कैब यहां बुक करें.</i></b></h2>
          <form class="form-container">
            <h1 style={{ textAlign: "center", fontSize: "20px", color: "blue" }}><u><b>Book Cab</b></u></h1><br />
            <div className="row mb-2">
              <label for="name" className="col-sm-5" style={{ color: "black" }}><b>Your Name</b></label>
              <div className="col-sm-15">
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
            </div>

            <div className="row mb-2">
              <label for="mobile" className="col-sm-5 col-form-label" style={{ color: "black" }}><b>Your Mobile</b></label>
              <div className="col-sm-15">
                <input type="text" className="form-control" id="mobile" placeholder="Enter your mobile number" />
              </div>
            </div>

            <div className="row mb-2">
              <label for="pickup_address" className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Pickup Address</b></label>
              <div className="col-sm-15">
                <input type="text" className="form-control" id="pickup_address" placeholder="Enter your pickup address" />
              </div>
            </div>

            <div className="row mb-2">
              <label for="drop_address" className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Drop Address</b></label>
              <div className="col-sm-15">
                <input type="text" className="form-control" id="drop_address" placeholder="Enter your drop address" />
              </div>
            </div>

            <div className="row mb-2">
              <label for="travel_date" className="col-sm-5 col-form-label" style={{ color: "black" }}><b>Travel Date</b></label>
              <div className="col-sm-15">
                <input type="date" className="form-control" id="travel_date" />
              </div>
            </div>

            <div className="row mb-2">
              <label for="pickup_time" className="col-sm-5 col-form-label" style={{ color: "black" }}><b>Pickup Time</b></label>
              <div className="col-sm-15">
                <input type="time" className="form-control" id="pickup_time" />
              </div>
            </div>

            <div className="row mb-2">
              <label for="car_type" className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Select Your Favourite Car</b></label>
              <div className="col-sm-15">
                <select id="car_type">
                  <option selected>Select</option>
                  <option>Suzuki Wagonr</option>
                  <option>Hyundai Aura</option>
                  <option>Skoda</option>
                  <option>Mercedez</option>
                </select>
              </div>
            </div><br />
            <Link to='#'><button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingConfirmationMessage">Confirm</button></Link>
          </form>
        </div>
      </div><br /><hr style={{ marginTop: "-20px", marginBottom: "3px" }} />
      </div>
      <Footer />
    </>
  );
}

function NewBooking() {
  const [val, newVal] = useState("")
  const [confirmData, setConfirmData] = useState()
  const [cancelData, setCancelData] = useState()
  const [pageNum, setPageNum] = useState(0)
  
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

  let updationData ={
    id: val,
    title: cancelData?cancelData.reason:""
  }

  let cancellationData ={
    id: val,
    title: confirmData?confirmData.name:"",
    body: confirmData?confirmData.fare:"",
    userId: 1
  }
  
  const bookingData = useGetBookingDataQuery()
  const fetchedData = bookingData.data
  
  function getDocId(e){
    let bc = e.target.value 
    newVal(bc)
  }
console.log('val id',val)
  const bookingDataById = useGetBookingDataByIdQuery(val)
  console.log('bookingDataById',bookingDataById)
  const [updateData, response] = useUpdateBookingMutation()
  const [cancelledData, resp] = useUpdateBookingMutation()
  function confirmClick(){
    updateData(updationData)
  }

  function cancelClick(){
    cancelledData(cancellationData)
  }
if(bookingData.isLoading){
  return (
    <div class="text-center">
  <div class="spinner-border m-5 text-primary" role="status">
    <span class="sr-only"></span>
  </div>
</div>
  )
}
let itemPerPage = 10
  let totalItems = fetchedData.getSector.length
  let totalPages = Math.ceil(totalItems/itemPerPage)
  console.log('totalPages', totalPages)
  let pageNumber = []
  for(let i = 1; i < totalPages+1; i++){
    console.log('page number',i)
    pageNumber.push(i)
  }
  function getPageNum(e){
    let pageNumber = e.target.innerHTML
    setPageNum(pageNumber)
  }
  console.log('pagenum', pageNum)
  return (
    <>
      {/*Modal for additional details on booking confirmation status change*/}
      <div className="modal fade" id="additionalDetailsForBookingStatusChangeToConfirm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "25%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
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
              <Link to='#'><button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingConfirmationMessage" onClick={confirmClick}>Submit</button></Link>
            </div>
          </div>
        </div>
      </div>

      {/*Modal for additional details on booking cancellation status change*/}
      <div className="modal fade" id="additionalDetailsForBookingStatusChangeToCancel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "25%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
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
              <Link to='#'><button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingCancellationMessage" onClick={cancelClick}>Submit</button></Link>
            </div>
          </div>
        </div>
      </div>

      {/*Modal for booking confirmation message*/}
      <div className="modal fade" id="bookingConfirmationMessage" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "25%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <Link to='/admin-new-booking'><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></Link>
            </div>
            <div className="modal-body">
            {response.status === "fulfilled" && <h6>You have successfully confirmed this booking</h6>}
            </div>
          </div>
        </div>
      </div>

      {/*Modal for booking cancellation message*/}
      <div className="modal fade" id="bookingCancellationMessage" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "25%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <Link to='/admin-new-booking'><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></Link>
            </div>
            <div className="modal-body">
            {resp.status === "fulfilled" && <h6>You have successfully cancelled this booking</h6>}
            </div>
          </div>
        </div>
      </div>


      {/*Modal for booking details*/}
      <div className="modal fade" id="bookingDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "30%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Booking id - {bookingDataById.data && bookingDataById.data.id}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Booking Date</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-7 col-form-label" style={{ color: "black" }}>20th Feb 2023</label>
                  </div>
                </div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Customer Name</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-7 col-form-label" style={{ color: "black" }}>Santosh Kumar</label>
                  </div>
                </div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Customer Mobile</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-7 col-form-label" style={{ color: "black" }}>9717069846</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Pickup Address</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataById.data && bookingDataById.data.body}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Drop Address</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>{bookingDataById.data && bookingDataById.data.title}</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Travel Date</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>25th Feb 2023</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Pickup Time</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>10:15pm</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Preferred Car</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>Hyundai Aura</label>
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
        {fetchedData && fetchedData.getSector.length > 0 && fetchedData.getSector.map((item, i)=> (
          <tr key={i+1}>
            <th scope="row">{i+1}</th>
            <td>{item._id}</td>
            <td>{item.sector_name.en}</td>
            <td>{item.sector_name.hi}</td>
            <td>{item.mapped_project}</td>
            <td><button data-bs-toggle="modal" data-bs-target="#bookingDetails" value={item._id} onClick={getDocId}>View</button></td>
          </tr>
          ))}
        </tbody>
      </table>
      
        <nav aria-label="Page navigation pagination-sm">
        <ul class="pagination justify-content-center">
          {pageNumber.length > 0 && pageNumber.map((item)=>(
          <li class="page-item" onClick={getPageNum}><Link className="page-link" >{item}</Link></li>
          ))}
        </ul>
      </nav>
      
    </>
  )
}

function ConfirmedBooking() {
  const [data, newData] = useState([])

  useEffect(() => {
      fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then((result) => {
        result.json().then((resp) =>{
          newData(resp.data)
        })
      })
  },[])
  return (
    <>
      {/*Modal for booking details*/}
      <div className="modal fade" id="bookingDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "30%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Booking id - BI0123456</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Booking Date</b></label>
                  <div className="col-sm-15">
                    <label for="mobile" className="col-sm-7 col-form-label" style={{ color: "black" }}>20th Feb 2023</label>
                  </div>
                </div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Customer Name</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-7 col-form-label" style={{ color: "black" }}>Santosh Kumar</label>
                  </div>
                </div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Customer Mobile</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-7 col-form-label" style={{ color: "black" }}>9717069846</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Pickup Address</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>C-95, 2nd Floor, C Block, New Ashok Nagar, Delhi-96</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Drop Address</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>C-95, 2nd Floor, C Block, New Ashok Nagar, Delhi-96</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Travel Date</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>25th Feb 2023</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Pickup Time</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>10:15pm</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Preferred Car</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>Hyundai Aura</label>
                  </div>
                </div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Car Driver Name</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>Manoj Sah</label>
                  </div>
                </div><div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Car Driver Mobile</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>8595876709</label>
                  </div>
                </div><div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Estimated Fare</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>2500</label>
                  </div>
                </div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Status</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-7 col-form-label" style={{ color: "black" }}>Booking Confirmed</label>
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
        {data.length > 0 && data.map((item)=> (
          <tr>
            <th scope="row">1</th>
            <td>{item.Population}</td>
            <td>{item.Nation}</td>
            <td>{item.Year}</td>
            <td>{item.Year}</td>
            <td><button data-bs-toggle="modal" data-bs-target="#bookingDetails">View</button></td>
          </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

function CancelledBooking() {
  const [data, newData] = useState([])

  useEffect(() => {
      fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then((result) => {
        result.json().then((resp) =>{
          newData(resp.data)
        })
      })
  },[])
  return (
    <>
      {/*Modal for booking details*/}
      <div className="modal fade" id="bookingDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "300px", left: "30%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Booking id - BI0123456</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Booking Date</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-7 col-form-label" style={{ color: "black" }}>20th Feb 2023</label>
                  </div>
                </div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Customer Name</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-7 col-form-label" style={{ color: "black" }}>Santosh Kumar</label>
                  </div>
                </div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Customer Mobile</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-7 col-form-label" style={{ color: "black" }}>9717069846</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Pickup Address</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>C-95, 2nd Floor, C Block, New Ashok Nagar, Delhi-96</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Drop Address</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>C-95, 2nd Floor, C Block, New Ashok Nagar, Delhi-96</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Travel Date</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>25th Feb 2023</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Pickup Time</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>10:15pm</label>
                  </div>
                </div>

                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Preferred Car</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>Hyundai Aura</label>
                  </div>
                </div>
                <div className="row mb-2">
                  <label className="col-sm-8 col-form-label" style={{ color: "black" }}><b>Cancellation Reason</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-12 col-form-label" style={{ color: "black" }}>Driver not ready</label>
                  </div>
                </div>
                <div className="row mb-2">
                  <label className="col-sm-7 col-form-label" style={{ color: "black" }}><b>Status</b></label>
                  <div className="col-sm-15">
                    <label className="col-sm-7 col-form-label" style={{ color: "black" }}>Booking Cancelled</label>
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
        {data.length > 0 && data.map((item)=> (
          <tr>
            <th scope="row">1</th>
            <td>{item.Population}</td>
            <td>{item.Nation}</td>
            <td>{item.Year}</td>
            <td>{item.Year}</td>
            <td><button data-bs-toggle="modal" data-bs-target="#bookingDetails">View</button></td>
          </tr>
          ))}
        </tbody>
      </table>
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
      <Route path="admin-new-booking" element={<NewBooking />} />
      <Route path="admin-confirmed-booking" element={<ConfirmedBooking />} />
      <Route path="admin-cancelled-booking" element={<CancelledBooking />} />
    </Routes>
  )
}

export { HomePage, PagesRouter, Header, Footer, HeaderAdmin, NewBooking, ConfirmedBooking, CancelledBooking };
