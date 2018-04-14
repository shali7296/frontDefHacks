<template>
  <div>
    <header>
      <div class="branding">
        <img class ="logo-small" src="./img/fidget-spinner.svg" />
        <span>Nagevación superior</span>
      </div>
      <nav>
        <a href="#/">Home</a>
        <a href="#/listPerson">Lista</a>
        <a href="#/inicioSesion">Iniciar Sesión</a>
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
