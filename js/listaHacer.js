const listaHacer = []

const listaActividades = [{actividad: "Cocinar"}, {actividad: "Leer"}, {actividad: "Dibujar"},
                          {actividad: "Socializar"}, {actividad: "Hacer ejercicio"}]

const app = Vue.createApp({
    //Options API
    data() {
        return {
            //Propiedades reactivas
            lista: listaHacer,
            listaAct: listaActividades,
            nombre: '',
            hora: '',
            dia: '',
            actividad: ''
        }
    },
    methods: {
        agregar(){
            //ejemplo modificadores de evento
            this.lista.unshift({nombre: this.nombre, dia: this.dia, hora: this.hora, actividad: this.actividad})
            this.nombre = ""
            this.hora = ""
            this.dia = ""
        }
    }
})

app.mount('#myApp')
