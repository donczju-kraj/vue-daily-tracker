<template>
  <div class="product-card">
    <div class="product-images">
      <img class="product-image main-image" :src="product.imgSrc" />
      <img class="product-image secondary-image" :src="product.altImgSrc" />
      <div class="product-tags">
        <p class="product-tag">Ciepłe</p>
        <p class="product-tag">Nowość</p>
      </div>
    </div>
    <div class="product-details">
      <div class="product-details-inner">
        <p class="product-title">{{ product.title }}</p>
        <div class="product-price-info">
          <p v-if="product.oldPrice && product.discount" class="price-old">{{ product.oldPrice }}</p>
          <p class="price-current">{{ product.price }}</p>
          <p v-if="product.oldPrice && product.discount" class="price-discount">-{{ product.discount }}%</p>
        </div>
      </div>
      <div class="product-add-to-cart">
        <p class="add-to-cart-action">Add to cart</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
const props = defineProps<{
  product: {
    id: string,
    title: string,
    imgSrc: string,
    altImgSrc: string,
    price: string,
    oldPrice: string,
    discount: string,
  };
}>();
const product = ref(props.product);
</script>

<style>
.product-card {
  color: black;
  border-radius: 24px;
  overflow: hidden;
  transition: transform 0.3s ease;
  height: 360px;
  display: flex;
  flex-direction: column;
}

.product-tags {
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: absolute;
  left: 0px;
  bottom: 20px;
}

.product-tag {
  background-color: lightblue;
  border-radius: 0 5px 5px 0;
  padding: 2px 8px;
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-images {
  height: 70%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  position: relative;
}

.product-images img {
  height: 140%;
  width: auto;
  max-width: 100%;
  object-fit: cover;
}

.main-image {
  display: block;
}

.product-card:hover .main-image {
  display: none;
}

.secondary-image {
  display: none;
}

.product-card:hover .secondary-image {
  display: block;
}

.product-details {
  position: relative;
  height: 30%;
}

.product-details-inner {
  padding: 15px;
  background-color: #fafafa;
  border-radius: 0 0 24px 24px;
}

.product-card:hover .product-details-inner {
  height: 100%;
}

.product-card:hover .product-details {
  background-color: white;
}

.product-title {
  font-weight: 400;
  font-size: 14px;
}

.product-price-info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  align-items: center;
  font-size: 14px;
}

.price-old {
  color: gray;
  text-decoration: line-through;
}

.price-current {
  font-weight: 600;
  font-size: 16px;
}

.price-discount {
  font-weight: 600;
  background-color: #f00;
  border-radius: 16px;
  padding: 2px 6px;
}

.product-add-to-cart {
  position: absolute;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  bottom: 0;
  display: none;
}

.product-card:hover .product-add-to-cart {
  display: block;
}

.add-to-cart-action {
  width: 200px;
  background-color: green;
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  transition: ease-in-out;
  transition-duration: 300ms;
}

.add-to-cart-action:hover {
  cursor: pointer;
  transform: scale(1.05);
}
</style>