<template>
  <div id="threed">
  <div class="container">
             <!-- Jollof 3D Icons Section 2-->
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
  name: "ThreeD",
  data() {
    return {
      title: "icons",
      icons: [
        {
          title: "pen",
          image: require("../assets/img/pen.png"),
          imagesvg: "icons/pen.svg"
        },
        {
          title: "publicadd",
          image: require("../assets/img/publicadd.png"),
          imagesvg: "/jolloficons/icons/publicadd.svg"
        },
        {
          title: "tv",
          image: require("../assets/img/tv.png"),
          imagesvg: "/icons/tv.svg"
        },
        {
          title: "radio",
          image: require("../assets/img/radio.png"),
          imagesvg: "/icons/radio.svg"
        },
        {
          title: "cigarette",
          image: require("../assets/img/cigarette.png"),
          imagesvg: "/icons/cigarette.svg"
        },
        {
          title: "umbrella",
          image: require("../assets/img/umbrella.png"),
          imagesvg: "/icons/umbrella.svg"
        },
        {
          title: "wallet",
          image: require("../assets/img/wallet.png"),
          imagesvg: "/icons/wallet.svg"
        },
        {
          title: "wastebin",
          image: require("../assets/img/wastebin.png"),
          imagesvg: "/icons/wastebin.svg"
        },
        {
          title: "scroll",
          image: require("../assets/img/scroll.png"),
          imagesvg: "/icons/scroll.svg"
        },
        {
          title: "mouse",
          image: require("../assets/img/mouse.png"),
          imagesvg: "/icons/mouse.svg"
        },
        {
          title: "mail",
          image: require("../assets/img/mail.png"),
          imagesvg: "/icons/mail.svg"
        },
        {
          title: "gears",
          image: require("../assets/img/gears.png"),
          imagesvg: "/icons/gears.svg"
        },
        {
          title: "windows",
          image: require("../assets/img/windows.png"),
          imagesvg: "/icons/windows.svg"
        },
        {
          title: "scale",
          image: require("../assets/img/scale.png"),
          imagesvg: "/icons/scale.svg"
        },
        {
          title: "washingmachine",
          image: require("../assets/img/washingmachine.png"),
          imagesvg: "/icons/washingmachine.svg"
        },
        {
          title: "stethoscope",
          image: require("../assets/img/stethoscope.png"),
          imagesvg: "/icons/stethoscope.svg"
        },
        {
          title: "padlock",
          image: require("../assets/img/padlock.png"),
          imagesvg: "/icons/padlock.svg"
        },
        {
          title: "telephone",
          image: require("../assets/img/telephone.png"),
          imagesvg: "/icons/telephone.svg"
        },
        {
          title: "mortarpestle",
          image: require("../assets/img/mortarpestle.png"),
          imagesvg: "/icons/mortarpestle.svg"
        },
        {
          title: "gavel",
          image: require("../assets/img/gavel.png"),
          imagesvg: "/icons/gavel.svg"
        },
        {
          title: "fuel",
          image: require("../assets/img/fuel.png"),
          imagesvg: "/icons/fuel.svg"
        },
        {
          title: "folder",
          image: require("../assets/img/folder.png"),
          imagesvg: "/icons/folder.svg"
        },
        {
          title: "firstaid",
          image: require("../assets/img/firstaid.png"),
          imagesvg: "/icons/firstaid.svg"
        },
        {
          title: "android",
          image: require("../assets/img/android.png"),
          imagesvg: "/icons/android.svg"
        },
        {
          title: "ball",
          image: require("../assets/img/ball.png"),
          imagesvg: "/icons/ball.svg"
        },
        {
          title: "books",
          image: require("../assets/img/books.png"),
          imagesvg: "/icons/books.svg"
        },
        {
          title: "chess",
          image: require("../assets/img/chess.png"),
          imagesvg: "/icons/chess.svg"
        },
        {
          title: "cowryshells",
          image: require("../assets/img/cowryshells.png"),
          imagesvg: "/icons/cowryshells.svg"
        },
        {
          title: "cup",
          image: require("../assets/img/cup.png"),
          imagesvg: "/icons/cup.svg"
        },
        {
          title: "mosque",
          image: require("../assets/img/mosque.png"),
          imagesvg: "/icons/mosque.svg"
        },
        {
          title: "church",
          image: require("../assets/img/church.png"),
          imagesvg: "/icons/church.svg"
        },
        {
          title: "bucket",
          image: require("../assets/img/bucket.png"),
          imagesvg: "/icons/bucket.svg"
        },
        {
          title: "cake",
          image: require("../assets/img/cake.png"),
          imagesvg: "/icons/cake.svg"
        },
        {
          title: "keg",
          image: require("../assets/img/keg.png"),
          imagesvg: "/icons/keg.svg"
        },
        {
          title: "microphone",
          image: require("../assets/img/microphone.png"),
          imagesvg: "/icons/microphone.svg"
        },
        {
          title: "briefcase",
          image: require("../assets/img/briefcase.png"),
          imagesvg: "/icons/briefcase.svg"
        },
        {
          title: "battery",
          image: require("../assets/img/battery.png"),
          imagesvg: "/icons/battery.svg"
        },
        {
          title: "ethereum",
          image: require("../assets/img/ethereum.png"),
          imagesvg: "/icons/ethereum.svg"
        },
        {
          title: "bitcoin",
          image: require("../assets/img/bitcoin.png"),
          imagesvg: "/icons/bitcoin.svg"
        },
        {
          title: "creditcard",
          image: require("../assets/img/creditcard.png"),
          imagesvg: "/icons/creditcard.svg"
        },
        {
          title: "danfobus",
          image: require("../assets/img/danfobus.png"),
          imagesvg: "/icons/danfobus.svg"
        },
        {
          title: "harddisk",
          image: require("../assets/img/harddisk.png"),
          imagesvg: "/icons/harddisk.svg"
        },
        {
          title: "cubes",
          image: require("../assets/img/cubes.png"),
          imagesvg: "/icons/cubes.svg"
        },
        {
          title: "money",
          image: require("../assets/img/money.png"),
          imagesvg: "/icons/money.svg"
        },
        {
          title: "printer",
          image: require("../assets/img/printer.png"),
          imagesvg: "/icons/printer.svg"
        },
        {
          title: "smokingpipe",
          image: require("../assets/img/smokingpipe.png"),
          imagesvg: "/icons/smokingpipe.svg"
        },
        {
          title: "speaker",
          image: require("../assets/img/speaker.png"),
          imagesvg: "/icons/speaker.svg"
        },
        {
          title: "lightbulb",
          image: require("../assets/img/lightbulb.png"),
          imagesvg: "/icons/lightbulb.svg"
        },
      ]
    };
  }
};
</script>
