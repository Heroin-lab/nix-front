<template>
  <div class="supplier-type-card">
    <div class="supplier-type-card__wrapper">
      <div class="supplier-type-card__border"></div>
      <img @click="selectCard"
           v-bind:class="[this.$store.getters.getCardSelectStatus ? 'supplier-type-card__exit-image' : '', 'supplier-type-card__image']"
           :src="image"
           alt="#">
      <h2 class="supplier-type-card__title">{{ title }}</h2>

      <h2 v-if="this.$store.getters.getCardSelectStatus" class="supplier-type-card__arrow">&#8592;</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupplierTypeCard",

  props: {
    title: String,
    image: String,
  },

  data () {
    return {

    }
  },

  methods: {
    selectCard () {
      if (!this.$store.getters.getCardSelectStatus === false) {
        this.$emit('cardSelectAction', this.title, this.image)
      } else {
        this.$emit('cardSelectAction', this.title, this.image)
      }

      this.$store.commit('CHANGE_SELECT_CARD_STATUS')
    },
  }
}
</script>

<style lang="scss" scoped>

  .supplier-type-card {
    margin: 0 0 20px 20px;
    background-color: white;
    border-radius: 7px;
    box-shadow: 2px 5px 10px rgb(143, 138, 138);
    overflow: hidden;
    width: 380px;

    &:hover {
      transition: 0.7s;
      transform: scale(1.01);
    }

    &:last-child {
      margin-left: 0;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 380px;
      text-align: center;
      background-color: black;
      border-radius: 7px;
    }

    &__border {
      position: fixed;
      margin-top: 15px;
      height: 755px;
      width: 347px;
      border: 1px solid white;
      border-radius: 7px;
      z-index: 9;
      pointer-events: none;

    }

    &__image {
      position: relative;
      left: 40px;
      height: 790px;
      width: 1280px;
      border-radius: 7px;
      z-index: 11;

      &:hover {
        transition: 0.7s;
        opacity: 50%;
        z-index: 1;
        cursor: pointer;
      }
    }

    &__exit-image {
      opacity: 50%;
      z-index: 1;
    }

    &__title {
      position: relative;
      height: 0px;
      color: white;
      bottom: 420px;
      font-size: 37px;
      font-weight: normal;
      letter-spacing: 4px;
      text-transform: uppercase;
      z-index: 10;
      pointer-events: none
    }

    &__arrow {
      height: 0;
      position: relative;
      bottom: 370px;
      color: white;
      font-size: 72px;
      font-family: sans-serif;
      z-index: 10;
    }
  }
</style>