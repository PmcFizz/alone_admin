<template>
    <div class='tinymce'>
        <h1>tinymce</h1>
        <Tinymce v-model="content"></Tinymce>
    </div>
</template>

<script>
  import Tinymce from '@/components/Tinymce'

  export default {
    name: 'richEdit',
    components: {Tinymce},
    data () {
      return {
        content: null
      }
    },
    mounted () {
      tinymce.init({})
    }
  }
</script>
<style scoped>

</style>