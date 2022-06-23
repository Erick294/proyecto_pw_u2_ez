console.log("Objetos y librerías de Vue.JS")
console.log(Vue)

const app = Vue.createApp({
    //backticks
    //utiliza declaracion declarativa para ejecutar declaraciones js
    template: ` 
       <h1>Hola mundo desde Vue.js</h1>
       <p>Expresion JS</p>
       <p>{{1-1}}</p>
       <h2>Arreglo</h2>
       <p>{{[1,2,3,4,5]}}</p>
       <h2>Objeto</h2>
       <p>{{{nombre: "Erick", apellido: "Zambrano"}}}</p>
       <h2>Funcion ternaria</h2>
       <p>{{true ? "Activo" : "Inactivo"}}</p>
       `
})

app.mount("myApp");