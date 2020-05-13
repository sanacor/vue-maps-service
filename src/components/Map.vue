<template>
  <v-card class="d-flex pa-2" outlined tile>
    <div id="dmap">
      <div id="map" style="width:100%; height:800px;"></div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {};
  },
  mounted() {
    var container = document.getElementById("map");
    var mapOptions = {
      center: new kakao.maps.LatLng(37.350152, 127.117604),
      level: 4 //지도의 레벨(확대, 축소 정도)
    };
    new kakao.maps.Map(container, mapOptions);
  }
};
</script>

<style scoped></style>
