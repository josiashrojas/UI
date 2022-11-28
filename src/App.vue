<template>
  <v-app>
    <nav>
      <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

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
          <div v-if="mode == 'padre'">
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
              <router-link 
                v-for="(item,i) in filterItem"
                :key="i"
                to="/fichaPadre"
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
            </v-container>
          </div>
          <div v-else>
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
            <router-link 
                v-for="(item,i) in filterItem"
                :key="i"
                to="/fichaPadre"
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
  created:function() {
    this.filterItem = this.mode == 'padre' ? [...this.items]: [...this.itemsPediatra]
  },
  watch:{
    word:function(){
      this.filterItem = this.items.filter(item => item.text.toLowerCase().includes(this.word.toLowerCase()))
    }
  },
  beforeUpdate() {
    if(this.$route.query.debug) {
      this.child = this.$route.params.child;
      this.type = this.$route.params.type;
      if(this.$route.query.debug) {
          this.debug = this.$route.query.debug;
      }
    } else {
      this.child = "";
      this.type = 0;
    }
  },
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