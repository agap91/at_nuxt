<template>
  <section id="about">
    <div class="container">
      <div class="about-text">
        <h2>Auto Truckcom — Ремонт и сервисное обслуживание легкового и коммерческого транспорта</h2>
        <p>Разрешите угадать. Вы — успешный предприниматель у которого свой собственный автопарк или просто счастливый влоделец легкового автомобиля.</p>
        <p>И Вы ищете качественный и недорогой сервис для своего автомобиля. Вы уже обращались в несколько ремонтных мастерских в Москве, но ни одна из них не смогла предоставить по-настоящему грамотного обслуживания.</p>
        <p>Стоп! Притормозите здесь, потому что Вы попали точно по адресу. «Auto Truckcom» — это специализированный сервисный центр для коммерческих и легковых автомобилей, расположенный в городе Королеве.</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'about',
  data() {
    return {
      errors: []
    };
  }
};
</script>
<style scoped>
#about .container {
  display: flex;
  justify-content: flex-end;
}
.about-text {
  width: 70%;
  position: relative;
}
.about-text h2 {
  background: #272727;
  padding: 8px 7vw;
  position: relative;
  z-index: 2;
}
.about-text p {
  padding: 0 7vw;
  font-weight: 500;
}
.about-text::before {
  content: "";
  position: absolute;
  width: 95%;
  height: 100%;
  margin: auto;
  border: 1px solid #fff;
  z-index: 0;
  left: 0;
  right: 0;
}
@media screen and (max-width: 576px) {
  .about-text {
    width: 100%;
  }
  .about-text h2 {
    background: #272727;
    padding: 8px 0;
    position: relative;
    z-index: 2;
    padding-left: 35px;
    font-size: 18px;
    width: 95%;
    left: -5px;
  }
  #about {
    background-position: right center;
  }
}
</style>