<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


<style>
  @import url('https://fonts.googleapis.com/css?family=Cairo&display=swap');
  #app {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    font-family: 'Cairo', sans-serif;
  }
</style>
