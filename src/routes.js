import ThreeD from "./components/ThreeD.vue";
import Isometric from "./components/Isometric.vue";
import Emojis from "./components/Emojis.vue";
import Abstract from "./components/Abstract.vue";

export const routes = [
  {
    path: "/jolloficons/",
    name: "3D",
    component: ThreeD
  },
  {
    path: "/jolloficons/isometric",
    name: "isometric",
    component: Isometric
  },
  {
    path: "/jolloficons/emojis",
    name: "emojis",
    component: Emojis
  },
  {
    path: "/jolloficons/abstract",
    name: "abstract",
    component: Abstract
  }
];
