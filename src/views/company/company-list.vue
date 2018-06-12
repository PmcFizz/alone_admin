<!--公司列表 Fizz-->
<template>
    <Row>
        <Col span="24">
        <Card :bordered="false">
            <p slot="title">公司列表</p>
            <Form :label-width="100" style="margin-top: 20px">
                <Row>
                    <Col span="6">
                    <FormItem label="">
                        <Input v-model="searchData.name"
                               placeholder="公司名称,简称,关键字"></Input>
                    </FormItem>
                    </Col>
                    <Col span="6">
                    <FormItem label="状态">
                        <Select v-model="searchData.status" style="width:200px">
                            <Option v-for="item in companyStatusArr" :value="item.value" :key="item.value">
                                {{ item.label }}
                            </Option>
                        </Select>
                    </FormItem>
                    </Col>
                    <Col span="6">
                    <FormItem label="信用等级">
                        <Select v-model="searchData.creditLevel" style="width:200px">
                            <Option v-for="item in companyCreditLeveArr" :value="item.value" :key="item.value">
                                {{ item.label }}
                            </Option>
                        </Select>
                    </FormItem>
                    </Col>
                    <Col span="6" style="text-align: center">
                    <Button type="primary" @click="queryData">查询</Button>
                    <Button type="primary" @click="clickCreate">新增</Button>
                    </Col>
                </Row>
                <p>当前公司总数:{{total}}</p>
            </Form>
            <p style="margin-bottom: 10px">
            </p>
            <Table :columns="columns1" :data="tableData"></Table>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <Page :total="total" :current="1" @on-change="changePage"></Page>
                </div>
            </div>
        </Card>
        </Col>

        <Modal
                v-model="showEditModal"
                title="新建/更新公司"
                @on-ok="saveData"
                width="800px"
                @on-cancel="cancelUpdate">
            <Form :label-width="120">
                <Row style="height: 50px">
                    <Col span="12">
                    <FormItem label="公司名称：">
                        <Input v-model="companyData.name" placeholder="请输入公司名称"></Input>
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <FormItem label="公司简称：">
                        <Input v-model="companyData.shortName" placeholder="请输入公司简称"></Input>
                    </FormItem>
                    </Col>
                </Row>
                <Row style="height: 50px">
                    <Col span="12">
                    <FormItem label="公司官网：">
                        <Input v-model="companyData.companyLink" placeholder="请输入公司官网"></Input>
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <FormItem label="公司logo：">
                        <Input v-model="companyData.logo" placeholder="请输入公司logo地址"></Input>
                    </FormItem>
                    </Col>
                </Row>
                <Row style="height: 50px">
                    <Col span="12">
                    <FormItem label="公司状态：">
                        <Input v-model="companyData.status" placeholder="请输入公司名称"></Input>
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <FormItem label="公司标签：">
                        <Input v-model="companyData.tags" placeholder="请输入公司名称"></Input>
                    </FormItem>
                    </Col>
                </Row>
                <FormItem label="公司地点：">
                    <Cascader :data="addressData" style="width: 200px;display:inline-block;"></Cascader>
                    <Input v-model="companyData.companyAddress"
                           style="width: 300px;"
                           placeholder="请输街道门牌号详细地址"></Input>
                </FormItem>

                <FormItem label="公司介绍：">
                    <Input v-model="companyData.companyIntroText" type="textarea"
                           :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入活动介绍"></Input>
                </FormItem>

                <Row style="height: 50px" v-for="item in companyData.links">
                    <Col span="12">
                    <FormItem label="链接名称：">
                        <Input v-model="item.name" placeholder="请输入链接名称"></Input>
                    </FormItem>
                    </Col>
                    <Col span="12">
                    <FormItem label="链接地址：">
                        <Input v-model="item.link" placeholder="请输入链接地址"></Input>
                    </FormItem>
                    </Col>
                </Row>

            </Form>
        </Modal>

        <Modal
                v-model="showDetailModal"
                title="公司详情"
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
  import { queryByPage, companyStatusArr, companyCreditLeveArr, createOneCompany } from '@/api/company/company'

  export default {
    name: 'company-list',
    components: {},
    data () {
      return {
        columns1: [
          {
            title: '公司名称',
            key: 'name'
          },
          {
            title: '简称',
            key: 'shortName'
          },
          {
            title: '信用等级',
            key: 'creditLevel'
          },
          {
            title: '关键字',
            key: 'companyWord'
          },
          {
            title: '公司链接',
            key: 'companyLink',
            render: function (h, params) {
              return h('div', [
                h('a', {
                  style: {color: '#2d8cf0'},
                  attrs: {target: '_blank', href: params.row.companyLink, title: params.row.companyLink}
                }, params.row.companyLink)
              ])
            }
          },
          {
            title: 'logo',
            key: 'logo',
            render: function (h, params) {
              return h('div', [
                h('img', {
                  attrs: {
                    src: params.row.logo
                  },
                  style: {height: '30px', width: '30px'}
                })
              ])
            },
          },
          {
            title: '创建时间',
            key: 'createDate'
          },
          {
            title: '状态',
            key: 'status'
          },
          {
            title: '操作',
            key: 'age',
            width: 300,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {type: 'primary', size: 'small'},
                  style: {marginRight: '5px'},
                  on: {
                    click: () => {
                      this.clickSee(params.index)
                    }
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'primary', size: 'small'
                  },
                  style: {marginRight: '5px'},
                  on: {
                    click: () => {
                      this.clickUpdate(params.index)
                    }
                  }
                }, '修改'),
                h('Button', {
                  props: {type: 'primary', size: 'small'},
                  style: {marginRight: '5px'},
                  on: {
                    click: () => {
                      this.clickDelOne(params.index)
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        tableData: [],
        companyStatusArr,
        companyCreditLeveArr,
        showEditModal: false,
        showDetailModal: false,
        activityInfo: {},
        activityDetail: {},
        searchData: {
          name: '',
          status: '',
          creditLeve: '',
          pageIndex: 1,
          pageSize: 20
        },
        companyData: {
          name: '',
          shortName: '',
          companyLink: '',
          logo: '',
          creditLevel: '',
          status: '',
          type: '',
          companyAddress: '',
          tags: [],
          companyIntroText: '',
          links: [{name: '', link: ''}]
        }, // 公司表单
        total: 0,
        typeArr: [{name: '后台创建', value: 1}, {name: '会员常见', value: 2}, {name: '全部', value: ''}],
        statusArr: [{name: '全部', value: 1}, {name: '未发布', value: 2},
          {name: '已撤回', value: '3'},
          {name: '未开始', value: '4'},
          {name: '进行中', value: '5'},
          {name: '已结束', value: '6'}],
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
    mounted () {
      this.queryData()
    },
    methods: {
      queryData () {
        queryByPage(this.searchData).then(res => {
          this.tableData = res.data.records
          this.total = res.data.recordsTotal
        })
      },
      changePage (val) {},
      clickUpdate (index) {
        this.showEditModal = true
      },
      clickSee (index) {
        this.showDetailModal = true
      },
      cancleSee () {
        this.showDetailModal = false
      },
      // 保存公司
      saveData () {
        console.log(this.companyData)
        return
        createOneCompany(this.companyData).then(res => {
          if (res.data.code === 200) {
            this.showEditModal = false
          } else {
            this.$Message.error(res.data.errmsg)
          }
        })
      },
      cancelUpdate () {
        this.showEditModal = false
      },
      clickCreate () {
        this.showEditModal = true
      },
      clickDelOne (index) {

      },
      clickPush (index) {

      },
      clickCopyCreate (index) {},
      clickRecall (index) {

      }
    }
  }
</script>
