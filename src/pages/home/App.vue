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
import headerVue from "../../components/header.vue";
import asideVue from "../../components/aside.vue";
import footerVue from "../../components/footer.vue";
import enterVue from "../../components/enter.vue";

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
:root {
  --white-blue: #b2dff2;
  --brown: #995459;
  --brown-dark: #733f43;
  --brown-trans: rgba(153, 84, 89, 0.5);
  --white-orange: #fba692;
  --white-orange-bright: #fe9882;
  --white-yellow: #fed6a3;
  --white-yellow-bright: #fcc47a;
  --white-yellow-trans: rgba(254, 214, 163, 0.5);
  --white-purple: #ae8a94;
  --white-purple-trans: rgba(174, 138, 148, 0.5);
}

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
  background-image: url(../../images/airport_dark.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.05),
      rgba(0, 0, 0, 0.7)
    ),
    url(./images/airport.jpg);
}

.main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
