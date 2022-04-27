<template>
  <VueHeader/>
  <SuppliersTypeList/>
  <VueFooter/>
</template>

<script>

import VueHeader from "@/components/VueHeader";
import SuppliersTypeList from "@/components/SuppliersTypeList";
import VueFooter from "@/components/VueFooter";

export default {
  name: "SuppliersPage",
  components: {
    VueHeader,
    SuppliersTypeList,
    VueFooter
  }

}
</script>

<style scoped>

</style>