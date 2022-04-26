<template>
  <VueHeader/>
  <item-list/>
</template>

<script>

import ItemList from "@/components/ItemList";
import VueHeader from "@/components/VueHeader";

export default {
  name: "ProductsPage",
  components: {
    ItemList,
    VueHeader
  }
}
</script>

<style scoped>

</style>