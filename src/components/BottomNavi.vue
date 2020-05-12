<template>
  <v-bottom-navigation
    v-model="bottomNav"
  >
    <v-btn value="주변">
      <span>주변</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>

    <v-btn value="채팅">
      <span>채팅</span>
      <v-icon>mdi-chat</v-icon>
    </v-btn>

    <v-btn value="나의">
      <span>나의</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  
  export default {
    components: {
      
    },

    data () {
      return {
        bottomNav: 'recent',
      }
    },
  }
</script>