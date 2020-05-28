<template>
  <section>
    <section class="main-block" :style="'background-image: url('+imgFon+')'">
      <nav class="submenu" v-if="menu.length>0">
        <a v-for="m of menu" :key="m" :href="m.link" v-scroll-to="m.link" :title="m.name">{{m.name}}</a>
      </nav>
      <div class="container">
        <h1>{{title}}</h1>
        <div class="order-block">
          <div class="attention">
            <h3 class="bold">Закажите</h3>
            <h3>грузоперевозку</h3>
          </div>
          <div class="form">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
            <form @submit.prevent="send()">
              <h3>Оставьте заявку</h3>
              <span>и мы перезвоним Вам!</span>
              <div class="form-items">
                <input
                  type="text"
                  name="fio"
                  placeholder="Ваше имя"
                  :class="errors.name ? 'error' : ''"
                  v-model="form.name"
                />
                <input
                  type="text"
                  placeholder="+7 (___) ___-__-__"
                  v-model="form.phone"
                  :class="errors.phone ? 'error' : ''"
                  v-mask="'+7 (###) ###-##-##'"
                />
                <button type="submit">Заказать звонок</button>
              </div>
              <ul class="error" v-if="errors.length>0">
                <li v-for="error of errors" :key="error">{{error}}</li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section id="page">
      <div class="container">
        <h2 class="caption">Особенности грузовых перевозок</h2>
        <div class="table">
          <p>Грузоперевозки – актуальная услуга при необходимости транспортировки массивных, тяжелых или габаритных грузов, как на дальние расстояния, так и по городу. Наша компания предлагает воспользоваться данным предложением частным или юридическим лицам.</p>
          <p>Предлагаем качественную технику, высокий уровень профессионализма сотрудников и конкурентные цены. В наличии разные автомобили, в том числе с прицепами, грузоподъемностью до 20 т.</p>
        </div>
        <h2 class="caption">Особенности услуги</h2>
        <div class="table">
          <p>Основная часть автопарка нашей компании – фуры. Мы регулярно отправляем грузовики разной грузоподъемности по городу, области и в регионы. При этом учитываются индивидуальные требования заказчика.</p>
          <p>В наличии нашей компании есть тентованные ТС и еврофуры с открытым бортом. Благодаря разным особенностям модификации транспортных средств мы предлагаем широкий перечень возможностей клиентам и перевозим:</p>
          <ul>
            <li>стройматериалы, включая монтажные конструкции;</li>
            <li>оборудование для производственных компаний;</li>
            <li>автомобильные детали;</li>
            <li>товары широкого потребления.</li>
          </ul>
        </div>
        <h2 class="caption">Наш автопарк</h2>
        <div class="table">
          <div class="dostavka">
            <div class="item">
              <div class="img" style="background-image: url(/img/dostavka_furi.jpg)"></div>
              <h3>Грузоперевозки фурами</h3>
            </div>
            <div class="item">
              <div class="img" style="background-image: url(/img/dostavka_do_1t.png)"></div>
              <h3>Грузоперевозки до 1 тонны</h3>
            </div>
            <div class="item">
              <div class="img" style="background-image: url(/img/dostavka_do_1_5_t.png)"></div>
              <h3>Грузоперевозки до 1,5 тонны</h3>
            </div>
            <div class="item">
              <div class="img" style="background-image: url(/img/dostavka_do_3_t.png)"></div>
              <h3>Грузоперевозки до 3 тонны</h3>
            </div>
            <div class="item">
              <div class="img" style="background-image: url(/img/dostavka_do_5_t.png)"></div>
              <h3>Грузоперевозки до 5 тонны</h3>
            </div>
            <div class="item">
              <div class="img" style="background-image: url(/img/dostavka_do_10_t.png)"></div>
              <h3>Грузоперевозки до 10 тонны</h3>
            </div>
            <div class="item">
              <div class="img" style="background-image: url(/img/dostavka_do_20_t.png)"></div>
              <h3>Грузоперевозки до 20 тонны</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <component v-bind:is="'total-services'" :service="this.$route.params.pathMatch"></component>
  </section>
</template>
<script>
// import Shinomontaj from "../../components/services/Shinomontaj";
// import RemontTyagachej from "~/components/services/RemontTyagachej.vue";
export default {
  // comments:{
  //   shinomontaj: Shinomontaj,
  //   remonttyagachej: RemontTyagachej
  // },
  head() {
    var metaInfo = {};
    this.imgFon = "/img/gruzoperevozki.jpg";
    this.title = "Грузоперевозки";
    metaInfo = {
      title: "Грузоперевозки",
      meta: [
        {
          name: "description",
          content:
            "Грузоперевозки в Королеве. Быстро и аккуратно доставим ваш груз по Москве, области и всей России. Собственный автопарк. Фиксированные тарифы."
        },
        {
          name: "keywords",
          content:
            "2013 - 2020, man, газель, камаз, шиномонтаж, комерческий, коммерческий транспорт, ремонт, автосервис, без рубрики, новости, советы, услуги, диагностика, теги шиномонтаж, автосервис, грузовой шиномонтаж, ремонт тентов, грузовой сервис, грузовой ремонт, ремонт полуприцепов, хранение шин, хранение колес, диагностика, замена масла, замена колодок, замена ГРМ, замена дисков, замена масла акпп, автостоянка, ремонт суппортов, ремонт суппортов knorr, ремонт man tg, ремонт электрики"
        },
        {
          name: "og:title",
          content:
            "Грузоперевозки в Королеве. Быстро и аккуратно доставим ваш груз по Москве, области и всей России. Собственный автопарк. Фиксированные тарифы."
        },
        {
          name: "og:description",
          content:
            "Грузоперевозки в Королеве. Быстро и аккуратно доставим ваш груз по Москве, области и всей России. Собственный автопарк. Фиксированные тарифы."
        }
      ]
    };
    return metaInfo;
  },
  mounted() {
    // console.log(this.serviceName);
  },
  // asyncData ({ params }, callback) {
  //     let post = posts.find(post => post.id === parseInt(params.id))
  //     if (post) {
  //       callback(null, { post })
  //     } else {
  //       callback({ statusCode: 404, message: 'Post not found' })
  //     }
  //   },
  data() {
    return {
      imgFon: "",
      serviceName: "",
      title: "",
      callbackTitle: "",
      metaObj: {},
      captions: {
        shinomontaj: "Шиномонтаж грузовых и легковых автомобилей",
        remont_tyagachej: "Прайс-лист на ремонт грузовой техники",
        remont_polupritsepov: "Прайс-лист на ремонт полуприцепов",
        diagnostika: "Диагностика грузовых и легковых автомобилей"
      },
      errors: {
        name: false,
        phone: false
      },
      form: {
        name: "",
        phone: ""
      },
      menu: []
    };
  },
  methods: {
    send() {
      this.errors = [];

      if (!this.form.name) {
        this.errors.name = true;
      }
      if (!this.form.phone) {
        this.errors.phone = true;
      }
      if (this.form.phone[4] != 9) {
        alert("Проверьте правильность Вашего номера!");
      } else if (this.errors.length == 0) {
        this.axios({
          method: "post",
          url: "/order.php",
          data: { name: this.form.name, phone: this.form.phone }
          // headers:{
          //   'Content-Type': "application/json; charset=UTF-8"
          // }
        })
          .then(response => {
            alert("Ваша заявка отправлена!");
            // response.data
            // let orders = response.data;

            // });
            // location.href="/crm"
          })
          .catch(error => {
            // let errorMessage = error.response
            //   ? error.response.data
            //   : error.message;
            // this.$nextTick(function() {
            //   this.errorMessage = errorMessage;
            //   this.errorShow = true;
            // });
          });
      }
    }
  }
};
</script>
<style scoped>
.service {
  width: calc(25% - 15px)!important;
}
.service p {
  font-size: 17px!important;
}
#home::before,
.main-block::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
}
#home .container,
.main-block .container {
  z-index: 1;
  position: relative;
}
#home h1,
.main-block h1 {
  font-weight: 500;
  font-size: 50px;
  text-align: center;
}
.order-block {
  display: flex;
  position: absolute;
  width: 100%;
  bottom: -50px;
}
.order-block .attention {
  background: #000;
  padding: 50px;
  text-align: center;
  color: #f0c32e;
  flex: 1;
}
.form {
  flex: 3;
}
.order-block .attention h3 {
  font-size: 40px;
  font-weight: 300;
}
.order-block .attention h3 {
  font-size: 35px;
  font-weight: 300;
  line-height: 1;
  margin: 0;
}
.order-block .attention h3.bold {
  font-weight: 500;
  margin-bottom: 21px;
  font-size: 37px;
}
.order-block .form form {
  padding: 0px 25px;
  width: 100%;
  position: relative;
}
.order-block .form form h3 {
  margin: 0;
  font-weight: 300;
  font-size: 43px;
  line-height: 1;
}
input {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.8);
  padding: 7px 10px;
  font-size: 17px;
  color: #fff;
}
form button {
  color: #000;
  background: #ffc400;
  border: none;
  border-radius: 3px;
  padding: 9px 14px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s;
}
form button:hover {
  background: #fff;
}
.form-items {
  width: 100%;
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-items input {
  width: calc(35% - 5px);
}
.form-items button {
  width: calc(30% - 10px);
  margin-left: 10px;
}
#home .container,
.main-block .container {
  height: 100%;
  padding-top: 5vw;
}
#page {
  padding: 80px 0;
}
.submenu {
  position: fixed;
  top: 107px;
  left: 0;
  z-index: 2;
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 40px;
  padding: 0px 10px;
  overflow-x: auto;
  display: flex;
  align-items: center;
  transition: all 0.3s;
}
.submenu a {
  white-space: nowrap;
  text-decoration: none;
  font-weight: 500;
}
.submenu a:hover {
  color: #343434;
}
.submenu a:not(:last-child) {
  margin-right: 15px;
}
.dostavka {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.dostavka .item {
  width: calc(25% - 5px);
  text-align: center;
}
.dostavka .item .img {
  width: 100%;
  position: relative;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.dostavka .item .img:before {
  content: "";
  display: block;
  padding-top: 80%;
}
.table {
  padding: 10px;
  background: #fff;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
}
@media screen and (max-width: 576px) {
  .main-block h1 {
    font-size: 43px;
    margin: 65px 0;
  }
  .order-block {
    display: flex;
    position: relative;
    width: 100%;
    bottom: unset;
  }
  #home h1,
  .main-block h1 {
    font-size: 22px;
    margin: 105px 0;
  }
  .order-block .attention {
    padding: 45px 0px;
    text-align: center;
    flex: unset;
    width: 100%;
  }
  .order-block .attention h3 {
    font-size: 28px;
  }
  .order-block .attention h3.bold {
    font-size: 27px;
  }
  .order-block .form {
    padding: 20px 8px;
  }
  .order-block .form form {
    padding: 0px 5px;
  }
  .order-block .form form h3 {
    font-size: 30px;
  }
  .form-items[data-v-6d9b9a30] {
    flex-direction: column;
  }
  .form-items input {
    width: 100%;
    margin-bottom: 5px;
  }
  .form-items button {
    width: 100%;
    margin-left: 0;
    margin-top: 10px;
  }
  #home,
  .main-block {
    height: unset;
    background-size: 210vw;
    background-position: -39vw 0px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .order-block {
    display: flex;
    position: relative;
    width: 100%;
    bottom: unset;
  }
  #home h1 {
    font-size: 22px;
    margin: 105px 0;
  }
  .order-block .attention {
    padding: 45px 0px;
    text-align: center;
    flex: unset;
    width: 100%;
  }
  .order-block .attention h3 {
    font-size: 28px;
  }
  .order-block .attention h3.bold {
    font-size: 27px;
  }
  .order-block .form {
    padding: 20px 8px;
  }
  .order-block .form form {
    padding: 0px 5px;
  }
  .order-block .form form h3 {
    font-size: 30px;
  }
  .form-items[data-v-6d9b9a30] {
    flex-direction: column;
  }
  .form-items input {
    width: 100%;
    margin-bottom: 5px;
  }
  .form-items button {
    width: 100%;
    margin-left: 0;
    margin-top: 10px;
  }
  #page {
    padding: 0;
  }
  .submenu {
    top: 153px;
  }
  .hide-information {
    padding-top: 105px;
  }
  .hide-information .submenu {
    top: 56px;
  }
  .order-block .form {
    padding: 40px 10px;
  }
  .order-block .attention {
    padding: 20px 10px;
  }
}
</style>