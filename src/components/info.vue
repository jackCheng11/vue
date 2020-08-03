<template>
  <div class="info">
      <div class="item-wrapper">
      <div class="item">
          总数:<strong>{{totalNum}}</strong>
      </div>
      <div class="item">
          总价:<strong>{{totalPrice}}</strong>
      </div>
      <div @click="clearAll">清零</div>
  </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
    name: "info",
    data(){
        return {

        }
    },
    computed: {
        ...mapGetters(["totalPrice", "totalNum"])
    },
    methods: {
        ...mapActions(["clearAll"]),
        ...mapActions(["delProduct"])
    }
}
</script>

<style>

</style>