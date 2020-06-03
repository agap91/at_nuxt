<template>
  <section>
    <h2
      class="caption"
      id="prejskurant-tsen"
    >Прейскурант цен на диагностику коммерческих и легковых автомобилей</h2>
    <div class="content">
      <p>
        Точная диагностика — это
        <span class="font-weight_bold">90%</span> успешного ремонта
      </p>
      <h3>Мы ремонтируем:</h3>
      <ul>
        <li>Компьютерная диагностика</li>
        <li>Диагностика полуприцепа</li>
        <li>Диагностика ходовой</li>
        <li>Диагностика электросистем</li>
        <li>Диагностика пневмосистем</li>
        <li>Диагностика тормозной системы</li>
        <li>Диагностика двигателя</li>
        <li>Диагностика КПП</li>
      </ul>

      <div class="items">
        <div class="item">
          <h3>Диагностика MAN</h3>
          <ul>
            <li>TGA</li>
            <li>TGS</li>
            <li>TGX</li>
          </ul>
        </div>
        <div class="item">
          <h3>Диагностика Scania</h3>
          <ul>
            <li>P-Series</li>
            <li>R-Series</li>
            <li>G-Series</li>
          </ul>
        </div>
        <div class="item">
          <h3>Диагностика Mercedes</h3>
          <ul>
            <li>Axor</li>
            <li>Actros</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  jsonld() {
    return {
      "@context": "http://schema.org",
      "@type": "Product",
      url: "https://auto-truckcom.ru/services/diagnostika",
      category: "Диагностика",
      image: "https://auto-truckcom.ru/img/diagnostika.jpg",
      productID: "diagnostika",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.5",
        reviewCount: "2"
      },
      description:
        "Диагностика коммерческих и легковых автомобилей в автосервисе Аuto Truckcom в Королеве. Компьютерная диагностика, диагностика полуприцепа, диагностика ходовой, диагностика электросистем, диагностика пневмосистем, диагностика тормозной системы, диагностика двигателя, диагностика КПП",
      name: "Диагностика коммерческих и легковых автомобилей в автосервисе Аuto Truckcom в Королеве",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        price: "от 100.00",
        priceCurrency: "RUB"
      }
    };
  },
  name: "diagnostika"
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
.items {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.item {
  flex: 1;
}
@media screen and (max-width: 576px) {
  .items {
    flex-direction: column;
  }
  .item {
    flex: 1;
  }
}
</style>