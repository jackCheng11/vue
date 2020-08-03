<template>
  <div class="product">
    <h4>商品信息</h4>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>名称</th>
          <th>日期</th>
          <th>价格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(shop, index) in shopList" :key="index">
          <td>{{shop.id}}</td>
          <td>{{shop.name}}</td>
          <td>{{shop.date}}</td>
          <td>{{shop.price}}</td>
          <td>
            <div @click="addToCart(shop)">购物车</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
  name: "product",
  computed: {
      ...mapGetters(["shopList"])
  },
  methods: {
      ...mapActions(["addToCart"])
  },
  data() {
    return {

    };
  }
};
</script>

<style>
</style>