<template>
  <section id="results">
    <div class="container">
      <h2 data-v-2f7ec7cc class="caption">Наши результаты:</h2>
      <div class="tile">
        <div class="item" style="background-image: url(/img/7_let_remontiruem_avtomobili.jpg)"></div>
        <div class="item">
          <span>
            <data>7</data>
            <span>лет</span>
          </span>
          <p>занимаемся ремонтом и обслуживанием автомобилей</p>
        </div>
        <div
          class="item"
          style="background-image: url(/img/kachestvennye-uslugi-po-remontu-gruzovyh-i-legkovyh-avtomobilej.jpg)"
        ></div>
        <div class="item">
          <span>
            8 000
            <span>автомобилистов</span>
          </span>
          <p>доверились нам и стали нашими постоянными клиентами</p>
        </div>
        <div class="item" style="background-image: url(/img/8000-dovolnyh-klientov.jpg)"></div>
        <div class="item">
          <span>
            100%
            <span>качество</span>
          </span>
          <p>только сертифицированное оборудование и высококлассные мастера</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'results',
  data() {
    return {
      errors: []
    };
  }
};
</script>
<style scoped>
#results {
  padding-bottom: 30px;
}
.tile {
  display: flex;
  flex-wrap: wrap;
  background: #eaeaea;
}
.item {
  text-align: center;
  width: 33.333333333%;
  background-size: cover;
  padding: 20px 10px;
  background-position: center;
}
.item span {
  position: relative;
  z-index: 2;
  width: 100%;
  text-align: center;
  display: block;
  font-size: 6vw;
  line-height: 1;
  margin-bottom: 50px;
  font-weight: 100;
  z-index: 1;
}
.item span span {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 0;
  font-weight: bold;
  color: #afafaf;
  font-size: 2vw;
  text-transform: uppercase;
  bottom: -0.9vw;
}
.item:nth-child(2) span span[data-v-72953efd] {
  font-size: 4vw;
  bottom: -2vw;
}
.item span data {
  position: relative;
  z-index: 2;
  font-size: 7vw;
}
.item p {
  color: #808080;
  font-size: 15px;
  font-weight: bold;
  width: 70%;
  margin: auto;
}
@media screen and (max-width: 576px) {
  .tile {
    flex-direction: column;
  }
  .item {
    width: 100%;
    min-height: 165px;
  }
  .item span data {
    position: relative;
    z-index: 2;
    font-size: 48vw;
  }
  .item span {
    font-size: 29vw;
  }
  .item span span {
    font-size: 9vw;
    bottom: -3.9vw;
  }
  .item:nth-child(2) span span {
    font-size: 29vw!important;
    bottom: -8vw!important;
  }
}
</style>