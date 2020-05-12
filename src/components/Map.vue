<template>
  <vue-daum-map
      :appKey="appKey"
      :center.sync="center"
      :level.sync="level"
      :mapTypeId="mapTypeId"
      :libraries="libraries"
      @load="onLoad"
      style="width:400px;height:580px;"/>
</template>

<script>
import VueDaumMap from 'vue-daum-map'

export default {
  name: "Map",
  components: {
    VueDaumMap
  },
  data: () => ({
    appKey: "b17c77211acfdb44a6e6d6a91310cd44", // 테스트용 appkey
    center: { lat: 37.350152, lng: 127.117604 }, // 지도의 중심 좌표
    level: 3, // 지도의 레벨(확대, 축소 정도),
    mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
    libraries: [], // 추가로 불러올 라이브러리
    map: null // 지도 객체. 지도가 로드되면 할당됨.
  }),
  methods: {
    // 지도가 로드 완료되면 load 이벤트 발생
    onLoad(map) {
      this.map = map;
    }
  }
};
</script>