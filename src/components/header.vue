<template>
  <div class="header">
    <div class="header__img__section">
      <img id="img" class="header__img" src="../images/DS2017_TP09_black.png" />
    </div>
    <div class="header__margin_right">
      <div class="header__section">
        <button class="header__button">О компании</button>
      </div>
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
