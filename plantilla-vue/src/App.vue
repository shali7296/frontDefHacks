<template>
  <div>
    <header>
      <div class="branding" >
        <img class ="logo-small" src="./img/holi.png" />
        <span href="#/" >TeamFace</span>
      </div>
      <nav color="grey">
        <a href="#/">Home</a>
        <a href="#/hello">Reconocimiento</a>
        <a href="#/listPerson">Lista</a>
      </nav>
    </header>

    <main class="container">
      <router-view></router-view>
    </main>

</div>
</template>

<script>
export default {

}
</script>
