import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      </div>
      <div className='container justify-content-center col-4 mt-4'>
        <div>
          <form>
            {/* <!-- Email input --> */}
            <div className='col-6 mt-4'>
              <input type="email" id="form2Example1" className="form-control" />
              <label className="form-label" for="form2Example1" >email</label>
            </div>

            {/* <!-- Password input --> */}
            <div className="col-6 mt-4">
              <input type="password" id="form2Example2" className="form-control" />
              <label className="form-label" for="form2Example2" >password</label>
            </div>

            {/* <!-- 2 column grid layout for inline styling --> */}
            <div className="col-6 mt-4">
              <div className="col d-flex justify-content-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check ">
                  <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                  <label className="form-check-label" for="form2Example31"> Remember me </label>
                </div>
              </div>

              <div className="col d-flex justify-content-center">
                {/* <!-- Simple link --> */}
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            {/* <!-- Submit button --> */}
            <div className="col-6 mt-4">
              <div className="col d-flex justify-content-center">
                <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
              </div>
            </div>
            {/* <!-- Register buttons --> */}
            <div className="text-center col-6 mt-4">
              <p>Not a member? <a href="#!">Register</a></p>
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage