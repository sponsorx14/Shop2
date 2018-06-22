<template>
  <div class="basket">
    <div v-for="item in basket" class="basket__product">
      <p>Name: {{ item.name}} </p>
      <p>Qty: {{ item.quantity }} </p>
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
  .basket {
    width: 400px;
  }
  .basket__product {
    border-radius: 20px;
    margin: 30px;
    padding: 30px;
    border: 2px solid #e6e6e6;
  }

</style>