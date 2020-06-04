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
            <h3 class="bold">Запишись</h3>
            <h3>{{callbackTitle}}</h3>
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
        <div class="breadcrumbs">
          <ol itemscope itemtype="http://schema.org/BreadcrumbList">
            <li
              v-for="(item, ind) of breadcrumbs"
              :key="ind"
              itemprop="itemListElement"
              itemscope
              itemtype="http://schema.org/ListItem"
            >
              <template v-if="item.slug!=null">
                <nuxt-link
                  :to="item.slug"
                  itemscope
                  itemtype="http://schema.org/Thing"
                  itemprop="item"
                  :title="item.name"
                >
                  <span itemprop="name" :itemid="item.slug">{{item.name}}</span>
                </nuxt-link>
                <meta itemprop="position" :content="++ind" />
              </template>
              <template v-else>
                <span itemprop="name">{{item.name}}</span>
                <meta itemprop="position" :content="++ind" />
              </template>
            </li>
          </ol>
        </div>
        <component v-bind:is="this.$route.params.pathMatch"></component>
        <!-- <shinomontaj v-if="this.$route.params.pathMatch == 'shinomontaj'"/>
        <remonttyagachej v-else-if="this.$route.params.pathMatch == 'remont_tyagachej'"/>-->
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
  validate({ params }) {
    if (
      params.pathMatch == "shinomontaj" ||
      params.pathMatch == "remont_tyagachej" ||
      params.pathMatch == "remont_polupritsepov" ||
      params.pathMatch == "diagnostika"
    ) {
      return true; //^\d+$/.test(params.id)
    } else {
      return false;
    }
  },
  head() {
    var metaInfo = {};
    switch (this.$route.params.pathMatch) {
      case "diagnostika":
        this.imgFon = "/img/diagnostika-auto.jpg";
        this.title = "Диагностика коммерческих и легковых автомобилей";
        this.callbackTitle = "на диагностику";
        metaInfo = {
          title: "Диагностика коммерческих и легковых автомобилей",
          meta: [
            {
              vmid: "description",
              name: "description",
              content:
                "Диагностика коммерческих и легковых автомобилей в Королеве"
            },
            {
              vmid: "keywords",
              name: "keywords",
              content: "диагностика, man, грузовик, камаз"
            },
            {
              vmid: "og:title",
              name: "og:title",
              content: "Диагностика коммерческих и легковых автомобилей"
            },
            {
              vmid: "og:description",
              name: "og:description",
              content:
                "Диагностика коммерческих и легковых автомобилей в Королеве"
            },
            {
              name: "og:url",
              content:
                "https://auto-truckcom.ru/services/" +
                this.$route.params.pathMatch
            }
          ]
        };
        break;
      case "remont_polupritsepov":
        this.imgFon = "/img/remont-polupritsepov.jpg";
        this.title = "Ремонт полуприцепов";
        this.callbackTitle = "на диагностику полуприцепов";
        metaInfo = {
          title: "Ремонт полуприцепов",
          meta: [
            {
              vmid: "description",
              name: "description",
              content: "Ремонт полуприцепов в Королеве"
            },
            {
              vmid: "keywords",
              name: "keywords",
              content: "ремонт полуприцепов, man, грузовик, камаз"
            },
            {
              vmid: "og:title",
              name: "og:title",
              content: "Ремонт полуприцепов"
            },
            {
              vmid: "og:description",
              name: "og:description",
              content: "Ремонт полуприцепов в Королеве"
            },
            {
              name: "og:url",
              content:
                "https://auto-truckcom.ru/services/" +
                this.$route.params.pathMatch
            }
          ]
        };
        break;
      case "remont_tyagachej":
        this.imgFon = "/img/remont-tyagachej.jpg";
        this.title = "Ремонт тягачей";
        this.callbackTitle = "на диагностику тягача";
        metaInfo = {
          title: "Ремонт тягачей",
          meta: [
            {
              vmid: "description",
              name: "description",
              content: "Ремонт тягачей в Королеве"
            },
            {
              vmid: "keywords",
              name: "keywords",
              content: "ремонт тягачей, man, грузовик, камаз"
            },
            {
              vmid: "og:title",
              name: "og:title",
              content: "Ремонт тягачей"
            },
            {
              vmid: "og:description",
              name: "og:description",
              content: "Ремонт тягачей в Королеве"
            },
            {
              name: "og:url",
              content:
                "https://auto-truckcom.ru/services/" +
                this.$route.params.pathMatch
            }
          ]
        };
        break;
      case "shinomontaj":
        this.imgFon = "/img/shinomontaj-auto.jpg";
        this.title = "Шиномонтаж грузовых и легковых автомобилей";
        this.callbackTitle = "на шиномонтаж прямо сейчас";
        metaInfo = {
          title: "Шиномонтаж грузовых и легковых автомобилей",
          meta: [
            {
              vmid: "description",
              name: "description",
              content:
                "Шиномонтаж в Королеве. Шиномонтаж коммерческих и леговых автомобилей"
            },
            {
              vmid: "keywords",
              name: "keywords",
              content:
                "r, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28, r29, r30, шиномонтаж в королеве, переобуться, переобуть грузовик, сменить резину, балансировка, поменять резину на машине"
            },
            {
              vmid: "og:title",
              name: "og:title",
              content: "Шиномонтаж грузовых и легковых автомобилей"
            },
            {
              vmid: "og:description",
              name: "og:description",
              content:
                "Шиномонтаж в Королеве. Шиномонтаж коммерческих и леговых автомобилей"
            },
            {
              name: "og:url",
              content:
                "https://auto-truckcom.ru/services/" +
                this.$route.params.pathMatch
            }
          ]
        };
        this.menu = [
          { name: "Легковой шиномонтаж", link: "#prejskurant-tsen" },
          {
            name: "Комплекс работ по замене автопокрышек",
            link: "#kompleks-rabot-po-zamene-avtopokryshek"
          },
          {
            name: "Грузовой шиномонтаж",
            link: "#gruzovoj-shinomontazh"
          },
          // {
          //   name:
          //     "Установка, мойка, проверка давления в шинах 4-х колёс без балансировки",
          //   link:
          //     "#ustanovka-mojka-proverka-davleniya-v-shinah-4-h-kolyos-bez-balansirovki"
          // },
          // {
          //   name:
          //     "Установка, мойка, проверка давления в шинах 4-х колёс с балансировкой",
          //   link:
          //     "#ustanovka-mojka-proverka-davleniya-v-shinah-4-h-kolyos-s-balansirovkoj"
          // },
          // {
          //   name: "Прайс-лист на услуги шиномонтажа для грузовых автомобилей",
          //   link:
          //     "#prajs-list-na-uslugi-shinomontazha-dlya-gruzovyh-avtomobilej"
          // },
        ];
        break;
    }
    this.breadcrumbs.push({ name: metaInfo.title, slug: null });
    return metaInfo;
  },
  mounted() {
    // console.log(this.serviceName);
  },
  asyncData() {
    let breadcrumbs = [
      { name: "Главная", slug: "/" },
      { name: "Услуги", slug: "/#work" }
    ];
    return {
      breadcrumbs
    };
  },
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
          url: "https://auto-truckcom.ru/api/order",
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