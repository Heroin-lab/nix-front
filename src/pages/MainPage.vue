<template>
    <VueHeader/>
    <Slider/>
    <VueFooter/>
</template>

<script>

import VueHeader from "@/components/VueHeader";
import Slider from "@/components/Slider";
import VueFooter from "@/components/VueFooter";

export default {
  name: "MainPage",
  components: {
    VueHeader,
    Slider,
    VueFooter
  }
}
</script>

<style scoped>

</style>