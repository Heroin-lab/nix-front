<template>
  <div class="supplier-card">
    <div class="supplier-card__wrapper">
      <img class="supplier-card__image" :src="image" alt="">
      <div class="supplier-card__desc">
        <h3>{{name}}</h3>
        <p>Working hours:<br> From {{ opening }} to {{ closing }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupplierCard",
  props: {
    id: String,
    name: String,
    type: String,
    image: String,
    opening: String,
    closing: String
  },

  data () {
    return {

    }
  },


}
</script>

<style lang="scss" scoped>
 .supplier-card {
   width: 380px;
   height: 180px;
   margin-top: 15px;
   box-shadow: 2px 5px 10px rgb(143, 138, 138);
   border-radius: 7px;
   cursor: pointer;

   &:hover {
     transition: 0.7s;
     transform: scale(1.02);
   }

   &__wrapper {
     display: flex;
     font-family: Gilroy;
   }

   &__desc {
     margin: 35px 0 0 15px;

     & h3 {
       font-size: 24px;
     }

     & p {
       font-size: 20px;
     }
   }

   &__image {
     height: 180px;
     width: 180px;
     border-radius: 7px 0 0 7px;
   }


 }

</style>