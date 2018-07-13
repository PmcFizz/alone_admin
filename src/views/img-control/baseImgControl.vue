<template>
    <div>
        <!--<p>功能:图片导入,图片拖动,旋转,裁剪,加文字</p>-->
        <Row class="operation_btn">
            <Button type="info" @click="importImg">图片导入</Button>
            <Button type="info" @click="imgMove">图片拖动</Button>
            <Button type="info">图片旋转</Button>
            <Button type="info">图片裁剪</Button>
            <Button type="info">图片加文字</Button>
        </Row>
        <Row class="operation_wrap">
            <canvas id="cvs" height="800" width="800px"></canvas>
        </Row>


        <Modal width='1000px'
               v-model="selectImg"
               title="请选择要导入的图片"
               @on-ok="confirmImg"
               @on-cancel="cancelImg">
            <img @click="clickImg" v-for="item in imgArr" :key="item" class="importImg" :src="item"/>

        </Modal>
    </div>
</template>

<script>
  export default {
    name: 'baseImgControl',
    components: {},
    data () {
      return {
        selectImg: false,
        selectImgUrl: '',
        imgArr: ['http://mczaiyun.top/imgControl/bb9e.png',
          'http://mczaiyun.top/imgControl/batman_tumbler.png',
          'http://mczaiyun.top/imgControl/xinhe.png'],
        global: {
          ax: null, // 移动后的坐标
          ay: null, // 移动后的坐标
          x: null,  // 点击的坐标 相对于浏览器
          y: null   // 点击的坐标
        },
        cvs: null,
        ctx: null,
        i: 0
      }
    },
    mounted () {
      // this.cvs = this.$el.querySelector('#cvs')
      // this.ctx = this.cvs.getContext('2d')
      this.cvs = new fabric.Canvas('cvs')
    },
    computed: {},
    methods: {
      // 导入图片
      importImg () {
        this.selectImg = true
      },
      clickImg (ev) {
        let url = ev.target.getAttribute('src')
        ev.target.setAttribute('style', 'border:2px solid #f90')
        this.selectImgUrl = url
      },
      confirmImg () {

        fabric.Image.fromURL(this.selectImgUrl, (oImg) => {
          oImg.scale(0.5)//图片缩小10倍
          this.cvs.add(oImg)
        })
        // let imgObj = new Image()
        // imgObj.src = this.selectImgUrl
        // this.ctx.drawImage(imgObj, 0, 0)
      },
      cancelImg () {
        this.selectImg = false
      },
      imgMove () {
        let imgObj = new Image()
        imgObj.src = this.selectImgUrl
        this.i = this.i + 5
        this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height)
        this.ctx.drawImage(imgObj, this.i, this.i)
      },
      cancleModify () {
        location.reload()
      },
      saveInfo () {
        console.log(this.baseInfo)
      }
    }
  }
</script>
<style lang="less">
    .info-label {
        width: 200px;
        display: inline-block;
        text-align: right;
        margin-right: 10px;
    }

    .info-data {
        display: inline-block;
        text-align: left;
    }

    .operation_wrap {
        margin-top: 20px;
        margin-left: 20px;
        height: 800px;
        width: 800px;
        border: 1px solid #f90;
    }

    .importImg {
        display: inline-block;
        margin: 10px;
        width: 200px;
        height: auto;
    }
</style>
