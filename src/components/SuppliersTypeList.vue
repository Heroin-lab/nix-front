<template>
  <main class="suppliers-type-list">
    <div class="container">
      <SupplierTypeCard @cardSelectAction="cardSelectAction"
                        v-if="isCardSelected"
                        :title="selectedCard.selectedTitle"
                        :image="selectedCard.selectedImage"
      />
      <ul v-if="!isCardSelected" class="suppliers-type-list__card-list">
        <li v-for="(supplierType, index) in suppliersTypes"
            :key="index"
        >
          <SupplierTypeCard
              @cardSelectAction="cardSelectAction"
              :title="supplierType.title"
              :image="supplierType.image"
          />
        </li>
      </ul>

      <SupplierList v-if="isCardSelected"/>
    </div>
  </main>
</template>

<script>
import SupplierTypeCard from "@/components/SupplierTypeCard";
import SupplierList from "@/components/SupplierList";

export default {
  name: "SuppliersTypeList",
  components: {
    SupplierTypeCard,
    SupplierList
  },

  data () {
    return {
      suppliersTypes: [
        {
          title: "Restaurant",
          image: "https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123",
        },
        {
          title: "Coffee Shop",
          image: "https://scontent.fiev15-1.fna.fbcdn.net/v/t1.6435-9/42933045_540714513033279_6102126333989486592_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_ohc=ml7Ol-K6_2cAX_hb1kp&_nc_ht=scontent.fiev15-1.fna&oh=00_AT8_epvGh5b2eAIFy6MzreSFXdsTyaoP2p-1uu5wr1d9aw&oe=628D86EC",
        },
        {
          title: "Supermarket",
          image: "https://retailers.ua/media/news/1100-s-crop-w/00/07/7414/1-2-13587.jpg",
        },
      ],

      isCardSelected: false,

      selectedCard: {
        selectedTitle: "",
        selectedImage: "",
      }
    }
  },

  mounted() {
    this.setDefaultSelectCardStatus()
  },

  methods: {
    cardSelectAction (transferredTitle, transferredImage) {
      if (this.isCardSelected === false) {
        this.isCardSelected = true
        this.selectedCard.selectedTitle = transferredTitle
        this.selectedCard.selectedImage = transferredImage
      } else {
        this.isCardSelected = false
      }
    },

    setDefaultSelectCardStatus () {
      this.$store.commit("CHANGE_SELECT_CARD_STATUS_TO_FALSE")
    }
  }
}
</script>

<style lang="scss" scoped>
  .suppliers-type-list {
    margin-top: 10px;

    &__card-list {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 0;
      margin: 0;
      list-style-type: none;
      font-family: Gilroy;
    }
  }
</style>