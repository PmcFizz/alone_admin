<template>
    <div class="file-uploader-cont">
        <div class="upload">
            <label class='file-uploader js__project__btn'>上传图片<input :id="id" type="file" multiple="multiple"
                                                                     @change="fileUpLoader($event)"/></label>
        </div>
    </div>
</template>
<script>
  import { getRandom } from '@/util'
  export default {
    data () {
      return {
        id: getRandom('jason', 10, 20),
        identificationUrlArr: []
      }
    },
    props: {
      maxSize: Number, // 最大值
      allowedExtension: Array // 允许上传的格式
    },
    created () {
    },
    mounted () {
    },
    computed: {},
    methods: {
      fileUpLoader (event) {
        let file = event.target.files
        let param = {}
        let fileArr = []
        if ((this.identificationUrlArr.length + file.length) > 10) {
          this.$message({
            type: 'error',
            message: '上传文件不超过10个！'
          })
        }
        if (file.length > 0) {
          for (let k in file) {
            fileArr.push(file[k])
            param[file + k] = file[k]
          }
          let extionArr = []
          fileArr = fileArr.splice(0, fileArr.length - 2)
          let extionFlag = fileArr.some(item => item.size > this.maxSize * 1000)
          if (extionFlag) {
            this.$message({
              type: 'error',
              message: '上传文件尺寸不能超过' + this.maxSize / 1000 + 'MB'
            })
            return false
          }
          extionArr = fileArr.map(x => x.name.substr(x.name.lastIndexOf('.') + 1))
          if (!this.isInArray(extionArr, this.allowedExtension)) {
            this.$message({
              type: 'error',
              message: '上传文件类型不符合要求，请上传[ ' + this.allowedExtension.join(' ') + ' ]类型的文件'
            })
            return false
          }
        }
      },
      isInArray (Arr, arr) {
        if (!(Arr instanceof Array)) return false
        if (!(arr instanceof Array)) return false
        let count = 0
        Arr.forEach((item) => {
          if (arr.indexOf(item) === -1) {
            ++count
          }
        })
        if (count > 0) return false
        return true
      }
    },
    watch: {}
  }
</script>
<style lang="scss" scoped>
    .js__project__btn {
        background: #385c98 !important;
        border-color: #385c98 !important;
    }

    ul, li {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .upload {
        padding: 15px 0;
    }

    label.file-uploader {
        margin: 10px 0;
        background-color: #4E9BFF;
        color: #fff;
        padding: 9px 15px;
        border-radius: 4px;
        cursor: pointer;
        input {
            display: none;
        }
    }

    .file-text {
        font-size: 14px;
        color: #7F7F7F;
        margin-left: 8px;
    }

    .link-cont {
        ul {
            li {
                span {
                    font-size: 14px;
                    &.title {
                        color: #AFB9CB;
                    }
                    &.delete {
                        color: #5F90EA;
                        cursor: pointer;
                        margin-left: 10px;
                    }
                }
            }
        }
    }
</style>


