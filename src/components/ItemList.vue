<template>
  <section class="products-list">
    <div class="container">

      <div class="products" >
        <div class="product" v-for="product in products" :key="product">
          <img class="product__image" :src="product.Img">
          <p class="product__name">{{product.Product_name}}</p>
          <a href="">
            <h5 class="product__price">${{product.Price}}</h5>
            <h1>+</h1>
          </a>
        </div>
      </div>
    </div>
  </section>

</template>

<script>


export default {
  name: "ProductItem",
  data() {
    return {
      products: [
        {
          "Id": "4",
          "Product_name": "Original burger",
          "Prod_type_name": "burger",
          "Price": 3,
          "Img": "https://316024.selcdn.ru/wiget/4d4c871a-107f-11e7-80df-d8d38565926f/ba3a1ca2-2ec6-4cf4-a843-f7f0fc0f175a_Medium_.jpg",
          "Supplier": "Burger Club",
          "Quantity": 0
        },
        {
          "Id": "5",
          "Product_name": "Crispy Chicken burger",
          "Prod_type_name": "burger",
          "Price": 4,
          "Img": "https://316024.selcdn.ru/wiget/4d4c871a-107f-11e7-80df-d8d38565926f/93bce037-709e-41a0-9beb-ab3670663b40_Medium_.jpg",
          "Supplier": "Burger Club",
          "Quantity": 0
        },
        {
          "Id": "6",
          "Product_name": "Bacon Cheese Burger",
          "Prod_type_name": "burger",
          "Price": 7,
          "Img": "https://316024.selcdn.ru/wiget/4d4c871a-107f-11e7-80df-d8d38565926f/49e75c35-6fff-4a0f-8d6a-959cf4721c74_Medium_.jpg",
          "Supplier": "Burger Club",
          "Quantity": 0
        },
        {
          "Id": "4",
          "Product_name": "Original burger",
          "Prod_type_name": "burger",
          "Price": 3,
          "Img": "https://316024.selcdn.ru/wiget/4d4c871a-107f-11e7-80df-d8d38565926f/ba3a1ca2-2ec6-4cf4-a843-f7f0fc0f175a_Medium_.jpg",
          "Supplier": "Burger Club",
          "Quantity": 0
        },
        {
          "Id": "5",
          "Product_name": "Crispy Chicken burger",
          "Prod_type_name": "burger",
          "Price": 4,
          "Img": "https://316024.selcdn.ru/wiget/4d4c871a-107f-11e7-80df-d8d38565926f/93bce037-709e-41a0-9beb-ab3670663b40_Medium_.jpg",
          "Supplier": "Burger Club",
          "Quantity": 0
        },
        {
          "Id": "6",
          "Product_name": "Bacon Cheese Burger",
          "Prod_type_name": "burger",
          "Price": 7,
          "Img": "https://316024.selcdn.ru/wiget/4d4c871a-107f-11e7-80df-d8d38565926f/49e75c35-6fff-4a0f-8d6a-959cf4721c74_Medium_.jpg",
          "Supplier": "Burger Club",
          "Quantity": 0
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .product {
    width: 300px;
    background-color: #ff004e;

    &__image {

    }

    & a {
      text-decoration: none;
      color: black;
    }

    &__price {
      width: 155px;
      text-align: center;
      padding: 10px 17px;
      font-size: 36px;
      background-color: aqua;
    }
  }
</style>