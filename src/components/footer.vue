<template>
  <div class="footer">
    <img class="footer__img" src="../images/white.png" />
    <div class="footer__section">
      <a class="footer__item" href="#">Партнерская программа</a>
      <span class="footer__item">|</span>
      <a class="footer__item" href="#">Реклама</a>
      <span class="footer__item">|</span>
      <a class="footer__item" href="#">Вакансии</a>
      <span class="footer__item">|</span>
      <a class="footer__item" href="#">Поддержка</a>
      <span class="footer__item">|</span>
      <a class="footer__item" href="#">Правила</a>
      <span class="footer__item">|</span>
      <a class="footer__item" href="#">Политика конфиденциальности</a>
    </div>
    <div class="footer__section">© 2017–2022, AMONIC Airlines</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  METHODS: {},
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

.footer {
  height: 15vh;
  padding: 10px;
  color: #fff;
  background-image: url("../images/DS2017_TP09_Airplane-Amonic-Single.png");
  background-repeat: no-repeat;
  background-position: right, top;
  background-size: 23%;
}

.footer__item {
  font-family: Helvetica;
  font-size: 16px;
  color: #fff;
  padding: 5px;
  margin-top: 10px;
  text-decoration: none;
  transition: all 0.1s ease-in-out;
}

.footer__section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
}

.footer__item:hover {
  color: rgb(113, 113, 108);
}

.footer__img {
  position: absolute;
  padding: 10px 15px;
  width: 15vw;
  height: auto;
}
</style>
