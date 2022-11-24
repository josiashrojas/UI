<script>

export default {
    data: () => ({
      items: [
        { text: 'Real-Time'},
        { text: 'Audience'},
        { text: 'Conversions'},
      ],
    }),
  }
</script>

<template>
  <main class="px-4">
    <v-text-field
        hide-details
        append-icon="mdi-magnify"
        single-line
        full-width
      ></v-text-field>
    <h2 class="py-4">Hijos</h2>
    <router-link 
      v-for="(item,i) in items"
      :key="i"
      to="/ficha"
    >
    <v-card
      flat
      tile
      color="grey"
      class="pa-2 my-2 d-flex justify-space-between align-center"
    >
      <p>{{item.text}}</p>
      <v-icon>mdi-message-text</v-icon>
    </v-card>
  </router-link>
  </main>
</template>

<style scoped>
  p{
    margin: 0;
  }
</style>