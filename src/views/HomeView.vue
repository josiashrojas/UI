<script>

export default {
    data: () => ({
      items: [
        { text: 'Juanita Perez JR.'},
      ],
      filterItem: [],
      word: '',
    }),
    created:function() {
      this.filterItem = [...this.items]
    },
    watch:{
      word:function(){
        this.filterItem = this.items.filter(item => item.text.toLowerCase().includes(this.word.toLowerCase()))
      }
    }
  }
</script>

<template>
  <main class="px-4">
    <v-container>
      <router-link :to="{ name: 'padre', params: { type: 1 }, query: { debug: true }}">
        <v-card
        flat
        tile
        color="grey lighten-2"
        class="my-2 d-flex justify-center align-center"
        >
          <v-card-title>Padre</v-card-title>
        </v-card>
      </router-link>
      <router-link :to="{ name: 'buscar', params: { type: 2 }, query: { debug: true }}">
        <v-card
        flat
        tile
        color="grey lighten-2"
        class="my-2 d-flex justify-center align-center"
        >
          <v-card-title>Buscar pediatra</v-card-title>
        </v-card>
      </router-link>
    </v-container>
  </main>
</template>

<style scoped>
  p{
    margin: 0;
  }
  a{
    text-decoration: none;
  }
</style>