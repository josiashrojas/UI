<script>

export default {
    data: () => ({
      items: [
        { text: 'Juanita Perez JR.'},
        { text: 'Veronyre Sevel'},
        { text: 'Stylos Rosewood'},
        { text: 'Junipera Talonsnatch'},
        { text: 'Angelo Ironmore'},
        { text: 'Evodia Talonsnatch'},
        { text: 'Matricara Watchwoods'},
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
    <v-text-field
        hide-details
        append-icon="mdi-magnify"
        single-line
        full-width
        onchange="filter"
        v-model="word"
        class="pb-8"
      ></v-text-field>

    <p v-if="filterItem.length == 0">No existen coincidencias</p>
    <router-link 
      v-for="(item,i) in filterItem"
      :key="i"
      to="/fichaPediatra"
    >
    <v-card
      flat
      tile
      color="grey lighten-2"
      class="pa-2 my-2 d-flex justify-space-between align-center"
    >
      <p>{{item.text}}</p>
      <v-icon>mdi-weather-sunny</v-icon>
    </v-card>
  </router-link>
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