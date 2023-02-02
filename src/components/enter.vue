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
:root {
  --white-blue: #b2dff2;
  --brown: #995459;
  --brown-dark: #733f43;
  --brown-trans: rgba(153, 84, 89, 0.5);
  --white-orange: #fba692;
  --white-orange-bright: #fe9882;
  --white-yellow: #fed6a3;
  --white-yellow-bright: #fcc47a;
  --white-yellow-trans: rgba(254, 214, 163, 0.5);
  --white-purple: #ae8a94;
  --white-purple-trans: rgba(174, 138, 148, 0.5);
}
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
  background-color: var(--white-purple-trans);
  border-radius: 40px;
  background-attachment: fixed;
  backdrop-filter: blur(10px);
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
  border-color: var(--white-orange);
  background: none;
  box-shadow: 7px 5px 5px var(--white-orange-bright);
}

input:focus {
  border-color: var(--white-yellow);
  box-shadow: 7px 5px 5px var(--white-yellow-bright);
}

input:focus + span {
  color: var(--white-yellow);
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  left: 8px;
  top: -9px;
  background-color: var(--white-yellow-bright);
  border-radius: 12px;
  color: var(--brown-dark);
  width: 21%;
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
  width: 150px;
}
</style>
