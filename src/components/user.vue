<template>
    <div class="users">
        <h1>Users component</h1>
        <ul>
            <li v-for="user in users">
                {{user.name}} - {{user.email}} <button v-on:click="deleteUser(user)">X</button>
            </li>
        </ul>
        <form v-on:submit.prevent="addUser">
        <input type="text" v-model="newUser.name" placeholder="Name">
        <input type="text" v-model="newUser.email" placeholder="Name">
        <button type="submit">Add</button>
        </form>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                users: [
                    /* {
                        name:"Erick",
                        email:"Erick@gmail.com",
                        contact: false
                    },
                    {
                        name:"Alberto",
                        email:"Alberto@gmail.com",
                        contact: false
                    },
                    {
                        name:"Fer",
                        email:"Fer@gmail.com",
                        contact: true
                    } */
                ],
                newUser:{
                    name: null,
                    email: null,
                    contact: null,
                }
            }
        },
        methods:{
            addUser(){
                this.users.push(this.newUser);
                this.newUser = {};
            },
            deleteUser(user){
                this.users.splice(this.users.indexOf(user),1);
            }
        },
        created(){
            this.$http.get('https://jsonplaceholder.typicode.com/users')
            .then(res => this.users = res.body)
        }
    }

</script>

<style lang="css">
    .users{
        background-color: rgb(44, 44, 43);
        color: white;
    }
</style>