<template>
  <section class="products-list">
    <div class="container">

      <div class="flex-positioner">
        <div class="side-bar">
          <h1 class="side-bar__header">Filter</h1>

          <ul class="side-bar__list">
            <li><input type="checkbox" @change="sushiCategory = !sushiCategory">  Sushi</li>
            <li><input type="checkbox" @change="burgerCategory = !burgerCategory">  Burgers</li>
            <li><input type="checkbox" @change="pizzaCategory = !pizzaCategory">  Pizzas</li>
            <li><input type="checkbox" @change="dessertsCategory = !dessertsCategory">  Desserts</li>
            <li><input type="checkbox" @change="frozenMealCategory = !frozenMealCategory">  Frozen Meals</li>
            <li>
              <input type="checkbox" @change="pastryCategory = !pastryCategory">  Pastry</li>
          </ul>
        </div>

        <div class="products" >
          <div class="product" v-for="product in products" :key="product">
            <img class="product__image" :src="product.Img" alt="#">
            <div class="product__all-info">
              <span class="product__desc">
                <h4 class="product__name">{{product.Product_name}}</h4>
                <p class="product__product-type">{{product.Prod_type_name}}</p>
              </span>

              <p class="product__price">${{product.Price}}</p>
            </div>
          </div>
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
      products: [],
      sushiCategory: false,
      burgerCategory: false,
      pizzaCategory: false,
      dessertsCategory: false,
      frozenMealCategory: false,
      pastryCategory: false,
    }
  },
  methods: {
    async updateProductsByName (category) {
      await this.$store.dispatch('getProductsByCategory', {categoryName: category, products: []})
      this.products = this.$store.getters.getAllProducts
    },
    deleteProductsFromContainer(category) {
      this.$store.commit('DELETE_PRODUCT_FROM_CONTAINER', category)
      this.products = this.$store.getters.getAllProducts
    }
  },
    watch: {
      async sushiCategory(newValue) {
        if (newValue === true) {
          this.updateProductsByName('sushi')
        } else {
          this.deleteProductsFromContainer('sushi')
        }
      },
      burgerCategory(newValue) {
        if (newValue === true) {
          this.updateProductsByName('burger')
        } else {
          this.deleteProductsFromContainer('burger')
        }
      },
      pizzaCategory(newValue) {
        if (newValue === true) {
          this.updateProductsByName('pizza')
        } else {
          this.deleteProductsFromContainer('pizza')
        }
      },
      dessertsCategory(newValue) {
        if (newValue === true) {
          this.updateProductsByName('dessert')
        } else {
          this.deleteProductsFromContainer('dessert')
        }
      },
      frozenMealCategory(newValue) {
        if (newValue === true) {
          this.updateProductsByName('frozen_meal')
        } else {
          this.deleteProductsFromContainer('frozen_meal')
        }
      },
      pastryCategory(newValue) {
        if (newValue === true) {
          this.updateProductsByName('pastry')
        } else {
          this.deleteProductsFromContainer('pastry')
        }
      }
    }

}
</script>

<style lang="scss" scoped>

  .flex-positioner {
    display: flex;
    justify-content: space-between;
  }

  .side-bar {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 300px;
    border-radius: 7px;
    box-shadow: 2px 5px 10px rgb(143, 138, 138);

    &__header {
      display: block;
      margin: 0;
      padding: 15px 0 15px 0;
      width: 100%;
      text-align: center;
      border-radius: 7px 7px 0 0;
      box-shadow: 0px 5px 10px rgb(143, 138, 138);
    }

    &__list {
      margin: 0;
      padding: 0;
      list-style: none;

      & li {
        width: 300px;
        border-bottom: 1px solid #7c7c7c;
        font-size: 21px;
        font-family: Gilroy;
        font-weight: 500;
        line-height: 3;
        letter-spacing: 1px;

        &:hover {
          transition-duration: 0.6s;
          background-color: #ff004e;
          box-shadow: 0px 5px 10px rgb(143, 138, 138);
        }
      }

      input[type=checkbox] {
        width:20px;
        height:20px;
        margin: 0 5px 0 15px;
        cursor: pointer;
      }
    }
  }

  .products {
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 900px;
  }

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
      padding: 5px 10px 5px 10px;
      font-size: 25px;
      border-radius: 7px;
      background-color: #ff004e;

      cursor: pointer;
    }
  }

</style>