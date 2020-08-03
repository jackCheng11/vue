<template>
  <div id="app">
    <h3></h3>
    <product></product>
    <cart></cart>
    <info></info>
  </div>
</template>

<script>
import cart from "@/components/cart.vue";
import product from "@/components/product.vue"
import info from "@/components/info.vue";

export default {
  name: 'App',
  components: {
    product,
    cart,
    info
  }
}
</script>

<style>

</style>
