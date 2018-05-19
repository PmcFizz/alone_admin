<template>
    <Row>
        <Col span="16">
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
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
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
        ]
      }
    },
    computed: {},
    methods: {
      changePage(val){}
    }
  };
</script>
