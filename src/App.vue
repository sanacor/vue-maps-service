<template>
  <div id="app">
    <router-view></router-view>
    <BottomNavi></BottomNavi>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Map from "./components/Map.vue";
import BottomNavi from './components/BottomNavi.vue'

export default {
  name: "App",

  components: {
    // HelloWorld,
    // Map,
    BottomNavi
  },
  data: () => ({
    bottomNav: "recent"
  })
};
</script>

<style>

</style>
