<template>
    <div>
        <Row>
            <Col span="12">
            <Card :bordered="false">
                <p slot="title" style="height: 30px">基本信息</p>
                <Row>
                    <Col span="24" style="text-align: center">
                    <Avatar size="large" src="https://avatars1.githubusercontent.com/u/13403284?s=460&v=4"/>
                    <h1 style="margin: 10px">师匠空间</h1>
                    <p>此项目用于师匠后台管理,使用vue,iVew搭建,主要技术栈和框架有,vue,webpack,iView.</p>
                    </Col>
                </Row>
            </Card>
            <Card :bordered="false">
                <p slot="title">网站信息</p>
                <Row>
                    <Col span="24">
                    <Col span="20">
                    <span class="info-label">名称:</span><span class="info-data">师匠空间</span></Col>
                    <Col span="20">
                    <span class="info-label">关键字:</span><span class="info-data">师匠,管理端</span></Col>
                    <Col span="20">
                    <span class="info-label">备案号:</span><span class="info-data">师匠空间</span></Col>
                    <Col span="20">
                    <span class="info-label">版权所有:</span><span class="info-data">庞孟臣</span></Col>
                    </Col>
                </Row>
            </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
  export default {
    name: 'home',
    components: {},
    data () {
      return {
        isOnlyReady: true,
        baseInfo: {
          name: '',
          des: '',
          websiteTitle: '',
          websiteKeyWord: '',
          websiteBeiAn: '',
          websiteCopyRight: ''
        }
      }
    },
    computed: {},
    methods: {
      // 点击修改
      clickModifyInfo () {
        this.isOnlyReady = false
      },
      cancleModify () {
        location.reload()
      },
      saveInfo () {
        console.log(this.baseInfo)
      }
    }
  }
</script>
<style lang="less">
    .info-label {
        width: 200px;
        display: inline-block;
        text-align: right;
        margin-right: 10px;
    }

    .info-data {
        display: inline-block;
        text-align: left;
    }
</style>
