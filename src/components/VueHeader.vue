<template>
  <header class="header">
    <AuthPopUpWindow id="modal" @changeParentAuthStatus="changeParentAuthStatus"/>

    <div class="container">
      <div class="header__box">
        <router-link :to="{ path: `/` }">
          <img class="logo" src="../assets/logo.png" alt="logo">
        </router-link>

        <nav class="navbar">
          <ul>
            <li><router-link :to="{ path: `/products`}">Products</router-link></li>
            <li><router-link :to="{ path: `/suppliers`}">Suppliers</router-link></li>
            <li>
              <router-link :to="{ path: `/basket`}">
                <img class="navbar__basket" src="../assets/shopping-cart-icon.png" alt="#">
              </router-link>
            </li>
            <li>
              <img v-if="!parentAuthStatus" @click="showAuthPopUp" class="navbar__user-icon" src="../assets/User_Icon.png" alt="#">
              <img v-if="parentAuthStatus" @click="logOutUser" class="navbar__log-out-icon" src="../assets/log-out.png" alt="#">
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>

import AuthPopUpWindow from "@/components/AuthPopUpWindow";

export default {
  name: "header",
  props: ["statusUser"],
  data() {
    return {
      parentAuthStatus: false
    }
  },
  components: {
    AuthPopUpWindow,
  },

  mounted() {
    this.getAuthStatusFromLocalStorage()
  },

  methods: {
    showAuthPopUp () {
      document.getElementById("modal").style.display = "flex"
    },

    changeParentAuthStatus () {
      this.parentAuthStatus = this.$store.getters.getUserAuthStatus
    },

    getAuthStatusFromLocalStorage () {
      if (localStorage.getItem("user_login_status") === "true") {
        this.parentAuthStatus = true
      }
    },

    logOutUser () {
      localStorage.removeItem("access_token")
      localStorage.removeItem("refresh_token")
      localStorage.removeItem("user_login_status")
      this.parentAuthStatus = false
    }
  }
}
</script>

<style lang="scss" scoped>

  .header {
    background-color: #ffffff;
    box-shadow: 0 5px 10px rgb(224, 221, 221);

    &__box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px 0 10px 0;
    }
  }



  .logo {
    width: 70px;
    height: 70px;
  }

  .navbar {

    & ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;


      & li {
        display: inline;
        height: 50px;
        padding: 10px 10px 15px 10px;


        &:not(:last-child) {
          margin-right: 20px;
        }

        &:hover {
          padding-bottom: 11px;
          color: #ff004e;
          border-bottom: 4px solid #ff004e;
        }

        & a {
          text-decoration: none;
          color: #000418;
          font-family: Gilroy, 'serif';
          font-weight: 500;
          line-height: 1.5;
          font-size: 32px;
        }
      }
    }

    &__basket {
      width: 45px;
      height: 45px;
    }

    &__user-icon {
      width: 45px;
      height: 45px;
    }

    &__log-out-icon {
      height: 40px;
      width: 40px;
    }
  }
</style>