<template>

    <div class="container">
    <nav class="navbar navbar-expand-md fixed-top ">
        <div class="container-fluid">
          <a class="navbar-brand text-white py-3 mx-4" href="#">Luxuaria</a>
        <!-- NAV BUTTON  -->
        <button
        class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- OFFCANVAS MAIN CONTAINER START -->
        <section
          class="offcanvas offcanvas-start" data-bs-scroll="true" 
          tabindex="-1" id="offcanvasWithBothOptions" 
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div class="offcanvas-header">
           <h4 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Hii there</h4>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  
          </div>
          <!-- OFF CANVAS MENU LINKS  START-->
          <div
            class="offcanvas-body d-flex flex-column justify-content-between px-0"
          >
            <ul class="navbar-nav  fs-5 justify-content-evenly pt-2 ms-2" >
              <li class="nav-item active">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item text-white">
                <router-link to="/" class="nav-link ">Now Showing</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/" class="nav-link ">Cineplexes</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/" class="nav-link">Prices</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/" class="nav-link ">About Us </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/" class="nav-link ">Contact</router-link>
              </li>

                 <!-- Right elements -->
                 <div class="d-flex justify-content-end p-3 mx-3" >
                  <!-- Sign in & Login Button -->
              <div class="btn-group w-100" role="group" >
             <button type="button" class="btn btn-secondary text-white">Sign Up</button>
              <button type="button" class="btn btn-secondary " style="color:#1ED29C">Login </button>
             </div>
              </div>
            </ul>
          </div>
        </section>
        <!-- OFFCANVAS MAIN CONTAINER END  -->
      </div>
    </nav>


    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
  <div class="carousel-inner">
    <div class="carousel-item active p-3">
      <img src="https://i.postimg.cc/CL54Xvzy/B-Feature-Banner1920x640-Desktop.webp" class="d-block w-100" alt="Barbie Banner">
    </div>
    <div class="carousel-item p-3">
      <img src="https://i.postimg.cc/DZzW0NVn/Oppenheimer-Feature-Banner1920x640-Desktop.webp" class="d-block w-100" alt="Oppenheimer Banner">
    </div>
    <div class="carousel-item p-3">
      <img src="https://i.postimg.cc/3rd9W8H4/WGTP-Generic-Feature-Banner1920x640-Desktop.webp" class="d-block w-100" alt="We got Power Banner">
    </div>
    <div class="carousel-item p-3">
      <img src="https://i.postimg.cc/XvPXBhHc/SOF-Feature-Banner1920x640-Desktop.webp" class="d-block w-100" alt="SOF">
    </div>
    <div class="carousel-item p-3">
      <img src="https://i.postimg.cc/6qXWdNdR/BB-Feature-Banner1920x640-Desktop.webp" class="d-block w-100" alt="BB Banner">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
 nav, .offcanvas {
   background-color:#60716D ;
}
.navbar {
    height:4.5rem ;
}
.navbar-toggler {
    border: none;
}
.navbar-toggler:focus {
    outline: none;
}
.nav-link {
  color:var(--text);
}
.btn-group {
  background: #6B6C64 ;
  letter-spacing: 1px ;
}



</style>