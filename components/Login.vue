<template>
  <Datainputs
  :inputs="inputs"
  :title="'Login'"
  :effect="'login-effect'"
  :link="'/signin'"
  :link_name="'Sign in'"
  />
</template>

<script>
  import inputs from '@/db/login/inputs.json'

  export default {
    data() {
      return {
        inputs
      }
    },
  }
</script>
