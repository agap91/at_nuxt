<template>
  <section id="total-services">
    <div class="container">
      <div class="services-lists">
        <nuxt-link
          tag="a"
          class="service"
          v-for="w of work"
          :key="w"
          :title="'Услуга от Auto Truckcom - '+w.title"
          v-lazy-container="{ selector: 'img' }"
          :to="`/services/${w.pageName}`"
          v-if="w.pageName!==service"
        >
          <!-- v-if="w.pageName!==props.service" -->
          <p>{{w.title}}</p>
          <img :data-src="w.img" :alt="'Услуга от Auto Truckcom - '+w.title" />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "total-services",
  props: ["service"],
  data() {
    return {
      errors: [],
      work: [
        {
          title: "Шиномонтаж",
          img: "/img/shinomontaj.jpg",
          pageName: "shinomontaj"
        },
        {
          title: "Ремонт тягачей",
          img: "/img/remont_tyagachej.jpg",
          pageName: "remont_tyagachej"
        },
        {
          title: "Ремонт полуприцепов",
          img: "/img/remont_polupritsepov.jpg",
          pageName: "remont_polupritsepov"
        },
        {
          title: "Диагностика",
          img: "/img/diagnostika.jpg",
          pageName: "diagnostika"
        }
      ]
    };
  }
};
</script>
<style scoped>
.services-lists {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 1px solid #eaeaea;
  padding-top: 30px;
}
.service {
  width: calc(33% - 25px);
  position: relative;
  cursor: pointer;
  margin-bottom: 50px;
}
.service p {
  background: #eaeaea;
  padding: 10px 15px;
  margin: 0;
  margin-left: 50px;
  font-size: 22px;
  transition: all 0.3s;
}
.service img {
  width: calc(100% - 50px);
}
.service p::before {
  content: "";
  position: absolute;
  width: calc(100% - 50px);
  right: 0;
  height: calc(100% - 75px);
  background: #eaeaea;
  z-index: -1;
  transition: all 0.3s;
}
.service:hover p,
.service:hover p:before {
  background: #2e9dd9;
  color: #fff;
}
.services-lists a {
  color: #343434;
  text-decoration: none;
}
@media screen and (max-width: 576px) {
  .services-lists {
    flex-direction: column;
  }
  .service {
    width: 100%;
    margin-bottom: 25px;
  }
  .service p {
    font-size: 20px;
  }
  .table table {
    width: auto;
  }
  .table {
    overflow-x: auto;
  }
}
</style>