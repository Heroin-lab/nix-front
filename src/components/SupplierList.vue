<template>
 <div class="supplier-list">
   <ul class="supplier-list__u-list">
     <li v-for="(supplierInfo, index) in suppliersInfo"
         :key="index"
     >
       <SupplierCard
        :id="supplierInfo.id"
        :name="supplierInfo.name"
        :image="supplierInfo.image"
        :opening="supplierInfo.opening"
        :closing="supplierInfo.closing"
       />
     </li>
   </ul>

 </div>
</template>

<script>

import SupplierCard from "@/components/SupplierCard";

export default {
  name: "SuppliersList",
  components: { SupplierCard },

  data () {
    return {
      suppliersInfo: this.$store.getters.getSuppliersInfo
    }
  },

  mounted() {
    this.test()
  },

  methods: {
    test () {
      if (this.$store.getters.getSuppliersInfo.length < 1) {
        let timerGetter = setInterval(() => {
          console.log('f')
          if (this.$store.getters.getSuppliersInfo.length >= 1) {
            clearInterval(timerGetter)
            console.log('d')
            return this.suppliersInfo = this.$store.getters.getSuppliersInfo
          }
        }, 20)

        setTimeout(() => clearInterval(timerGetter), 2000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .supplier-list {

    &__u-list {
      display: flex;
      justify-content: space-around;
      align-content: flex-start;
      flex-wrap: wrap;
      width: 790px;
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
  }
</style>