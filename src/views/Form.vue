<template>
  <div class="container">
    <form class="form" @submit="onSubmit" novalidate>
      <label
          for="form__select"
          class="form__label"
      >
        Category:
      </label>
      <span
          class="form--error"
          v-if="submitted"
      >
        {{ incorrectCategory }}
      </span>
      <select
          v-model="newItem.category"
          :class="{error: errors.category }"
          class="form__select"
          id="form__select"
      >

        <option value="" disabled hidden></option>
        <option value="Huawei">Huawei</option>
        <option value="Lenovo">Lenovo</option>
        <option value="Apple">Apple</option>
        <option value="Xiaomi">Xiaomi</option>
        <option value="Nokia">Nokia</option>
        <option value="Honor">Honor</option>
      </select>
      <label
          class="form__label"
          for="form__input--name"
      >
        Name:
      </label>
      <span
          class="form--error"
          v-if="submitted"
      >
        {{ incorrectName }}
      </span>
      <input
          v-model="newItem.name"
          class="form__input--name"
          :class="{error: errors.name }"
          id="form__input--name"
          type="text">
      <label
          class="form__label"
          for="form__input--price"
      >
        Price:
      </label>
      <span
          class="form--error"
          v-if="submitted"
      >
        {{ incorrectPrice }}
      </span>
      <input
          v-model="newItem.price"
          class="form__input--price"
          :class="{error: errors.price }"
          id="form__input--price"
          type="number">
      <label
          class="form__label"
          for="form__input--in-stock"
      >
        In stock:
      </label>
      <span
          class="form--error"
          v-if="submitted"
      >
        {{ incorrectInStock }}
      </span>
      <input
          v-model="newItem.inStock"
          class="form__input--in-stock"
          :class="{error: errors.inStock }"
          id="form__input--in-stock"
          type="number">
      <label
          class="form__label"
          for="form__input--image"
      >
        Image URL:
      </label>
      <span
          class="form--error"
          v-if="submitted"
      >
        {{ incorrectImage }}
      </span>
      <input
          v-model="newItem.image"
          class="form__input--image"
          :class="{error: errors.image }"
          id="form__input--image"
          type="text">
      <label
          class="form__label"
          for="form__input--details--screen"
      >
        Screen size:
      </label>
      <span
          class="form--error"
          v-if="submitted"
      >
        {{ incorrectScreen }}
      </span>
      <input
          v-model="newItem.details.screen"
          class="form__input--details--screen"
          :class="{error: errors.screen }"
          id="form__input--details--screen"
          type="text">
      <label
          class="form__label"
          for="form__input--details--memory"
      >
        Memory:
      </label>
      <span
          class="form--error"
          v-if="submitted"
      >
        {{ incorrectMemory }}
      </span>
      <input
          v-model="newItem.details.memory"
          class="form__input--details--memory"
          :class="{error: errors.memory }"
          id="form__input--details--memory"
          type="text">
      <label
          class="form__label"
          for="form__input--details--system"
      >
        System:
      </label>
      <span
          class="form--error"
          v-if="submitted"
      >
        {{ incorrectSystem }}
      </span>
      <input
          v-model="newItem.details.system"
          class="form__input--details--system"
          :class="{error: errors.system }"
          id="form__input--details--system"
          type="text">
      <button
          class="form__button-submit"
      >
        Upload
      </button>
    </form>
  </div>
</template>

<script>
  import _ from 'lodash';
  import {uuid} from 'vue-uuid'

  export default {
    name: "Form",
    data() {
      return {
        newItem: {
          id: uuid.v4(),
          category: null,
          name: '',
          price: null,
          inStock: null,
          image: '',
          details: {
            screen: null,
            memory: null,
            system: null
          },
        },
        errors: {},
        submitted: false,
        validUrl: false
      }
    },
    methods: {
      validateUrl(string) {
        let validUrl = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        this.validUrl = validUrl !== null;
      },
      onSubmit(event) {
        event.preventDefault();
        this.submitted = true;
        this.validateForm();
        if (_.isEmpty(this.errors)) {
          this.$store.dispatch('submitItem', this.newItem).then(() => {
            this.$router.push('/');
          });
        }
      },
      validateForm() {
        const errors = {};
        this.validateUrl(this.newItem.image);

        if (!this.newItem.category) {
          errors.category = 'Choose one of categories';
        }
        if (!this.newItem.name) {
          errors.name = 'Enter a valid name';
        }
        if (!this.newItem.price) {
          errors.price = 'Price is required';
        }
        if (!this.newItem.inStock) {
          errors.inStock = 'Enter value of stock';
        }
        if (!this.newItem.image || !this.validUrl) {
          errors.image = 'Enter a valid image Url';
        }
        if (!this.newItem.details.screen) {
          errors.screen = 'Enter a valid screen size';
        }
        if (!this.newItem.details.memory) {
          errors.memory = 'Enter a valid memory information';
        }
        if (!this.newItem.details.system) {
          errors.system = 'Enter a valid system information';
        }
        this.errors = errors;
      }
    },
    computed: {
      incorrectCategory() {
        const category = this.errors.category;
        return category === '' || typeof category === undefined ? '' : this.errors.category;
      },
      incorrectName() {
        const name = this.errors.name;
        return name === '' || typeof name === undefined ? '' : this.errors.name;
      },
      incorrectPrice() {
        const price = this.errors.price;
        return price === '' || typeof price === undefined ? '' : this.errors.price;
      },
      incorrectInStock() {
        const inStock = this.errors.inStock;
        return inStock === '' || typeof inStock === undefined ? '' : this.errors.inStock;
      },
      incorrectImage() {
        const image = this.errors.image;
        return image === '' || typeof image === undefined ? '' : this.errors.image;
      },
      incorrectScreen() {
        const screen = this.errors.screen;
        return screen === '' || typeof screen === undefined ? '' : this.errors.screen;
      },
      incorrectMemory() {
        const memory = this.errors.memory;
        return memory === '' || typeof memory === undefined ? '' : this.errors.memory;
      },
      incorrectSystem() {
        const system = this.errors.system;
        return system === '' || typeof system === undefined ? '' : this.errors.system;
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../styles/colors';

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .form {
    display: flex;
    flex-direction: column;
    max-width: 450px;
    margin: 0 auto;
    &__label {
      margin: 10px 0;
      text-align: left;
    }
    [class^='form__input'],
    &__select {
      padding: 10px;
      transition: .3s;
      margin-bottom: 10px;
      &:focus {
        transition: .3s;
        border-color: $blue;
      }
    }
    &__button-submit {
      max-width: 300px;
      padding: 15px 30px;
      margin: 30px auto;
      border: 0;
      outline: none;
      background-color: $yellow;
      cursor: pointer;
      color: $white;
      font-size: 20px;
      transition: .5s;
      &:hover {
        transition: .5s;
        background-color: $light-yellow;
        box-shadow: 0px 3px 10px 5px #97B1BF;
      }
    }
    &--error {
      text-align: left;
      color: $deep-red;
    }
  }

  .error {
    border: 1px solid red;
  }
</style>