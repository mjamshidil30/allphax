<template>
  <section class="relative flex justify-between">
    <div class="w-1/2">
      <div class="w-full h-5/6 bg-blue-500 rounded-lg shadow-lg bg-opacity-30 transform -rotate-2 mt-14">
        <div class="w-full h-full bg-blue-500 rounded-lg shadow-lg bg-opacity-90 transform rotate-2 px-5 py-3">
          <article class="leading-relaxed space-y-5">
            <div class="text-xl text-center"> Project registration </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis natus illum quam eos animi tenetur esse, blanditiis, maiores sunt quibusdam molestias distinctio totam amet. Corporis officiis ut rerum ab hic!
            </p>
            <p>
              <ul class="list-disc">
                <li v-for="(list, index) in lists" :key="index"> {{ list.text }} </li>
              </ul>
            </p>
            <div class="text-lg"> Registered projects (0) </div>
            <div class="flex justify-center"> <button class="bg-blue-600 rounded-md shadow-xl px-4 py-2 cursor-pointer hover:bg-blue-700"> Project registration </button> </div>
          </article>
        </div>
      </div>
    </div>

    <div class="w-1/2">
      <img src="@/static/image/illestrator/regpro.jpg" alt="">
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      lists: Object,
    }
  }
</script>
