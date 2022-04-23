<template>
  <div class="home">
    <Timer :time="time"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Timer from '@/components/Timer.vue'; // @ is an alias to /src
import App from '@/App.vue'

@Options({
  components: {
    Timer,
  },
})
export default class HomeView extends Vue {
  time: string = App.config.time
}
</script>
