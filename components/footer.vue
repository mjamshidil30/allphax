<template>
  <footer class="w-full bg-gray-900">
    <div class="px-4 py-2 space-y-7">
      <div>
        <ul class="grid grid-cols-4 space-y-1">
          <li v-for="(link, index) in links" :key="index"> <a :href="link.href"> {{ link.name }} </a> </li>
        </ul>
      </div>
      <div class="flex space-x-2">
        <span class="w-8 h-8"> <a href=""> <img src="/logo/face.svg"> </a> </span>
        <span class="w-8 h-8"> <a href=""> <img src="/logo/twitt.png"> </a> </span>
        <span class="w-8 h-8"> <a href=""> <img src="/logo/insta.png"> </a> </span>
        <span class="w-8 h-8"> <a href=""> <img src="/logo/in.png"> </a> </span>
      </div>
      <div class="text-sm">
        Powerd by: <a href="/" class="underline font-black"> AllphaX </a>
      </div>
    </div>
  </footer>
</template>

<script>
import links from '@/db/footer/links.json'
export default {
  data() {
    return {
      links
    }
  },
}
</script>

<style scoped>
  @import url('@/static/css/footer.css');
</style>
