<template>
  <section>
    <h2 class="caption" id="prejskurant-tsen">Прейскурант цен на ремонт полуприцепов</h2>
    <div class="content">
      <p>
        Стоимость нормочаса — от
        <span class="font-weight_bold">900 рублей</span>
      </p>
      <h3>Мы ремонтируем:</h3>
      <ul>
        <li>Ремонт каркаса</li>
        <li>Ремонт электрики</li>
        <li>Ремонт пневмосистем</li>
        <li>Ремонт осей BPW</li>
        <li>Ремонт осей SAF</li>
        <li>Ремонт осей MB</li>
        <li>Ремонт осей ROR</li>
        <li>Ремонт осей ТОНАР</li>
      </ul>
      <div class="table">
        <table>
          <thead>
            <tr>
              <th>Наименование</th>
              <th>Количество н/ч</th>
              <th>Стоимость</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Диагностика пневмосистемы</td>
              <td>1,5</td>
              <td>1350</td>
            </tr>
            <tr>
              <td>Энергоаккамулятор снятие установка</td>
              <td>1,5</td>
              <td>1350</td>
            </tr>
            <tr>
              <td>пневморессора замена</td>
              <td>1,2</td>
              <td>1080</td>
            </tr>
            <tr>
              <td>Модуль TEBS демонтаж монтаж</td>
              <td>2,8</td>
              <td>2520</td>
            </tr>
            <tr>
              <td>Модуль TEBS программирование</td>
              <td>9,8</td>
              <td>8820</td>
            </tr>
            <tr>
              <td>Барабан тормозной снятие установка</td>
              <td>1,8</td>
              <td>1620</td>
            </tr>
            <tr>
              <td>Датчик ABS снятие установка</td>
              <td>0,3</td>
              <td>270</td>
            </tr>
            <tr>
              <td>Датчик ABS регулировка зазора</td>
              <td>0,1</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Устранение утечки воздуха</td>
              <td>1</td>
              <td>900</td>
            </tr>
            <tr>
              <td>Кольцо ABS чистка (при снятой ступице)</td>
              <td>0,5</td>
              <td>450</td>
            </tr>
            <tr>
              <td>накладки тормозные снять/переклепать/поставить(1 ось)</td>
              <td>4</td>
              <td>3600</td>
            </tr>
            <tr>
              <td>вал тормозной демонтаж/монтаж</td>
              <td>1</td>
              <td>900</td>
            </tr>
            <tr>
              <td>вал тормозной замена рем.комплекта</td>
              <td>2,5</td>
              <td>2250</td>
            </tr>
            <tr>
              <td>подшипник ступицы заменить</td>
              <td>2</td>
              <td>1800</td>
            </tr>
            <tr>
              <td>стремянка снять поставить</td>
              <td>2</td>
              <td>1800</td>
            </tr>
            <tr>
              <td>сайлентблок INTRA заменить</td>
              <td>3,5</td>
              <td>3150</td>
            </tr>
            <tr>
              <td>сайлентблок BPW заменить</td>
              <td>2,8</td>
              <td>2520</td>
            </tr>
            <tr>
              <td>амортизатор заменить</td>
              <td>1,4</td>
              <td>1260</td>
            </tr>
            <tr>
              <td>смазка п/п по карте смазки</td>
              <td>1,6</td>
              <td>1440</td>
            </tr>
            <tr>
              <td>рессора заменить</td>
              <td>4</td>
              <td>3600</td>
            </tr>
            <tr>
              <td>ВСЕ ЦЕНЫ БЕЗ НДС!!!</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  head: {
    script: [
      {
        hid: "script",
        type: "application/ld+json",
        innerHTML: `{
"@context": "https://schema.org",
"@type": "Product",
"url": "https://auto-truckcom.ru/services/remont_polupritsepov",
"category": "Ремонт полуприцепов",
"image": "https://auto-truckcom.ru/img/remont_polupritsepov.jpg",
"productID": "remont_polupritsepov",
"aggregateRating": {
"@type": "AggregateRating",
"ratingValue": "4.5",
"reviewCount": "2"
},"description": "Ремонт полуприцепов. Ремонт каркаса, ремонт электрики,  ремонт пневмосистем, ремонт осей BPW, ремонт осей SAF, ремонт осей MB, ремонт осей ROR, ремонт осей ТОНАР",				  
"name": "Ремонт полуприцепов",
"offers": {
"@type": "Offer",
"availability": "https://schema.org/InStock",
"price": "от 90.00",
"priceCurrency": "RUB"
},

        }`
      }
    ]
  },
  name: "remont_polupritsepov"
};
</script>
<style scoped>
.content {
  padding: 10px;
  background: #fff;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
}
.table table tbody tr:nth-child(even) td {
  background: rgba(0, 0, 0, 0.1);
}
</style>