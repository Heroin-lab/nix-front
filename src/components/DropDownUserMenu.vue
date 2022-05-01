<template>
    <div class="drop-menu">
      <ul @mouseover="closeDropDownAction('keep-alive')" @mouseleave="closeDropDownAction('close')" class="drop-menu__list">
        <li @click="this.$emit('userOrdersListAction')" class="drop-menu__list_li">
          <img src="../assets/history_icon.png" alt="#">
          <p class="wtf-p">My Orders</p>
        </li>
        <li @click="this.$emit('logOutUser')" class="drop-menu__list_li">
          <img class="wtf-img" src="../assets/logout_icon.png" alt="#">
          <p>Log Out</p>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "DropDownUserMenu",

  data () {
    return {
      timer: 0
    }
  },

  methods: {
    closeDropDownAction (status) {
      if (status === "keep-alive") {
        clearTimeout(this.timer)
      } else if (status === "close") {
        this.timer = setTimeout(() => {
          this.$emit("closeDropDownMenu")
        }, 1100)

      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .drop-menu {
    position: relative;
    top: 75px;
    left: 670px;
    height: 81px;
    width: 160px;
    border: 1px solid black;
    border-radius: 7px;
    background-color: #ffffff;
    box-shadow: 0px 2px 5px rgb(143, 138, 138);
    overflow: hidden;

    &__list {
      margin: 0;
      padding: 0;
      list-style-type: none;

      &_li {
        display: flex;
        align-items: center;
        height: 40px;
        cursor: pointer;

        &:hover {
          background-color: #ff004e;
        }

        &:first-child {
          border-bottom: 1px solid black;
        }

        & img {
          height: 25px;
          width: 25px;
          margin-left: 10px;

        }

        & p {
          margin: 0 0 0 10px;
          font-family: Gilroy;
        }
      }
    }
  }

  .wtf-img {
    padding-left: 4px;
  }

  .wtf-p {
    padding-left: 4px;
  }
</style>