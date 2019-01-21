<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <el-radio v-model="radio" label="1">备选项1</el-radio>
    <el-radio v-model="radio" label="2">备选项2</el-radio>
    <Wxdl v-for="(item,index) in myMsg" :key="index" :item="item"></Wxdl>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import Wxdl from '@/components/Wxdl.vue'

  @Component({
    components: {
      HelloWorld, Wxdl
    }
  })
export default class Home extends Vue {
    radio = '1'
    myMsg = [
      { title: '议对', content: '议惟畴政，名实相课。断理必刚，攡辞无懦。对策王庭，同时酌和。治体高秉，雅谟远播。' },
      { title: '丽辞', content: '体植必两，辞动有配。左提右挈，精味兼载。炳烁联华，镜静含态。玉润双流，如彼珩珮。' },
      { title: '颂赞', content: '容体底颂，勋业垂赞。镂影攡声，文理有烂。年积愈远，音徽如旦。降及品物，炫辞作玩。' },
      { title: '铭箴', content: '铭实器表，箴惟德轨。有佩于言，无鉴于水。秉兹贞厉，警乎立履。义典则弘，文约为美。' },
      { title: '哀吊', content: '辞之所哀，在彼弱弄。苗而不秀，自古斯恸。虽有通才，迷方失控。千载可伤，寓言以送。' }]
}
</script>
