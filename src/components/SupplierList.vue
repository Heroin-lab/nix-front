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
      suppliersInfo: [
        {
          id: "1",
          name: "Pizza Club",
          image: "https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123",
          opening: "9:00",
          closing: "22:00"
        },
        {
          id: "2",
          name: "Roll Club",
          image: "https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123",
          opening: "9:00",
          closing: "22:00"
        },
        {
          id: "2",
          name: "Roll Club",
          image: "https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123",
          opening: "9:00",
          closing: "22:00"
        }
      ]
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