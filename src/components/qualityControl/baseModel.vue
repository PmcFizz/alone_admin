<template>
    <Row class="baseModeComponents">
        <Card :bordered="false">
            <p slot="title" class="header-title" @click="clickHeader">
                <span style="font-size: 20px">{{privateData.name}}</span>
                <br/>
                <span class="prototype" v-for="(item,index) in prototypeList" :key="index">{{item.name}}</span>
            </p>
            <Row v-if="showContent">
                <Form :model="formItem" :label-width="80">
                    <Row v-for="(item,index) in prototypeList" :key="index" style="margin-top: 20px">
                        <Row>
                            <Col span="8">
                            <FormItem label="属性名称：">
                                <Input v-model="item.name" placeholder="请输入属性名称"></Input>
                            </FormItem>
                            </Col>
                            <Col span="8">
                            <FormItem label="内容：">
                                <CheckboxGroup v-model="item.content">
                                    <Checkbox label="1" value="1">文本</Checkbox>
                                    <Checkbox label="2" value="2">图片</Checkbox>
                                </CheckboxGroup>
                            </FormItem>
                            </Col>
                            <Col span="8">
                            <FormItem label="图片张数：">
                                <Input v-model="item.picNum" placeholder="请输入最多允许上传的图片数"></Input>
                            </FormItem>
                            </Col>
                        </Row>
                        <Row style="border-bottom: 1px solid #ddd">
                            <Col span="8">
                            <FormItem label="英文：">
                                <Input v-model="item.english" placeholder="请输入属性英文名"></Input>
                            </FormItem>
                            </Col>
                            <Col span="8">
                            <FormItem label="备注：">
                                <Input v-model="item.remark" type="textarea" placeholder="请输入备注"></Input>
                            </FormItem>
                            </Col>
                            <Col span="8" style="text-align: center;margin: 0 auto">
                            <Button v-if="index == (prototypeList.length-1)" type="primary" size="small"
                                    @click="clickAddItem">再加一条
                            </Button>
                            <Button v-if="index !== (prototypeList.length-1)" type="primary" size="small"
                                    @click="clickDelItem">移除
                            </Button>
                            </Col>
                        </Row>
                    </Row>
                    <Row>
                        <Col span="24" style="text-align: center;margin-top: 20px; ">
                        <Button type="primary">保存</Button>
                        <Button type="primary" @click="zhedieItem">折叠</Button>
                        <Button type="warning" @click="resetPrototypeData">清空</Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
        </Card>
    </Row>

</template>

<script>
  export default {
    name: 'BaseModel',
    props: {
      privateData: {
        type: Object,
        default: {}
      }
    },
    computed: {
      prototypeList () {
        return this.privateData.prototypeList
      }
    },
    data () {
      return {
        showContent: false,
        formItem: {},
      }
    },
    methods: {
      clickHeader () {
        this.showContent = !this.showContent
      },
      clickAddItem () {
        this.prototypeList.push({name: '', content: [1, 2], picNum: 1, remark: '', english: ''})
      },
      clickDelItem (index) {
        this.prototypeList.splice(index, 1)
      },
      zhedieItem () {
        this.showContent = !this.showContent
      },
      resetPrototypeData () {
        this.$Modal.confirm({
          title: '此操作不可恢复!',
          content: '确定要移除外观下的所有数据?',
          onOk: function (e) {
            this.$Message.success('操作成功')
          },
          onCancel: function (e) {
            this.$Message.success('已取消操作')
          }
        })
      }
    }
  }
</script>
<style lang="less">
    @import '../../styles/components/baseModel.less';
</style>
