<template>
    <Row>
        <Col span="12">
        <Form :model="formItem" :label-width="80">
            <FormItem label="标题">
                <Input v-model="formItem.input" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="介绍">
                <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 6}"
                       placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="图片">
                <Upload
                        multiple
                        type="drag"
                        action="//jsonplaceholder.typicode.com/posts/">
                    <div style="padding: 20px 0">
                        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                        <p>Click or drag files here to upload</p>
                    </div>
                </Upload>
            </FormItem>
            <FormItem>
                <Button type="primary">提交</Button>
                <Button type="ghost" style="margin-left: 8px">取消</Button>
            </FormItem>
        </Form>
        </Col>
    </Row>
</template>

<script>
  export default {
    name: 'create-needs',
    components: {},
    data () {
      return {
        formItem: {}
      }
    },
    computed: {},
    methods: {}
  }
</script>
