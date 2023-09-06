<template>
  <q-page class="row justify-evenly bckgrnd">
    <decorative-panel panel-color="rgba(127,58,173, 0.8)">
      <template v-slot:header> Контакты </template>
      <div class="container text-white">
        <p>
           Связаться с авторами проекта можно 
            по адресу электронной почты <a class="email-link" href="mailto:tarotmoment@yandex.ru?subject=Mail from Tarot Moment site">tarotmoment@yandex.ru</a>
        </p>
        <q-img
            src="~assets/contacts.jpg"
            spinner-color="white"
            img-class="my-custom-image"
            class="rounded-borders"
          >
          <div class="absolute-bottom text-subtitle1 text-center">
              Карты Таро не предсказывают будущее, они его создают
          </div>
        </q-img>      
      </div>
      <template v-slot:footer>© Время Таро</template>
    </decorative-panel>
  </q-page>
</template>

<script setup lang="ts">
import DecorativePanel from 'src/components/readings/DecorativePanel.vue';


</script>

<style scoped>
.bckgrnd {
  background-image: url(./src/assets/bg-main.jpg);
  background-size: cover;
}

.container {
  margin-left: 20px;
  margin-right: 20px;
  
}

.email-link {
  display: inline-block;
  color: white;
  text-decoration: underline #b67729;
  text-decoration-thickness: 2px;
  font-size: 24px;
}

.email-link:hover {
  text-decoration: underline overline #b67729;
  text-decoration-thickness: 3px;
}

</style>
