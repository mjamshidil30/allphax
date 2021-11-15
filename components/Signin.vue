<template>
  <Datainputs
  :inputs="inputs"
  :title="'Sign in'"
  :effect="'signin-effect'"
  :link="'/login'"
  :link_name="'Login'"
  />
</template>

<script>
  import inputs from '@/db/signin/inputs.json'

  export default {
    data() {
      return {
        inputs
      }
    }
  }
</script>
