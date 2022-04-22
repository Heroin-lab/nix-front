<template>
  <div id="app">
  </div>
  <router-view/>
</template>

<script>
  export default {
    name: 'App',
    components: {
    }
  }
</script>

<style lang="scss">
  @import url("./fonts/stylesheet.css");

  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  .container {
    margin: 0 auto;

    max-width: 1200px;
  }
</style>

