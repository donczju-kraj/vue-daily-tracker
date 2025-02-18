<script setup lang="ts">
import ProductCard from './ProductCard.vue';

const products = [
  {
    id: 's1',
    title: 'socks 1',
    imgSrc: 'https://cdn.dedoles.sk/buxus/images/cache/expanded_product_image_lb/fotogaleria/dedoles/novy_katalog_produktov/inspiracie_1/vesele_ponozky_kategoria/vysoke_ponozky_01/teple_ponozky_2/vesele_teple_ponozky_snezna_sova/D-U-SC-WS-C-C-2049_2.png',
    altImgSrc: 'https://cdn.dedoles.sk/buxus/images/cache/expanded_product_image_lb/fotogaleria/dedoles/novy_katalog_produktov/inspiracie_1/vesele_ponozky_kategoria/vysoke_ponozky_01/teple_ponozky_2/vesele_teple_ponozky_snezna_sova/D-U-SC-WS-C-C-2049-Snow-Owl.png',
    price: '100.00 zł',
    oldPrice: '85.00 zł',
    discount: '15',
  },
  {
    id: 's2',
    title: 'socks 2',
    imgSrc: 'https://cdn.dedoles.sk/buxus/images/cache/expanded_product_image_lb//vsetko/inspiracie/vesele_ponozky/vysoke_ponozky/rastliny_a_kvety/vesele_bambusove_ponozky_levandula/GMBRS924.png',
    altImgSrc: 'https://cdn.dedoles.sk/buxus/images/cache/expanded_product_image_lb/fotogaleria/dedoles/novy_katalog_produktov/inspiracie_1/vesele_ponozky_kategoria/vysoke_ponozky_01/rastliny_a_kvety/vesele_bambusove_ponozky_levandula_1/GMBRS924_2.jpg',
    price: '20.00 zł',
    oldPrice: '',
    discount: '',
  },
  {
    id: 's3',
    title: 'socks 3',
    imgSrc: 'https://cdn.dedoles.sk/buxus/images/cache/expanded_product_image_lb/fotogaleria/dedoles/novy_katalog_produktov/inspiracie_1/vesele_ponozky_kategoria/vysoke_ponozky_01/teple_ponozky_2/vesele_teple_ponozky_snezna_sova/D-U-SC-WS-C-C-2049_2.png',
    altImgSrc: 'https://cdn.dedoles.sk/buxus/images/cache/expanded_product_image_lb/fotogaleria/dedoles/novy_katalog_produktov/inspiracie_1/vesele_ponozky_kategoria/vysoke_ponozky_01/teple_ponozky_2/vesele_teple_ponozky_snezna_sova/D-U-SC-WS-C-C-2049-Snow-Owl.png',
    price: '45.99 zł',
    oldPrice: '34.99 zł',
    discount: '20',
  },
  {
    id: 's4',
    title: 'socks 3',
    imgSrc: 'https://cdn.dedoles.sk/buxus/images/cache/expanded_product_image_lb//vsetko/inspiracie/vesele_ponozky/vysoke_ponozky/rastliny_a_kvety/vesele_bambusove_ponozky_levandula/GMBRS924.png',
    altImgSrc: 'https://cdn.dedoles.sk/buxus/images/cache/expanded_product_image_lb/fotogaleria/dedoles/novy_katalog_produktov/inspiracie_1/vesele_ponozky_kategoria/vysoke_ponozky_01/rastliny_a_kvety/vesele_bambusove_ponozky_levandula_1/GMBRS924_2.jpg',
    price: '100.00 zł',
    oldPrice: '85.00 zł',
    discount: '15',
  },
  {
    id: 's5',
    title: 'socks 5',
    imgSrc: 'https://cdn.dedoles.sk/buxus/images/cache/expanded_product_image_lb/fotogaleria/dedoles/novy_katalog_produktov/inspiracie_1/vesele_ponozky_kategoria/vysoke_ponozky_01/teple_ponozky_2/vesele_teple_ponozky_snezna_sova/D-U-SC-WS-C-C-2049_2.png',
    altImgSrc: 'https://cdn.dedoles.sk/buxus/images/cache/expanded_product_image_lb/fotogaleria/dedoles/novy_katalog_produktov/inspiracie_1/vesele_ponozky_kategoria/vysoke_ponozky_01/teple_ponozky_2/vesele_teple_ponozky_snezna_sova/D-U-SC-WS-C-C-2049-Snow-Owl.png',
    price: '20.00 zł',
    oldPrice: '',
    discount: '',
  },
  {
    id: 's6',
    title: 'socks 6',
    imgSrc: 'https://cdn.dedoles.sk/buxus/images/cache/expanded_product_image_lb//vsetko/inspiracie/vesele_ponozky/vysoke_ponozky/rastliny_a_kvety/vesele_bambusove_ponozky_levandula/GMBRS924.png',
    altImgSrc: 'https://cdn.dedoles.sk/buxus/images/cache/expanded_product_image_lb/fotogaleria/dedoles/novy_katalog_produktov/inspiracie_1/vesele_ponozky_kategoria/vysoke_ponozky_01/rastliny_a_kvety/vesele_bambusove_ponozky_levandula_1/GMBRS924_2.jpg',
    price: '45.99 zł',
    oldPrice: '34.99 zł',
    discount: '20',
  }
]
</script>

<template>
  <div class="products-container">
    <ul class="products-list">
      <li v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </li>
    </ul>

  </div>
</template>


<style scoped>
.products-container {
  width: 1028px;
  background-color: white;
  padding: 24px;
  display: flex;
  justify-content: center;
}

.products-list {
  display: grid;
  grid-template-columns: 240px 240px 240px;
  grid-template-rows: auto;
  gap: 48px 32px;
  margin: 0 auto;
}
</style>