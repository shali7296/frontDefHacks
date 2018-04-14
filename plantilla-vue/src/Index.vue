<template>
<div class="center">
  <h1>{{title}}</h1>
    <img class="logo-big" src="./img/holi.png" size="100%"/>
    <p>
      DefHacks
    </p>
</div>
</template>
<script>
export default{
  data(){
    return{
      title:'TeamFace'
    }
  },
  mounted:function(){
    console.log('Index.vue')
  }
}
</script>

<style>

  background-image: './img/backgroung.jpg'

</style>
