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
            lista: listaEst,
            nombre: '',
            apellido: '',
            edad: 0
        }
    },
    methods: {
        //unshift agregar elementos a listas
        agregarEstudianteInicio(){
            this.lista.unshift({nombre: this.mensaje, apellido: "Inicio", edad: 31})
            this.mensaje = ""
        },
        eventoKey(){
            if(event.charCode === 13){
                console.log("Se dispara evento")
                console.log(event)
                this.lista.unshift({nombre: this.mensaje, apellido: "Soza", edad: 31})
            }     
        },
        //Evento desestructurado, se pone el valor del evento usado como atributo entre {} 
        eventoKeyDesestructurado({charCode, key}){
            console.log("Entro al evento")
            if(charCode === 13){
                console.log("Se dispara evento")
                console.log(event)
                console.log(key)
                this.lista.unshift({nombre: this.mensaje, apellido: "Soza", edad: 31})
            }     
        },
        eventoFinal(){
            //ejemplo modificadores de evento
            this.lista.unshift({nombre: this.mensaje, apellido: "Soza", edad: 31})
        },
        agregarEstudianteFin(){
            this.lista.unshift({nombre: this.mensaje, apellido: "Fin", edad: 31})
            this.mensaje = ""
        },
        agregarEstudiante(){
            if(tipo === "I"){
                this.lista.push({nombre: this.mensaje, apellido: "Inicio", edad: 31})
            }else{
                this.lista.push({nombre: this.mensaje, apellido: "Fin", edad: 31})
            }
        },
        agregarEstudianteNuevo(){
            this.lista.push({nombre: this.nombre, apellido: this.apellido, edad: this.edad})
            this.nombre = ""
            this.apellido = ""
            this.edad = 0
        }
    }
})

app.mount('#myApp')
