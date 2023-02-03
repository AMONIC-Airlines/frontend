<template>
  <div class="back">
    <div class="form">
      <div class="title">Забронировать билет</div>
      <div class="item_desc">ОТКУДА</div>
      <label id="from"><input class="info_input" type="text" /><span>ОТКУДА</span></label>
      <div class="item_desc">КУДА</div>
      <label id="to"><input class="info_input" type="text" /><span>КУДА</span></label>
      <div class="item_desc">ДАТА</div>
      <label id="departure_time"><input type="date" /><span></span></label>
      <div class="item_desc">ПАССАЖИРЫ</div>
      <label id="passenger_number"><input class="info_input" type="text" /><span>i.e. 1</span></label>
      <input type="checkbox" id="business_class" name="business_class" value="Bike" />
      <label for="vehicle1"> I have a bike</label><br>
      <input type="submit" value="ПОДТВЕРДИТЬ" />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const schedules = computed(() => {
      return {
        time,
        from,
        to
      }
    });
    return {
      schedules
    };
  },

  METHODS: {},
};
</script>

<style scoped>
.back {
  position: relative;
  display: grid;
  align-items: center;
  justify-items: center;
  top: 12vh;
  right: 5vw;
  height: 55vh;
  width: 25vw;
  margin-left: 10px;
  margin-bottom: 5px;
  background-color: rgba(179, 34, 145, 0.3);
  border-radius: 40px;
  background-attachment: fixed;
  backdrop-filter: blur(10px);
}

.back__item {}

.form {
  display: grid;
  width: 85%;
  margin-left: 15%;
}

.title {
  font-size: 24px;
  margin-bottom: 16px;
  margin-left: 17%;
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
}

.item_desc {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  margin-left: 10px;
  color: #fff;
}

.info_input {
  height: 50px;
  width: 80%;
  color: #fff;
  border-radius: 10px;
  outline: none;
  padding: 0 16px;
  border-color: rgb(194, 61, 255);
  background: none;
  box-shadow: 7px 5px 5px rgb(151, 40, 163);
}

.info_input:focus {
  border-color: rgb(255, 0, 251);
  box-shadow: 7px 5px 5px rgb(236, 61, 255);
}

label {
  position: relative;
  margin-bottom: 16px;
}

span {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 100;
  position: absolute;
  left: 16px;
  top: 30%;
  color: black;
  background: none;
  color: #fff;
  transition: all 0.3s ease-in-out;
}
</style>