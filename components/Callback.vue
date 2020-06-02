<template>
  <section id="callback">
    <div class="container">
      <div class="order-block">
        <div class="attention">
          <h3 class="bold">Внимание</h3>
          <h3>Бесплатная диагностика</h3>
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
          <form method="POST" @change.prevent="send()">
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
              <input type="text" placeholder="+7 (___) ___-__-__" v-model="form.phone" :class="errors.phone ? 'error' : ''" v-mask="'+7 (###) ###-##-##'"/>
              <button type="submit">Заказать звонок</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'callback',
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
          data: { name: this.form.name, phone: this.form.phone },
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
#callback {
  padding: 50px 0;
  background: url("/img/bg-callback.jpg");
  background-position: center;
  background-size: cover;
  position: relative;
}
#callback::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
}
#callback .order-block {
  position: relative;
  bottom: 0;
}
@media screen and (max-width: 576px) {
}
</style>