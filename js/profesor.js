const listaProfesores = [
    { nombre: "Allison", apellido: "Chiquito", edad: 24, asignatura: "Matemáticas"},
    { nombre: "Andrea", apellido: "Bravo", edad: 21, asignatura: "Ciencias Naturales"},
    { nombre: "Angel", apellido: "Perez", edad: 25, asignatura: "Lengua y Literatura"},
    { nombre: "Jofre", apellido: "Paca", edad: 35, asignatura: "Matemáticas" },
    { nombre: "Patricio", apellido: "Haro", edad: 44, asignatura: "Estudios Sociales"},
    { nombre: "Carlos", apellido: "Coronel", edad: 26, asignatura: "Educación Física"}]

const app = Vue.createApp({
        //Options API
        data() {
            return {
                //Propiedades reactivas
                lista: listaProfesores
            }
        },
        methods: {
            //unshift agregar elementos a listas
            agregarProfesor(){
                this.lista.unshift({nombre: "Marco", apellido: "Soza", edad: 31, asignatura: "Inglés"})
            }
        }
    })
    
app.mount('#myApp')