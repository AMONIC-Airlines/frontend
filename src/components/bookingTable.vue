<template>
  <div class="back">
    <div class="form">
      <div class="title">Забронировать билет</div>

      <label id="from"
        ><input type="text" class="in-field" required /><span class="moved-span"
          >Откуда</span
        ></label
      >

      <label id="to"
        ><input type="text" class="in-field" required /><span class="moved-span"
          >Куда</span
        ></label
      >
      <div class="item_desc">ДАТА</div>
      <label id="departure_time"
        ><input type="date" class="in-field" required /><span></span
      ></label>

      <label id="passenger_number"
        ><input type="text" class="in-field" required /><span
          class="moved-span-long"
          >Количество пассажиров</span
        ></label
      >
      <div class="item_desc">
        <label id="business_class"
          ><input type="checkbox" /> Business Class</label
        ><br />
      </div>
      <div class="right">
        <a href="#"><button type="submit" class="submit-btn">Submit</button></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.back {
  position: relative;
  display: grid;
  align-items: center;
  justify-items: center;
  top: 5%;
  height: 78vh;
  width: 25vw;
  transform: translate(-50%, 0%);
  background-color: var(--white-purple-trans);
  border-radius: 40px;
  background-attachment: fixed;
  backdrop-filter: blur(10px);
}

.form {
  display: grid;
  width: 85%;
  margin-left: 15%;
  position: relative;
  bottom: 5%;
}

.title {
  font-size: 24px;
  margin-bottom: 16px;
  margin-left: 6%;
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 100;
}

.item_desc {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 15px;
  margin-left: 10px;
  margin-bottom: 5px;
  color: #fff;
}

.button-box {
  margin: 6px auto;
  position: relative;
  border-radius: 30px;
  width: 75%;
  box-shadow: 0 0 20px 9px var(--white-orange-bright);
  right: 10%;
  bottom: 15%;
}

.button-box:active {
  box-shadow: 0 0 20px 9px var(--white-yellow-bright);
}

.toggle-button {
  font-size: 18px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 100;
  color: white;
  padding: 10px 30px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
}

.submit-btn {
  width: 50%;
  font-size: 18px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 100;
  color: white;
  margin-top: 20px;
  align-self: left;
  padding: 10px 10px;
  cursor: pointer;
  background: linear-gradient(
    to right,
    var(--brown-trans),
    var(--white-purple-trans)
  );
  box-shadow: 0 0 20px 9px var(--white-orange-bright);
  outline: none;
  border: 0;
  border-radius: 30px;
}

.submit-btn:active {
  box-shadow: 0 0 20px 9px var(--white-yellow-bright);
}

#btn {
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  left: 50%;
  border-radius: 30px;
  background: linear-gradient(to right, var(--brown), var(--white-purple));
  transition: 0.5s;
  position: absolute;
}

.check-box {
  display: flex;
  right: 100px;
  margin: 10px 10px 10px 0;
  background-color: black;
}

.check-group {
  transition: 0.5s;
  display: flex;
  margin: 10px;
}

.in-field {
  height: 50px;
  width: 90%;
  color: #fff;
  border-radius: 10px;
  outline: none;
  padding: 0 16px;
  border-color: var(--white-orange);
  background: none;
  box-shadow: 7px 5px 5px var(--white-orange-bright);
}

.in-field:focus {
  border-color: var(--white-yellow);
  box-shadow: 7px 5px 5px var(--white-yellow-bright);
}

.in-field:focus + .moved-span {
  color: var(--white-yellow);
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  left: 8px;
  top: -9px;
  background-color: var(--white-yellow-bright);
  border-radius: 12px;
  color: var(--brown-dark);
  width: 30%;
}

.in-field:focus + .moved-span-long {
  color: var(--white-yellow);
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  left: 8px;
  top: -9px;
  background-color: var(--white-yellow-bright);
  border-radius: 12px;
  color: var(--brown-dark);
  width: 60%;
}

label {
  position: relative;
  margin-bottom: 16px;
}

.moved-span {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 100;
  position: absolute;
  left: 16px;
  top: 30%;
  color: black;
  background: none;
  color: #fff;
  transition: all 0.3s ease-in-out;
  width: 80%;
}

.moved-span-long {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 100;
  position: absolute;
  left: 16px;
  top: 30%;
  color: black;
  background: none;
  color: #fff;
  transition: all 0.3s ease-in-out;
  width: 80%;
}

.static-span {
  position: relative;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 100;
  font-size: 16px;
  color: white;
  margin: 10px 10px;
}

.right {
  position: relative;
  left: 18%;
}
</style>
