<template>
  <div class="sideBar">
    <div class="side__section">
      <h2 class="side__item">
        Путешествуйте с <strong class="HH">AMONIC!</strong>
      </h2>
    </div>

    <ul class="side__section">
      <li class="side__item_l">
        <a class="side__item_l" href="#">Забронировать билет</a>
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
  background-color: rgba(255, 182, 193, 0.3);
  border-radius: 40px;
  background-attachment: fixed;
  backdrop-filter: blur(10px);
}

.sideBar:hover {
  background-color: rgba(252, 140, 157, 0.3);
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
  color: #ffffff;
  font-size: 26px;
  width: 80%;
  text-decoration: underline;
}
li.side__item_l:hover {
  color: orange;
}

a.side__item_l:hover {
  text-decoration: underline orange;
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
  border-color: orange;
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
  color: orange;
  font-size: 30px;
}
</style>
