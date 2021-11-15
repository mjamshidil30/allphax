<template>
  <div>
    <nav class="flex justify-center space-x-10 uppercase">
        <ul class="flex justify-center text-lg text-gray-100">
          <li class="px-5" v-for="(list, index) in lists" :key="index"> <a href=""> {{ list.item }} </a> </li>
        </ul>
        <div class="w-400 header-search-box">
          <input type="text" class="w-full rounded-full shadow-md text-gray-900 py-1 px-3" placeholder="Search...">
        </div>
        <div class="justify-self-end text-gray-100">
          <a href="/signin"> <button class="rounded bg-blue-500 shadow-md px-3 py-1 uppercase hover:bg-blue-600 focus:ring-2">Sign in</button> </a>
        </div>
    </nav>
  </div>
</template>

<script>
  export default {
    props: {
      lists: Object,
    }
  }
</script>
