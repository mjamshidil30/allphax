<template>
  <div>
    <header class="w-full h-screen pt-3 px-6 relative">
      <NavHeader :lists="lists"/>
      <MainHeader/>
      <div class="bottom-8 text-5xl center-X cursor-pointer">
        <fa icon="angle-down" class="animate-bounce"/>
      </div>
    </header>
  </div>
</template>

<script>
  import lists from '@/db/header/header.json'

  export default {
    data() {
      return {
        lists
      }
    },
  }
</script>

<style scoped>
  @import url('@/static/css/header.css');
</style>
