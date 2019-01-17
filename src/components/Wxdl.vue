<template>
  <div>
    <p>{{item.title}}  ∷ {{item.content}}</p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component
export default class Wxdl extends Vue {
    @Prop(Object) private item !: {}
}
</script>
