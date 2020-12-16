<template>
  <Timer time='17 Dec 2020 04:30:00 GMT+5'/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Timer from './components/Timer.vue';

@Options({
  components: {
    Timer
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
