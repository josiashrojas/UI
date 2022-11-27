


<template>
    <main class="pa-4 text-center">
        <!---------------------------------- Carrusel ------------------------------------------------>
        <v-card class="pa-3.5" >
            <p> {{title}} </p>
                    <v-sheet color="white" >
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

    </main>
  </template>


    


<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    import Chart from "chart.js/auto" ;
    export default {
        data() {
            return {
                title: 'Altura',
                conditions: ['Saludable','Problemas de Crecimiento','Gigantismo','Sobrepeso', 'Bajopeso'],
                condition: 'Enanismo',
                comentarios: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }             
                               
        },
    
        mounted() {
            const labels = ["Jan", "Feb", "Mar", "Apr","May","Jun"];
            const ctx = document.querySelector('#Peso');
            const data = {
                labels: labels,
                datasets: [{
                    label: 'Peso real',
                    data: [35, 40, 42, 44, 35, 37, 40],
                    fill: false,
                    borderColor: 'rgba(75, 192, 192)',
                    backgroundColor : 'rgba(75, 192, 192)',
                    tension: 0.1
                },
                {
                    label: 'Peso ideal',
                    data: [36, 41, 43, 45, 36, 38, 42],
                    fill: false,
                    borderColor: 'rgba(0, 0, 255)',
                    backgroundColor: 'rgba(0, 0, 255)',  
                    tension: 0.1
                }]
            };
            const Peso = new Chart(ctx, {
                type: 'line',
                data: data,
                
            });
            const ctx2 = document.querySelector('#Altura');
            const data2 = {
                labels: labels,
                datasets: [{
                    label: 'Altura real',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgba(75, 192, 192)',
                    backgroundColor : 'rgba(75, 192, 192)', 
                    tension: 0.1
                },
                {
                    label: 'Altura ideal',
                    data: [22, 59, 10, 83, 56, 15, 40],
                    fill: false,
                    borderColor: 'rgba(0, 0, 255)', 
                    backgroundColor: 'rgb(0, 0, 255)',
                    tension: 0.1
                    
                }],
            };
            const Altura = new Chart(ctx2, {
                type: 'line',
                data: data2,
                
            });
        },
        created() {
            this.title = 'Altura';
           /* this.title = this.$route.params.chart; */
        },
    }

</script>