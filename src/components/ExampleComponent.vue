<template>
  <div class="card">1</div>
  <div class="card">2</div>
  <div class="card">3</div>
  <div class="card">4</div>
  <div class="card">5</div>
  <div class="card">6</div>
  <div class="card">7</div>
  <div class="card">8</div>
  <div class="card">9</div>
  <div class="card">10</div>
  <div class="card">11</div>
  <div class="card">12</div>
  <div class="card">13</div>
  <div class="card">14</div>
  <div class="card">15</div>
  <div class="card">16</div>
  <div class="card">17</div>
  <div class="card">19</div>
  <div class="card">20</div>
  <div class="card">21</div>
  <div class="card">22</div>
  <div class="card">23</div>
  <div class="card">24</div>
  <div class="card">25</div>
  <div class="card">26</div>
  <div class="card">27</div>
  <div class="card">28</div>
  <div class="card">29</div>
  <div class="card">30</div>
  <div class="card">31</div>
  <div class="card">32</div>
  <div class="card">33</div>
  <div class="card">34</div>
  <div class="card">35</div>
  <div class="card">36</div>
  <div class="card">37</div>
  <div class="card">38</div>
  <div class="card">39</div>
  <div class="card">40</div>
  <div class="card">41</div>
  <div class="card">42</div>
  <div class="card">43</div>
  <div class="card">44</div>
  <div class="card">45</div>
  <div class="card">46</div>
  <div class="card">47</div>
  <div class="card">48</div>
  <div class="card">49</div>
  <div class="card">50</div>
  <div class="card">51</div>
  <div class="card">52</div>
  <div class="card">53</div>
  <div class="card">54</div>
  <div class="card">55</div>
  <div class="card">56</div>
  <div class="card">57</div>
  <div class="card">58</div>
  <div class="card">59</div>
  <div class="card">60</div>
  <div class="card">61</div>
  <div class="card">62</div>
  <div class="card">63</div>
  <div class="card">64</div>
  <div class="card">65</div>
  <div class="card">66</div>
  <div class="card">67</div>
  <div class="card">68</div>
  <div class="card">69</div>
  <div class="card">70</div>
  <div class="card">71</div>
  <div class="card">72</div>
  <div class="card">73</div>
  <div class="card">74</div>
  <div class="card">75</div>
  <div class="card">76</div>
  <div class="card">77</div>
  <div class="card">78</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Todo, Meta } from './models';

interface Props {
  title: string;
  todos?: Todo[];
  meta: Meta;
  active: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  todos: () => [],
});

const clickCount = ref(0);
function increment() {
  clickCount.value += 1;
  return clickCount.value;
}

const todoCount = computed(() => props.todos.length);
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
}

.card {
  flex-basis: 100px;
  height: 150px;
  margin-bottom: 5px;
  margin-right: -40px;
  background-color: lightblue;
  border: 1px solid black;
  background-image: url(./src/assets/bg-back.jpg);
  background-size: cover;
  background-position: 50% 50%;
  border: 8px solid black;
  border-radius: 14px;
}
</style>
