const listaEst = [
    { nombre: "Erick", apellido: "Zambrano", edad: 24 },
    { nombre: "Andrea", apellido: "Sanchez", edad: 21 },
    { nombre: "Juanito", apellido: "Perez", edad: 18 },
    { nombre: "Maria", apellido: "Tena", edad: 24 },
    { nombre: "Patricio", apellido: "Zambrano", edad: 44 }]

const app = Vue.createApp({
    //Options API
    data() {
        return {
            //Propiedades reactivas
            lista: listaEst
        }
    },
    methods: {
        //unshift agregar elementos a listas
        agregarEstudiante(){
            this.lista.unshift({nombre: "Marco", apellido: "Soza", edad: 31})
        }
    }
})

app.mount('#myApp')