<template>
    <Row>
        <Col span="16" v-show="showListView">
        <Card :bordered="false">
            <p slot="title">会员管理</p>
            <Form :label-width="100" style="margin-top: 20px">
                <Row>
                    <Col span="6">
                    <FormItem label="">
                        <Input v-model="searchData.keyword"
                               placeholder="会员编号,手机号,城市,昵称"></Input>
                    </FormItem>
                    </Col>
                    <Col span="6">
                    <FormItem label="会员类型">
                        <Select v-model="searchData.type" style="width:200px">
                            <Option v-for="item in typeArr" :value="item.value" :key="item.value">
                                {{ item.name }}
                            </Option>
                        </Select>
                    </FormItem>
                    </Col>
                    <Col span="6">
                    <FormItem label="注册日期">
                        <DatePicker v-model="searchData.timerang" type="daterange" split-panels
                                    placeholder="Select date"
                                    style="width: 200px"></DatePicker>
                    </FormItem>
                    </Col>
                    <Col span="6" style="text-align: center">
                    <Button type="primary" @click="queryData">查询</Button>
                    </Col>
                </Row>
                <p>当前会员总数:{{total}}</p>
            </Form>
            <Table :columns="columns1" :data="tableData"></Table>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: right;">
                    <Page :total="100" :current="1" @on-change="changePage"></Page>
                </div>
            </div>
        </Card>
        </Col>
        <Col span="12" v-show="!showListView">
        <Card :bordered="false">
            <p slot="title" style="height: 25px">会员信息






                <Button style="float: right" type="primary" @click="returnListView" size="small">返回</Button>
            </p>
            <Row>
                <Col span="24" style="text-align: center;height: 80px">
                <Avatar size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
                </Col>
            </Row>
            <Row style="height: 50px">
                <Col span="6" style="text-align: right">
                会员编号：
                </Col>
                <Col span="6" style="text-align: left">
                {{infoData.number}}&nbsp;
                </Col>
                <Col span="6" style="text-align: right">
                会员类别:
                </Col>
                <Col span="6" style="text-align: left">
                {{infoData.type}}&nbsp;
                </Col>
            </Row>
            <Row style="height: 50px">
                <Col span="6" style="text-align: right">
                性别：
                </Col>
                <Col span="6" style="text-align: left">
                {{infoData.sex}}&nbsp;
                </Col>
                <Col span="6" style="text-align: right">
                出生日期：
                </Col>
                <Col span="6" style="text-align: left">
                {{infoData.birthday}}&nbsp;
                </Col>
            </Row>
            <Row style="height: 50px">
                <Col span="6" style="text-align: right">
                手机号码：
                </Col>
                <Col span="6" style="text-align: left">
                {{infoData.phoneNo}}&nbsp;
                </Col>
                <Col span="6" style="text-align: right">
                城市：
                </Col>
                <Col span="6" style="text-align: left">
                {{infoData.city}}&nbsp;
                </Col>
            </Row>
            <Row style="height: 50px">
                <Col span="6" style="text-align: right">
                证件类型：
                </Col>
                <Col span="6" style="text-align: left">
                {{infoData.IDCardType}}&nbsp;
                </Col>
                <Col span="6" style="text-align: right">
                证件号码：
                </Col>
                <Col span="6" style="text-align: left">
                {{infoData.IDCardNo}}&nbsp;
                </Col>
            </Row>
            <Row style="height: 50px">
                <Col span="6" style="text-align: right">
                个人简介：
                </Col>
                <Col span="6" style="text-align: left">
                {{infoData.summary}}&nbsp;
                </Col>
            </Row>
        </Card>
        </Col>
    </Row>
</template>

<script>
  import { getMemberList, getMemberDetail, createOneMember } from '@/api/member/member'
  export default {
    name: 'member-manage',
    components: {},
    data () {
      return {
        columns1: [
          {
            title: '会员编号',
            key: 'id'
          },
          {
            title: '会员类型',
            key: 'category'
          },
          {
            title: '手机号',
            key: 'phone',
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
                }, 'View')
              ])
            }
          },
          {
            title: '城市',
            key: 'city'
          },
          {
            title: '昵称',
            key: 'nickname'
          },
          {
            title: '注册时间',
            key: 'createTime'
          }
        ],
        tableData: [],
        infoData: {},
        total: 0,
        showListView: true,
        searchData: {
          pageNum: 1,
          pageSize: 50,
          keyword: '',
          type: '',
          timerang: []
        },
        typeArr: [{name: '全部', value: ''},
          {name: '个人会员', value: 1},
          {name: '机构会员', value: 2}]
      }
    },
    computed: {},
    mounted(){
      this.queryData()
    },
    methods: {
      queryData(){
        getMemberList(this.searchData).then(res => {
          this.tableData = res.data.list
          this.total = res.data.total
        })
      },
      changePage(val){},
      clickSee(index){
        this.infoData = this.tableData[index]
        this.showListView = false
      },
      returnListView(){
        this.showListView = true
      }
    }
  };
</script>
