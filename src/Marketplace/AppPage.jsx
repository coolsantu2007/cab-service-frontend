import { BookingForm } from "./BookingForms";
import { Link } from 'react-router-dom';
import { FaUserCircle, FaSignInAlt } from 'react-icons/fa'
import { AiOutlineLogin } from 'react-icons/ai'
import { Si1Password } from 'react-icons/si'
import { MdAppRegistration } from 'react-icons/md'
import { ImProfile } from 'react-icons/im'

const HeaderHome = () => {
  let url = "#"
  return (
    <>
      {/*User signup form modal*/}
      <div className="modal fade" id="userSignUpForm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "50%", left: "25%" }}>
        <div className="modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Create your account</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              {/*User Signup Form*/}
              <div class="form-row" style={{ display: "flex" }}>
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div class="form-group col-md-6" style={{ marginLeft: "5px" }}>
                  <label for="inputPassword4">Password</label>
                  <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                </div>
              </div><br />
              <div class="form-row" style={{ display: "flex" }}>
                <div class="form-group col-md-6">
                  <label for="inputMobile">Mobile</label>
                  <input type="text" class="form-control" id="inputMobile" placeholder="Mobile" />
                </div>
                <div class="form-group col-md-6" style={{ marginLeft: "5px" }}>
                  <label for="inputCity">City</label>
                  <input type="text" class="form-control" id="inputCity" placeholder="City" />
                </div>
              </div><br />
              <div class="form-row" style={{ display: "flex" }}>
                <div class="form-group col-md-6">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="form-group col-md-6" style={{ marginLeft: "5px" }}>
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>
              </div><br />
              <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" style={{ width: "100%" }} />
              </div><br />
              <button type="submit" class="btn btn-primary" style={{ marginLeft: "45%" }} data-bs-toggle="modal" data-bs-target="#userSignUpConfirmation">Submit</button>
            </div>
          </div>
        </div>
      </div>

      {/*User signup confirmation modal*/}
      <div className="modal fade" id="userSignUpConfirmation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "40%", left: "30%" }}>
        <div className="modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/*User Signup confirmation message*/}
              <h6>Hello, you have successfully registered with us. Please sign in with your email id and password to access your account.</h6><br />
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userSignInForm" style={{ marginLeft: "45%" }}>Signin</button>
            </div>
          </div>
        </div>
      </div>

      {/*User signin form modal*/}
      <div className="modal fade" id="userSignInForm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "50%", left: "30%" }}>
        <div className="modal-dialog modal-fullscreen-sm-down">
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
              <Link to="/"><button type="submit" class="btn btn-primary" data-bs-dismiss="modal" style={{ marginLeft: "45%" }}>Signin</button></Link>
              <Link data-bs-toggle="modal" data-bs-target="#forgotPasswordForm"><h6><b><u>Forgot Password</u></b></h6></Link>
              <Link data-bs-toggle="modal" data-bs-target="#userSignUpForm"><h6><b><u>Don't have an account, signup here</u></b></h6></Link>
            </div>
          </div>
        </div>
      </div>

      {/*User forgot password modal*/}
      <div className="modal fade" id="forgotPasswordForm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "40%", left: "30%" }}>
        <div className="modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Reset your account password</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              {/*User forgot password Form*/}
              <div class="mb-3">
                <label for="registeredEmail" class="form-label">Email</label>
                <input type="email" class="form-control" id="registeredEmail" />
              </div>
              <button type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#forgotPasswordConfirmationMessage" style={{ marginLeft: "45%" }}>Submit</button>
            </div>
          </div>
        </div>
      </div>

      {/*Forgot password confirmation message modal if email id exists*/}
      <div className="modal fade" id="forgotPasswordConfirmationMessage" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "35%", left: "40%" }}>
        <div className="modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/*Forgot password confirmation message*/}
              <h6>Password reset link sent to your registered email id. Please login into your email account and click on password reset link to reset your password.</h6><br />
              <Link to="/"><button type="button" class="btn btn-primary" data-bs-dismiss="modal" style={{ marginLeft: "40%" }}>Close</button></Link>
            </div>
          </div>
        </div>
      </div>

      {/*Forgot password confirmation message modal if email id doesn't exists*/}
      <div className="modal fade" id="forgotPasswordConfirmationMessage1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "20%", left: "40%" }}>
        <div className="modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/*Forgot password confirmation message*/}
              <h6 style={{ color: "red" }}>Invalid email id. Please try again.</h6><br />
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#forgotPasswordForm" style={{ marginLeft: "30%" }}>Try Again</button>
            </div>
          </div>
        </div>
      </div>

      {/*Navbar items*/}
      <nav className="navbar navbar-expand-lg" style={{ position: "absolute", width: "100%", opacity: "0.8" }}>
        <div className="container-fluid">
          <img src="https://c8.alamy.com/comp/T9M6P6/taxi-service-emblem-template-design-element-for-logo-label-sign-vector-illustration-T9M6P6.jpg" style={{ width: "75px", height: "30px" }} alt="logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href='/' style={{ color: "blue" }}><b>Home</b></a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href={url} style={{ color: "blue" }}><b>Book Cab</b></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href={url} role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "blue" }}>
                  <b>Service</b>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href={url}>Outstation Taxi</a></li>
                  <li><a className="dropdown-item" href={url}>Daily Fix</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href={url}>Airport</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href={url} style={{ color: "blue" }}><b>Partner</b></a>
              </li>
            </ul>
            <div style={{ display: "flex" }}>
              <h6 style={{ fontSize: "12px", marginRight: "10px" }}><u><i>Welcome Guest !</i></u></h6>
              <div className="dropdown">
                <a href={url} role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "blue" }}>
                  <b><FaUserCircle style={{ marginBottom: "10px" }} /></b>
                </a>
                <ul className="dropdown-menu" style={{ left: "auto", right: "0" }}>
                  <li><a className="dropdown-item" href="/" data-bs-toggle="modal" data-bs-target="#userSignUpForm"><MdAppRegistration style={{ marginRight: "10px" }} />Signup</a></li>
                  <li><a className="dropdown-item" href="/" data-bs-toggle="modal" data-bs-target="#userSignInForm"><FaSignInAlt style={{ marginRight: "10px" }} />Signin</a></li>
                  <li><a href="/marketplace/user-profile" className="dropdown-item"><ImProfile style={{ marginRight: "10px" }} />View Profile</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

const HeaderPage = () => {
  let url = "#"
  return (
    <>
      {/*User signin form modal*/}
      <div className="modal fade" id="userSignInForm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "50%", left: "30%" }}>
        <div className="modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Sign in to your account</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              {/*User Signin Form*/}
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Remember me</label>
              </div>
              <Link to="/"><button type="submit" class="btn btn-primary" data-bs-dismiss="modal" style={{ marginLeft: "45%" }}>Signin</button></Link><br /><br />
              <Link data-bs-toggle="modal" data-bs-target="#forgotPasswordForm"><h6><b><u>Forgot Password</u></b></h6></Link>
              <Link data-bs-toggle="modal" data-bs-target="#userSignUpForm"><h6><b><u>Don't have an account, signup here</u></b></h6></Link>
            </div>
          </div>
        </div>
      </div>

      {/*User signup form modal*/}
      <div className="modal fade" id="userSignUpForm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "50%", left: "25%" }}>
        <div className="modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Create your account</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              {/*User Signup Form*/}
              <div class="form-row" style={{ display: "flex" }}>
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                  <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div class="form-group col-md-6" style={{ marginLeft: "5px" }}>
                  <label for="inputPassword4">Password</label>
                  <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                </div>
              </div><br />
              <div class="form-row" style={{ display: "flex" }}>
                <div class="form-group col-md-6">
                  <label for="inputMobile">Mobile</label>
                  <input type="text" class="form-control" id="inputMobile" placeholder="Mobile" />
                </div>
                <div class="form-group col-md-6" style={{ marginLeft: "5px" }}>
                  <label for="inputCity">City</label>
                  <input type="text" class="form-control" id="inputCity" placeholder="City" />
                </div>
              </div><br />
              <div class="form-row" style={{ display: "flex" }}>
                <div class="form-group col-md-6">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="form-group col-md-6" style={{ marginLeft: "5px" }}>
                  <label for="inputZip">Zip</label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>
              </div><br />
              <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" style={{ width: "100%" }} />
              </div><br />
              <button type="submit" class="btn btn-primary" style={{ marginLeft: "45%" }} data-bs-toggle="modal" data-bs-target="#userSignUpConfirmation">Submit</button>
            </div>
          </div>
        </div>
      </div>

      {/*User signup confirmation modal*/}
      <div className="modal fade" id="userSignUpConfirmation" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "40%", left: "30%" }}>
        <div className="modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/*User Signup confirmation message*/}
              <h6>Hello, you have successfully registered with us. Please sign in with your email id and password to access your account.</h6><br />
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userSignInForm" style={{ marginLeft: "45%" }}>Signin</button>
            </div>
          </div>
        </div>
      </div>

      {/*User logout confirmation message modal*/}
      <div className="modal fade" id="userLogoutConfirmationMessage" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "25%", left: "40%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/*User logout confirmation message*/}
              <h6>You have successfully logged out.</h6><br />
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userSignInForm" style={{ marginLeft: "5%", width: "5rem" }}>Signin</button>
              <Link to="/"><button type="button" class="btn btn-primary" data-bs-dismiss="modal" style={{ marginLeft: "5%", width: "5rem" }}>Close</button></Link>
            </div>
          </div>
        </div>
      </div>

      {/*User logout confirmation modal*/}
      <div className="modal fade" id="userLogoutConfirmationAsk" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "25%", left: "40%" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/*User logout confirmation ask message*/}
              <h6>Are you sure, you want to logout?</h6><br />
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userLogoutConfirmationMessage" style={{ marginLeft: "5%" }}>Yes</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" style={{ marginLeft: "5%" }}>No</button>
            </div>
          </div>
        </div>
      </div>

      {/*User forgot password modal*/}
      <div className="modal fade" id="forgotPasswordForm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "40%", left: "30%" }}>
        <div className="modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Reset your account password</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              {/*User forgot password Form*/}
              <div class="mb-3">
                <label for="registeredEmail" class="form-label">Email</label>
                <input type="email" class="form-control" id="registeredEmail" />
              </div>
              <button type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#forgotPasswordConfirmationMessage" style={{ marginLeft: "45%" }}>Submit</button>
            </div>
          </div>
        </div>
      </div>

      {/*Forgot password confirmation message modal if email id exists*/}
      <div className="modal fade" id="forgotPasswordConfirmationMessage" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "35%", left: "40%" }}>
        <div className="modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/*Forgot password confirmation message*/}
              <h6>Password reset link sent to your registered email id. Please login into your email account and click on password reset link to reset your password.</h6><br />
              <Link to="/"><button type="button" class="btn btn-primary" data-bs-dismiss="modal" style={{ marginLeft: "40%" }}>Close</button></Link>
            </div>
          </div>
        </div>
      </div>

      {/*Forgot password confirmation message modal if email id doesn't exists*/}
      <div className="modal fade" id="forgotPasswordConfirmationMessage1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "20%", left: "40%" }}>
        <div className="modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/*Forgot password confirmation message*/}
              <h6 style={{ color: "red" }}>Invalid email id. Please try again.</h6><br />
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#forgotPasswordForm" style={{ marginLeft: "30%" }}>Try Again</button>
            </div>
          </div>
        </div>
      </div>

      {/*User change password form modal*/}
      <div className="modal fade" id="userChangePasswordForm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "40%", left: "30%" }}>
        <div className="modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Change your account password</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              {/*User change password Form*/}
              <div class="mb-3">
                <label for="oldPassword" class="form-label">Old Password</label>
                <input type="password" class="form-control" id="oldPassword" />
              </div>
              <div class="mb-3">
                <label for="newPassword" class="form-label">New Password</label>
                <input type="password" class="form-control" id="newPassword" />
              </div>
              <div class="mb-3">
                <label for="confirmNewPassword" class="form-label">Confirm New Password</label>
                <input type="password" class="form-control" id="confirmNewPassword" />
              </div>
              <button type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#changePasswordConfirmationMessage" style={{ marginLeft: "45%" }}>Submit</button>
            </div>
          </div>
        </div>
      </div>

      {/*Change password confirmation message modal*/}
      <div className="modal fade" id="changePasswordConfirmationMessage" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ width: "25%", left: "40%" }}>
        <div className="modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/*User logout confirmation message*/}
              <h6>You have successfully changed your password.</h6><br />
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userSignInForm" style={{ marginLeft: "5%", width: "5rem"}}>Signin</button>
              <Link to="/"><button type="button" class="btn btn-primary" data-bs-dismiss="modal" style={{ marginLeft: "5%", width: "5rem" }}>Close</button></Link>
            </div>
          </div>
        </div>
      </div>

      {/*Navbar items*/}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src="https://c8.alamy.com/comp/T9M6P6/taxi-service-emblem-template-design-element-for-logo-label-sign-vector-illustration-T9M6P6.jpg" style={{ width: "75px", height: "30px" }} alt="logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href='/' style={{ color: "blue" }}><b>Home</b></a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href={url} style={{ color: "blue" }}><b>Book Cab</b></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href={url} role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "blue" }}>
                  <b>Service</b>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href={url}>Outstation Taxi</a></li>
                  <li><a className="dropdown-item" href={url}>Daily Fix</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href={url}>Airport</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href={url} style={{ color: "blue" }}><b>Partner</b></a>
              </li>
            </ul>
            <div style={{ display: "flex" }}>
              <h6 style={{ fontSize: "12px", marginRight: "10px" }}><u><i>Welcome Guest !</i></u></h6>
              <div className="dropdown">
                <a href={url} role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "blue" }}>
                  <b><FaUserCircle style={{ marginBottom: "10px" }} /></b>
                </a>
                <ul className="dropdown-menu" style={{ left: "auto", right: "0" }}>
                  <li><a className="dropdown-item" href={url} style={{ color: "red" }} data-bs-toggle="modal" data-bs-target="#userLogoutConfirmationAsk"><AiOutlineLogin style={{ marginRight: "10px" }} />Logout</a></li>
                  <li><a className="dropdown-item" href={url} data-bs-toggle="modal" data-bs-target="#userChangePasswordForm"><Si1Password style={{ marginRight: "10px" }} />Change Password</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </>
  )
}

const BackgroundImage = () => {
  return (
    <>
      <img src="https://driverserviceshyderabad.com/new-img/out.jpg" className="img-fluid" alt="" style={{ width: "100%" }} />
    </>
  )
}

function MarketplaceHomePage() {
  return (
    <>
      <HeaderHome />
      <BookingForm />
      <BackgroundImage />
    </>
  );
}

function UserProfile() {
  return (
    <>
      <HeaderPage />

      {/*Profile Dashboard*/}
      <div className="container-fluid" style={{ width: "20%", height: "600px", float: "left", marginLeft: "5px", borderRight: "groove" }}>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="" className="nav-link active" aria-current="page" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
              Profile Dashboard
            </Link>
          </li>

          {/*Profile account details*/}
          <li className="nav-item">
            <Link to="" className="nav-link " id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
              Account Details
            </Link>
          </li>

          {/*Booking details*/}
          <li className="nav-item">
            <Link to="" className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
              Booking Details
            </Link>
          </li>

          {/*Help & Support tab*/}
          <li className="nav-item">
            <Link to="" className="nav-link" id="v-pills-support-tab" data-bs-toggle="pill" data-bs-target="#v-pills-support" type="button" role="tab" aria-controls="v-pills-support" aria-selected="false">
              Healp & Support
            </Link>
          </li>

          {/*Update account/profile details*/}
          <li className="nav-item">
            <Link to="" className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
              Account Settings
            </Link>
          </li>
        </ul>
      </div>

      {/*Tab content starts here*/}
      {/*Content for Profile Dashboard*/}
      <div className="tab-content" id="v-pills-tabContent">
        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" style={{ textAlign: "center" }}>
          <h3>Welcome to your profile</h3><br />
          <img src="https://driverserviceshyderabad.com/new-img/out.jpg" className="img-fluid" alt="" style={{ width: "50%" }} />
        </div>

        {/*Content for Account Details*/}
        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" style={{ textAlign: "center" }}>
          <h3>Your account details</h3><br />
          <div class="col-lg-8" style={{ marginLeft: "25%" }}>
            <div class="card mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Name</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">Johnatan Smith</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Email</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">example@example.com</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Mobile</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">(098) 765-4321</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Content for Cab Booking Details*/}
        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" style={{ textAlign: "center" }}>
          <h3>Your cab booking details</h3><br />
          <table className="table" style={{ width: "75%", border: "groove", marginLeft: "22%", borderWidth: "2px" }}>
            <thead>
              <tr>
                <th scope="col">Sl. No.</th>
                <th scope="col">Traveller Name</th>
                <th scope="col">Traveller Mobile</th>
                <th scope="col">Pickup Address</th>
                <th scope="col">Drop Address</th>
                <th scope="col">Pickup Time</th>
                <th scope="col">Travel Date</th>
                <th scope="col">Car Type</th>
                <th scope="col">Rate</th>
                <th scope="col">Booking Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Santosh Kumar</td>
                <td>9717069846</td>
                <td>New Ashok Nagar, Delhi-96</td>
                <td>Kajha, Purnea, Bihar</td>
                <td>10:30 AM</td>
                <td>31-Jan-2023</td>
                <td>Hyundai Aura</td>
                <td>1000</td>
                <td>29-Jan-2023</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Santosh Kumar</td>
                <td>9717069846</td>
                <td>New Ashok Nagar, Delhi-96</td>
                <td>Kajha, Purnea, Bihar</td>
                <td>10:30 AM</td>
                <td>31-Jan-2023</td>
                <td>Hyundai Aura</td>
                <td>1000</td>
                <td>29-Jan-2023</td>
                <td>Cancelled</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Santosh Kumar</td>
                <td>9717069846</td>
                <td>New Ashok Nagar, Delhi-96</td>
                <td>Kajha, Purnea, Bihar</td>
                <td>10:30 AM</td>
                <td>31-Jan-2023</td>
                <td>Hyundai Aura</td>
                <td>1000</td>
                <td>29-Jan-2023</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Santosh Kumar</td>
                <td>9717069846</td>
                <td>New Ashok Nagar, Delhi-96</td>
                <td>Kajha, Purnea, Bihar</td>
                <td>10:30 AM</td>
                <td>31-Jan-2023</td>
                <td>Hyundai Aura</td>
                <td>1000</td>
                <td>29-Jan-2023</td>
                <td>Completed</td>
              </tr>
            </tbody>
          </table></div>

        {/*Content for Help & Support tab*/}
        <div className="tab-pane fade" id="v-pills-support" role="tabpanel" aria-labelledby="v-pills-support-tab" style={{ textAlign: "center" }}>
          <h3>How may we help you today?</h3><br />
          <div class="accordion" id="accordionExample" style={{ marginLeft: "22%" }}>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  How to book cab?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  What is payment method?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  What is cancellation & refund policy?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  How can we raise complaint?
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Content for Account Settings*/}
        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" style={{ textAlign: "center" }}>
          <h3>Update your account details</h3><br />
          <div class="col-lg-8" style={{ marginLeft: "25%" }}>
            <div class="card mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Name</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">Johnatan Smith</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Email</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">example@example.com</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Mobile</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">(098) 765-4321</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { MarketplaceHomePage, BackgroundImage, HeaderHome, HeaderPage, UserProfile };