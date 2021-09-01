<template>
  <section id="contacts">
    <div class="container">
      <h2 data-v-5ae0ae06 class="caption" v-if="$route.path.indexOf('/contacts')>0">Наши контакты</h2>
    </div>
    <div class="contact-block" itemscope itemtype="http://schema.org/Organization">
      <meta itemprop="name" content="Автосервис АвтоТракКом в Королеве" />
      <ul>
        <li>График работы:</li>
        <li>9:00 – 21:00, без выходных</li>
        <li>Контактные телефоны:</li>
        <li>
          <a href="tel:+79851333409" title="телефон для связи с автосервисом АвтоТракКом">
            <span itemprop="telephone">8 (985) 133-34-09</span>
          </a>
          <meta itemprop="telephone" content="+7 929 910 68 60" />
          <button class="call-btn" @click="$store.commit('popup')">Заказать звонок</button>
        </li>
        <li>Почта:</li>
        <li>
          <a
            href="mailto:info@auto-truckcom.ru"
            title="почта для связи с автосервисом АвтоТракКом"
          >
            <span itemprop="email">info@auto-truckcom.ru</span>
          </a>
          <meta itemprop="email" content="info@auto-truckcom.ru" />
        </li>
        <li>Наш адрес:</li>
        <li itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
          МО,
          <span itemprop="addressLocality">г.Королев</span>,
          <span itemprop="streetAddress">ул. Орджоникидзе, 3В</span>
          <meta itemprop="addressLocality" content="Королев" />
          <meta itemprop="streetAddress" content="ул. Орджоникидзе, 3В" />
        </li>
      </ul>
    </div>
    <div id="my-map"></div>
  </section>
</template>
<script>
export default {
  name: "contacts",
  data() {
    return {};
  },
  head() {
    return {
      // script: [{ hid: "stripe", src: "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac840735f9042ad2df77e448e7893f68181682cac1f8ceba101f15e3255f4f630&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true&amp;id=my-map", defer: true, async:true }]
      script: [
        {
          hid: "stripe",
          src:
            "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac840735f9042ad2df77e448e7893f68181682cac1f8ceba101f15e3255f4f630&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true&amp;id=my-map",
          defer: true,
          async: true
        }
      ]
    };
  }
};
</script>
<style scoped>
#contacts {
  min-height: 200px;
  position: relative;
}
.contact-block ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}
.contact-block ul li:nth-child(odd) {
  font-weight: 500;
}
.contact-block ul li {
  width: 50%;
  margin-bottom: 16px;
}
.contact-block {
  background: #fff;
  width: 420px;
  padding: 10px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 1;
  right: 5vw;
  top: 0;
  margin: auto;
  bottom: 0;
  height: 200px;
}
.contact-block a {
  text-decoration: none;
  color: #00aaf8;
}
#contacts .call-btn {
  background: #00aaf8;
  color: #fff;
  font-weight: 500;
}
#contacts .call-btn:hover {
  background: #00aaf8;
  opacity: 0.8;
}
@media screen and (max-width: 576px) {
  .contact-block {
    position: relative;
    width: 95%;
    box-shadow: none;
    right: unset;
    margin: auto;
    margin-bottom: 30px;
    height: unset;
  }
  .contact-block ul li {
    width: 100%;
    margin-bottom: 0;
  }
  .contact-block ul li:nth-child(even) {
    margin-bottom: 15px;
  }
}
</style>