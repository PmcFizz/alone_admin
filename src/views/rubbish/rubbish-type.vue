<template>
    <Row>
        <Col span="16">
        <Card :bordered="false">
            <p slot="title">垃圾分类</p>
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
                title="新建/更新垃圾分类"
                @on-ok="saveData"
                @on-cancel="cancelUpdate">
            <Form :label-width="80">
                <FormItem label="名称：">
                    <Input v-model="rubbishType.name" placeholder="请输入名称"></Input>
                </FormItem>
                <FormItem label="图标：">
                    <Input v-model="rubbishType.name" placeholder="请输入名称"></Input>
                </FormItem>
                <FormItem label="说明：">
                    <Input v-model="rubbishType.name" type="textarea"
                           :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入名称"></Input>
                </FormItem>
                <FormItem label="位置：">
                    <Select v-model="rubbishType.name" style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>

                </FormItem>
                <FormItem label="相对于：">
                    <Select v-model="rubbishType.name" style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </FormItem>
            </Form>
        </Modal>
    </Row>
</template>

<script>
  export default {
    name: 'rubbish-type',
    components: {},
    data () {
      return {
        columns1: [
          {
            title: '名称',
            key: 'age'
          },
          {
            title: '全称',
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
        rubbishType: {},
        cityList: [{
          value: 'New York',
          label: 'New York'
        },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          }]
      }
    },
    computed: {},
    methods: {
      changePage(val){},
      saveData(){
        this.showEditModal = false
      },
      cancelUpdate(){
        this.showEditModal = false
      },
      clickCreate(){
        this.showEditModal = true
      },
      clickUpdate(){
        this.showEditModal = true
      },
    }
  };
</script>
