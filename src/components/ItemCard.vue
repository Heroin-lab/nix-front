<template>
  <div class="product">
    <img class="product__image" :src="img" alt="#">
    <div class="product__all-info">
              <span class="product__desc">
                <h4 class="product__name">{{ productName }}</h4>
                <p class="product__product-type">{{ productTypeName }}</p>
              </span>
      <p @click="addToBasket" class="product__price">${{ price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    id: String,
    img: String,
    price: Number,
    productTypeName: String,
    productName: String,
  },

  data () {
    return {

    }
  },

  methods: {
    addToBasket () {
      this.$emit("addProductToBasket", this.id, {
        id: this.id,
        title: this.productName,
        type: this.productTypeName,
        price: this.price,
        quantity: "1",
        image: this.img
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.product {
  display: flex;
  flex-direction: column;
  margin: 0 0 20px 20px;
  width: 280px;
  height: 350px;
  background-color: white;
  border-radius: 7px;
  box-shadow: 2px 5px 10px rgb(143, 138, 138);

  &__image{
    margin: 15px 0 5px 15px;
    width: 250px;
    height: 248px;
    border-radius: 7px;
    cursor: pointer;
  }

  &__all-info {
    display: flex;
    align-items: center;
    max-height: 70px;
    width: 265px;
    justify-content: space-between;
    cursor: default;
  }

  &__desc {
    display: flex;
    flex-direction: column;
    height: 60px;
    margin: 10px 0 0 15px;
  }

  &__name {
    display: block;
    margin: 0;
    width: 150px;

    font-family: Gilroy, 'serif';
    font-weight: 700;
  }

  &__product-type {
    margin: 0;
    font-family: Gilroy, 'serif';
  }

  &__price {
    display: inline-block;
    min-height: 28px;
    min-width: 25px;
    padding: 5px 10px 5px 10px;
    font-size: 25px;
    border-radius: 7px;
    background: #ff004e;

    cursor: pointer;

    &:hover {
      background: url("../assets/small-shopping-cart-icon.png") no-repeat;
      background-position: center;
      background-color: #ff004e;
      font-size: 0px;
    }
  }
}
</style>