<template>
  <div
    class="fullscreen text-white text-center q-pa-md flex flex-center bckgrnd"
  >
    <div>
      <div class="error">404</div>

      <div class="text-h2" >Вы заблудились в мире магии</div>

      <q-btn
        class="q-mt-xl"
        color="accent"
        text-color="dark"
        unelevated
        to="/"
        label="На главную"
        no-caps
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scope>
  .bckgrnd {
      background-image: url(/assets/bg-page.jpg);
      background-repeat: repeat;
    }
  .error {
      font-size: 30vh;
      font-family: 'vinqueregular';
      text-transform: lowercase;
    }

</style>
