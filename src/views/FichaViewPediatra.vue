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
                            label="Edad"
                            height="25px"
                            dense
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
                        label="Peso (kg)"
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
            <p class="my-2">Alto (cm)</p>
            <v-row>
                <v-col
                    cols="5"
                >
                    <v-text-field
                        label="Alto (cm)"
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
            <p class="my-2">IMC</p>
            <v-row>
                <v-col
                    cols="5"
                >
                    <v-text-field
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
            <h3 class="my-2">Medidas</h3>
            <v-row>
                <v-col
                    cols="12"
                    md="6"
                >
                    <v-textarea
                    solo
                    name="input-7-4"
                    label="Solo textarea"
                    ></v-textarea>
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
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                menu: false,
            }),
    }
</script>