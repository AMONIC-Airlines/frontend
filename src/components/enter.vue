<template>
  <div class="back">
    <div class="form">
      <div class="title">Авторизация</div>
      <label id="email"><input type="text" /><span>Email</span></label>
      <label id="password"
        ><input type="password" /><span>Password</span></label
      >
    </div>
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

.back:hover {
  background-color: rgba(254, 40, 204, 0.3);
}

.back__item {
}

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
  font-weight: 100;
}

input {
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

input:focus {
  border-color: rgb(255, 0, 251);
  box-shadow: 7px 5px 5px rgb(236, 61, 255);
}

input:focus + span {
  color: rgb(236, 61, 255);
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  left: 8px;
  top: -9px;
  background-color: rgba(254, 40, 204, 1);
  border-radius: 12px;
  color: black;
  width: 20%;
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
