    <template>
      <div id="banner">

     <!--start nav -->
     <div class="navbar navbar-b navbar-trans navbar-expand-md" id="mainNav">
    <div class="container">
       <router-link to ="/jolloficons/"><a class="navbar-brand" id= "logotext"><img class="logoo" src="../assets/logo.png">Jolloficons</a></router-link>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
        aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="navbar-collapse collapse justify-content-end" id="navbarDefault">
        <ul class="navbar-nav">
         <li class="nav-item">
            <a class="nav-link" href="../icons/iconpack.zip" download="">DOWNLOAD</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- end nav -->

    <!-- Page Content -->
    <div class="container">
      <div class="text-center pt-5 mt-2">
      <h1 class="my-4 text-center">Jollof Icons</h1>
      <h5>Open Source 3D, Isometric, Abstract icons and Emojis for your projects</h5>
      </div>
      <!--<div class="active-pink-3 pt-3 pb-5 search mb-4 text-center mx-auto">
      <input class="form-control form-search" type="text" placeholder="Search" aria-label="Search" v-model = "keyword">
      </div>-->
       <hr>


       <div class="text-center">
      <h3 class="my-4 text-center">All icons are in svg format</h3>
      <p>Click on any icon to download, or download all icons using the button above</p>
      </div>
       <hr>


       <!-- Categories -->
      <div class="categories pt-5 pb-2 d-flex">
        <h5>Categories : </h5>
        <ul class="nav nav-pills">
          <router-link to ="/jolloficons/" exact><a>Jollof 3D</a></router-link>
          <router-link to ="/jolloficons/isometric" exact><a>Jollof Isometric</a></router-link>
          <router-link to ="/jolloficons/emojis" exact><a>Jollof Emojis</a></router-link>
          <router-link to ="/jolloficons/abstract" exact><a>Jollof Abstract</a></router-link>
        </ul>
      </div>
       <!-- end of Categories -->


  </div>
  </div>
  </template>



  <script>
export default { name: "Banner" };
</script>
