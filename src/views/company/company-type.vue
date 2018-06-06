<template>
    <Row>
        <Col span="12">
        <Card :bordered="false">
            <p slot="title">活动类型</p>
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
                title="新建/更新活动类型"
                @on-ok="saveData"
                @on-cancel="cancelUpdate">
            <Form :label-width="80">
                <FormItem label="名称：">
                    <Input v-model="activityType.name" placeholder="请输入名称"></Input>
                </FormItem>
                <FormItem label="说明：">
                    <Input v-model="activityType.des" type="textarea"
                           :autosize="{minRows: 2,maxRows: 5}"
                           placeholder="请输入描述"></Input>
                </FormItem>
            </Form>
        </Modal>
    </Row>
</template>

<script>
  export default {
    name: 'activity-type',
    components: {},
    data () {
      return {
        columns1: [
          {
            title: '名称',
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
                      this.clickUpdate(params.index)
                    }
                  }
                }, '更新'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.delOne(params.index)
                    }
                  }
                }, '删除')
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
        activityType: {}
      }
    },
    computed: {},
    methods: {
      changePage(val){},
      clickUpdate(){
        this.showEditModal = true
      },
      delOne(){
        this.$Modal.confirm({
          title: '删除确认',
          content: '<p>确定删除该活动价格</p>',
          onOk: () => {
            this.$Message.info('已删除');
          },
          onCancel: () => {
            this.$Message.info('已取消');
          }
        });
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
