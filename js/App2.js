console.log("Objetos y librerías de Vue.JS")
console.log(Vue)

const app = Vue.createApp({
   data(){
       return{
           mensaje: "Mensaje desde atributo data",
           mensaje2: "Segundo mensaje"
       }
   }
})

app.mount("myApp");