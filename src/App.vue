<template>
  <v-app>
    <nav>
      <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon v-if="type > 0" @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ child }}</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <div v-if="type == 1">
            <v-container class="px-4">
              <v-text-field
                  hide-details
                  append-icon="mdi-magnify"
                  single-line
                  full-width
                  onchange="filter"
                  v-model="word"
                ></v-text-field>
              <h2 class="py-4">Hijos</h2>
              <p v-if="filterItem.length == 0">No existen coincidencias</p>
              <div
                v-for="(item,i) in filterItem"
                :key="i"
              >
                <router-link 
                  :to="{ name: 'fichaPadre', params: { child: item.text, type: 1 }, query: { debug: true, id: i }}"
                >
                  <v-card
                    flat
                    tile
                    color="grey lighten-2"
                    class="pa-2 my-2 d-flex justify-space-between align-center"
                  >
                    <p>{{item.text}}</p>
                  </v-card>
                </router-link>
              </div>
            </v-container>
          </div>
          <div v-else-if="type == 2">
            <router-link 
                to="/buscar"
              >
            <v-card
                flat
                tile
                color="grey lighten-2"
                class="pa-2 my-2 text-center"
              >
              <p>Buscar pacientes</p>
            </v-card>
            </router-link>
            <h2>Pacientes Recientes</h2>
            <div
              v-for="(item,i) in filterItem"
              :key="i"
            >
              <router-link 
                :to="{ name: 'fichaPediatra', params: { child: item.text, type: 2 }, query: { debug: true, id: i }}"
              >
                <v-card
                  flat
                  tile
                  color="grey lighten-2"
                  class="pa-2 my-2 d-flex justify-space-between align-center"
                >
                  <p>{{item.text}}</p>
                </v-card>
              </router-link>
            </div>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </nav>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    data: () => ({
      child: "",
      type: 0,
      drawer: false,
      group: null,
      mode: 'padre',
      items: [
        { text: 'Juanita Perez JR.'},
        { text: 'Veronica Perez'},
        { text: 'Alfredo Perez'},
      ],
      itemsPediatra: [
        { text: 'Juanita Perez JR.'},
        { text: 'Veronica Perez'},
      ],
      filterItem: [],
      word: '',
    }),
    watch:{
      word:function(){
        this.filterItem = this.items.filter(item => item.text.toLowerCase().includes(this.word.toLowerCase()))
      },
    },
    beforeUpdate() {
      if(this.$route.query.debug) {
        this.filterItem = this.type == 1 ? [...this.items]: [...this.itemsPediatra]
        this.child = this.$route.params.child;
        this.type = this.$route.params.type;
        if(this.$route.query.debug) {
            this.debug = this.$route.query.debug;
        }
      } else {
        this.child = "";
        this.type = 2;
      }
    }
  };
</script>

<style scoped>
  p{
    margin: 0;
  }
  a{
    text-decoration: none;
  }
</style>