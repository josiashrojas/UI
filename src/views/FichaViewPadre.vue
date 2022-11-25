<template>
    <main class="pa-4">
        <v-container>
            <div 
                class="d-flex justify-space-between"
            >
                <v-icon>mdi-arrow-left</v-icon>
                <div>
                    <p>Otras vistas <v-icon>mdi-chevron-right</v-icon></p>
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
                    class="d-flex flex-row-reverse"
                >
                    <v-btn
                        elevation="2"
                    >Ver gráfico</v-btn>
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
                    <v-btn
                        elevation="2"
                    >Ver gráfico</v-btn>
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
                    <v-btn
                        elevation="2"
                    >Ver gráfico</v-btn>
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