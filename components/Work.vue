<template>
  <section id="work">
    <div class="container">
      <h2 class="caption">Какие работы по грузовым и легковым автомобилям мы проводим:</h2>
      <div class="work-list">
        <nuxt-link
          tag="a"
          class="work"
          v-for="w of work"
          :key="w"
          :title="'Услуга от Auto Trackcom - '+w.title"
          v-lazy-container="{ selector: 'img' }"
          :to="`/services/${w.pageName}`"
        >
        <!-- {name: 'service-id', params: {id: w.pageName}} -->
        <!-- :to="`/service/${w.pageName}`" -->
          <p>{{w.title}}</p>
          <img :data-src="w.img" :alt="'Услуга от Auto Trackcom - '+w.title" />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'work',
  data() {
    return {
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
        },
      ]
    };
  }
};
</script>
<style scoped>
#work {
  padding-top: 80px;
}
.work-list {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}
.work {
  width: calc(50% - 25px);
  position: relative;
  cursor: pointer;
  margin-bottom: 50px;
}
.work p {
  background: #eaeaea;
  padding: 10px 15px;
  margin: 0;
  margin-left: 50px;
  font-size: 22px;
  transition: all 0.3s;
}
.work img {
  width: calc(100% - 50px);
}
.work p::before {
  content: "";
  position: absolute;
  width: calc(100% - 50px);
  right: 0;
  height: calc(100% - 75px);
  background: #eaeaea;
  z-index: -1;
  transition: all 0.3s;
}
.work:hover p,
.work:hover p:before {
  background: #2e9dd9;
  color: #fff;
}
.work-list a {
	color: #343434;
	text-decoration: none;
}
@media screen and (max-width: 576px) {
  #work {
    padding-top: 20px;
  }
  #work .caption {
    font-size: 20px;
  }
  #work .caption::before {
    content: "";
    width: 10px;
    height: 65px;
    margin-right: 20px;
  }
  .work-list {
    flex-direction: column;
  }
  .work {
    width: 100%;
    position: relative;
    cursor: pointer;
    margin-bottom: 5px;
  }
  .work p::before {
    width: calc(100% - 25px);
    height: calc(100% - 55px);
  }
  .work p {
    margin-left: 25px;
    font-size: 18px;
  }
  .work img{
    width: calc(100% - 20px);
  }
}
</style>