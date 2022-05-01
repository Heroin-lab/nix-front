<template>
  <div class="order-card" :style="paidStatus ? 'background-color: rgb(0, 160, 70, 0.10)' : 'background-color: rgba(10, 10, 10, 0.10)'">
    <div class="order-card__status-color" :style="paidStatus ? 'background-color: rgb(0, 160, 70)' : 'background-color: gray'"></div>
    <div class="order-card__status-bar">
      <p v-if="paidStatus">Status: Already paid</p>
      <p v-else-if="!paidStatus">Status: Not Paid</p>
      <p>Address: {{address}}</p>
      <p>Price: {{price}}</p>
    </div>
    <div class="order-card__images">
      <img v-for="(products, index) in this.productArray"
           :key="index"
           :src="products.Img" alt="#">
    </div>
  </div>
</template>

<script>
export default {
  name: "UserOrderCard",
  props: ["paidStatus", "address", "price", "productArray"],

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

  .order-card {
    display: flex;
    align-items: center;
    padding: 15px 20px 15px 20px;
    font-family: Gilroy;
    border-bottom: 1px solid rgba(0, 0, 0, 0.46);

    &__status-color {
      height: 120px;
      width: 15px;
      border-radius: 35px;
      background-color: rgb(0, 160, 70);
    }

    &__status-bar {
      margin-left: 30px;

      & p {
        margin: 10px 0 0 0;
        font-size: 18px;

        &:first-child {
          margin: 0;
        }
      }
    }

    &__images {
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
      align-items: center;
      width: 640px;
      margin-left: 30px;
      overflow: auto;

      & img {
        height: 70px;
        width: 70px;
        margin-right: 5px;
      }
    }
  }
</style>