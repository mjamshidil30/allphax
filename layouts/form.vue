<template>
  <div class="app bg-gray-900 pt-4">
    <NavHeader :lists="lists"/>
    <Nuxt class="h-1/2 bg-gray-800"/>
    <Footer/>
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
