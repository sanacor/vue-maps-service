<template>
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="와인, 와인샵"
      prepend-inner-icon="mdi-magnify"
      solo-inverted
    ></v-autocomplete>  
</template>
<script>
  export default {
    name: "AutoComplete",
    data () {
      return {
        loading: false,
        items: [],
        search: null,
        select: null,
        states: [],
      }
    },
    watch: {
      search (val) {
        if (this.states.length > 0) return
        this.isLoading = true
        // Lazily load input items
        axios.get('https://z6zh3ycr0d.execute-api.ap-northeast-2.amazonaws.com/dev/winelist')
          .then(res => {
            this.states = res.data
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => (this.isLoading = false))
        val && val !== this.select && this.querySelections(val)
      },
    },
    methods: {
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
    },
  }
</script>