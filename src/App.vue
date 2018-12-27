<template>
    <div id="app">
        <banner></banner>
        <transition name ="fade">
            <router-view></router-view>
        </transition>
        <footerr></footerr>
    </div>
    <!-- end of app -->
</template>


<style>
body,
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #333333;
  font-weight: 300;
}

.search {
  width: 60%;
}

.logoo {
  padding-right: 1rem;
}

#logotext {
  color: #6c757d;
}

hr {
  border: 0.03rem solid #b7b7b7;
}
.active-orange-3 {
  border-color: orange;
}

.navbar-nav {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  background-color: #f6993f;
  font-weight: 600;
  padding: 0.5rem;
  border: 1px solid #f2f2f2;
  border-radius: 0.25rem;
  cursor: pointer;
}

.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: #f6993f;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}
#banner {
  padding-bottom: 1rem;
}

/*#banner h1,
h3,
h5,
p {
  color: #fff;
}*/
.navbar a {
  color: #fff;
}
.navbar a:hover {
  color: #000;
}

.orange {
  color: #f6993f;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 1.5rem 1.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #e9ecef;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 5rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

a {
  color: grey;
  text-decoration: none;
  background-color: transparent;
}

a:active {
  color: #f6993f;
}

.is-active {
  color: #f6993f;
}

.lia a:active {
  color: blue;
}
.categories {
  margin-bottom: 1rem;
}

.categories a {
  padding: 0px 5px 0px 5px;
}

.card {
  transition: all 0.3s ease-out;
  border: 1px solid #f2f2f2;
}

.card-body {
  -ms-flex: 1 1 auto;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  padding: 1.25rem;
}

.card:hover {
  transform: translateY(-5px) scale(1.085) translateZ(0);
  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.5),
    0 24px 46px var(--box-shadow-color);
}

/*top tooltip*/
.tooltip-inner {
  max-width: 200px;
  padding: 3px 8px;
  color: white;
  text-align: center;
  background-color: #f6993f;
  border-radius: 0.25rem;
}

.tooltip.bs-tooltip-auto[x-placement^="top"] .arrow::before,
.tooltip.bs-tooltip-top .arrow::before {
  margin-left: -3px;
  content: "";
  border-width: 5px 5px 0;
  border-top-color: #000;
}

img.icons {
  margin-left: auto;
  margin-right: auto;
}

.icon-name {
  color: #bdbdbd;
  margin-top: 0;
  margin-bottom: 1rem;
}

li {
  list-style: none;
}

footer p {
  font-size: 0.825rem;
}

.text-footer {
  color: #bdbdbd;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>




<script>
import Banner from "./components/Banner";
import Footerr from "./components/Footerr";
import Emojis from "./components/Emojis";
import Abstract from "./components/Abstract";
import ThreeD from "./components/ThreeD";

export default {
  name: "app",
  components: {
    Banner,
    Emojis,
    Footerr,
    Abstract,
    ThreeD
  }
};
</script>
