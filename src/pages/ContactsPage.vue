<template>
  <q-page class="row justify-evenly">
    <decorative-panel class="side-panel-1" :panel-color="panelColors[0]">
      
      <div class="container text-white side-panel">
        <q-img
            src="assets/contacts_1.jpg"
            spinner-color="white"
            img-class="my-custom-image"
            class="rounded-borders"
          >
          <div class="absolute-bottom text-subtitle1 text-center font-family">
              Карты Таро - это ваше зеркало, и только вы решаете, что оно отражает.
          </div>
        </q-img>      
      </div>

    </decorative-panel>

     <decorative-panel :panel-color="panelColors[1]">
      <template v-slot:header> Контакты </template>
      <div class="container text-white central-panel">
        <p class="text-center contacts-text">
           Связаться с авторами проекта "Время Таро" можно 
            по адресу электронной почты <a class="email-link" href="mailto:tarotmoment@yandex.ru?subject=Mail from Tarot Moment site">tarotmoment@yandex.ru</a>
        </p>  
        <div class="container text-white central-image">
        <q-img
            src="assets/contacts_1.jpg"
            spinner-color="white"
            img-class="my-custom-image"
            class="rounded-borders"
            alt="Картинка с изображением стола, на котором стоят свечи, вазы с цветами и лежит древняя книга"
          >
          <div class="absolute-bottom text-subtitle1 text-center font-family">
              Карты Таро - это ваше зеркало, и только вы решаете, что оно отражает.
          </div>
        </q-img>      
      </div>   
      </div>
      <template v-slot:footer>© Время Таро</template>
    </decorative-panel>

    <decorative-panel class="side-panel-2" :panel-color="panelColors[2]">
      
      <div class="container text-white side-panel">
        <q-img
            src="assets/contacts_2.jpg"
            spinner-color="white"
            img-class="my-custom-image"
            class="rounded-borders"
            alt="Картинка с изображением стола, на котором стоят свечи, вазы с цветами и лежит старые карты Таро"
          >
          <div class="absolute-bottom text-subtitle1 text-center font-family">
              Карты Таро не контролируют ваше будущее, но говорят о нем.
          </div>
        </q-img>      
      </div>
    </decorative-panel>

  </q-page>
</template>

<script setup lang="ts">
import DecorativePanel from 'src/components/DecorativePanel.vue';
import { ref } from 'vue';

const panelColors = ref([
  'rgba(255,228,196, 0.8)',
  'rgba(127,58,173, 0.8)',
  'rgba(245,226,116, 0.8)',
]);

</script>

<style scoped>


.container {
  margin-left: 20px;
  margin-right: 20px;
  max-width: 550px;
}

.central-panel {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin-top: -50px;
}

.side-panel {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin-top: -30px;
}

.email-link {
  display: inline-block;
  color: white;
  text-decoration: none;
  
}

.contacts-text {
  font-size: 20px;
}

.email-link:hover {
  text-decoration: underline overline #b67729;
  text-decoration-thickness: 3px;
}

.font-family {
  font-family: 'vinqueregular';
}

.side-panel-1, .side-panel-2  {
  display: none !important;
  padding-top: 20px;
}

.contacts-text {
  margin-top: 30px;
}

@media (min-width: 1196px) {
  .side-panel-1 {
    display: block !important;
  }
  .central-image {
    display: none;
  }
  .contacts-text {
    font-size: 24px;
  }
}

@media (min-width: 1800px) {
  .side-panel-2 {
    display: block !important;
  }
}

</style>
