<template>
  <div class="order-window">
    <div class="order-window__header">
      <h2 class="order-window__header-text">Ordering</h2>
      <span @click="closeBasketPopup" class="order-window__cross">&#10005;</span>
    </div>
    <div class="order-window__fields-area">
      <div class="order-window__wrapper">
        <div class="order-window__fields-area_name" >
          <p>First Name</p>
          <input id="nameInput" class="input-cred" type="text" placeholder="First Name">
        </div>

        <div class="order-window__fields-area_surname" >
          <p>Second Name</p>
          <input id="secNameInput" class="input-cred" type="text" placeholder="Second Name">
        </div>

        <div class="order-window__fields-area_phone" >
          <p>Phone number</p>
          <input id="phoneInput" class="input-cred" type="text" placeholder="Phone number">
        </div>

        <div class="order-window__fields-area_address" >
          <p>Address</p>
          <input id="addressInput" class="input-cred" type="text" placeholder="Address">
        </div>
      </div>

      <p id="alert-block" class="order-window__alert-block"></p>

      <input class="order-window__cash-pay"
             type="button"
             value="Pay by Cash 💸"
             @click="cardChose = false"
             :style="!cardChose ? 'background-color: #00bcff; box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.40);' : ''">

      <input
          class="order-window__pay-now"
          type="button"
          value="Pay by Card 💳"
          @click="cardChose = true"
          :style="cardChose ? 'background-color: #00bcff; box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.40);' : ''">
    </div>
    <div class="order-window__btns">
      <input @click="goBackToBasket" class="order-window__btns_go-back" type="button" value="Go back">
      <div class="order-window__btns_confirm-block">
        <p>Total: {{total}}$</p>
        <input @click="makeAnOrder" class="order-window__btns_confirm" :disabled="total == 0" type="button" value="Confirm Order">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserOrderWindow",
  props: {
    total: String,
  },

  data () {
    return {
      basketContainer: [],
      cardChose: true,
      name: "",
      secName: "",
      phone: "",
      address: ""
    }
  },

  mounted() {
    this.getItemsFromLocalStorage()
  },

  methods: {
    inputValidation () {
      let nameInput = document.getElementById("nameInput").value
      let secNameInput = document.getElementById("secNameInput").value
      let phoneNumber = document.getElementById("phoneInput").value
      let addressInput = document.getElementById("addressInput").value

      if (this.total == 0) {
        this.alertMaker("Total price is to low!")
        return false
      }

      if (!nameInput) {
        this.alertMaker("Name field is empty!")
        return false
      } else if (nameInput.length < 2) {
        this.alertMaker("Your name is too short!")
        return false
      }

      if (!secNameInput) {
        this.alertMaker("Second name field is empty!")
        return false
      } else if (secNameInput.length < 2) {
        this.alertMaker("Your second name is too short!")
        return false
      }

      if (!phoneNumber) {
        this.alertMaker("Phone field is empty!")
        return false
      } else if (phoneNumber.length < 10) {
        this.alertMaker("Your phone number is too short!")
        return false
      } else if (!/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phoneNumber)) {
        this.alertMaker("Please input correct phone number!")
        return
      }

      if (!addressInput) {
        this.alertMaker("Address field is empty!")
        return false
      } else if (addressInput.length < 4) {
        this.alertMaker("Your address too short!")
        return false
      }

      this.name = nameInput
      this.secName = secNameInput
      this.phone = phoneNumber
      this.address = addressInput

      return true
    },

    alertMaker (alertStr) {
      let alertBlock = document.getElementById("alert-block")

      alertBlock.innerText = alertStr
      setTimeout(() => {
        alertBlock.innerText = ""
      }, 10000)
    },

    createProductArr () {
      let productsString = ""
      let productsArray = JSON.parse(localStorage.getItem("Basket"))

      for (let i = 0; i < productsArray.length; i++) {
        productsString += `(?, ${productsArray[i].id}, ${productsArray[i].quantity}), `
      }

      productsString = productsString.substring(0, productsString.length - 2)

      return productsString
    },

    async makeAnOrder () {
      if (!this.inputValidation()) {
        return false
      }

      let newProductArr = this.createProductArr()
      let status

      status = await this.$store.dispatch('makeNewOrderRequest', {
        paid_status: this.cardChose,
        address: this.address,
        price: this.total,
        user_Id: localStorage.getItem("user_id"),
        productArr: newProductArr,
        phone: this.phone,
        first_name: this.name,
        second_name: this.secName
      })

      if (status === 200) {
        this.closeBasketPopup()
      } else {
        this.alertMaker(status)
      }

    },

    getItemsFromLocalStorage () {
      let basketItems = JSON.parse(localStorage.getItem("Basket"))
      this.basketContainer = basketItems
    },

    closeBasketPopup () {
      this.$emit('closeUserBasketPopup')
    },

    goBackToBasket () {
      this.$emit('goBackToBasketMode')
    }
  }
}
</script>

<style lang="scss" scoped>

  .order-window {
    background-color: white;
    width: 770px;
    height: 500px;
    border-radius: 7px;

    &__header {
      display: flex;
      justify-content: space-between;
      padding: 15px 0 0 0;
      text-align: center;
      font-family: Gilroy;
      text-transform: uppercase;
      border-bottom: 1px solid black;
      box-shadow: 0px 2px 5px rgb(143, 138, 138);

      & h2 {
        padding: 2px 0 0 20px;
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



    &__fields-area {
      height: 330px;
      font-family: Gilroy, sans-serif;
      overflow: hidden;
    }

    &__wrapper {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      width: 730px;
      margin: 0 auto;
      padding: 20px 0 10px 0;

      & p {
        position: relative;
        margin: 0;
        top: 8px;
        left: 15px;
        width: 100px;
        text-align: center;
        font-size: 12px;
        text-transform: uppercase;
        border-radius: 7px;
        background-color: white;
      }

      & input {
        height: 55px;
        width: 314px;
        margin-bottom: 13px;
        padding-left: 10px;

        border: transparent;
        border-radius: 7px;
        box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.40);

        font-size: 17px;
        font-family: Gilroy, sans-serif;

        &:focus {
          outline: 1px solid #000418;
        }

        &::placeholder {
          padding-left: 5px;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-family: Gilroy, sans-serif;
          font-weight: bold;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.40);
        }
      }
    }

    &__alert-block {
      margin: 0;
      height: 25px;
      width: 100%;
      padding-bottom: 20px;
      text-align: center;
      color: red;
      font-size: 18px;
    }

    &__cash-pay {
      width: 385px;
      height: 90px;
      background-color: white;
      border: 1px solid #999999;
      border-radius: 0 7px 0 0;
      font-size: 24px;
      border-left: 0;

      &:hover {
        transition: 0.5s;
        background-color: rgba(110, 210, 246, 0.63);
      }
    }

    &__pay-now {
      width: 385px;
      height: 90px;
      background-color: white;
      border: 1px solid #999999;
      border-radius: 7px 0 0 0;
      border-right: 0;
      font-size: 24px;

      &:hover {
        transition: 0.5s;
        background-color: rgba(110, 210, 246, 0.63);
      }
    }

    &__btns {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 106px;
      font-family: Gilroy, sans-serif;
      border-radius: 0 0 7px 7px;
      box-shadow: 0px -2px 10px rgb(143, 138, 138);

      &_confirm-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 290px;
        height: 50px;
        padding: 10px;
        margin-right: 30px;
        border: 2px solid #00a046;
        border-radius: 7px;
        background-color: #d1ffe3;

        & p {
          font-size: 24px;
        }
      }

      &_go-back {
        width: 120px;
        height: 50px;
        margin-left: 30px;
        font-size: 18px;
        border: 1px solid #c0c0c0;
        border-radius: 7px;
        box-shadow: 0px 2px 5px rgb(143, 138, 138);
        cursor: pointer;
      }

      &_confirm {
        width: 150px;
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