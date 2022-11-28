<template>
    <main class="pa-4 text-center">
        <div class="px-2 d-flex justify-space-between">
            <v-icon @click="$router.back()">mdi-arrow-left</v-icon>
            <div></div>
        </div>
        <v-container>
            <!---------------------------------- Carrusel ------------------------------------------------>
            <v-card class="pa-3.5" >
                <p> {{title}} </p>
                        <v-sheet color="white" >
                            <!-- <canvas height="flex" widht="flex" :id="title"></canvas> -->
                            <canvas height="flex" widht="flex" :id="title"></canvas>
                        </v-sheet >
            </v-card>              
            <v-sheet color="white" height="30" ></v-sheet>
            <!---------------------------------- Estado ------------------------------------------------>
            <v-btn v-if="condition == 'Saludable'" color="green" text outlined > {{condition}} </v-btn>
            <v-btn v-else color="red" text outlined > {{condition}} </v-btn>  
            
            <v-sheet color="white" height="30" ></v-sheet>
                    
            <v-card>
                <v-card-title> Comentarios </v-card-title>
                <v-sheet  class="pa-4 text-justify">{{comentarios}}</v-sheet>
            </v-card>
        </v-container>    
    </main>
</template>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    import Chart from "chart.js/auto" ;
    export default {
        data() {
            return {
                data: this.data,
                title: this.title,
                conditions: ['Saludable','Problemas de Crecimiento','Gigantismo','Sobrepeso', 'Bajopeso'],
                condition: this.condition,
                comentarios: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }             
        },
        mounted() {
            const ctx = document.querySelector(`#${this.title}`);
            
            const Peso = new Chart(ctx, {
                type: 'line',
                data: this.data,
                
            });
        },
        created() {
            if(this.$route.query.debug) {
                this.title = this.$route.params.title;
                this.data = this.$route.params.data;
                this.condition = this.$route.params.condition;
                if(this.$route.query.debug) {
                    this.debug = this.$route.query.debug;
                }
            }
        },
    }

</script>