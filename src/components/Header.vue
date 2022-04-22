<template>
  <header class="header">
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
              <router-link :to="{ path: `/auth`}">
                <img class="navbar__user-icon" src="../assets/User_Icon.png" alt="#">
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "header",
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

  .header {
    background-color: #ffffff;
    box-shadow: 0px 5px 10px rgb(224, 221, 221);

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
          color: #000821;
          font-family: Gilroy, 'serif';
          font-weight: 500;
          line-height: 1.5;
          font-size: 32px;
        }
      }
    }

    & img {
      width: 45px;
      height: 45px;
    }
  }
</style>