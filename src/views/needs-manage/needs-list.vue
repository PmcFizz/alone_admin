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
                               placeholder="需求标题,会员名"></Input>
                    </FormItem>
                    </Col>
                    <Col span="6" style="text-align: center">
                    <Button type="primary" @click="queryData">查询</Button>
                    <Button type="primary" @click="clickCreate">新增</Button>
                    </Col>
                </Row>
                <p>当前需求总数:{{total}}</p>
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
    </Row>
</template>
<script>

  export default {
    name: 'needs-list',
    components: {},
    data () {
      return {
        columns1: [
          {
            title: '需求标题',
            key: 'title'
          },
          {
            title: '发布人',
            key: 'createPerson'
          },
          {
            title: '发布时间',
            key: 'createTime'
          },
          {
            title: '回复量',
            key: 'replyNum'
          },
          {
            title: '浏览量',
            key: 'seeNum'
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
          tags: '',
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
      this.tableData = [{
        title: '需求1',
        createPerson: '会员1',
        createTime: '2018-02-12 14:22:13',
        replyNum: 20,
        seeNum: 50,
        id: '123'
      },
        {title: '需求1', createPerson: '会员1', createTime: '2018-02-12 14:22:13', replyNum: 20, seeNum: 50, id: '123'},
        {title: '需求1', createPerson: '会员1', createTime: '2018-02-12 14:22:13', replyNum: 20, seeNum: 50, id: '123'},
        {title: '需求1', createPerson: '会员1', createTime: '2018-02-12 14:22:13', replyNum: 20, seeNum: 50, id: '123'},
        {title: '需求1', createPerson: '会员1', createTime: '2018-02-12 14:22:13', replyNum: 20, seeNum: 50, id: '123'},
        {title: '需求1', createPerson: '会员1', createTime: '2018-02-12 14:22:13', replyNum: 20, seeNum: 50, id: '123'},
        {title: '需求1', createPerson: '会员1', createTime: '2018-02-12 14:22:13', replyNum: 20, seeNum: 50, id: '123'},
        {title: '需求1', createPerson: '会员1', createTime: '2018-02-12 14:22:13', replyNum: 20, seeNum: 50, id: '123'}]
      this.total = 20
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
        this.$router.push({path: 'create'})
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
