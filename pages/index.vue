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
  head: {
    script: [
      {
        hid: "script",
        type: "application/ld+json",
        innerHTML: `{
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "Автосервис Auto-Trackcom",
        "url": "https://auto-truckcom.ru",
        "description": "Автосервис Auto-Trackcom - ремонт легкового и коммерческого транспорта. Автосервис находится в Королеве и за долгое время своего существования успешно зарекомендовавшая себя. Автосервис производит все виды ремонтных работ коммерческого и легкового транспорта. Шиномонтаж, ремонт тягочей и полуприцепов, ремонт электрике все это и много другое Вы сможете починить в автосервисе Auto-Trackcom в Королеве." ,
        "telephone": "+7 (929) 910-68-60",
        "email": "info@auto-truckcom.ru",
        "address": {
        "@type": "PostalAddress",
        "addressLocality": "Королев, Россия",   
        "streetAddress": "ул. Орджоникидзе, д. 3В"  
        }

        }`
      }
    ],
    meta: [
      {
        name: "description",
        content:
          "Автосервис в Королеве. Ремонт коммерческих и легковых автомобилей. Шиномонтаж всех видов автомашин."
      },
      {
        name: "keywords",
        content:
          "2013 - 2020, man, газель, камаз, шиномонтаж, комерческий, коммерческий транспорт, ремонт, автосервис, без рубрики, новости, советы, услуги, диагностика, теги шиномонтаж, автосервис, грузовой шиномонтаж, ремонт тентов, грузовой сервис, грузовой ремонт, ремонт полуприцепов, хранение шин, хранение колес, диагностика, замена масла, замена колодок, замена ГРМ, замена дисков, замена масла акпп, автостоянка, ремонт суппортов, ремонт суппортов knorr, ремонт man tg, ремонт электрики"
      },
      {
        name: "og:title",
        content:
          "Автосервис Auto Trackcom - ремонт легкового и коммерческого транспорта"
      },
      {
        name: "og:description",
        content:
          "Автосервис в Королеве. Ремонт коммерческих и легковых автомобилей. Шиномонтаж всех видов автомашин."
      }
    ]
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

