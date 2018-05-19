<template>
    <div>
        <Row>
            <Col span="12">
            <Card :bordered="false">
                <p slot="title">基本信息</p>
                <Row>
                    <Col span="24" style="text-align: center">
                    <Avatar size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
                    <Form :label-width="100" style="margin-top: 20px">
                        <FormItem label="名称:">
                            <Input placeholder="请输入名称..."></Input>
                        </FormItem>
                        <FormItem label="描述:">
                            <Input placeholder="请输入描述..."></Input>
                        </FormItem>
                    </Form>
                    </Col>
                </Row>
            </Card>
            <Card :bordered="false" style="margin-top: 20px">
                <p slot="title">网站设置</p>
                <Row>
                    <Col span="24" style="text-align: center">
                    <Form :label-width="100" style="margin-top: 20px">
                        <FormItem label="网站标题:">
                            <Input placeholder="请输入网站标题..."></Input>
                        </FormItem>
                        <FormItem label="网站关键字:">
                            <Input placeholder="请输入网站关键字..."></Input>
                        </FormItem>
                        <FormItem label="网站备案号:">
                            <Input placeholder="请输入网站备案号..."></Input>
                        </FormItem>
                        <FormItem label="网站版权所有:">
                            <Input placeholder="请输入网站版权所有..."></Input>
                        </FormItem>
                    </Form>
                    </Col>
                </Row>
            </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
  export default {
    name: 'home',
    components: {},
    data () {
      return {};
    },
    computed: {},
    methods: {}
  };
</script>
