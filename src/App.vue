<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <test msg="Mensaje mediante props"/>
    <user/>
    <nav>
      <ul>
        <li>
          <router-link to="/test">
            Test
          </router-link>
        </li>
        <li><a href="#">User</a></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import test from './components/test'
import user from './components/user'

export default {
  name: 'App',
  components: {
    HelloWorld,
    test,
    user
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
