<template>
  <div class="timer">
    <h1 v-bind:style="{color: color}"><span id="rotate-text"><span style="color:#c99789">=</span><span style="color:#96ceb4">>></span><span style="color:#fed766">*</span></span>{{ label }}</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    time: String
  }
})
export default class Timer extends Vue {
  time!: string
  targetDate: number = Date.parse(this.time)
  label: string = "-"
  color: string = "#d11141"
  bgColor: string = "black"

  pad(nums: number, width: number = 2) {
    let result = ""
    if (nums<=parseInt("9".repeat(width))) {
      result = ("0".repeat(width-1)+nums).slice(-width);
    } else {
      result = `${nums}`
    }
    return result;
  }

  padSeconds(seconds: number) {
    let splittedResult = `${seconds}`.split('.')
    return `${this.pad(parseInt(splittedResult[0]))}.${this.pad(parseInt(splittedResult[1]), 3)}`
  }

  refreshTimer() {
    let nMilliSeconds = this.targetDate - Date.now()
    let goesForward = false

    if (nMilliSeconds < 0) {
      nMilliSeconds = -nMilliSeconds
      goesForward = true
    }

    let nSeconds = nMilliSeconds % 60000
    nMilliSeconds -= nSeconds
    let nMinutes = nMilliSeconds % 3600000
    nMilliSeconds -= nMinutes
    let nHours = nMilliSeconds % 86400000
    nMilliSeconds -= nHours
    let nDays = nMilliSeconds

    nHours = nHours / 3600000
    nMinutes = nMinutes / 60000
    nSeconds = nSeconds / 1000
    nDays = nDays / 86400000

    if ((nHours === 17) || (nMinutes === 17) || (nDays == 17)) {
      this.color = '#0392cf'
      this.bgColor = 'white'
    } else {
      this.color = goesForward ? '#7bc043' : '#d11141'
      this.bgColor = 'black'
    }

    document.getElementsByTagName('html')[0].setAttribute("style", `background-color: ${this.bgColor};`)
    this.label = `${this.pad(nDays)}:${this.pad(nHours)}:${this.pad(nMinutes)}:${this.padSeconds(nSeconds)}`
  }

  mounted() {
    this.refreshTimer()
    setInterval(this.refreshTimer, 83)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: inconsolata;
  src: url(../../public/inconsolata.ttf) format('truetype');
  font-weight: normal;
  font-style: normal;
}

h1 {
    left: 0;
    line-height: 200px;
    margin-top: -100px;
    position: absolute;
    text-align: center;
    top: 45%;
    width: 100%;
    font-size: 150pt;
    font-family: inconsolata, monospace;
}

#rotate-text {
   width: 100px;
   transform: rotate(270deg);
   display: block;
   margin: 0 auto;
}
</style>
