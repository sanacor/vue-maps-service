<template>
  <v-autocomplete
        v-model="model"
        :items="items"
        :loading="isLoading"
        :search-input.sync="search"
        chips
        clearable
        hide-details
        hide-selected
        item-text="name"
        item-value="symbol"
        label="와인, 와인샵"
        solo
		prepend-inner-icon="mdi-magnify"
      >
  </v-autocomplete>
</template>

<script>
export default {
	name: "AutoComplete",

}
</script>

<style>

</style>