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

  .container {
    margin: 0 auto;

    max-width: 1200px;
  }
</style>

