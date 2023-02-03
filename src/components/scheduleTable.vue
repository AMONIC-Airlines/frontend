<template>
  <h1 class="title">aaa</h1>
<div class="back">
  <div class="title">Расписание</div>

  <table class="table">
    <tbody>
      <tr>
        <th>Время</th>
        <th>Из</th>
        <th>Куда</th>
      </tr>
      <tr v-for="schedule in schedules">
        <td>{{ schedule.time }}</td>
        <td>{{ schedule.from }}</td>
        <td>{{ schedule.to }}</td>
      </tr>
    </tbody>
  </table>
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
    })
    return {
        schedules
    }
  }
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

.title {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
  width: 80%;
}
</style>
