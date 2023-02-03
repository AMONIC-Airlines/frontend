<template>
<enterVue />
</template>

<script>
import headerVue from "./header.vue";
import asideVue from "./aside.vue";
import footerVue from "./footer.vue";
import enterVue from "./enter.vue";

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