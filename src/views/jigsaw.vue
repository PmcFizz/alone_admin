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
                <li class="muen_item" @click="saveMyDesign">保存拼图</li>
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

        <Modal width='800px' v-model="importImgModal"
               title="选择要导入的图片" @on-ok="submitUploadForm"
               @on-cancel="hideImportImgModal">
            <Row>
                <Col span="12">
                    <Form :model="uploadForm" :label-width="80">
                        <!--<FormItem label="Name:">-->
                        <!--<Input v-model="uploadForm.name" placeholder="Picture name..."></Input>-->
                        <!--</FormItem>-->
                        <FormItem label="Store:">
                            <Select v-model="uploadForm.storeId">
                                <Option v-for="item in storeArr" :value="item._id" :key="item._id">
                                    {{ item.name }}
                                </Option>
                            </Select>
                        </FormItem>
                        <FormItem label="Describe:">
                            <Input v-model="uploadForm.desc" type="textarea" :autosize="{minRows: 2,maxRows: 6}"
                                   placeholder="Picture des..."></Input>
                        </FormItem>
                        <FormItem label="Picture:">
                            <Upload multiple type="drag"
                                    :on-success="uploadSuccess"
                                    :format="['jpg','jpeg','png','gif']"
                                    action="http://localhost:3000/base/uploadImgs">
                                <div style="padding: 20px 0">
                                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                    <p>Click or drag files here to upload</p>
                                </div>
                            </Upload>
                        </FormItem>
                        <FormItem>
                            <Button type="ghost" @click="resetUploadForm" style="margin-left: 8px">清空</Button>
                        </FormItem>
                    </Form>
                </Col>
            </Row>

        </Modal>


        <Modal width='400px' v-model="loginModal"
               title="Login&Register" @on-ok="submitLoginForm"
               @on-cancel="hideLoginModal">
            <Row>
                <Col span="12">
                    <Form :model="loginForm" :label-width="80">
                        <FormItem label="Name:">
                            <Input v-model="loginForm.nickName" style="width: 250px" placeholder="Name..."></Input>
                        </FormItem>
                        <FormItem label="Password:">
                            <Input v-model="loginForm.password" style="width: 250px" type="password"
                                   placeholder="Password..."></Input>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        </Modal>

    </div>
</template>

<script>
  import { queryPicStore, pushImgToStore, getStoreImg } from '@/api/pictureStore'
  import { registerAndLogin } from '@/api/user/user'
  import { createOne, queryMyDesign } from '@/api/design'

  export default {
    name: 'jigsaw',
    data () {
      return {
        jigsawCan: null,
        jigsawCtx: null,
        fabricCvs: null,
        commonImgStoreModal: false, // 公共图片库模态框
        importImgModal: false, // 导入图片模态框
        loginModal: false, // 登录注册框
        imgArr: [
          {imgUrl: 'http://mczaiyun.top/imgControl/bb9e.png', selected: false},
          {imgUrl: 'http://mczaiyun.top/imgControl/batman_tumbler.png', selected: false},
          {imgUrl: 'http://mczaiyun.top/imgControl/xinhe.png', selected: false},
          {imgUrl: 'http://mczaiyun.top/imgControl/fight.png', selected: false}
        ],
        storeList: [{label: '仓库1', value: '1'}], // 仓库列表
        uploadForm: {
          name: '',
          storeId: '',
          desc: '',
          pictureUrlArr: []
        },
        loginForm: {
          name: '',
          pwd: ''
        },
        storeArr: [], // 图片库
        userId: null
      }
    },
    mounted () {
      this.initData()
    },
    methods: {
      // 上传成功
      uploadSuccess (response, file, fileList) {
        this.uploadForm.pictureUrlArr.push(...response.data)
      },
      // 清空上传文件表单
      resetUploadForm () {
        this.uploadForm.name = ''
        this.uploadForm.store = ''
        this.uploadForm.desc = ''
        this.uploadForm.pictureUrlArr = []
      },
      // 提交登录表单
      submitLoginForm () {
        registerAndLogin(this.loginForm).then(res => {
          if (res.code === 200) {
            localStorage.setItem('userId', res.data.userId)
          }
        })
      },
      // 隐藏登录模态框
      hideLoginModal () {
        this.loginModal = false
      },
      // 提交上传文件表单
      submitUploadForm () {
        pushImgToStore(this.uploadForm).then(res => {
          console.log(this.uploadForm)
        })
      },
      // 确定上传导入图片
      confirmImportImg () {

      },
      // 隐藏上传导入模态框
      hideImportImgModal () {
        this.importImgModal = false
      },
      initData () {
        this.userId = localStorage.getItem('userId')
        queryPicStore().then(res => {
          this.storeArr = res.data
          this.uploadForm.storeId = this.storeArr[0]._id
        })
        const clientHeight = document.documentElement.scrollHeight
        const clientWidth = document.documentElement.scrollWidth
        this.jigsawCan = this.$el.querySelector('#jigsawCan')
        this.jigsawCan.setAttribute('width', clientWidth - 10)
        this.jigsawCan.setAttribute('height', clientHeight - 10)
        this.fabricCvs = new fabric.Canvas('jigsawCan')
        // this.importImg()

        this.fabricCvs.on('mouse:dblclick', (e) => {
          this.fabricCvs.remove(
            this.fabricCvs.item(
              this.fabricCvs.getObjects().indexOf(e.target)
            )
          )
        })
      },
      clickImg (item) {
        item.selected = !item.selected
      },
      // 确定选中的图片
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
        getStoreImg({isCommon: true}).then(res => {
          this.imgArr = res.data.pictureUrlArr.map(item => {
            return {imgUrl: item, selected: false}
          })
          this.commonImgStoreModal = true
        })
      },
      // 隐藏公共图库
      hideCommonImgStoreModal () {
        this.commonImgStoreModal = false
      },
      // 导入上传
      importUpload () {
        this.importImgModal = true
        this.uploadForm.pictureUrlArr = []
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
      },
      // 保存我的设计
      saveMyDesign () {
        if (this.userId) {
          let sendData = {
            name: +new Date(),
            createUserId: this.userId,
            content: this.fabricCvs,
            imgLink: ''
          }
          createOne(sendData).then(res => {
            if (res.code === 200) {
              alert('保存成功!')
            }
          })
        } else {
          this.loginModal = true
        }
      },
      // 显示私有图库
      showPrivateImgStoreModal () {
        this.loginModal = true
      },
      // 显示我的设计
      showMyDesign () {
        if (this.userId) {
          queryMyDesign().then(res => {
            this.fabricCvs.loadFromJSON(JSON.stringify(res.data[0].content))
          })
        } else {
          this.loginModal = true
        }
      }
    }
  }
</script>

<style lang="less">
    @import "./jigsaw.less";

    .importImg {
        display: inline-block;
        margin: 10px;
        width: 100px;
        height: auto;
        &.selected {
            border: 2px solid #f90
        }
    }
</style>