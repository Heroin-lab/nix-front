<template>
  <div class="empty-item-block">
    <h4 class="empty-item-block__oops-msg">Oops! There is empty! &#128543;</h4>
    <h1 class="empty-item-block__choose-msg">Choose something you like from our list of products &#128521;</h1>
  </div>
</template>

<script>
export default {
  name: "ItemEmptyList",
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

  .empty-item-block {
    margin: 0 20px 0 20px;
    padding-top: 141px;
    min-height: 300px;
    text-align: center;
    font-family: Gilroy, 'serif';
    background-color: white;
    border-radius: 7px;
    box-shadow: 2px 5px 10px rgb(143, 138, 138);

    & h1, h4 {
      padding: 0 70px 0 70px;
    }

    &__oops-msg {
      margin-bottom: 20px;
      font-size: 2em;
    }

    &__choose-msg {
      font-size: 3em;
      opacity: 95%;
      background-color: #ff004e;
    }
}
</style>