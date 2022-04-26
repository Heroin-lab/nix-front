<template>
  <VueHeader/>
  <SuppliersTypeList/>
</template>

<script>

import VueHeader from "@/components/VueHeader";
import SuppliersTypeList from "@/components/SuppliersTypeList";

export default {
  name: "SuppliersPage",
  components: {
    VueHeader,
    SuppliersTypeList
  }

}
</script>

<style scoped>

</style>