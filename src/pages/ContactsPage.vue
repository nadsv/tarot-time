<template>
  <q-page class="row justify-evenly">
    <decorative-panel class="side-panel-1" :panel-color="panelColors[0]">
      <template v-slot:header> О гадании на картах Таро </template>
      <div class="container side-panel">
        <p>
          <span class="accent-text">Гадание на картах Таро</span> - это один из
          вариантов гадания, который использует специальную колоду из 78 карт с
          символическими изображениями. Гадающий задает вопрос, перемешивает
          колоду и выкладывает карты в определенном порядке, называемом
          раскладом. Затем он толкует значение каждой карты в зависимости от ее
          положения, масти, номера и соотношения с другими картами. Гадание на
          Таро предполагает, что
          <strong class="text-primary"
            >карты отражают информацию из информационного поля гадающего или его
            судьбы</strong
          >.
        </p>
        <p>
          Но гадание на картах Таро - это не только способ узнать свое будущее.
        </p>
        <p>
          Такое гадание позволяет
          <strong class="text-primary"
            >раскрыть свою интуицию и творческий потенциал</strong
          >. Каждая карта имеет множество значений и символов, которые можно
          толковать по-разному в зависимости от ситуации и настроения. Таким
          образом, гадание на Таро стимулирует мышление и воображение, а также
          помогает понять себя и свои желания.
        </p>
        <p>
          Гадание может быть необычным способом провести время с друзьями или
          партнером. Можно гадать друг на друга, задавать вопросы, давать
          советы, шутить. Это еще один
          <strong class="text-primary"
            >способ общения и укрепления отношений</strong
          >, а также создания атмосферы доверия и гармонии.
        </p>
        <p>
          Гадание на Таро может быть полезным
          <strong class="text-primary">для саморазвития и самопознания</strong>.
          Карты Таро отражают разные аспекты жизни и личности, такие как любовь,
          карьера, здоровье, духовность и т.д. Гадая на Таро, можно получить
          ценную информацию о своих сильных и слабых сторонах, своих целях и
          задачах, своих проблемах и решениях. Гадание на Таро помогает увидеть
          себя и свою судьбу в новом свете и сделать правильный выбор.
        </p>
        <p class="accent-text">
          Попробуйте погадать на Таро и убедитесь в этом сами!
        </p>
      </div>
    </decorative-panel>

    <decorative-panel :panel-color="panelColors[1]">
      <template v-slot:header> Контакты </template>
      <div class="container text-white central-panel">
        <p class="text-center contacts-text">
          Связаться с авторами проекта "Момент Таро" можно по адресу электронной
          почты
          <a
            class="email-link"
            href="mailto:tarotmoment@yandex.ru?subject=Mail from Tarot Moment site"
            >tarotmoment@yandex.ru</a
          >
        </p>
      </div>
      <template v-slot:footer>© Момент Таро</template>
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
  min-height: 600px;
}

.accent-text {
  font-size: 20px;
  font-family: 'vinqueregular';
}

.central-panel {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}

.side-panel {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}

.email-link {
  display: inline-block;
  color: white;
  text-decoration: none;
}

.contacts-text {
  font-size: 20px;
  margin-bottom: 40px;
}

.email-link:hover {
  text-decoration: underline overline #b67729;
  text-decoration-thickness: 3px;
}

.font-family {
  font-family: 'vinqueregular';
}

@media (min-width: 1196px) {
  .contacts-text {
    font-size: 24px;
  }
}
</style>
