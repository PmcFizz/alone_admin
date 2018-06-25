<!--基础模板 Fizz-->
<template>
    <Row>
        <Col span="12">
        <BaseModel></BaseModel>
        <Card :bordered="false">
            <p slot="title">No border title</p>
            <Row style="display: none">
                111111
            </Row>
        </Card>
        </Col>
    </Row>
</template>

<script>
  import BaseModel from '@/components/qualityControl/baseModel'

  export default {
    name: 'base-model',
    components: {
      BaseModel
    },
    data () {
      return {
        value1: '0'
      }
    },
    computed: {},
    mounted () {

    },
    methods: {}
  }
</script>
