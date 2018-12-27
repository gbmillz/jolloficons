<template>
  <div id="abstract">
  <div class="container">
             <!-- Jollof Abstract Icons Section-->
      <div class="row">
        <div class="col-lg-2 mb-4" v-for="(data,index) in icons" :key="index">
          <div class= "card h-100 nc">
            <div class="card-body">
              <a :href="data.imagesvg" data-toggle="tooltip" data-placement="top" :title="data.title" download>
             <img :src="data.image" class = "img-responsive mx-auto d-block">
           </a>
            </div>
          </div>
        </div>
      </div>
      <!-- /.row 1 -->
    </div>
<!-- end of container -->
    </div>
  <!-- end of app -->
</template>


<script>
export default {
  name: "Abstract",
  data() {
    return {
      title: "icons",
      icons: [
        {
          title: "abstract001",
          image: require("../assets/img/abstract001.png"),
          imagesvg: "icons/abstract001.svg"
        },
        {
          title: "abstract002",
          image: require("../assets/img/abstract002.png"),
          imagesvg: "icons/abstract002.svg"
        },
        {
          title: "abstract003",
          image: require("../assets/img/abstract003.png"),
          imagesvg: "icons/abstract003.svg"
        },
        {
          title: "abstract004",
          image: require("../assets/img/abstract004.png"),
          imagesvg: "icons/abstract004.svg"
        },
        {
          title: "abstract005",
          image: require("../assets/img/abstract005.png"),
          imagesvg: "icons/abstract005.svg"
        },
        {
          title: "abstract006",
          image: require("../assets/img/abstract006.png"),
          imagesvg: "icons/abstract006.svg"
        },
        {
          title: "abstract007",
          image: require("../assets/img/abstract007.png"),
          imagesvg: "icons/abstract007.svg"
        },
        {
          title: "abstract008",
          image: require("../assets/img/abstract008.png"),
          imagesvg: "icons/abstract009.svg"
        },
        {
          title: "abstract009",
          image: require("../assets/img/abstract009.png"),
          imagesvg: "icons/abstract009.svg"
        },
        {
          title: "abstract010",
          image: require("../assets/img/abstract010.png"),
          imagesvg: "icons/abstract010.svg"
        }
      ]
    };
  }
};
</script>
