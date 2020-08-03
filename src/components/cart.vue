<template>
  <div class="cart">
      <table>
          <thead>
              <tr>
                  <th>id</th>
                  <th>名称</th>
                  <th>价格</th>
                  <th>数量</th>
                  <th>操作</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(shop, index) in cartProducts" :key="index">
                  <td>{{shop.id}}</td>
                  <td>{{shop.name}}</td>
                  <td>{{shop.price}}</td>
                  <td>{{shop.num}}</td>
                  <td>
                      <div @click="delProduct(shop)">删除</div>
                  </td>
              </tr>
              <tr v-if="!cartProducts.length">
                  <td colspan="5">您的购物车为空</td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "cart",
    data(){
        return {
            // cartProducts: []
        }
    },
    computed: {
        ...mapGetters(["cartProducts"])
    },
    methods: {
        ...mapActions(["delProduct"])
    }
}
</script>

<style>

</style>