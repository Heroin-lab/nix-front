<template>
  <div class="orders-list">
    <div class="orders-list__window">
      <div class="orders-list__window_header">
        <h2>Your Orders</h2>
        <span @click="this.$emit('closeUserOrderWindow')">&#10005;</span>
      </div>
      <div class="orders-list__window_body">
        <ul class="orders-list__window_u-list">
          <li v-for="(userOrder, index) in  userPreviousOrders"
            :key="index"
          >
            <UserOrderCard
              :paidStatus="userOrder.paid_Status"
              :address="userOrder.address"
              :price="userOrder.price"
              :productArray="userOrder.ProductArr"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import UserOrderCard from "@/components/UserOrderCard";

export default {
  name: "UserOrdersList",
  components: {
    UserOrderCard
  },

  data () {
    return {
      userPreviousOrders: []
    }
  },

  mounted() {
    this.uploadUserPreviousOrders()
  },

  methods: {
    async uploadUserPreviousOrders () {
      await this.$store.dispatch("uploadUserOrders", {user_Id: localStorage.getItem("user_id")})
      this.userPreviousOrders = this.$store.getters.getUserPreviousOrders
    },
  }
}
</script>

<style lang="scss" scoped>

  .orders-list {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    z-index: 999;

      &__window {
        background-color: white;
        width: 940px;
        height: 700px;
        border-radius: 7px;
        cursor: default;
        z-index: 1001;

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

        &_body {
          height: 636px;
          padding: 0;
          margin: 0;
          list-style-type: none;
          overflow: auto;
          cursor: default;
        }

        &_u-list {
          margin: 0;
          padding: 0;
          list-style-type: none;
        }
      }
    }
</style>