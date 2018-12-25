<template>
  <div id="abstract">
  <div class="container">
             <!-- Jollof 3D Icons Section 2-->
      <div class="row">
        <div class="col-lg-2 mb-4" v-for="(data,index) in icons" :key="index">
          <div class= "card h-100 nc">
            <div class="card-body">
              <a href="data.imagesvg" data-toggle="tooltip" data-placement="top" :title="data.title" download>
             <img :src="data.image" class = "img-responsive mx-auto d-block">
           </a>
            <!--<p class="text-center icon-name">Pen</p>-->
            </div>
            <!--<div class="card-footer text-center">
              <p></p>
            </div>-->
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
    name: 'Abstract',
    data () {

    return {
      title: 'icons',
      icons:[
      {
        title:"pen",
        image       : require('../assets/img/pen.png'),
      },
      {
        title:"pub",
        image       : require('../assets/img/pen.png')
      },
      {
        title:"add",
        image       : require('../assets/img/pen.png')
      },
      {
        title:"mouse",
        image       : require('../assets/img/pen.png')
      },
      {
        title:"MLI",
        image       : require('../assets/img/pen.png')
      },
      {
        title:"Banans",
        image       : require('../assets/img/pen.png')
      },
      {
        title:"Banans",
        image       : require('../assets/img/pen.png')
      },
      {
        title:"Banans",
        image       : require('../assets/img/pen.png')
      }
      ]
    }
  }
  }
</script>


