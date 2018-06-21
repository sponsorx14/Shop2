<template>
  <div class="basket">
    <div v-for="item in basket" class="basket__product">
      <p>Name: {{ item.name}} </p>
      <p>Qty: {{ item.qty }} </p>
      <p>Total:{{ item.price }}zł </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Basket',
    data(){
      return {

      }
    },
    computed: {
      basket(){
        return this.$store.state.basket;
      }
    },
      methods: {

    },
  };
</script>

<style>
  .basket__product {
    margin: 30px;
    padding: 50px;
    border: 2px solid  #ccc;
  }

</style>