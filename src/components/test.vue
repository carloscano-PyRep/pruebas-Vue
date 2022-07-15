<template>
    <div>
        <h1>
        {{user.name}}
        </h1>
        <div v-html = "title">
        </div>
        <div v-text="title"></div>
        <div v-if="login">
            <p>Sesión iniciada de {{user.name}} {{user.apellido}}</p>
        </div>
        <div v-else="login">
             <p>Sesión no iniciada de {{user.name}} {{user.apellido}}</p>
        </div>
        <hr>
        <div>
            <ul>
                <li v-for="task in tasks">
                {{task.tarea}}</li>
            </ul>
        </div>
        <input type="text" v-model="user.name">
        <div>
            <button type="button" v-on:click="saludar(user.name)">Clic me</button>
            <hr>
            <input type="text" v-on:keyup.enter="typing">
        </div>
        <div>
            {{fullname}}
        </div>
        <div>
            {{msg}}
        </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                title : '<h1>Hola desde un script dentro de test</h1>',
                user: {
                    name: 'Sebastian',
                    apellido: 'Cano'
                },
                login: true,
                tasks:[
                    {
                        tarea: 'Estudiar vue'
                    },
                    {
                        tarea: 'Integracion de RXJS'
                    },
                    {
                        tarea: 'Repasar angular'
                    }
                ]
            }
        },
        methods:{
            saludar(name){
                alert("Saludar " + name)
            },
            typing(e){
                console.log(e.target.value);
                console.log("Enter")
            }
        },
        computed:{
            fullname(){
                return this.user.name +' '+ this.user.apellido
            }
        },
        props:{
            msg:{
                type:String,
                default: 'Mensaje por defecto'
            }
        }
    }
</script>

<style>

</style>