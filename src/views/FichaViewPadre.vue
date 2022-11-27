<template>
    <main class="pa-4">
        <v-container>
            <div 
                class="d-flex justify-space-between"
            >
                <v-icon @click="$router.back()">mdi-arrow-left</v-icon>
                <div>
                    <p>Otras visitas <v-icon>mdi-chevron-right</v-icon></p>
                </div>
            </div>
            <p class="text-center my-4">11/12/2021</p>
            <v-row
                class="d-flex justify-space-between"
            >
                <v-col
                        cols="4"
                    >
                        <p class="my-2">Edad</p>
                </v-col>
                <v-col
                        cols="4"
                    >
                        <p class="my-2 text-right">5 años</p>
                </v-col>
            </v-row>
            <h3 class="my-2">Medidas</h3>
            <p class="my-2">Peso (kg)</p>
            <v-row>
                <v-col
                    cols="4"
                >
                    <p class="my-2 text-center">20</p>
                </v-col>
                <v-col
                    cols="8"
                    class="d-flex flex-row-reverse">
                    <router-link
                        :to="{ name: 'graficos', params: { title: 'Peso', data: peso, condition: 'Saludable' }, query: { debug: true }}"
                    >
                        <v-btn
                            elevation="2"
                        >Ver gráfico</v-btn>
                    </router-link>
                </v-col>
            </v-row>
            <p class="my-2">Alto (cm)</p>
            <v-row>
                <v-col
                    cols="4"
                >
                    <p class="my-2 text-center">120</p>
                </v-col>
                <v-col
                    cols="8"
                    class="d-flex flex-row-reverse"
                >
                <router-link
                :to="{ name: 'graficos', params: { title: 'Alto', data: alto, condition: 'Enanismo' }, query: { debug: true }}"
                    >
                    <v-btn
                        elevation="2"
                    >Ver gráfico</v-btn>
                </router-link>
                </v-col>
            </v-row>
            <p class="my-2">IMC</p>
            <v-row>
                <v-col
                    cols="4"
                >
                    <p class="my-2 text-center">14</p>
                </v-col>
                <v-col
                    cols="8"
                    class="d-flex flex-row-reverse"
                >
                    <router-link
                    :to="{ name: 'graficos', params: { title: 'IMC', data: imc, condition: 'Saludable' }, query: { debug: true }}"
                    >
                    <v-btn
                        elevation="2"
                    >Ver gráfico</v-btn>
                    </router-link>
                </v-col>
            </v-row>
            <h3 class="my-2">Medidas</h3>
            <v-row>
                <v-col
                    cols="12"
                    md="6"
                >
                    <p class="my-2 d-flex justify-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus ultricies quam.</p>
                </v-col>
            </v-row>
        </v-container>
    </main>
</template>

<style scoped>
    p{
        margin: 0;
    }
</style>

<script>
export default {
    data: () => ({
        peso: {
            labels: ["Jan", "Feb", "Mar", "Apr","May","Jun"],
            datasets:[{
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
        },
        alto: {
            labels: ["Jan", "Feb", "Mar", "Apr","May","Jun"],
            datasets:[{
                label: 'Alto real',
                data: [35, 40, 42, 44, 35, 37, 40],
                fill: false,
                borderColor: 'rgba(75, 192, 192)',
                backgroundColor : 'rgba(75, 192, 192)',
                tension: 0.1
            },
            {
                label: 'Alto ideal',
                data: [36, 41, 43, 45, 36, 38, 42],
                fill: false,
                borderColor: 'rgba(0, 0, 255)',
                backgroundColor: 'rgba(0, 0, 255)',  
                tension: 0.1
            }]
        },
        imc: {
            labels: ["Jan", "Feb", "Mar", "Apr","May","Jun"],
            datasets:[{
                label: 'IMC real',
                data: [35, 40, 42, 44, 35, 37, 40],
                fill: false,
                borderColor: 'rgba(75, 192, 192)',
                backgroundColor : 'rgba(75, 192, 192)',
                tension: 0.1
            },
            {
                label: 'IMC ideal',
                data: [36, 41, 43, 45, 36, 38, 42],
                fill: false,
                borderColor: 'rgba(0, 0, 255)',
                backgroundColor: 'rgba(0, 0, 255)',  
                tension: 0.1
            }]
        }
    })
}
</script>