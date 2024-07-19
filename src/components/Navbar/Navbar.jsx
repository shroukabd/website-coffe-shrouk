import React from 'react'
import { IoMenuSharp } from "react-icons/io5";

const Navbar = ({sideBar,setSideBar}) => {
  return (
    <nav className='absolute top-0 left-0w-full 
        pt-10 text-white z-20'>
        <div className="container">
                   <div className='flex justify-between items-center gap-[750px]'>
                    {/* logo section */}  
                    <h1 className='text-2xl ml-[150px] font-semibold uppercase'> <span className='text-primary'>Coders</span> Coffee.</h1>                
                      {/* Hamburger menu section */}
                     
                      
                    {/* <  IoMenuSharp className='text-3xl cursor-pointer'  onClick={() => sideBar(setSideBar)}/>
                     */}


{/* <div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <h5 class="text-white h4">Collapsed content</h5>
    <span class="text-muted">Toggleable via the navbar brand.</span>
  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav> */}


                   </div>
        </div>
    </nav>
  )
}

export default Navbar
