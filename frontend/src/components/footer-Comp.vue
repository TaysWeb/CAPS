<template >
   
   <!-- Footer -->
<footer class="text-center text-lg-start ">
    <div class="container-fluid" style="border:2px solid black">
   
            <!-- Section: Form -->
    <section class="py-3" >
      <form action="">
        <!--Grid row-->
        <div class="row d-flex justify-content-center">
          <!--Grid column-->
          <div class="col-auto">
            <p class="pt-2">
              <strong class="text-black">Subscribe to our Newsletter</strong>
            </p>
            <p style="color:#686363"> <strong>You'll get to enter our competitions and to know <br>
            hand to receive exclusives news & events </strong></p>

          </div>
          <!--Grid column-->
          

          <!--Grid column-->
          <div class="col-2">
            <!-- Email input -->
            <div class="form-outline form-white mb-4">
              <input type="email" id="form5Example21" class="form-control fw-bold " placeholder="Your email"/>
            </div>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-auto">
            <!-- Submit button -->
            <button type="submit" class="btn mb-4" style="background: #F6F4F4;">
              Subscribe
            </button>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </form>
    
    </section>
    <!-- Section: Form -->
    <hr class="w-75 m-auto" >

  <!-- Section: Links  -->
  <section class="container">
    <div class=" text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-lg-4 col-md-6 mb-md-0">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3 text-secondary"></i>Luxaria
          </h6>
          <p>
           Enjoy your favorites Movies with Luxuaria .
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Movies
          </h6>
          <p>
            <a href="#!" class="text-reset">Choose a Experience</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Coming Soon</a>
          </p>
          <p>
            <a href="../views/" class="text-reset">Now Showing </a>
          </p>
          <p>
            <a href="../views/HomeView.vue" class="text-reset">Find a Movie</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3 text-secondary"></i>24 Island Road,Cape town</p>
          <p>
            <i class="fas fa-envelope me-3 text-secondary"></i>
            info@luxuaria.com
          </p>
          <p><i class="fas fa-phone me-3 text-secondary"></i> + 27 64 567 88</p>
          <p><i class="fas fa-print me-3 text-secondary"></i> + 27 84 567 89</p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div class="copyright  p-3">
    
    <a class="fw-bold " style="color:#46796D; margin-left:22%;">Terms & Conditions   </a>
    

    <a class="fw-bold " style="color:#46796D;margin-left: 30%;">Copyright © Luxuaria 2023  </a>
  </div>
  <!-- Copyright -->
</div>
</footer>
<!-- Footer -->

</template>
<script>
export default {
    
}
</script>
<style scoped>
   footer {
    background-color: var(--text);
    color:#968E8E !important;
   } 
   .container {
     max-width: 50%;
   }
   input {
    background-color: var(--primary);
   }
   input::placeholder {
    color:var(--text);
   }
   hr{
       color: #000000 !important;
   }
   .copyright{
    background-color: #D9D9D9;
   }
</style>