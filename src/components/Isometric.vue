<template>
  <div id="isometric">
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
      <!-- /.row  -->
    </div>
    <!-- end of container -->
  </div>
  <!-- end of app -->
</template>


<script>
export default {
  name: "Isometric",
  data() {
    return {
      title: "icons",
      icons: [
        {
          title: "play",
          image: require("../assets/img/play.png"),
          imagesvg: "/icons/play.svg"
        },
        {
          title: "pause",
          image: require("../assets/img/pause.png"),
          imagesvg: "/icons/pause.svg"
        },
        {
          title: "stop",
          image: require("../assets/img/stop.png"),
          imagesvg: "/icons/stop.svg"
        },
        {
          title: "previous",
          image: require("../assets/img/previous.png"),
          imagesvg: "/icons/previous.svg"
        },
        {
          title: "next",
          image: require("../assets/img/next.png"),
          imagesvg: "/icons/next.svg"
        },
        {
          title: "fast-forward",
          image: require("../assets/img/fast-forward.png"),
          imagesvg: "/icons/fast-forward.svg"
        },
        {
          title: "rewind",
          image: require("../assets/img/rewind.png"),
          imagesvg: "/icons/rewind.svg"
        },
        {
          title: "minus",
          image: require("../assets/img/minus.png"),
          imagesvg: "/icons/minus.svg"
        },
        {
          title: "plus",
          image: require("../assets/img/plus.png"),
          imagesvg: "/icons/plus.svg"
        },
        {
          title: "message",
          image: require("../assets/img/message.png"),
          imagesvg: "/icons/message.svg"
        },
        {
          title: "flash",
          image: require("../assets/img/flash.png"),
          imagesvg: "/icons/flash.svg"
        },
        {
          title: "eyes",
          image: require("../assets/img/eyes.png"),
          imagesvg: "/icons/eyes.svg"
        },
        {
          title: "arrow-down",
          image: require("../assets/img/arrow-down.png"),
          imagesvg: "/icons/arrow-down.svg"
        },
        {
          title: "arrow-up",
          image: require("../assets/img/arrow-up.png"),
          imagesvg: "/icons/arrow-up.svg"
        },
        {
          title: "arrow-left",
          image: require("../assets/img/arrow-left.png"),
          imagesvg: "/icons/arrow-left.svg"
        },
        {
          title: "arrow-right",
          image: require("../assets/img/arrow-right.png"),
          imagesvg: "/icons/arrow-right.svg"
        },
        {
          title: "badge",
          image: require("../assets/img/badge.png"),
          imagesvg: "/icons/badge.svg"
        },
        {
          title: "caution",
          image: require("../assets/img/caution.png"),
          imagesvg: "/icons/caution.svg"
        },
        {
          title: "camera",
          image: require("../assets/img/camera.png"),
          imagesvg: "/icons/camera.svg"
        },
        {
          title: "chat",
          image: require("../assets/img/chat.png"),
          imagesvg: "/icons/chat.svg"
        },
        {
          title: "dot-vertical",
          image: require("../assets/img/dot-vertical.png"),
          imagesvg: "/icons/dot-vertical.svg"
        },
        {
          title: "boxes",
          image: require("../assets/img/boxes.png"),
          imagesvg: "/icons/boxes.svg"
        },
        {
          title: "copy",
          image: require("../assets/img/copy.png"),
          imagesvg: "/icons/copy.svg"
        },
        {
          title: "file",
          image: require("../assets/img/file.png"),
          imagesvg: "/icons/file.svg"
        },
        {
          title: "notepad",
          image: require("../assets/img/notepad.png"),
          imagesvg: "/icons/notepad.svg"
        },
        {
          title: "send-one",
          image: require("../assets/img/send-one.png"),
          imagesvg: "/icons/send-one.svg"
        },
        {
          title: "send",
          image: require("../assets/img/send.png"),
          imagesvg: "/icons/send.svg"
        },
        {
          title: "star",
          image: require("../assets/img/star.png"),
          imagesvg: "/icons/star.svg"
        },
        {
          title: "user",
          image: require("../assets/img/user.png"),
          imagesvg: "/icons/user.svg"
        },
        {
          title: "file-add",
          image: require("../assets/img/file-add.png"),
          imagesvg: "/icons/file-add.svg"
        },
        {
          title: "user-add",
          image: require("../assets/img/user-add.png"),
          imagesvg: "/icons/user-add.svg"
        },
        {
          title: "user-settings",
          image: require("../assets/img/user-settings.png"),
          imagesvg: "/icons/user-settings.svg"
        },
        {
          title: "guard",
          image: require("../assets/img/guard.png"),
          imagesvg: "/icons/guard.svg"
        },
        {
          title: "app-menu",
          image: require("../assets/img/app-menu.png"),
          imagesvg: "/icons/app-menu.svg"
        },
        {
          title: "chart",
          image: require("../assets/img/chart.png"),
          imagesvg: "/icons/chart.svg"
        },
        {
          title: "chart-two",
          image: require("../assets/img/chart-two.png"),
          imagesvg: "/icons/chart-two.svg"
        }
      ]
    };
  }
};
</script>
