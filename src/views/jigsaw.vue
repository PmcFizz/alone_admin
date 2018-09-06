<!--拼图-->
<template>
    <div class="jigsawPage">
        <canvas id="jigsawCan"></canvas>

        <div class="righter">
            <ul class="menuul">
                <li class="muen_item" @click="showCommonImgStoreModal" id="theme">公用图库</li>
                <li class="muen_item" @click="importUpload">导入上传</li>
                <li class="muen_item" @click="reset">清 屏</li>
                <li class="muen_item" @click="changeBG">改变背景</li>
                <li class="muen_item" @click="showPrivateImgStoreModal">我的图库</li>
                <li class="muen_item" @click="showMyDesign">我的设计</li>
            </ul>
        </div>

        <Modal width='914px' v-model="commonImgStoreModal"
               title="请选择要导入的图片" @on-ok="confirmImg"
               @on-cancel="hideCommonImgStoreModal">
            <img @click="clickImg(item)" v-for="(item,index) in imgArr" :key="index"
                 :class="item.selected ? 'selected' :''" class="importImg"
                 :src="item.imgUrl"/>
        </Modal>

    </div>
</template>

<script>
  export default {
    name: 'jigsaw',
    data () {
      return {
        jigsawCan: null,
        jigsawCtx: null,
        fabricCvs: null,
        commonImgStoreModal: false,
        imgArr: [
          {imgUrl: 'http://mczaiyun.top/imgControl/bb9e.png', selected: false},
          {imgUrl: 'http://mczaiyun.top/imgControl/batman_tumbler.png', selected: false},
          {imgUrl: 'http://mczaiyun.top/imgControl/xinhe.png', selected: false},
          {imgUrl: 'http://mczaiyun.top/imgControl/fight.png', selected: false}
        ],
      }
    },
    mounted () {
      this.initData()
    },
    methods: {
      initData () {
        const clientHeight = document.documentElement.scrollHeight
        const clientWidth = document.documentElement.scrollWidth
        this.jigsawCan = this.$el.querySelector('#jigsawCan')
        this.jigsawCan.setAttribute('width', clientWidth - 10)
        this.jigsawCan.setAttribute('height', clientHeight - 10)
        this.fabricCvs = new fabric.Canvas('jigsawCan')
        this.importImg()

        this.fabricCvs.on('mouse:dblclick', (e) => {
          this.fabricCvs.remove(
            this.fabricCvs.item(
              this.fabricCvs.getObjects().indexOf(e.target)
            )
          )
          // var p = this.fabricCvs.getPointer(e)
          // this.fabricCvs.remove(this.fabricCvs.item(0))
          // this.fabricCvs.renderAll()
        })
      },
      clickImg (item) {
        item.selected = !item.selected
      },
      confirmImg () {
        let selectedArr = this.imgArr.filter(item => {
          return item.selected
        })
        // 循环创建fabric.Image对象 并添加到fabric.Canvas
        for (let i = 0; i < selectedArr.length; i++) {
          fabric.Image.fromURL(selectedArr[i].imgUrl, (oImg) => {
            oImg.scale(0.5)//图片缩小10倍
            this.fabricCvs.add(oImg)
          })
        }
      },
      // 导入一个图片
      importImg () {
        fabric.Image.fromURL('http://mczaiyun.top/imgControl/fight.png', (oImg) => {
          oImg.scale(0.5)//图片缩小10倍
          this.fabricCvs.add(oImg)
        })
        fabric.Image.fromURL('http://mczaiyun.top/imgControl/fight.png', (oImg) => {
          oImg.scale(0.5)//图片缩小10倍
          this.fabricCvs.add(oImg)
        })
        fabric.Image.fromURL('http://mczaiyun.top/imgControl/fight.png', (oImg) => {
          oImg.scale(0.5)//图片缩小10倍
          this.fabricCvs.add(oImg)
        })
      },
      // 显示公共图库
      showCommonImgStoreModal () {
        this.imgArr.forEach(item => {
          item.selected = false
        })
        this.commonImgStoreModal = true
      },
      // 隐藏公共图库
      hideCommonImgStoreModal () {
        this.commonImgStoreModal = false
      },
      // 导入上传
      importUpload () {

      },
      // 清屏
      reset () {
        this.fabricCvs.getSelectionContext() // 获取选中的对象
        this.fabricCvs.clear() // 清空所有内容
      },
      // 改变背景
      changeBG () {
        // 使用图片设置背景
        this.fabricCvs.setBackgroundColor({
          source: 'http://fabricjs.com/assets/escheresque_ste.png'
        }, this.fabricCvs.renderAll.bind(this.fabricCvs))

        // 设置背景颜色
        // this.fabricCvs.setBackgroundColor('rgba(255, 73, 64, 0.6)', this.fabricCvs.renderAll.bind(this.fabricCvs))

      },
      // 显示私有图库
      showPrivateImgStoreModal () {

      },
      // 显示我的设计
      showMyDesign () {

      }
    }
  }
</script>

<style lang="less">
    @import "./jigsaw.less";

    .importImg {
        display: inline-block;
        margin: 10px;
        width: 200px;
        height: auto;
        &.selected {
            border: 2px solid #f90
        }
    }
</style>