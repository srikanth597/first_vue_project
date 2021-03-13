<template>
  <router-view @logMeIn="updatedLoggedInStatus" />
</template>
<script lang="ts">
import { computed, defineComponent, provide, ref } from 'vue'
export default defineComponent({
  setup() {
    const isLoggedIn = ref<boolean>(false)
    function updatedLoggedInStatus() {
      console.log('Logging Me In......')
      isLoggedIn.value = true
      console.log(isLoggedIn.value)
    }
    // const updatedStatus = computed(() => isLoggedIn.value)
    provide('isLoggedIn', isLoggedIn)
    return { updatedLoggedInStatus }
  }
})
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');

#app,
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: 'Lato', sans-serif;
}
</style>
