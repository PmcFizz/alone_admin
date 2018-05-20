<template>
    <Row>
        <Col span="16">
        <Card :bordered="false">
            <p slot="title">活动列表</p>
            <p style="margin-bottom: 10px">
                <Button type="primary" @click="clickCreate" size="small">新增</Button>
            </p>
            <Table :columns="columns1" :data="data1"></Table>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <Page :total="100" :current="1" @on-change="changePage"></Page>
                </div>
            </div>
        </Card>
        </Col>

        <Modal
                v-model="showEditModal"
                title="新建/更新活动"
                @on-ok="saveData"
                width="800px"
                @on-cancel="cancelUpdate">
            <Form :label-width="120">
                <Row style="height: 50px">
                    <Col span="12">
                    <FormItem label="活动名称：">
                        <Input v-model="activityInfo.input" placeholder="请输入活动名称"></Input>
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <FormItem label="活动宣传语：">
                        <Input v-model="activityInfo.input" placeholder="请输入活动宣传语"></Input>
                    </FormItem>
                    </Col>
                </Row>
                <FormItem label="活动介绍：">
                    <Input v-model="activityInfo.input" type="textarea"
                           :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入活动介绍"></Input>
                </FormItem>
                <FormItem label="微信分享文案：">
                    <Input v-model="activityInfo.input" placeholder="请输入微信分享文案"></Input>
                </FormItem>
                <FormItem label="活动列表图：">
                    <activityUpload></activityUpload>
                </FormItem>
                <FormItem label="活动详情图：">
                    <activityUpload></activityUpload>
                </FormItem>
                <FormItem label="活动时间：">
                    <DatePicker type="daterange" split-panels placeholder="Select date"
                                style="width: 200px"></DatePicker>
                </FormItem>
                <FormItem label="活动地点：">
                    <Cascader :data="addressData" style="width: 200px;display:inline-block;"></Cascader>
                    <Input v-model="activityInfo.input"
                           style="width: 300px;"
                           placeholder="请输街道门牌号详细地址"></Input>
                </FormItem>
                <Row style="height: 50px">
                    <Col span="10">
                    <FormItem label="活动人数：">
                        <Input v-model="activityInfo.input" placeholder="请输入活动人数"></Input>
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <FormItem label="参与年龄：">
                        <Input v-model="activityInfo.input" style="width: 120px" placeholder="最小参与年龄"></Input>
                        <Input v-model="activityInfo.input" style="width: 120px" placeholder="最大参与年龄"></Input>
                    </FormItem>
                    </Col>
                </Row>
                <FormItem label="报名费用：">
                    <CheckboxGroup v-model="activityInfo.cost">
                        <Row>
                            <Col span="24">
                            <Checkbox label="twitter" style="width: 100%;float: left">
                                <span>儿童(<=12)</span>
                                <Input style="width: 300px;margin-left: 110px;top: -32px"
                                       v-model="activityInfo.input" placeholder="请输入活动人数">
                                <span slot="append">元/人</span>
                                </Input>
                            </Checkbox>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="24">
                            <Checkbox label="twitter" style="width: 100%;float: left">
                                <span>普通(>=13,<=59)</span>
                                <Input style="width: 300px;margin-left: 110px;top: -32px"
                                       v-model="activityInfo.input" placeholder="请输入活动人数">
                                <span slot="append">元/人</span>
                                </Input>
                            </Checkbox>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="24">
                            <Checkbox label="twitter" style="width: 100%;float: left">
                                <span>老年(>=60)</span>
                                <Input style="width: 300px;margin-left: 110px;top: -32px"
                                       v-model="activityInfo.input" placeholder="请输入活动人数">
                                <span slot="append">元/人</span>
                                </Input>
                            </Checkbox>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="24">
                            <Checkbox label="twitter">
                                <span>团体(<=12)</span>
                                <Input style="width: 300px;margin-left: 110px;top: -32px"
                                       v-model="activityInfo.input" placeholder="请输入活动人数">
                                <span slot="append">元/人</span>
                                </Input>
                            </Checkbox>
                            </Col>
                        </Row>
                    </CheckboxGroup>
                </FormItem>
                <FormItem label="活动须知：">
                    <Upload action="//jsonplaceholder.typicode.com/posts/">
                        <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
                    </Upload>
                </FormItem>

            </Form>
        </Modal>

        <Modal
                v-model="showDetailModal"
                title="活动详情"
                @on-cancel="cancleSee">
            <Card :bordered="false">
                <p slot="title">基本信息</p>
                <Row style="height: 50px">
                    <Col span="6" style="text-align: right">
                    活动名称：
                    </Col>
                    <Col span="6" style="text-align: left">
                    {{activityDetail.number}}&nbsp;
                    </Col>
                    <Col span="6" style="text-align: right">
                    活动宣传语:
                    </Col>
                    <Col span="6" style="text-align: left">
                    {{activityDetail.type}}&nbsp;
                     </Col>
                </Row>
                <Row style="height: 50px">
                    <Col span="6" style="text-align: right">
                    活动描述：
                    </Col>
                    <Col span="12" style="text-align: left">
                    {{activityDetail.number}}&nbsp;
                     </Col>
                </Row>
                <Row style="height: 50px">
                    <Col span="6" style="text-align: right">
                    活动列表图：
                    </Col>
                    <Col span="6" style="text-align: left">
                    {{activityDetail.number}}&nbsp;
                    </Col>
                    <Col span="6" style="text-align: right">
                    活动详情图:
                    </Col>
                    <Col span="6" style="text-align: left">
                    {{activityDetail.type}}&nbsp;
                    </Col>
                </Row>
                <Row style="height: 50px">
                    <Col span="6" style="text-align: right">
                    活动时间：
                    </Col>
                    <Col span="6" style="text-align: left">
                    {{activityDetail.number}}&nbsp;
                     </Col>
                    <Col span="6" style="text-align: right">
                    活动人数:
                    </Col>
                    <Col span="6" style="text-align: left">
                    {{activityDetail.type}}&nbsp;
                    </Col>
                </Row>
                <Row style="height: 50px">
                    <Col span="6" style="text-align: right">
                    参与年龄：
                    </Col>
                    <Col span="6" style="text-align: left">
                    {{activityDetail.number}}&nbsp;
                    </Col>
                    <Col span="6" style="text-align: right">
                    报名费用:
                    </Col>
                    <Col span="6" style="text-align: left">
                    {{activityDetail.type}}&nbsp;
                    </Col>
                </Row>
            </Card>

            <Card :bordered="false">
                <p slot="title">报名信息</p>
                <Row style="height: 50px">
                    <Col span="6" style="text-align: right">
                    报名信息：
                    </Col>
                    <Col span="6" style="text-align: left">
                    {{activityDetail.number}}&nbsp;
                    </Col>
                    <Col span="6" style="text-align: right">
                    总费用:
                    </Col>
                    <Col span="6" style="text-align: left">
                    {{activityDetail.type}}&nbsp;
                     </Col>
                </Row>
            </Card>
            <Card :bordered="false">
                <p slot="title">捡拾报告</p>

                <Row style="height: 50px">
                    <Col span="6" style="text-align: right">
                    捡拾报告：
                    </Col>
                    <Col span="6" style="text-align: left">
                    {{activityDetail.number}}&nbsp;
                    </Col>
                </Row>


            </Card>
        </Modal>
    </Row>
</template>

<script>
  import activityUpload from '@/views/activity/activity-upload';
  export default {
    name: 'activity-price',
    components: {
      activityUpload
    },
    data () {
      return {
        columns1: [
          {
            title: '活动编号',
            key: 'age'
          },
          {
            title: '活动类型',
            key: 'age'
          },
          {
            title: '活动名称',
            key: 'age'
          },
          {
            title: '活动时间',
            key: 'age'
          },
          {
            title: '报名人数',
            key: 'age'
          },
          {
            title: '创建人',
            key: 'age'
          },
          {
            title: '更新时间',
            key: 'age'
          },
          {
            title: '状态',
            key: 'age'
          },
          {
            title: '操作',
            key: 'age',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.clickSee(params.index)
                    }
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.clickUpdate(params.index)
                    }
                  }
                }, '更新')
              ]);
            }
          }
        ],
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ],
        showEditModal: false,
        showDetailModal: false,
        activityInfo: {},
        activityDetail: {},
        addressData: [{
          value: 'beijing',
          label: '北京',
          children: [
            {
              value: 'gugong', label: '故宫'
            },
            {
              value: 'tiantan', label: '天坛'
            },
            {
              value: 'wangfujing', label: '王府井'
            }
          ]
        }, {
          value: 'jiangsu',
          label: '江苏',
          children: [
            {
              value: 'nanjing',
              label: '南京',
              children: [
                {
                  value: 'fuzimiao', label: '夫子庙',
                }
              ]
            },
            {
              value: 'suzhou',
              label: '苏州',
              children: [
                {
                  value: 'zhuozhengyuan', label: '拙政园',
                },
                {
                  value: 'shizilin', label: '狮子林',
                }
              ]
            }
          ],
        }],
      }
    },
    computed: {},
    methods: {
      changePage(val){},
      clickUpdate(index){
        this.showEditModal = true
      },
      clickSee(index){
        this.showDetailModal = true
      },
      cancleSee(){
        this.showDetailModal = false
      },
      saveData(){
        this.showEditModal = false
      },
      cancelUpdate(){
        this.showEditModal = false
      },
      clickCreate(){
        this.showEditModal = true
      }
    }
  };
</script>
