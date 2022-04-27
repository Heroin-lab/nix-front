<template>
  <footer class="footer-block">
    <p class="footer-block__sign">Web app was fully developed by Kirill Serkins</p>
  </footer>
</template>

<script>
export default {
  name: "VueFooter",

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .footer-block {
    position: relative;
    height: 49px;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 -5px 10px rgb(224, 221, 221);
    border-top: 1px solid #adadad;
    text-align: center;

    &__sign {
      margin-bottom: 7px;
      font-family: Gilroy;
      font-size: 14px;
      color: rgba(87,87,87,0.84);
    }
  }
</style>