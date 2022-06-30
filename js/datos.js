const app = Vue.createApp({
    //Options API
    data(){
        return {
            //Propiedades reactivas
            mensaje: "Hola mundo",
            mensaje1: "Mi primer mensaje"
        }
    },
    methods: {
        cambiarMensaje(){
            this.mensaje = "texto cambiado";
        },
        cambiarMensajeMayusculas(){
            this.mensaje1 = this.mensaje1.toUpperCase();
        },
        cambiarTodo(){
            this.cambiarMensaje()
            this.cambiarMensajeMayusculas()
        }
    }
})

app.mount('#myApp')