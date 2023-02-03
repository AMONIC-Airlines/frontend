<template>
  <asideVue />
  <enterVue />
</template>

<script>
import asideVue from "./aside.vue";
import enterVue from "./enter.vue";

export default {
  components: {
    asideVue,
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

<style scoped></style>
