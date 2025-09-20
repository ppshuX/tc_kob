<template>
  <div>
    <div>Bots0 昵称：{{ botName[0] }}</div>
    <div>Bots1 昵称：{{ botName[1] }}</div>
    <div>Bots2 昵称：{{ botName[2] }}</div>
  </div>
  <router-view/>
</template>

<script>
import $ from 'jquery'
import { ref } from 'vue'

export default {
  name: 'App',
  setup: () => {
    let botName = ref([])

    $.ajax({
      url: 'http://127.0.0.1:3000/pk/getbotinfo/',
      type: 'GET',
      success: (res) => {
        botName.value = res
      }
    })
    
    return {
      botName,
    }
  }
}
</script>

<style>
body {
  background-image: url('./assets/background.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
