<template>
    <main class="pa-4">
        <v-container>
            <div 
                class="d-flex justify-space-between"
            >   
                <router-link :to="{ name: 'buscar', params: { type: 2 }, query: { debug: true }}">
                    <v-icon>mdi-arrow-left</v-icon>
                </router-link>
                <div>
                    <p>Otras vistas <v-icon>mdi-chevron-right</v-icon></p>
                </div>
            </div>
            <p class="text-center my-4">{{ date }}</p>
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
                        <p class="my-2 text-right">{{ annos }} años</p>
                </v-col>
            </v-row>
            <h3 class="my-2">Medidas</h3>
            <p class="my-2">Peso (kg)</p>
            <v-row>
                <v-col
                    cols="4"
                >
                    <p class="my-2 text-center">{{ peso }}</p>
                </v-col>
                <v-col
                    cols="8"
                    class="d-flex flex-row-reverse"
                >
                </v-col>
            </v-row>
            <p class="my-2">Alto (cm)</p>
            <v-row>
                <v-col
                    cols="4"
                >
                    <p class="my-2 text-center">{{ alto }}</p>
                </v-col>
                <v-col
                    cols="8"
                    class="d-flex flex-row-reverse"
                >
                </v-col>
            </v-row>
            <p class="my-2">IMC</p>
            <v-row>
                <v-col
                    cols="4"
                >
                    <p class="my-2 text-center">{{ imc }}</p>
                </v-col>
                <v-col
                    cols="8"
                    class="d-flex flex-row-reverse"
                >
                </v-col>
            </v-row>
            <h3 class="my-2">Medidas</h3>
            <v-row>
                <v-col
                    cols="12"
                    md="6"
                >
                    <p class="my-2 d-flex justify-center">{{ razon }}</p>
                </v-col>
            </v-row>
            <center>
                <router-link :to="{ name: 'fichaPediatra', params: { date, annos, alto, peso, imc, razon, child, type: 2}, query: { debug: true }}">
                    <v-btn
                        class="ma-2"
                        :loading="loading4"
                        :disabled="loading4"
                        color="info"
                        @click="loader = 'loading4'"
                    >
                    Editar Ficha
                    <template v-slot:loader>
                        <span class="custom-loader">
                        <v-icon light>mdi-cached</v-icon>
                        </span>
                    </template>
                    </v-btn>
                </router-link>
            </center>
        </v-container>
    </main>
</template>

<style scoped>
    p{
        margin: 0;
    }
    
    .custom-loader {
        animation: loader 1s infinite;
        display: flex;
    }
    @-moz-keyframes loader {
        from {
        transform: rotate(0);
        }
        to {
        transform: rotate(360deg);
        }
    }
    @-webkit-keyframes loader {
        from {
        transform: rotate(0);
        }
        to {
        transform: rotate(360deg);
        }
    }
    @-o-keyframes loader {
        from {
        transform: rotate(0);
        }
        to {
        transform: rotate(360deg);
        }
    }
    @keyframes loader {
        from {
        transform: rotate(0);
        }
        to {
        transform: rotate(360deg);
        }
    }
</style>

<script>
    export default {
        data: () => ({
            child: "",
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            debug: false,
            menu: false,
            annos: "",
            alto: "",
            peso: "",
            imc: "",
            razon:"",
            loading4: false,
        }),
        created() {
            if(this.$route.query.debug) {
                this.child = this.$route.params.child;
                this.date = this.$route.params.date;
                this.annos = this.$route.params.annos;
                this.alto = this.$route.params.alto;
                this.peso = this.$route.params.peso;
                this.imc = this.$route.params.imc;
                this.razon = this.$route.params.razon;
                if(this.$route.query.debug) {
                    this.debug = this.$route.query.debug;
                }
            }
        },
        watch: {
            loader () {
                const l = this.loader
                this[l] = !this[l]

                setTimeout(() => (this[l] = false), 3000)

                this.loader = null
            },
        },
    }
</script>