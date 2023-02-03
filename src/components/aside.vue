<template>
  <div class="sideBar">
    <div class="side__section">
      <h2 class="side__item">
        Путешествуйте с <strong class="HH">AMONIC!</strong>
      </h2>
    </div>

    <ul class="side__section">
      <li class="side__item_l">
        <RouterLink class="side__item_l" to="/service">Расписание</RouterLink>
      </li>
      <li class="side__item_l">
        <RouterLink class="side__item_l" to="/booking"
          >Забронировать билет</RouterLink
        >
      </li>
      <li class="side__item_l">
        <a class="side__item_l" href="#">Регистрация на рейс</a>
      </li>
      <li class="side__item_l">
        <a class="side__item_l" href="#">Дополнительные услуги</a>
      </li>
      <li class="side__item_l">
        <a class="side__item_l" href="#">Техническая поддержка</a>
      </li>
    </ul>
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

.sideBar {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  left: 3vw;
  height: 83vh;
  width: 31vw;
  margin-left: 10px;
  margin-bottom: 5px;
  background-color: var(--white-purple-trans);
  border-radius: 40px;
  background-attachment: fixed;
  backdrop-filter: blur(10px);
}

.side__section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.side__item {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #ffffff;
  font-size: 28px;
  width: 80%;
}

.side__item_l {
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  line-height: 50px;
  color: var(--white-orange);
  font-size: 26px;
  width: 80%;
  text-decoration: underline;
}
li.side__item_l:hover {
  color: var(--white-yellow);
}

a.side__item_l:hover {
  text-decoration: underline var(--white-yellow);
}

.side__button {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  background-color: rgba(248, 120, 0, 0.3);
  backdrop-filter: blur(4px);
  border: none;
  border-radius: 10px;
  border-color: var(--white-yellow);
  padding: 15px;
  margin: 5px;
}

.side__button:hover {
  box-shadow: -10px 5px 5px rgb(223, 39, 39);
  color: rgb(242, 230, 12);
  transform: scale(1.1);
  transition: 0.4s;
}

.side__button:not(:hover) {
  transition: 0.4s;
}

.side__button:active {
  transform: scale(1);
  box-shadow: none;
}

.HH {
  color: var(--white-yellow);
  font-size: 30px;
}
</style>
