<template>
  <div class="grey lighten-5 pa-4">
    <v-row>
      <v-col>
        <v-card>
          <v-list>
            <v-subheader>프로필</v-subheader>
            <v-list-item :height="100">
              <v-list-item-content>
                <v-list-item-title>I'm a list item</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>I'm a list item</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>I'm a list item</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider :inset="inset"></v-divider>

            <v-subheader>활동</v-subheader>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>I'm a list item</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider :inset="inset"></v-divider>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>I'm a list item</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider :inset="inset"></v-divider>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>I'm a list item</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    inset: false,
    items: ["default", "vertical"],
    variant: "default"
  })
};
</script>