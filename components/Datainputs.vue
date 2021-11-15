<template>
  <div class="w-2/5 h-auto overflow-hidden bg-blue-600 rounded-md py-5 px-3 relative" :class="effect ? effect : ''">
    <h2 class="text-3xl text-gray-100"> {{ title }} </h2>
    <form action="" class="flex flex-col space-y-8 mt-10 z-40 relative">
      <div v-for="(input, index) in inputs" :key="index" class="relative bg-gray-200 rounded-sm">
         <input
         :type="input.type"
         :id="'inp_' + index"
         class="w-full bg-transparent py-2 px-4 text-gray-900 placeholder-gray-900"
         :placeholder="input.label"
         >
      </div>
      <input type="submit" class="w-1/3 bg-blue-500 rounded-sm shadow-lg text-xl text-gray-100 cursor-pointer py-1 hover:bg-blue-600" value="Submit">
    </form>
    <div class="text-gray-100 underline text-xl mt-7"> <a :href="link"> {{ link_name }} <fa icon="arrow-right" /> </a> </div>
  </div>
</template>

<script>
  export default {
    props: {
      inputs: Object,
      title: String,
      effect: String,
      link: String,
      link_name: String,
    },
  }
</script>
