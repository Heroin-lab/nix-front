<template>
  <VueHeader :basketCounterProp="basketCounter" />
  <item-list @plusBasketCounter="basketCounter += 1"/>
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
  },

  data () {
    return {
      basketCounter: 0
    }
  },

  methods: {
    // plusBasketCounter () {
    //   this.basketCounter++
    // }
  }
}
</script>

<style scoped>

</style>