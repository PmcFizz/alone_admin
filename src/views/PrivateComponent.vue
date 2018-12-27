<template>
  <div class="mycomponent">
    {{msg}}
    <HelloWorld msg="This is My Message"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'

  @Component({
    components: { HelloWorld }
  })
export default class PrivateComponent extends Vue {
    msg = {
      q: 123,
      2: 234
    }

    // 声明周期钩子
    mounted () {
      this.greet()
    }

    // 计算属性
    get computedMsg () {
      return 'computed ' + this.msg
    }

    // 方法
    greet () {
      alert('greeting: ' + this.msg)
    }
}
</script>

<style scoped>

</style>
