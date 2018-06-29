<!--基础模板 Fizz-->
<template>
    <Row>
        <Row>
            <Form :label-width="80">
                <Row style="text-align: center;margin: 15px auto">
                    <Col span="6">
                    <FormItem label="属性名称：">
                        <Input placeholder="请输入属性名称" v-model="keyWord" @keyup.enter.native="clickSearch"
                               @input.native="clickSearch"></Input>
                    </FormItem>
                    </Col>
                    <Col span="6">
                    <Button type="primary" @click="clickSearch">搜索</Button>
                    <Button type="primary" @click="clickAddBaseModel">添加一个</Button>
                    </Col>
                </Row>
            </Form>
        </Row>
        <Col v-for="(item,index) in showArr" :key="index" span="12" style="padding: 10px">
        <BaseModel :privateData="item"></BaseModel>
        </Col>
    </Row>
</template>

<script>
  import BaseModel from '@/components/qualityControl/baseModel'

  export default {
    name: 'base-model',
    components: {
      BaseModel
    },
    data () {
      return {
        value1: '0',
        keyWord: '',
        baseModelArr: [
          {name: '1', content: [1, 2], picNum: 1, remark: '', english: ''},
          {name: '2', content: [1, 2], picNum: 1, remark: '', english: ''},
          {name: '3', content: [1, 2], picNum: 1, remark: '', english: ''},
          {name: '4', content: [1, 2], picNum: 1, remark: '', english: ''},
          {name: '5', content: [1, 2], picNum: 1, remark: '', english: ''},
          {name: '6', content: [1, 2], picNum: 1, remark: '', english: ''},
          {name: '7', content: [1, 2], picNum: 1, remark: '', english: ''},
          {name: '8', content: [1, 2], picNum: 1, remark: '', english: ''},
        ],
        showArr: [{name: '1', content: [1, 2], picNum: 1, remark: '', english: ''},
          {name: '2', content: [1, 2], picNum: 1, remark: '', english: ''},
          {name: '3', content: [1, 2], picNum: 1, remark: '', english: ''},
          {name: '4', content: [1, 2], picNum: 1, remark: '', english: ''},
          {name: '5', content: [1, 2], picNum: 1, remark: '', english: ''},
          {name: '6', content: [1, 2], picNum: 1, remark: '', english: ''},
          {name: '7', content: [1, 2], picNum: 1, remark: '', english: ''},
          {name: '8', content: [1, 2], picNum: 1, remark: '', english: ''}]
      }
    },
    computed: {},
    mounted () { },
    methods: {
      clickSearch () {
        if (this.keyWord) {
          var copyArr = JSON.parse(JSON.stringify({arr: this.baseModelArr})).arr
          this.showArr = copyArr.filter((item) => {
            return item.name.indexOf(this.keyWord) > -1
          })
        } else {
          this.showArr = JSON.parse(JSON.stringify({arr: this.baseModelArr})).arr
        }
      },
      clickAddBaseModel () {
        this.showArr.unshift({name: '11'})
      }
    }
  }
</script>
