<template>
  <div class="back">
    <div class="title">Расписание</div>
    <div class="table">
      <table>
        <tbody>
          <tr>
            <th>Рейс</th>
            <th>Время</th>
            <th>Откуда</th>
            <th>Куда</th>
          </tr>
          <tr v-for="schedule in schedules">
            <td>{{ schedule.flight }}</td>
            <td>{{ schedule.time }}</td>
            <td>{{ schedule.from }}</td>
            <td>{{ schedule.to }}</td>
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

  methods() {},
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
  height: 65vh;
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

.table {
  display: grid;
  width: 85%;
  margin-left: 10%;
  position: relative;
  top: 15%;
}

th, td {
  border-bottom: 1px solid;
  padding: 10px;
}

th, td {
  font-size: 20px;
  color: #fff;
}
</style>
