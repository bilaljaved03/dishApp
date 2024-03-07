import React from 'react';

const NavBar = () => {
  return (
    <div className='m-3'>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary p-2 ">
        <a class="navbar-brand" href="#" style={{ color: 'white' }}>
          <b>

          SteakCave
          </b>
          
          </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ">
            <li class="nav-item active">
              <a class="nav-link active" href="#" style={{ color: 'white' }}>Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ color: 'white' }}>Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ color: 'white' }}>Pricing</a>
            </li>
            <li class="nav-item dropdown">
             
             
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
