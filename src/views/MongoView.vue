<script setup lang="ts">
import { Ref, ref } from "vue";
import axios from "axios";
import { StreamBarcodeReader } from "vue-barcode-reader";

const isScannerOpened = ref();
const productBarcode = ref("");
const isProductScanned: Ref<boolean> = ref(false);
const productData = ref();
const isProductFound: Ref<boolean> = ref();

const onDecode = (text: string) => {
  isProductScanned.value = true;
  isScannerOpened.value = false;
  productBarcode.value = text;
  handleProductFetching();
};

function toggleCamera() {
  isScannerOpened.value = !isScannerOpened.value;
}

function handleProductFetching() {
  // TODO: check if product exists in DB, if so get it from there, else fetch from API
  fetchProductFromAPI();
  productBarcode.value = null;
}

async function fetchProductFromAPI() {
  try {
    const response = await axios.get(`https://world.openfoodfacts.org/api/v3/product/${productBarcode.value}.json`);
    productData.value = response.data.product;
    isProductFound.value = true;

  } catch (error) {
    if (error.response.data.result.id === "product_not_found") {
      isProductFound.value = false;
      console.log("product not found");
    }
    else console.error(error);
  }
}
</script>


<template>
  <main>
    <div>
      <input v-model="productBarcode" class="w-100 mb-2" type="text">
      <div class="d-flex">
        <button @click="toggleCamera">{{ isScannerOpened ? 'Close scanner' : 'Add file by scanner' }}</button>
        <StreamBarcodeReader v-if="isScannerOpened" @decode="onDecode"></StreamBarcodeReader>
        <button class="ms-2" @click="handleProductFetching">Add product manually</button>
      </div>
      <p v-if="isProductFound"> Keywords: {{ productData._keywords }} </p>
      <div v-if="isProductFound" class="d-flex justify-content-center">
        <img :src="productData.image_url" />
      </div>
      <p v-if="productData && !productData.image_url"> Image not found </p>
    </div>
  </main>
</template>