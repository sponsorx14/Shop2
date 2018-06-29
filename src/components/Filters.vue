<template>
  <div>
    <button
        @click="showFilters = !showFilters"
        class="show-filters"
    >
      {{ showFilters ? 'Hide filters' : 'Show filters'}}
    </button>
    <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
      <div v-if="showFilters" class="main__filters">
        <div class="main__filters main__filters--name">
          <input
              v-model="filterName"
              type="text"
              class="main__filters--name__input"
              placeholder="Enter a name"
          >
        </div>
        <div class="main__filters main__filters--categories">
          <label class="main__filters--categories--label">
            <input
                v-model="filterCheckbox"
                value="Huawei"
                type="checkbox"
                class="main__filters--categories--checkbox"
            >
            <span>Huawei</span>
          </label>
          <label class="main__filters--categories--label">
            <input
                v-model="filterCheckbox"
                value="Lenovo"
                type="checkbox"
                class="main__filters--categories--checkbox"
            >
            <span>Lenovo</span>
          </label>
          <label class="main__filters--categories--label">
            <input
                v-model="filterCheckbox"
                value="Apple"
                type="checkbox"
                class="main__filters--categories--checkbox"
            >
            <span>Iphone</span>
          </label>
          <label class="main__filters--categories--label">
            <input
                v-model="filterCheckbox"
                value="Xiaomi"
                type="checkbox"
                class="main__filters--categories--checkbox"
            >
            <span>Xiaomi</span>
          </label>
          <label class="main__filters--categories--label">
            <input
                v-model="filterCheckbox"
                value="Nokia"
                type="checkbox"
                class="main__filters--categories--checkbox"
            >
            <span>Nokia</span>
          </label>
          <label class="main__filters--categories--label">
            <input
                v-model="filterCheckbox"
                value="Honor"
                type="checkbox"
                class="main__filters--categories--checkbox"
            >
            <span>Honor</span>
          </label>
        </div>
        <div class="main__filters main__filters--price">
          <label for="priceFrom">From: </label>
          <input
              v-model="filterPriceFrom"
              class="main__filters--price__input"
              id="priceFrom"
              type="number"
          >
          <label for="priceTo">To: </label>
          <input
              v-model="filterPriceTo"
              class="main__filters--price__input"
              id="priceTo"
              type="number"
          >
        </div>
        <div class="main__filters main__filters--dropdown">
          <select
              v-model="sortProducts"
              name="sort-by"
              class="main__filters--dropdown--select"
          >
            <option value="default" selected>
              Default
            </option>
            <option value="alphabetic">
              A-Z
            </option>
            <option value="priceLowToHigh">
              Price low to high
            </option>
          </select>
        </div>
        <button
            @click="resetFilters"
            class="main__filters__button"
        >
          Clear filters
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "Filters",
    data() {
      return {
        showFilters: false
      }
    },
    methods: {
      resetFilters() {
        this.$store.dispatch('resetFilters');
      },
    },
    computed: {
      filterName: {
        get() {
          return this.$store.state.filtersModule.filterName;
        },
        set(value) {
          this.$store.dispatch('filterName', value);
        }
      },
      filterPriceFrom: {
        get() {
          if (this.$store.state.filtersModule.filterPriceFrom === 0) {
            return null;
          }
          return this.$store.state.filtersModule.filterPriceFrom;
        },
        set(value) {
          const values = {
            priceFrom: value
          };
          this.$store.dispatch('filterPrice', values);
        }
      },
      filterPriceTo: {
        get() {
          if (this.$store.state.filtersModule.filterPriceTo === 9999) {
            return null;
          }
          return this.$store.state.filtersModule.filterPriceTo;
        },
        set(value) {
          const values = {
            priceTo: value
          };
          this.$store.dispatch('filterPrice', values);
        }
      },
      filterCheckbox: {
        get() {
          return this.$store.state.filtersModule.filterCheckboxes;
        },
        set(value) {
          this.$store.dispatch('filterCheckbox', value);
        }
      },
      sortProducts: {
        get() {
          return this.$store.state.filtersModule.sortName;
        },
        set(value) {
          this.$store.dispatch('sortProducts', value);
        }
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';

  @keyframes fadeIn {
    0% {
      transform: translateY(-10px);
      opacity: 0;
      display: none;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
      display: block;
    }
  }
  @keyframes fadeOut {
    0% {
      transform: translateY(0);
      opacity: 1;
      display: block;
    }
    100% {
      transform: translateY(10px);
      opacity: 0;
      display: none;
    }
  }

  .fadeIn {
    animation: fadeIn 1s ease;
  }
  .fadeOut {
    animation: fadeOut 1s ease;
  }

  .show-filters {
    padding: 15px 25px;
    border: 0;
    background-color: $yellow;
    color: $white;
    font-size: 20px;
    cursor: pointer;
    margin-bottom: 20px;
    outline: none;
    transition: .5s;
    &:hover {
      transition: .5s;
      background-color: $light-yellow;
      box-shadow: 0px 3px 10px 5px #97B1BF;
    }
  }
  .main__filters {
    &--name {
      margin-bottom: 10px;
      &__input {
        padding: 10px;
        border: 2px solid $grey;
        outline: none;
        border-radius: 20px;
      }
    }
    &--categories {
      padding: 10px 0;
      &--label span {
        transition: .3s;
        display: inline-block;
        background: $grey2;
        padding: 15px 30px;
        border-radius: 5px;
        color: $white;
        cursor: pointer;
        margin: 0 10px;
        &:hover {
          transition: .3s;
          background-color: $deep-grey;
        }
      }
      &--checkbox {
        display: none;
        &:checked + span {
          background-color: $yellow;
        }
      }
    }
    &--price {
      margin: 20px 0;
      &__input {
        margin-right: 20px;
        width: 50px;
        padding: 5px;
        border: 2px solid $grey;
        outline: none;
        border-radius: 20px;
      }
    }
    &__button {
      padding: 10px;
      margin: 20px;
      border: 0;
      background-color: $deep-red;
      color: $white;
      font-size: 20px;
      border-radius: 10px;
      cursor: pointer;
      outline: none;
      transition: .2s;
      &:hover {
        transition: .2s;
        background-color: $deep-red2;
      }
    }
    &--dropdown {
      &--select {
        padding: 10px 5px;
        width: 200px;
        outline: none;
        border-radius: 5px;
        text-indent: 10px;
      }
    }
  }
</style>