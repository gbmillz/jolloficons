import ThreeD from "./components/ThreeD.vue";
import Isometric from "./components/Isometric.vue";
import Emojis from "./components/Emojis.vue";
import Abstract from "./components/Abstract.vue";

export const routes = [
  {
    path: "/",
    name: "3D",
    component: ThreeD
  },
  {
    path: "/isometric",
    name: "isometric",
    component: Isometric
  },
  {
    path: "/emojis",
    name: "emojis",
    component: Emojis
  },
  {
    path: "/abstract",
    name: "abstract",
    component: Abstract
  }
];
