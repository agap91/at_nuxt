<template>
  <section id="page404">
    <div class="container">
      <h1>{{error.statusCode}}</h1>
      <p v-if="error.statusCode === 404">Упс... Эта страница не найдена</p>
      <p v-else>Произошла ошибка</p>
      <a href="/" title="Главная страница Auto Truckcom">вернуться на главную</a>
    </div> 
  </section>
</template>
<script>
export default {
  props: ["error"]
};
</script>
<style scoped>
#page404 .container {
  text-align: center;
}
#page404 {
  padding: 50px 0;
  height: calc(100vh - 167px);
}
#page404 a {
  color: #00aaf8;
  text-decoration: none;
  font-weight: 500;
}
#page404 h1 {
  font-size: 20vw;
  margin: 0;
  line-height: 1;
}
</style>