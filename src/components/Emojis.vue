<template>
  <div id="emojis">
    <!-- Page Content -->
    <!-- Jollof 3D Icons Section 2-->
    <div class = "container">
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
      <!-- /.row  -->
    </div>
    <!-- end of container -->
  </div>
  <!-- end of app -->

</template>


<script>
export default {
  name: "Emojis",
  data() {
    return {
      title: "icons",
      icons: [
        {
          title: "yoruba",
          image: require("../assets/img/yoruba.png"),
          imagesvg: "icons/yoruba.svg"
        },
        {
          title: "igbo",
          image: require("../assets/img/igbo.png"),
          imagesvg: "icons/igbo.svg"
        },
        {
          title: "hausa",
          image: require("../assets/img/hausa.png"),
          imagesvg: "icons/hausa.svg"
        },
        {
          title: "grin-one",
          image: require("../assets/img/grin-one.png"),
          imagesvg: "icons/grin-one.svg"
        },
        {
          title: "grin-two",
          image: require("../assets/img/grin-two.png"),
          imagesvg: "icons/grin-two.svg"
        },
        {
          title: "grin-trip",
          image: require("../assets/img/grin-trip.png"),
          imagesvg: "icons/grin-trip.svg"
        },
        {
          title: "grin-three",
          image: require("../assets/img/grin-three.png"),
          imagesvg: "icons/grin-three.svg"
        },
        {
          title: "grin-love",
          image: require("../assets/img/grin-love.png"),
          imagesvg: "icons/grin-love.svg"
        },
        {
          title: "wink",
          image: require("../assets/img/wink.png"),
          imagesvg: "icons/wink.svg"
        },
        {
          title: "kiss-love",
          image: require("../assets/img/kiss-love.png"),
          imagesvg: "icons/kiss-love.svg"
        },
        {
          title: "naughty-two",
          image: require("../assets/img/naughty-two.png"),
          imagesvg: "icons/naughty-two.svg"
        },
        {
          title: "naughty",
          image: require("../assets/img/naughty.png"),
          imagesvg: "icons/naughty.svg"
        },
        {
          title: "pout-two",
          image: require("../assets/img/pout-two.png"),
          imagesvg: "icons/pout-two.svg"
        },
        {
          title: "pout-face",
          image: require("../assets/img/pout-face.png"),
          imagesvg: "icons/pout-face.svg"
        },
        {
          title: "sleepy-face",
          image: require("../assets/img/sleepy-face.png"),
          imagesvg: "icons/sleepy-face.svg"
        },
        {
          title: "sick-face",
          image: require("../assets/img/sick-face.png"),
          imagesvg: "icons/sick-face.svg"
        },
        {
          title: "savour",
          image: require("../assets/img/savour.png"),
          imagesvg: "icons/savour.svg"
        },
        {
          title: "spiderman",
          image: require("../assets/img/spiderman.png"),
          imagesvg: "icons/spiderman.svg"
        },
        {
          title: "tongue-out",
          image: require("../assets/img/tongue-out.png"),
          imagesvg: "icons/tongue-out.svg"
        },
        {
          title: "tongue-outtwo",
          image: require("../assets/img/tongue-outtwo.png"),
          imagesvg: "icons/tongue-outtwo.svg"
        },
        {
          title: "grin-four",
          image: require("../assets/img/grin-four.png"),
          imagesvg: "icons/grin-four.svg"
        },
        {
          title: "unbelievable-face",
          image: require("../assets/img/unbelievable-face.png"),
          imagesvg: "icons/unbelievable-face.svg"
        },
        {
          title: "unamused",
          image: require("../assets/img/unamused.png"),
          imagesvg: "icons/unamused.svg"
        },
        {
          title: "woman-face",
          image: require("../assets/img/woman-face.png"),
          imagesvg: "icons/woman-face.svg"
        },
        {
          title: "assassin",
          image: require("../assets/img/assassin.png"),
          imagesvg: "icons/assassin.svg"
        },
        {
          title: "big-grin",
          image: require("../assets/img/big-grin.png"),
          imagesvg: "icons/big-grin.svg"
        },
        {
          title: "blind",
          image: require("../assets/img/blind.png"),
          imagesvg: "icons/blind.svg"
        },
        {
          title: "blush-face",
          image: require("../assets/img/blush-face.png"),
          imagesvg: "icons/blush-face.svg"
        },
        {
          title: "face-high",
          image: require("../assets/img/face-high.png"),
          imagesvg: "icons/face-high.svg"
        },
        {
          title: "face-tipsy",
          image: require("../assets/img/face-tipsy.png"),
          imagesvg: "icons/face-tipsy.svg"
        },
        {
          title: "face-upsidedown",
          image: require("../assets/img/face-upsidedown.png"),
          imagesvg: "icons/face-upsidedown.svg"
        },
        {
          title: "rapper",
          image: require("../assets/img/rapper.png"),
          imagesvg: "icons/rapper.svg"
        },
        {
          title: "hacker",
          image: require("../assets/img/hacker.png"),
          imagesvg: "icons/hacker.svg"
        },
        {
          title: "hard-face",
          image: require("../assets/img/hard-face.png"),
          imagesvg: "icons/hard-face.svg"
        },
        {
          title: "ninja-face",
          image: require("../assets/img/ninja-face.png"),
          imagesvg: "icons/ninja-face.svg"
        },
        {
          title: "not-concerned",
          image: require("../assets/img/not-concerned.png"),
          imagesvg: "icons/not-concerned.svg"
        },
        {
          title: "sad",
          image: require("../assets/img/sad.png"),
          imagesvg: "icons/sad.svg"
        },
        {
          title: "shocked-face",
          image: require("../assets/img/shocked-face.png"),
          imagesvg: "icons/shocked-face.svg"
        },
        {
          title: "cool",
          image: require("../assets/img/cool.png"),
          imagesvg: "icons/cool.svg"
        },
        {
          title: "exp",
          image: require("../assets/img/exp.png"),
          imagesvg: "icons/app-menu.svg"
        },
        {
          title: "pale",
          image: require("../assets/img/pale.png"),
          imagesvg: "icons/pale.svg"
        },
        {
          title: "worried",
          image: require("../assets/img/worried.png"),
          imagesvg: "icons/worried.svg"
        }
      ]
    };
  }
};
</script>
