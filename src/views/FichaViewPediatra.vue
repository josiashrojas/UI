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
            <v-row class="justify-center">
                <v-col
                    cols="5"
                    sm="5"
                    md="4"
                >
                    <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :nudge-left="75"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field 
                                v-model="date"
                                label="Fecha de ficha"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="date"
                            no-title
                            scrollable
                            locale="es-CL"
                            @input="menu = false"
                        >
                        </v-date-picker>
                    </v-menu>
                </v-col>
            </v-row>
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
                        <v-text-field
                            v-model="annos"
                            label="Edad"
                            height="25px"
                            dense
                            suffix="Años"
                        ></v-text-field>
                </v-col>
            </v-row>
            <h3 class="my-2">Medidas</h3>
            <p class="my-2">Peso (kg)</p>
            <v-row>
                <v-col
                    cols="5"
                >
                    <v-text-field
                        v-model="peso"
                        label="Peso"
                        height="25px"
                        dense
                        suffix="kg"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="7"
                    class="d-flex flex-row-reverse"
                >
                </v-col>
            </v-row>
            <p class="my-2">Alto (cm)</p>
            <v-row>
                <v-col
                    cols="5"
                >
                    <v-text-field
                        v-model="alto"
                        label="Alto"
                        height="25px"
                        dense
                        suffix="cm"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="7"
                    class="d-flex flex-row-reverse"
                >
                </v-col>
            </v-row>
            <p class="my-2">IMC</p>
            <v-row>
                <v-col
                    cols="5"
                >
                    <v-text-field
                        v-model="imc"
                        label="IMC"
                        height="25px"
                        dense
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="7"
                    class="d-flex flex-row-reverse"
                >
                </v-col>
            </v-row>
            <h3 class="my-2">Razón de visita</h3>
            <v-row>
                <v-col
                    cols="12"
                    md="6"
                >
                    <v-textarea
                    v-model="razon"
                    solo
                    name="input-7-4"
                    ></v-textarea>
                </v-col>
            </v-row>
            <center>
                <router-link :to="{ name: 'fichaPediatraGuardado', params: { date, annos, alto, peso, imc, razon, child, type: 2}, query: { debug: true }}">
                    <v-btn
                        class="ma-2"
                        :loading="loading4"
                        :disabled="loading4"
                        color="info"
                        @click="loader = 'loading4'"
                    >
                    Guardar Ficha
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
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
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