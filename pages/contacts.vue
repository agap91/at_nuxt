<template>
  <section>
    <home h1="Контакты" />
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
    </div>
    <Contact />
  </section>
</template>
<script>
import Home from "~/components/Home.vue";
import Contact from "~/components/Contacts.vue";
export default {
  asyncData({ $axios, store, params, $moment }) {
    let breadcrumbs = [
      { name: "Главная", slug: "/" },
      { name: "Контакты", slug: null }
    ];
    return {
      breadcrumbs
    };
  },
  jsonld() {
    return {
      "@context": "http://schema.org",
      "@type": "Organization",
      name: "Автосервис АвтоТракКомв Королеве",
      url: "https://auto-truckcom.ru",
      description:
        "Автосервис АвтоТракКом- ремонт легкового и коммерческого транспорта. Автосервис находится в Королеве и за долгое время своего существования успешно зарекомендовавшая себя. Автосервис производит все виды ремонтных работ коммерческого и легкового транспорта. Шиномонтаж, ремонт тягочей и полуприцепов, ремонт электрике все это и много другое Вы сможете починить в автосервисе АвтоТракКомв Королеве.",
      telephone: "+7 (985) 133-34-09",
      email: "info@auto-truckcom.ru",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Королев, Россия",
        streetAddress: "ул. Орджоникидзе, д. 3В"
      }
    };
  },
  head() {
    let metaInfo = {
      title: "Контакты - автосервис АвтоТракКом в Королеве",
      meta: [
        {
          name: "description",
          content: "Контакты автосервиса АвтоТракКом в Королеве"
        },

        {
          name: "og:title",
          content: "Контакты - автосервис АвтоТракКом в Королеве"
        },
        {
          name: "og:description",
          content: "Контакты автосервиса АвтоТракКом в Королеве"
        },
        {
          name: "og:url",
          content: "https://auto-truckcom.ru/contacts"
        }
      ]
    };
    return metaInfo;
  },
  components: {
    home: Home,
    Contact
  }
};
</script>
<style scoped>
#home {
  margin-bottom: 100px;
}
</style>