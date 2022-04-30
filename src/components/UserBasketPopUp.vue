<template>
 <div class="basket-popup">
   <UserOrderWindow
       v-if="!basketMode"
       @closeUserBasketPopup="closeBasketPopup"
       @goBackToBasketMode="goBackToBasketMode"
       :total="total"
   />

   <div v-if="basketMode" class="basket-popup__window">
     <div class="basket-popup__window_header">
       <h2>Your Basket</h2>
       <span @click="closeBasketPopup" class="basket-popup__cross">&#10005;</span>
     </div>
     <div class="basket-popup__items-list">
       <h1 v-if="emptyBasketMode" class="basket-popup__empty-basket">There is empty &#128543; <br> Maybe you can change it &#128521;</h1>
        <ul>
          <li v-for="(basketItem, index) in basketContainer"
              :key="index">
            <BasketItem
              :title = basketItem.title
              :type = basketItem.type
              :price = basketItem.price
              :image = basketItem.image
              :quantity = basketItem.quantity
              :id = basketItem.id

              @deleteItem="deleteItem"
              @changeCounter="changeCounter"
            />
          </li>
        </ul>
      </div>
      <div class="buy-skip-btns">
        <input @click="closeBasketPopup" class="buy-skip-btns__continue" type="button" value="Continue shopping">
        <div class="buy-skip-btns__buy-btn">
          <p class="buy-skip-btns__buy-btn_price">Total: {{ total }}$</p>
          <input @click="basketMode = false" :disabled="emptyBasketMode" type="button" value="Buy">
        </div>
      </div>
   </div>
 </div>
</template>

<script>
import BasketItem from "@/components/BasketItem";
import UserOrderWindow from "@/components/UserOrderWindow";

export default {
  name: "UserBasketPopUp",
  components: {
    BasketItem,
    UserOrderWindow
  },

  data () {
    return {
      basketMode: true,
      basketContainer: [],
      total: 0,
      emptyBasketMode: false,
    }
  },

  mounted() {
    if (this.getItemsFromLocalStorage()) {
      this.getSumOfPrices()
    }
  },

  methods: {
    getItemsFromLocalStorage () {
      let basketItems = JSON.parse(localStorage.getItem("Basket"))
      if (basketItems) {
        this.basketContainer = basketItems
        this.emptyBasketMode = false
        return true
      }

      this.emptyBasketMode = true
      return false
    },

    getSumOfPrices () {
      let index = 0
      let sum = this.basketContainer.reduce((accumulator, curValue) => {
        return accumulator + curValue.price *1
      }, index)

      this.total = sum
      if (this.total == 0) {
        this.emptyBasketMode = true
      }
    },

    changeCounter (id, mode) {
      let basketData = JSON.parse(JSON.stringify(this.basketContainer))
      let basketItemData
      let itemIndex
      for (let i = 0; i < basketData.length; i++) {
        if (basketData[i].id == id) {
          basketItemData = basketData[i]
          itemIndex = i
          break
        }
      }

      if (mode === "plus") {
        basketItemData.price = ((basketItemData.price * 1) / (basketItemData.quantity * 1)) * ((basketItemData.quantity * 1) + 1)
        basketItemData.quantity = basketItemData.quantity * 1 + 1
        basketItemData.price = String(basketItemData.price)
        basketItemData.quantity = String(basketItemData.quantity)
      } else if (mode === "minus") {
        basketItemData.price -= basketItemData.price / basketItemData.quantity
        basketItemData.quantity = basketItemData.quantity * 1 - 1
        basketItemData.price = String(basketItemData.price)
        basketItemData.quantity = String(basketItemData.quantity)
      }
      this.basketContainer[itemIndex] = basketItemData
      this.getSumOfPrices()
      localStorage.setItem('Basket', JSON.stringify(this.basketContainer))
    },

    deleteItem (id) {
      let basketData = JSON.parse(JSON.stringify(this.basketContainer))
      for (let i = 0; i < basketData.length; i++) {
        if (basketData[i].id == id) {
          basketData.splice(i, 1)
          this.$emit("minusBasketCounter")
          break
        }
      }

      localStorage.setItem('Basket', JSON.stringify(basketData))
      this.basketContainer = basketData
      this.getSumOfPrices()
    },

    goBackToBasketMode () {
      this.basketMode = true
    },

    closeBasketPopup () {
      this.$emit('closeUserBasketPopup')
    }
  },

//
//   [{"id":"1","title":"Pizza Texas","type":"Pizza","price":"7","quantity":"1","image":"https://roll-club.kh.ua/wp-content/uploads/2021/04/4-mjasa-1.jpg.webp"},
// {"id":"2","title":"Pizza Hawaii","type":"Pizza","price":"5","quantity":"1","image":"https://roll-club.kh.ua/wp-content/uploads/2021/04/4-mjasa-1.jpg.webp"},
// {"id":"3","title":"Pizza Ocean","type":"Pizza","price":"12","quantity":"2","image":"https://roll-club.kh.ua/wp-content/uploads/2021/04/4-mjasa-1.jpg.webp"},
// {"id":"4","title":"Pizza Texas","type":"Pizza","price":"7","quantity":"1","image":"https://roll-club.kh.ua/wp-content/uploads/2021/04/4-mjasa-1.jpg.webp"}]
}
</script>

<style lang="scss" scoped>

  .basket-popup {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.77);
    z-index: 1000;

    &__window {
      background-color: white;
      width: 940px;
      height: 700px;
      border-radius: 7px;
      cursor: default;


      &_header {
        display: flex;
        justify-content: space-between;
        padding: 15px 0 0 0;
        text-align: center;
        font-family: Gilroy;
        text-transform: uppercase;
        border-bottom: 1px solid black;
        box-shadow: 0px 2px 5px rgb(143, 138, 138);

        & h2 {
          padding-left: 20px;
          font-size: 27px;
        }

        & span {
          position: relative;
          padding: 4px 9px 0 9px;
          right: 20px;
          bottom: 7px;
          font-size: 35px;
          cursor: pointer;
          border-radius: 50%;

          &:hover {
            transition: 0.5s;
            background-color: #9a9a9a;
          }
        }
      }
    }

    &__items-list {
      & ul {
        height: 530px;
        padding: 0;
        margin: 0;
        list-style-type: none;
        overflow: auto;
        cursor: default;
      }
    }

    &__empty-basket {
      position: relative;
      top: 210px;
      height: 0;
      text-align: center;
      font-family: Gilroy;
    }
  }

   .buy-skip-btns {
     display: flex;
     justify-content: space-between;
     height: 106px;
     font-family: Gilroy, sans-serif;
     border-radius: 0 0 7px 7px;
     box-shadow: 0px -2px 10px rgb(143, 138, 138);
     cursor: default;

     &__continue {
       width: 190px;
       height: 50px;
       margin: 30px 0 0 30px;
       font-size: 18px;
       border: 1px solid #c0c0c0;
       border-radius: 7px;
       box-shadow: 0px 2px 5px rgb(143, 138, 138);
       cursor: pointer;
     }

     &__buy-btn {
       display: flex;
       justify-content: space-between;
       align-items: center;
       width: 220px;
       height: 50px;
       padding: 10px;
       margin: 15px 30px 0 0;
       border: 2px solid #00a046;
       border-radius: 7px;
       background-color: #d1ffe3;

       &_price {
         font-size: 24px;
         cursor: default;
       }

       & input {
         width: 80px;
         height: 50px;
         font-size: 18px;
         border: 1px solid #52ce00;
         border-radius: 7px;
         box-shadow: 0px 2px 5px rgb(143, 138, 138);
         background-color: #00ff3a;
         cursor: pointer;
       }
     }
   }
</style>