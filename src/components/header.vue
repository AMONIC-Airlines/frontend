<template>
  <div class="header">
    <div class="header__img__section">
      <RouterLink to="/"
        ><img
          id="img"
          class="header__img"
          src="../images/DS2017_TP09_black.png"
      /></RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  METHODS: {
    changeImg() {},
  },
};
</script>

<style scoped>
:root {
  --white-blue: #b2dff2;
  --brown: #995459;
  --brown-trans: rgba(153, 84, 89, 0.5);
  --white-orange: #fba692;
  --white-yellow: #fed6a3;
  --white-purple: #ae8a94;
  --white-purple-trans: rgba(174, 138, 148, 0.5);
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  color: #fff;
  height: 15vh;
}

.header__section {
  display: flex;
  align-items: center;
}

.header__img__section {
  display: flex;
  align-items: center;
}

.header__button {
  font-size: 20px;
  font-family: Helvetica;
  font-weight: bold;
  color: #fff;
  padding: 10px 15px;
  width: 10vw;
  height: auto;
  background: none;
  border: none;
}

.header__button:hover {
  color: rgb(242, 230, 12);
}

.header__img {
  padding: 10px 15px;
  width: 15vw;
  height: auto;
}

#img {
  margin-left: 24vh;
}

.header__margin_right {
  margin-right: 1vw;
}
</style>
