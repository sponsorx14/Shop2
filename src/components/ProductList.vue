<template>
    <header>
        <div class="container">
            <h1>Welcome to the shop</h1>
            <Product></Product>
        </div>
    </header>
</template>

<script>
import Product from './Product.vue';

export default {
  name: 'ProductList',
  components: {
    Product,
  },
};
</script>

<style lang="scss" scoped>
    .container {
        text-align: center;
        margin: 0 auto;
        max-width: 1200px;
    }
</style>
