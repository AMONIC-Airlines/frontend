<template class="body">
  <div class="body">
    <headerVue />
    <div class="main">
      <asideVue />
      <enterVue />
    </div>
    <footerVue />
  </div>
</template>

<script>
import headerVue from "./components/header.vue";
import asideVue from "./components/aside.vue";
import footerVue from "./components/footer.vue";
import enterVue from "./components/enter.vue";

export default {
  components: {
    headerVue,
    asideVue,
    footerVue,
    enterVue,
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
  background-image: url(./images/airport_dark.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
