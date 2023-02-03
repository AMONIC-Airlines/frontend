<template class="body">
  <div class="body">
    <headerVue />
    <div class="main">
      <router-view></router-view>
    </div>
    <footerVue />
  </div>
</template>

<script>
import homeVue from "./components/home.vue";
import headerVue from "./components/header.vue";
import footerVue from "./components/footer.vue";

export default {
  components: {
    headerVue,
    footerVue,
    homeVue,
  },

  data() {
    return {
      likes: 0,
    };
  },

  METHODS: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scrollbar-width: thick;
  scrollbar-color: blue orange;
}

*::-webkit-scrollbar {
  height: 12px;
  width: 15px;
  background-color: black;
}
*::-webkit-scrollbar-track {
  background: orange;
  border-radius: 10px;
}
*::-webkit-scrollbar-thumb {
  background-color: rgb(135, 31, 133);
  border-radius: 5px;
  border: 3px solid orange;
  border-radius: 10px;
}

.body {
  font-family: Helvetica;
  background-image: url(./images/airport.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.main {
  display: flex;
  height: 100vh;
  flex-direction: row;
  justify-content: space-between;
}
</style>
