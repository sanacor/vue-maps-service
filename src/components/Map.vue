<template>
  <v-card class="d-flex pa-2" outlined tile>
    <AutoComplete></AutoComplete>
    <div id="dmap">
      <div id="map" style="width:100%; height:800px;"></div>
    </div>
    <SwipeableBottomSheet></SwipeableBottomSheet>
  </v-card>
</template>

<script>
import AutoComplete from './AutoComplete.vue'
import SwipeableBottomSheet from './SwipeableBottomSheet.vue'

export default {
  name: "Map",
  components: {
    AutoComplete,
    SwipeableBottomSheet
  },
  data() {
    return {
		wine_shop_location_data: null,
		wineShopPositions: []
	};
  },
  mounted() {
	var self = this;
	var container = document.getElementById("map");

	// axios.get('https://z6zh3ycr0d.execute-api.ap-northeast-2.amazonaws.com/dev/endpoint')
	axios.get('https://z6zh3ycr0d.execute-api.ap-northeast-2.amazonaws.com/dev/endpoint')
      .then(function (response) {
        console.log(response);
        self.wine_shop_location_data = response.data
        
      })
      .then(function (wine_shop_location_data) {
        console.log(self.wine_shop_location_data);
        for (const key in self.wine_shop_location_data) {
          self.wineShopPositions.push({
            title: key,
            latlng: new kakao.maps.LatLng(self.wine_shop_location_data[key]['lat'], self.wine_shop_location_data[key][
              'lng'
            ])
          })
        }

        
      })
      .then(function () {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
          mapOption = {
            center: new kakao.maps.LatLng(37.350152, 127.117604), // 지도의 중심좌표 
            level: 3 // 지도의 확대 레벨 
          };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // self.wineShopMarkers = []

        foo(map, self.wineShopPositions)


      })
      .catch(function (error) {
        console.log(error);
      });

    function foo(map, positions) {
      var markerImageSrc = 'https://i.ibb.co/vsvfvjM/wine.png'; // 마커이미지의 주소입니다

      for (var i = 0; i < positions.length; i++) {

        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다    
        var markerImage = new kakao.maps.MarkerImage(markerImageSrc, imageSize);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: positions[i].latlng, // 마커를 표시할 위치
          title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage // 마커 이미지 
        });
      }
	}
  }
//     var mapOptions = {
//       center: new kakao.maps.LatLng(37.350152, 127.117604),
//       level: 4 //지도의 레벨(확대, 축소 정도)
//     };
//     new kakao.maps.Map(container, mapOptions);
//     axios
//       .get(
//         "https://z6zh3ycr0d.execute-api.ap-northeast-2.amazonaws.com/dev/endpoint"
//       )
//       .then(function(response) {
//         console.log(response.data);
//       });
//   }
};
</script>

<style scoped></style>
