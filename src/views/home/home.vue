<template>
    <div>
        <Row>
            <Col span="12">
            <Card :bordered="false">
                <p slot="title" style="height: 30px">基本信息
                    <Button style="float: right" type="primary" @click="clickModifyInfo" size="small">修改</Button>
                </p>
                <Row>
                    <Col span="24" style="text-align: center">
                    <Avatar size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
                    <Form :label-width="100" style="margin-top: 20px">
                        <FormItem label="名称:">
                            <Input :disabled="isOnlyReady" v-model="baseInfo.name" placeholder="请输入名称..."></Input>
                        </FormItem>
                        <FormItem label="描述:">

                            <Input :disabled="isOnlyReady"
                                   type="textarea"
                                   :autosize="{minRows: 2,maxRows: 5}" v-model="baseInfo.des"
                                   placeholder="请输入描述...">
                            </Input>
                        </FormItem>
                    </Form>
                    </Col>
                </Row>
            </Card>
            <Card :bordered="false">
                <p slot="title">网站设置</p>
                <Row>
                    <Col span="24" style="text-align: center">
                    <Form :label-width="100" style="margin-top: 20px">
                        <FormItem label="网站标题:">
                            <Input :disabled="isOnlyReady" v-model="baseInfo.websiteTitle"
                                   placeholder="请输入网站标题..."></Input>
                        </FormItem>
                        <FormItem label="网站关键字:">
                            <Input :disabled="isOnlyReady" v-model="baseInfo.websiteKeyWord"
                                   placeholder="请输入网站关键字..."></Input>
                        </FormItem>
                        <FormItem label="网站备案号:">
                            <Input :disabled="isOnlyReady" v-model="baseInfo.websiteBeiAn"
                                   placeholder="请输入网站备案号..."></Input>
                        </FormItem>
                        <FormItem label="网站版权所有:">
                            <Input :disabled="isOnlyReady" v-model="baseInfo.websiteCopyRight"
                                   placeholder="请输入网站版权所有..."></Input>
                        </FormItem>
                    </Form>
                    </Col>
                </Row>
                <Row>
                    <Col span="12" style="text-align: center">
                    <Button type="primary" @click="cancleModify" size="small">取消</Button>
                    </Col>
                    <Col span="12" style="text-align: center">
                    <Button type="primary" @click="saveInfo" size="small">保存</Button>
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
      };
    },
    computed: {},
    methods: {
      // 点击修改
      clickModifyInfo(){
        this.isOnlyReady = false
      },
      cancleModify(){
        location.reload()
      },
      saveInfo(){
        console.log(this.baseInfo)
      }
    }
  };
</script>
