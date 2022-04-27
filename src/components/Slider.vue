<template>
  <section class="slider-hub">
    <div class="slides">
      <input type="radio" class="slides__buttons" name="radio-btn" id="radio1">
      <input type="radio" class="slides__buttons" name="radio-btn" id="radio2">
      <input type="radio" class="slides__buttons" name="radio-btn" id="radio3">

      <div class="slides__image first">
        <img src="../assets/for-news-block2.png" alt="#" width="1200" height="628">
      </div>

      <div class="slides__image">
        <img src="../assets/for-news-block2.png" alt="#" width="1200" height="628">
      </div>

      <div class="slides__image">
        <img src="../assets/for-news-block2.png" alt="#" width="1200" height="628">
      </div>

      <div class="slides__nav-auto">
        <div class="auto-btn1"></div>
        <div class="auto-btn2"></div>
        <div class="auto-btn3"></div>
      </div>
    </div>

    <div class="nav-manual">
      <label for="radio1" class="nav-manual__btn"></label>
      <label for="radio2" class="nav-manual__btn"></label>
      <label for="radio3" class="nav-manual__btn"></label>
    </div>
  </section>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {

    }
  }

}
</script>

<style lang="scss" scoped>
  .slider-hub {
    width: 1200px;
    height: 628px;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 20px;
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, .2);
    min-height: calc(90vh - 44px);
  }

  .slides {
    display: flex;
    width: 500%;

    &__buttons {
     display: none;
   }

    &__image {
     width: 20%;
     transition: 1.7s;
   }

    &__nav-auto {
      display: flex;
      position: absolute;
      width: 1200px;
      justify-content: center;
      margin-top: 592px;
    }

    &__nav-auto div {
      border: 3px solid #ffffff;
      padding: 5px;
      border-radius: 10px;
      transition: 0.3s;
    }

    &__nav-auto div:not(:last-child) {
      margin-right: 30px;
    }
  }

  #radio1:checked ~ .slides__nav-auto .auto-btn1 {
    background-color: #ffffff;
  }

  #radio2:checked ~ .slides__nav-auto .auto-btn2 {
    background-color: #ffffff;
  }

  #radio3:checked ~ .slides__nav-auto .auto-btn3 {
    background-color: #ffffff;
  }

  .nav-manual {
    display: flex;
    position: absolute;
    width: 1200px;
    margin-top: -40px;
    justify-content: center;

    &__btn {
      border: 3px solid #ffffff;
      padding: 5px;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.5s;
    }

    &__btn:hover {
      background-color: #ffffff;
    }

    &__btn:not(:last-child) {
      margin-right: 30px;
    }
  }

  #radio1:checked ~ .first {
    margin-left: 0;
  }

  #radio2:checked ~ .first {
    margin-left: -20%;
  }

  #radio3:checked ~ .first {
    margin-left: -40%;
  }
</style>