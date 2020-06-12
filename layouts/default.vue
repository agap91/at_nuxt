<template>
  <div>
    <topblock />
    <nuxt />
    <footer>
      <p>
        ООО "АвтоТракКом" ©2020. Все права защищены.
        <br />Информация на сайте носит информационный характер и не является публичной офертой, определяемой ст.473(2)ГК РФ
      </p>
    </footer>
    <popup />
  </div>
</template>
<script>
// import Popup from "../components/popup";
import Topblock from "~/components/Topblock.vue";
import AppLogo from "~/components/AppLogo.vue";
import Popup from "~/components/Popup.vue";
export default {
  components: {
    topblock: Topblock,
    popup: Popup
  },
  head() {
    return {
      link: [
        {
          rel: "canonical",
          href: "https://auto-truckcom.ru" + this.$route.fullPath
        }
      ]
    };
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
input::-webkit-input-placeholder {
  color: #fff;
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

.table table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  overflow-x: auto;
}
.table td {
  overflow: hidden;
  /* white-space: nowrap; */
  padding: 8px 8px;
  text-align: center;
}
.table table th {
  background: #00aaf8;
  color: #fff;
  padding: 7px 7px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}
.table table .row:nth-child(even) td {
  background: rgba(0, 0, 0, 0.1);
}
.font-weight_bold {
  font-weight: bold;
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
  /* background: url("/img/main.jpg"); */
  color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
#comments {
  /* background: url("/img/bg-blue.jpg"); */
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
  /* background: url("/img/wrap-b.png"); */
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
  /* background: url("/img/bg-line1.jpg"); */
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
input.error {
  border-color: red;
  box-shadow: 0 0 5px red;
}
.breadcrumbs {
  background: #fff;
  padding: 5px 15px;
  margin-bottom: 50px;
  height: 50px;
  align-items: center;
  display: flex;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
}
.breadcrumbs ol a {
  color: #00aaf8;
}
.breadcrumbs ol {
  display: flex;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  list-style: none;
  font-size: 17px;
  width: 100%;
}
.breadcrumbs ol li:not(:last-child)::after {
  content: "/";
  display: inline-block;
  padding: 0 5px;
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
  .order-block {
    display: flex;
    position: relative;
    width: 100%;
    bottom: unset;
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
}
</style>