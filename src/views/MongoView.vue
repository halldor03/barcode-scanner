<script setup lang="ts">
import { ref } from "vue";
import { v4 as uuid } from "uuid";
import {StreamBarcodeReader} from "vue-barcode-reader";

const name = ref("");
const scannerOpened= ref();
const barcode = ref("");
const productScanned: boolean = ref(false);

function addToDB() {
  const item = {
    id: uuid(),
    name: name.value
  };
  name.value = "";
}

const onDecode = (text) => {
  productScanned.value = true;
  scannerOpened.value = false;
  barcode.value = text;
};

function toggleCamera(){
  scannerOpened.value = !scannerOpened.value;
}

</script>


<template>
  <main>
     <div>
     <button @click="toggleCamera">{{scannerOpened ? 'Close scanner'  : 'Add file by scanner'}}</button>
     <p v-if="productScanned"> Product barcode is : {{barcode}}</p>
      <StreamBarcodeReader v-if="scannerOpened" @decode="onDecode" @error="onError"></StreamBarcodeReader>
    </div>
    <div>
      <input v-model="name" class="me-2" type="text">
      <button @click="addToDB">Add item to database</button>
    </div>
  </main>
</template>