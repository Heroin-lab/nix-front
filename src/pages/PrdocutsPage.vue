<template>
  <VueHeader/>
  <item-list/>
  <VueFooter/>
</template>

<script>

import ItemList from "@/components/ItemList";
import VueHeader from "@/components/VueHeader";
import VueFooter from "@/components/VueFooter";

export default {
  name: "ProductsPage",
  components: {
    ItemList,
    VueHeader,
    VueFooter
  }
}
</script>

<style scoped>

</style>