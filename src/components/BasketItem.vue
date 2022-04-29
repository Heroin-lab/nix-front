<template>
  <div class="basket-item">
    <div class="basket-item__wrapper">
      <img class="basket-item__image" :src="image" alt="#">
      <div class="basket-item__desc">
        <h1>{{title}}</h1>
        <p>{{type}}</p>
      </div>
      <div class="basket-item__quantity-counter">
        <input @click="changeCounter('minus')" :disabled="quantity == 1" class="basket-item__button" type="button" value="-">
        <input disabled id="counter" class="basket-item__counter" type="number" :value="quantity">
        <input @click="changeCounter('plus')" :disabled="quantity == 100" class="basket-item__button" type="button" value="+">
      </div>
      <div class="basket-item__price-action">
        <img @click="deleteItem" src="../assets/delete.png">
        <h4 id="price">{{price}}$</h4>
      </div>
      <div class="basket-item__id">{{id}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasketItem",
  props: {
    id: String,
    image: String,
    title: String,
    type: String,
    price: String,
    quantity: String,
  },

  data () {
    return {

    }
  },

  methods: {
    changeCounter (mode) {
      this.$emit("changeCounter", this.id, mode)
    },

    deleteItem () {
      this.$emit("deleteItem", this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
    .basket-item {
      height: 150px;
      border-bottom: 1px solid black;
      font-family: Gilroy;

      &__wrapper {
        display: flex;
        margin: 25px 0 0 20px;
        height: 130px;
      }

      &__image {
        height: 120px;
        width: 120px;
        border-radius: 7px;
      }

      &__desc {
        width: 300px;
        margin-left: 20px;

        & p {
          margin: 0;
          font-size: 24px;
        }
      }

      &__quantity-counter {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 150px;
        margin: 0 0 0 30px;
      }

      & input::-webkit-outer-spin-button,
      & input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      &__button {
        width: 40px;
        height: 50px;
        padding: 0;
        border: none;
        background: none;
        text-align: center;
        font-size: 37px;
        font-weight: normal;
        border-radius: 7px;
        cursor: pointer;

        &:hover {
          background-color: rgba(0, 188, 255, 0.50
          );
        }
      }

      &__counter {
        height: 40px;
        width: 50px;
        text-align: center;
        font-size: 24px;
        border: 1px solid black;
        border-radius: 7px;
      }

      &__price-action {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 110px;
        margin: 5px 0 0 200px;

        & img {
          position: relative;
          right: 10px;
          bottom: 10px;
          height: 32px;
          width: 32px;
          padding: 10px;
          cursor: pointer;

          &:hover {
            border-radius: 50%;
            background-color: #ff004e;
          }
        }

        & h4 {
          font-size: 24px;
        }
      }

      &__id {
        display: none;
      }
    }
</style>