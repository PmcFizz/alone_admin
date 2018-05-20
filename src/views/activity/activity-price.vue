<template>
    <Row>
        <Col span="16">
        <Card :bordered="false">
            <p slot="title">活动价格</p>
            <p style="margin-bottom: 10px">
                <Button type="primary" size="small" @click="clickCreate">新增</Button>
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
                title="新建/更新活动价格"
                @on-ok="saveData"
                @on-cancel="cancelUpdate">
            <Form  :label-width="120">
                <FormItem label="编号：">
                    <Input v-model="activityPrice.input" placeholder="编号，不可重复，请使用字母命名。"></Input>
                </FormItem>
                <FormItem label="名称：">
                    <Input v-model="activityPrice.input" placeholder="请输入名称"></Input>
                </FormItem>
                <FormItem label="最小年龄：">
                    <Input v-model="activityPrice.input" placeholder="请输入最小年龄"></Input>
                </FormItem>
                <FormItem label="最大年龄：">
                    <Input v-model="activityPrice.input" placeholder="请输入最大年龄"></Input>
                </FormItem>
                <FormItem label="最少报名人数：">
                    <Input v-model="activityPrice.input" placeholder="请输入最少报名人数"></Input>
                </FormItem>
                <FormItem label="描述：">
                    <Input v-model="activityPrice.input" type="textarea"
                           :autosize="{minRows: 2,maxRows: 5}"
                           placeholder="请输入描述"></Input>
                </FormItem>
                <FormItem label="显示顺序：">
                    <Input v-model="activityPrice.input" placeholder="请输入显示顺序"></Input>
                </FormItem>
            </Form>
        </Modal>


    </Row>
</template>

<script>
  export default {
    name: 'activity-price',
    components: {},
    data () {
      return {
        columns1: [
          {
            title: '名称',
            key: 'age'
          },
          {
            title: '最小年龄',
            key: 'age'
          },
          {
            title: '最大年龄',
            key: 'age'
          },
          {
            title: '最少人数限制',
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
                  props: {type: 'primary', size: 'small'},
                  style: {marginRight: '5px'},
                  on: {
                    click: () => {
                      this.clickUpdate(params.index)
                    }
                  }
                }, '更新'),
                h('Button', {
                  props: {type: 'error', size: 'small'},
                  style: {marginRight: '5px'},
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
        activityPrice:{}
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
