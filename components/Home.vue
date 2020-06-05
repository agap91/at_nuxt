<template>
  <section id="home" lazy-background="'/img/main.jpg'">
    <div class="container">
      <h1>{{h1}}</h1>
      <div class="order-block">
        <div class="attention">
          <h3 class="bold">Внимание</h3>
          <h3>Бесплатная диагностика</h3>
        </div>
        <div class="form" lazy-background="/img/wrap-b.png">
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
          <form method="post" @submit.prevent="send()">
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
</template>
<script>
export default {
  props: {
    h1: {
      type: String,
      default:
        "Ремонт, запчасти и техническое обслуживание легковых и грузовых автомобилей"
    }
  },
  data() {
    return {
      errors: {
        name: false,
        phone: false
      },
      form: {
        name: "",
        phone: ""
      }
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
#home::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
}
#home .container {
  z-index: 1;
  position: relative;
}
#home h1 {
  font-weight: 500;
  font-size: 50px;
  text-align: center;
}

#home .container {
  height: 100%;
  padding-top: 5vw;
}
@media screen and (max-width: 576px) {
  #home h1 {
    font-size: 22px;
    margin: 105px 0;
  }
  #home {
    height: unset;
    background-size: 210vw;
    background-position: -39vw 0px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .order-block .form {
    padding: 40px 10px;
  }
  .order-block .attention {
    padding: 20px 10px;
  }
}
</style>