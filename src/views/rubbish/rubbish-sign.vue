<template>
    <Row>
        <Col span="16">
        <Card :bordered="false">
            <p slot="title">垃圾标注</p>
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
    name: 'rubbish-sign',
    components: {},
    data () {
      return {
        columns1: [
          {
            title: '垃圾位置',
            key: 'age'
          },
          {
            title: '垃圾种类',
            key: 'age'
          },
          {
            title: '垃圾尺寸',
            key: 'age'
          },
          {
            title: '创建时间',
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
                      this.show(params.index)
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
                      this.show(params.index)
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
        ]
      }
    },
    computed: {},
    methods: {
      changePage(val){}
    }
  };
</script>
