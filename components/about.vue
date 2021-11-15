<template>
  <section>
    <div class="w-full bg-gray-800 shadow-none rounded-md py-3 px-5">
      <div class="leading-relaxed">
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, voluptatum, amet necessitatibus temporibus quas culpa a placeat explicabo quidem dolores dignissimos laborum ea quae cupiditate voluptatem, quasi in laboriosam! Error!
       Architecto unde repellat doloremque libero sit aut veritatis aspernatur, repellendus cumque, consequatur atque iure perspiciatis? Harum eos cumque odio suscipit, animi nisi nulla numquam dolor et nam maiores dolorem reprehenderit.
       Sapiente, voluptas corrupti. Dicta impedit blanditiis commodi qui dolore repsellendus maiores voluptatibus optio iste, dolorem soluta est in nisi, consequatur sit voluptas labore. Mollitia explicabo enim aut non incidunt tempore.
      </div>
      <div class="pt-10">
        <ul>
          <li class="font-light mb-2 text-xl"> <span> Why choose AllphaX team? </span> </li>
          <li class="list-disc font-medium" v-for="(cap, index) in caption" :key="index"> {{ cap.cap }} </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      caption: Object,
    }
  }
</script>
