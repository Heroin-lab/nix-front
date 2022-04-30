<template>
  <VueHeader/>
  <UserBasket/>
  <VueFooter/>
</template>

<script>
import VueHeader from "@/components/VueHeader";
import VueFooter from "@/components/VueFooter";
import UserBasket from "@/components/UserBasketPopUp";

export default {
  name: "BasketPage",
  components: {UserBasket, VueFooter, VueHeader }
}
</script>

<style scoped>

</style>