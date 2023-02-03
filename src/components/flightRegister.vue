<template>
  <div class="back">
    <div class="title">Регистрация на рейс</div>
    <div style="position: relative; display: flex; top: 15%; left: 10%;">
      <div class="search_comp">
        <div class="item_desc">Рейс</div>
        <input type="text" class="in-field" required />
      </div>
      <div class="search_comp">
        <div class="item_desc">Откуда</div>
        <input type="text" class="in-field" required />
      </div>
      <div class="search_comp">
        <div class="item_desc">Куда</div>
        <input type="text" class="in-field" required />
      </div>
      <div style="margin-left: 20px">
        <a style="position: relative; top: 40%"><button type="submit" class="submit-btn">Search</button></a>
      </div>
    </div>
    <div class="table">
      <table>
        <tbody>
          <tr>
            <th>Рейс</th>
            <th>Время</th>
            <th>Откуда</th>
            <th>Куда</th>
            <th></th>
          </tr>
          <tr v-for="schedule in schedules">
            <td>{{ schedule.flight }}</td>
            <td>{{ schedule.time }}</td>
            <td>{{ schedule.from }}</td>
            <td>{{ schedule.to }}</td>
            <td style="justify-items: center;">
              <div>
                <a href="#"><button type="submit" class="submit-btn">Выбрать</button></a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schedules: [
        {
          flight: "IC200",
          time: "12:00",
          from: "Vladivostok",
          to: "Moscow",
        },
        {
          flight: "IF150",
          time: "12:30",
          from: "Vladivostok",
          to: "Sahalin",
        },
        {
          flight: "CR100",
          time: "13:00",
          from: "Vladivostok",
          to: "Yakutzk",
        },
        {
          flight: "UP300",
          time: "13:30",
          from: "Peters-Burg",
          to: "Vladivostok",
        },
        {
          flight: "IC400",
          time: "14:00",
          from: "Vladivostok",
          to: "Moscow",
        },
      ],
    };
  },

  methods() { },
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
  align-items: center;
  justify-items: center;
  right: 10%;
  height: 80vh;
  width: 50vw;
  background-color: var(--white-purple-trans);
  border-radius: 40px;
  background-attachment: fixed;
  backdrop-filter: blur(10px);
}

.title {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #ffffff;
  position: relative;
  font-size: 28px;
  font-weight: bold;
  top: 10%;
  left: 0%;
}

.search_comp {
  margin: 15px;
}

.table {
  display: grid;
  width: 85%;
  margin-left: 10%;
  position: relative;
  top: 20%;
}

th, td {
  border-bottom: 1px solid;
  padding: 10px;
}

th, td {
  font-size: 20px;
  color: #fff;
}

.in-field {
  height: 50px;
  width: 100%;
  color: #fff;
  border-radius: 10px;
  outline: none;
  padding: 0 16px;
  border-color: var(--white-orange);
  background: none;
  box-shadow: 3px 3px 5px var(--white-orange-bright);
}

.item_desc {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: 10px;
  color: #fff;
}

.in-field:focus {
  border-color: var(--white-yellow);
  box-shadow: 7px 5px 5px var(--white-yellow-bright);
}

.submit-btn {
  width: fit-content;
  font-size: 18px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 100;
  color: white;
  margin-top: 5px;
  padding: 10px 10px;
  cursor: pointer;
  background: linear-gradient(to right,
      var(--brown-trans),
      var(--white-purple-trans));
  box-shadow: 0 0 10px 4px var(--white-orange-bright);
  outline: none;
  border: 0;
  border-radius: 15px;
}

.submit-btn:active {
  box-shadow: 0 0 10px 4px var(--white-yellow-bright);
}

.in-field:focus+.moved-span {
  color: var(--white-yellow);
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  left: 8px;
  top: -9px;
  background-color: var(--white-yellow-bright);
  border-radius: 12px;
  color: var(--brown-dark);
  width: 5%;
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
}
</style>