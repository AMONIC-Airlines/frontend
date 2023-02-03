<template>
  <div class="back">
    <div class="title">Допольнительные услуги</div>
    <div class="form">
      <table>
        <tbody>
          <tr>
            <th style="width: 5%; text-align: start;"></th>
            <th style="width: 40%; text-align: start;">Услуга</th>
            <th style="width: 20%; text-align: start;">Стоимость</th>
            <th style="width: fit-content">Кол</th>
          </tr>
          <tr>
            <td><input id="service_check" type="checkbox" /></td>
            <td>Бифстейк</td>
            <td>500 руб</td>
            <td style="text-align: center;"><input type="number" value="0"/></td>
          </tr>
          <tr>
            <td><input id="service_check" type="checkbox" /></td>
            <td>Американо</td>
            <td>100 руб</td>
            <td style="text-align: center;"><input type="number" value="0" /></td>
          </tr>
          <tr>
            <td><input id="service_check" type="checkbox" /></td>
            <td>Латте</td>
            <td>100 руб</td>
            <td style="text-align: center;"><input type="number" value="0" /></td>
          </tr>
          <tr>
            <td><input id="service_check" type="checkbox" /></td>
            <td>Макиатто</td>
            <td>100 руб</td>
            <td style="text-align: center;"><input type="number" value="0" /></td>
          </tr>
        </tbody>
      </table>
      <div class="right">
        <button type="submit" class="submit-btn">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
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
  top: 10%;
  height: 65vh;
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
  margin-left: 10%;
  position: relative;
  bottom: 20%;
}

.title {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
}

table {
  border-collapse: separate;
  border-spacing: 0 2em;
}

input[type=number] {
  height: 25px;
  width: 50%;
}

input[type=number]::-webkit-inner-spin-button {
  opacity: 1;
}

th, td {
  font-size: 20px;
  color: #fff;
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
  background: linear-gradient(to right,
      var(--brown-trans),
      var(--white-purple-trans));
  box-shadow: 0 0 20px 9px var(--white-orange-bright);
  outline: none;
  border: 0;
  border-radius: 30px;
}

.submit-btn:active {
  box-shadow: 0 0 20px 9px var(--white-yellow-bright);
}

.right {
  position: relative;
  left: 18%;
}
</style>
