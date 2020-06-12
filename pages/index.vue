<template>
  <section>
    <home />
    <work />
    <about />
    <whywe />
    <callback />
    <results />
    <comments />
    <contacts />
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import Home from "~/components/Home.vue";
import Work from "~/components/Work.vue";
import About from "~/components/About.vue";
import Whywe from "~/components/Whywe.vue";
import Callback from "~/components/Callback.vue";
import Results from "~/components/Results.vue";
import Comments from "~/components/Comments.vue";
import Contacts from "~/components/Contacts.vue";

export default {
  head() {
    let metaInfo = {
      meta: [
        {
          name: "description",
          content:
            "Автосервис в Королеве. Ремонт коммерческих и легковых автомобилей. Шиномонтаж всех видов автомашин."
        },
        {
          name: "keywords",
          content:
            "2013 - 2020, man, газель, камаз, шиномонтаж, коммерческий, коммерческий транспорт, ремонт, автосервис, без рубрики, новости, советы, услуги, диагностика, теги шиномонтаж, автосервис, грузовой шиномонтаж, ремонт тентов, грузовой сервис, грузовой ремонт, ремонт полуприцепов, хранение шин, хранение колес, диагностика, замена масла, замена колодок, замена ГРМ, замена дисков, замена масла акпп, автостоянка, ремонт суппортов, ремонт суппортов knorr, ремонт man tg, ремонт электрики"
        },
        {
          name: "og:title",
          content:
            "Автосервис АвтоТракКом - ремонт легкового и коммерческого транспорта"
        },
        {
          name: "og:url",
          content: "https://auto-truckcom.ru/"
        },
        {
          name: "og:description",
          content:
            "Автосервис в Королеве. Ремонт коммерческих и легковых автомобилей. Шиномонтаж всех видов автомашин."
        }
      ]
    };
    return metaInfo;
  },
  components: {
    AppLogo,
    home: Home,
    work: Work,
    about: About,
    whywe: Whywe,
    callback: Callback,
    results: Results,
    comments: Comments,
    contacts: Contacts
  }
};
</script>

<style>
</style>

