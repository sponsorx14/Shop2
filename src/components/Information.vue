<template>
  <div class="information">
    <ul class="information__list">
      <router-link
        to="/"
        activeClass="active"
        class="information__list__item"
        tag="li"
        exact
      >
        Home
      </router-link>
      <router-link
        to="/basket"
        activeClass="active"
        class="information__list__item"
        tag="li"
      >
        Basket
        ({{ basketQuantity }})
      </router-link>
    </ul>
    <p class="information__total">
      Total:
      {{ totalPrice }}
      zł
    </p>
  </div>
</template>

<script>
  export default {
    name: "Information",
    computed: {
      totalPrice() {
        return this.$store.state.basketModule.totalPrice;
      },
      basketQuantity() {
        return this.$store.state.basketModule.basketQuantity;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .information {
    top: 0;
    position: fixed;
    z-index: 2;
    width: 100%;
    background-color: #adadad;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.75);
    &__list {
      margin: 0;
      padding: 10px;
      display: flex;
      &__item {
        transition: .4s;
        padding: 10px 25px;
        margin-right: 5px;
        list-style: none;
        background-color: #c1c1c1;
        cursor: pointer;
      }
    }
    &__total {
      padding: 10px 25px;
      margin: 0
    }
  }

  .active {
    background-color: #d8a61c;
  }
</style>