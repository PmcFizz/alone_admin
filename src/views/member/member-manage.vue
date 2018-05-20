<template>
    <Row>
        <Col span="16" v-show="showListView">
        <Card :bordered="false">
            <p slot="title">会员管理</p>
            <Table :columns="columns1" :data="data1"></Table>
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
            <Row >
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
  export default {
    name: 'member-manage',
    components: {},
    data () {
      return {
        columns1: [
          {
            title: '会员编号',
            key: 'name'
          },
          {
            title: '会员类型',
            key: 'age'
          },
          {
            title: '手机号',
            key: 'address'
          },
          {
            title: '城市',
            key: 'address'
          },
          {
            title: '昵称',
            key: 'address'
          },
          {
            title: '注册时间',
            key: 'address'
          },
          {
            title: '操作',
            key: 'address',
            width: 150,
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
                }, '查看')
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
        infoData: {},
        showListView: true
      }
    },
    computed: {},
    methods: {
      changePage(val){},
      clickSee(index){
        this.showListView = false
      },
      returnListView(){
        this.showListView = true
      }
    }
  };
</script>
