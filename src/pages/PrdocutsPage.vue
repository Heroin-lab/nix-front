<template>
  <Header/>
  <item-list/>
</template>

<script>

import ItemList from "@/components/ItemList";
import Header from "@/components/Header";

export default {
  name: "ProductsPage",
  components: {
    ItemList,
    Header
  }
}
</script>

<style scoped>

</style>