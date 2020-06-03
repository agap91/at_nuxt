<template>
  <section class="top-block">
    <div class="information">
      <div class="container">
        <a href="#contacts" class="a-addr" v-scroll-to="'#contacts'">Автотехцентр в Королеве</a>
        <span class="time-work" v-if="!mobyle">Без выходных: 9:00 - 21:00</span>
        <span class="time-work" v-else>Пн-Вс с 9:00 до 21:00</span>
        <div class="phone">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-phone"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            />
          </svg>
          <a href="tel:+79299106860">8 (929) 910-68-60</a>
          <button class="call-btn" @click="$store.commit('popup')">Оставить заявку</button>
        </div>
      </div>
    </div>
    <div class="menu">
      <div class="container">
        <div class="logo">
          <img src="/img/logo-m.jpg" />
          <svg
            v-if="mobyle && !tablet"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-menu"
            @click="openMenu = !openMenu"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </div>
        <nav>
          <ul v-show="!mobyle || openMenu">
            <li v-for="m of menu" :key="m">
              <template v-if="mainPage()">
                <nuxt-link v-if="m.type=='scroll'" :to="m.url" v-scroll-to="m.url">{{m.name}}</nuxt-link>
                <nuxt-link v-else :to="m.url">{{m.name}}</nuxt-link>
              </template>
              <template v-else>
                <nuxt-link v-if="m.type=='scroll'" :to="'/'+m.url" v-scroll-to="m.url">{{m.name}}</nuxt-link>
                <nuxt-link v-else :to="m.url">{{m.name}}</nuxt-link>
              </template>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import { isMobile, isTablet } from "mobile-device-detect";
export default {
  name: "topblock",
  mounted() {
    this.mobyle = isMobile;
    this.tablet = isTablet;
  },
  data() {
    return {
      mobyle: false,
      tablet: false,
      popup: false,
      menu: [
        { name: "Главная", url: "#home", type: "scroll" },
        { name: "Услуги", url: "#work", type: "scroll" },
        { name: "Цены", url: "/price", type: "no-scroll" },
        { name: "Грузоперевозки", url: "/gruzoperevozki", type: "no-scroll" },
        { name: "Комментарии", url: "#comments", type: "scroll" },
        { name: "Контакты", url: "contacts", type: "no-scroll" }
      ],
      errors: [],
      openMenu: false
    };
  },
  computed: {
    // popupOpen() {
    //   this.$store.dispatch("UPD_POPUP", !this.$store.getters.POPUP);
    // }
  },
  methods: {
    isMobile: function() {
      return isMobile;
      //   if (
      //     /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      //       navigator.userAgent
      //     ) ||
      //     /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      //       navigator.userAgent.substr(0, 4)
      //     )
      //   ) {
      //     return true;
      //   }

      //   return false;
    },
    filterUrl(url) {
      // if (window.location.pathname == "/") {
      //   return "http://localhost:8080/" + url;
      // } else {
      return "";
      //   // str.replace(/[^A-Za-zА-Яа-яЁё]/g, "")
      // }
    },
    mainPage() {
      return this.$route.path == "/" ? true : false;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap&subset=cyrillic");
*,
*:before,
*:after {
  box-sizing: border-box;
}
a {
  color: #979797;
}
* {
  outline: none;
}
body,
html {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  padding: 0;
  margin: 0;
  position: relative;
  font-size: 15px;
  color: #343434;
}
body {
  padding-top: 108px;
  transition: all 0.3s;
  background: url("/img/bg.jpg");
}
.top-block {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  transition: all 0.3s;
}
.container {
  width: 85%;
  margin: auto;
}
.information {
  background: #00aaf8;
  color: #fff;
}
.information .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 0;
}
.information .container a {
  color: #000;
  font-weight: 400;
  font-size: 13px;
}
.phone {
  display: flex;
  align-items: center;
}
.information .container .phone a {
  color: #fff;
  text-decoration: none;
  font-size: 17px;
  margin: 0 15px;
  transition: all 0.3s;
}
.information .container .phone a:hover {
  color: #ffc400;
}
.call-btn {
  color: #000;
  background: #ffc400;
  font-weight: 500;
  border: none;
  border-radius: 3px;
  padding: 7px 14px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s;
}
.call-btn:hover {
  background: #fff;
}
.menu {
  background: #fff;
}
.menu .container,
.menu .container ul {
  display: flex;
  align-items: center;
}
.menu .container ul {
  justify-content: space-between;
  padding: 0;
  flex: 1;
  padding-left: 5vw;
  list-style: none;
}
.menu .container ul a {
  text-transform: uppercase;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s;
}
.menu .container ul a:hover {
  color: #000;
}
#home,
.main-block {
  height: 80vh;
  position: relative;
  background: url("/img/main.jpg");
  color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
#comments {
  background: url("/img/bg-blue.jpg");
  background-size: contain;
  background-repeat: repeat;
  padding: 50px 0;
  color: #fff;
}
.order-block .form {
  flex: 3;
  display: flex;
  padding: 50px 35px;
  align-items: flex-start;
  background: url("/img/wrap-b.png");
  color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
}
.caption {
  font-weight: 300;
  font-size: 25px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}
.caption:before {
  content: "";
  width: 5px;
  height: 50px;
  background: #2e9dd9;
  margin-right: 50px;
  display: block;
}
.logo img {
  width: 125px;
}
.logo {
  padding: 10px 0;
}
#about {
  background: url("/img/bg-line1.jpg");
  color: #fff;
  padding: 4vw 0;
  background-size: cover;
  background-position: left center;
}
footer {
  background: #222222;
  padding: 10px 0;
}
footer p {
  margin: 0;
  line-height: 1;
  font-size: 13px;
  color: #545454;
  margin: auto;
  width: 55%;
}
.menu nav {
  flex: 1;
}
@media screen and (max-width: 576px) {
  body {
    padding-top: 155px;
  }
  .container {
    width: 100%;
    margin: auto;
    padding: 0px 5px;
  }
  .information .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 0;
    flex-wrap: wrap;
  }
  .menu .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .order-block {
    display: flex;
    flex-wrap: wrap;
  }
  .order-block .attention {
    padding: unset;
    text-align: center;
    flex: unset;
    width: 100%;
  }
  .order-block .attention h3 {
    font-size: 25px;
  }
  .order-block .attention h3.bold {
    font-size: 23px;
  }
  .phone {
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 5px;
  }
  .order-block {
    display: flex;
    position: relative !important;
    width: 100%;
    bottom: unset;
  }
  .call-btn {
    margin-top: 5px;
    width: 100%;
  }
  .a-addr {
    width: 50%;
  }
  .time-work {
    width: 50%;
    text-align: right;
    margin: 0;
  }
  .menu .container ul {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
  .logo {
    padding: 10px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .menu .container {
    flex-wrap: wrap;
  }
  .menu .container ul {
    padding: 0;
    margin: 0;
  }
  .menu .container ul li {
    border-bottom: 1px solid #eee;
  }
  .menu .container ul li,
  .menu .container ul li a {
    width: 100%;
  }
  .menu .container ul li a {
    display: block;
    padding: 10px 0;
  }
  footer p {
    width: 95%;
  }
  .form-items {
    flex-direction: column;
  }
  .hide-information .top-block {
    top: -97px;
  }
  .hide-information {
    padding-top: 130px;
  }
}
</style>
