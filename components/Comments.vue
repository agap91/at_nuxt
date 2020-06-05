<template>
  <section id="comments" lazy-background="/img/bg-blue.jpg">
    <div class="container">
      <h2 class="caption">Отзывы клиентов</h2>
      <ul class="comments">
        <li v-for="c of comments" :key="c">
          <div class="comment" itemprop="review" itemscope itemtype="http://schema.org/Review">
            <span class="name" itemprop="author">{{c.name}}</span>
            <meta itemprop="datePublished" :content="c.dateSchema">
            <span class="date">{{c.date}}</span>
            <p itemprop="reviewBody">{{c.comment}}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: 'comments',
  data() {
    return {
      errors: [],
      comments: [
        {
          name: "Николай Шувариков",
          date: "03.06.2020",
          dateSchema: "2020-06-03",
          comment:
            "Занимаюсь производством мебели. В основном для юр лиц и в больших объемах. Поэтому с перевозками крупногоборитных вещей сталкиваюсь часто. Работал с многими компаниями, но то эти были завязаны с агрегаторами, то были не качественные перевозки. Честно скажу долго искал выход на компанию по перевозкам со своим авто парком и чтобы цена/качество было приемлемые. В поисках наткнулся на авто траком и вот скоро уже 4 груз мой повезут. Работой доволен, были маленькие нюансы, но все решили без проблем!"
        },
        {
          name: "Сергей Калугин",
          date: "01.03.2020",
          dateSchema: "2020-03-01",
          comment:
            "У меня своя служба доставки и небольшой автопарк. Работал с многими сервисами, поэтому имею опыт в этом. С нового года начал партнерсво с auto trakcom. Идет уже 3 месяц как они обслуживают мои грузовые автомобили. Доволен подходом к работе, сроками выполнения и лояльным ценником!"
        },
        {
          name: "Вадим Серов",
          date: "27.02.2020",
          dateSchema: "2020-02-27",
          comment:
            "Привлекла акция бесплатной диагностики. Решил отвезти машину на диагностику. Как и предпологалось нашли поломку. Сразу же на месте мне предложили заказать запчасти, что самое удивительное без большой наценки, я бы больше на безин потрател катаясь в кунцево))) Через 3 дня пришли детали, со мной связался менеджер и записал меня на удобное мне время. Сделали машину хорошо. Сервисом остался полностью доволен! Даже кофеек предложили пока ждал окончания ремонта машины)))) Удачи вам ребят!"
        },
        {
          name: "Колян Афанасьев",
          date: "17.12.2019",
          dateSchema: "2019-12-17",
          comment:
            "Приехал в эту контуру на ТО. Ну что сказать, сервис как сервис. Сделали все нормально, но это и их работа. Короче норм автосервис."
        },
        {
          name: "Надежда Позжакова",
          date: "28.11.2019",
          dateSchema: "2019-11-28",
          comment:
            "Проколола колесо. Приехала в автосервис, ребята быстро и оперативно все поменяли!"
        }
      ]
    };
  }
};
</script>
<style scoped>
.caption::before {
  background: #343434;
}
.comments {
  padding: 0;
  list-style: none;
}
.comments li {
  display: flex;
}
.comment {
  color: #343434;
  background: #fff;
  padding: 10px 40px;
  border-top: 1px solid #eaeaea;

  margin-bottom: 30px;
  width: 85%;
}
.comments li:nth-child(even) {
  justify-content: flex-end;
}
.comments li:nth-child(odd) .comment {
  border-top: 1px solid #eaeaea;
  border-left: 1px solid #eaeaea;
  border-right: 20px solid #eaeaea;
  border-bottom: 20px solid #eaeaea;
}
.comments li:nth-child(even) .comment {
  border-top: 1px solid #eaeaea;
  border-right: 1px solid #eaeaea;
  border-left: 20px solid #eaeaea;
  border-bottom: 20px solid #eaeaea;
}
.name {
  display: block;
  font-size: 25px;
  font-weight: 500;
}
.date {
  color: #00aaf8;
  font-size: 14px;
}
.comment p {
  color: #777777;
  font-style: italic;
}
@media screen and (max-width: 576px) {
  #comments {
    padding: 1px 0;
  }
  .comments li:nth-child(odd) .comment {
    border-top: 1px solid #eaeaea;
    border-left: 1px solid #eaeaea;
    border-right: 10px solid #eaeaea;
    border-bottom: 10px solid #eaeaea;
  }
  .comments li:nth-child(even) .comment {
    border-top: 1px solid #eaeaea;
    border-right: 1px solid #eaeaea;
    border-left: 10px solid #eaeaea;
    border-bottom: 10px solid #eaeaea;
  }
  .comment{
    color: #343434;
    background: #fff;
    padding: 5px 15px;
    border-top: 1px solid #eaeaea;
    margin-bottom: 15px;
    width: 100%;
  }
}
</style>