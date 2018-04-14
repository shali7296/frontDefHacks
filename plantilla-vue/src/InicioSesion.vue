<template>

<div class= "center">
<modal name="hello-world">
  hello, world!
</modal>
<h2>Iniciar Sesión</h2>
  <div class="emmm">
        NombreUsuario: 
         <input type = "text" v-model="User.username"><br><br> 
       Contraseña:        
         <input type = "text" v-model ="User.password"><br>
         <br>          
      <button v-on:click="holaa">Ingresar</button>
  </div>
</div>


</template>

<script>

export default {
  data(){
    return{
      User: {
        username:'',
        password: ''
      },
      alert: 'Holaa'
    }
  },
  methods: {
    show () {
      this.$modal.show('hello-world');
    },
    hide () {
      this.$modal.hide('hello-world');
    },
    holaa:function(){
      if(this.User.username == ''){
        this.$modal.show('hello-world', { foo: 'bar' })
      }
      else{
        if(this.User.password == ''){

        }
        else{
        this.$http.post('http://localhost:8081/sakila-spring-backend/Actors/', this.User)
        }
      }
    }
  }
}
</script>
