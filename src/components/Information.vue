<template>
  <div class="information">
    <nav class="information__list">
      <router-link
          to="/"
          activeClass="active"
          class="information__list__item"
          tag="a"
          exact
      >
        Home
      </router-link>
      <router-link
          to="/basket"
          activeClass="active"
          class="information__list__item"
          tag="a"
      >
        Basket
        ({{ basketQuantity }})
      </router-link>
      <router-link
          to="/form"
          activeClass="active"
          class="information__list__item"
          tag="a"
      >
        New item
      </router-link>
    </nav>
    <p class="information__total">
      Total:
      {{ totalPrice }}
      zł
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Information',
    computed: {
      totalPrice() {
        return this.$store.state.basketModule.totalPrice;
      },
      basketQuantity() {
        return this.$store.state.basketModule.basketQuantity;
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';

  .information {
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;
    background-color: $dark-white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.75);
    &__list {
      margin: 0;
      padding: 10px;
      display: flex;
      &__item {
        list-style: none;
        color: $dark-grey;
        text-decoration: none;
        padding: 10px 25px;
        margin-right: 5px;
        background-color: $grey;
        cursor: pointer;
      }
    }
    &__total {
      padding: 10px 25px;
      margin: 0
    }
  }
  .active {
    background-color: $yellow;
  }
</style>