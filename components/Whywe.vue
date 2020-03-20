<template>
  <section id="why-we">
    <div class="container">
      <div class="row">
        <div class="why">
          <h2 class="block-caption">
            Почему нас
            <span>выбирают</span>:
          </h2>
          <ul>
            <li v-for="w of why" :key="w">
              <div class="check-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-check"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p class="zag">{{w.caption}}:</p>
              <p>{{w.text}}</p>
            </li>
          </ul>
        </div>
        <div class="imgshechka">
          <img v-lazy="'/img/remont_komercheskogo_i_legkovogo_transporta.jpg'" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'whywe',
  data() {
    return {
      why: [
        {
          caption: "Мы выполняем все виды работ",
          text:
            "Cлесарные, кузовные, покрасочные, установка дополнительного оборудования, а также тюнинг и детейлинг."
        },
        {
          caption: "Внимательное отношение к Вашему автомобилю.",
          text:
            "Мы проверим ваш автомобиль и дадим рекомендации не только по причине обращения"
        },
        {
          caption: "Последовательность и логичность ",
          text:
            "Мы предложим приоритет и оптимальные варианты устранения поломок, опираясь на критичность неисправности и стоимость ремонта."
        },
        {
          caption: "Контроль качества",
          text:
            "Мы проверяем качество работы наших сотрудников, связавшись с вами после посещения"
        },
        {
          caption: "Стремимся быть лучше",
          text:
            "Мы систематически исправляем свои недостатки по итогам ваших отзывов"
        },
        {
          caption: "Грузовой эвакуатор",
          text:
            "Мы готовы забрать автомобиль на эвакуаторе по вашему звонку и доставить его в наш сервис в целости и сохранности"
        }
      ]
    };
  }
};
</script>
<style scoped>
#why-we{
    padding-bottom: 30px;
}
.block-caption span {
  color: #60a6f4;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.why,
.imgshechka {
  width: calc(50% - 10px);
  position: relative;
}
.imgshechka img {
  width: calc(100% - 25px);
  position: relative;
  z-index: 2;
}
.why ul {
  padding: 0;
  width: 90%;
}
.why h2 {
  margin-bottom: 50px;
}
.why ul li,
.why h2 {
  padding-left: 55px;
}
.why ul li {
  list-style: none;
  position: relative;
}
.check-icon {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #60a6f4;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
}
.zag {
  color: #60a6f4;
  font-weight: 600;
}
.imgshechka::before {
  content: "";
  width: calc(100% - 25px);
  height: 100%;
  background: #eaeaea;
  position: absolute;
  z-index: 0;
  left: 25px;
  top: 25px;
}
@media screen and (max-width: 576px) {
  .row {
    flex-direction: column;
  }
  .why,
  .imgshechka {
    width: 100%;
    position: relative;
  }
  .why h2 {
    width: 70%;
    margin-bottom: 25px;
  }
  .imgshechka img {
    width: calc(100% - 10px);
  }
  .imgshechka::before {
    content: "";
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    background: #eaeaea;
    position: absolute;
    z-index: 0;
    left: 10px;
    top: 10px;
  }
}
</style>