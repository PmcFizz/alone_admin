<template>
    <div class="userInfo_box_uploadImg">
        <div class="userInfo_box_uploadImg_content">
            <!--顶部 -->
            <div class="userInfo_box_uploadImg_content_top">
                <input id="inputImage" type="file" name="photoFile">
                <label class="userInfo_box_uploadImg_content_top_input curp" for="inputImage">上传头像</label>
                <label class="userInfo_box_uploadImg_content_top_message">仅支持JPG、GIF、PNG格式图片，且小于2M</label>
            </div>
            <!-- 主体 -->
            <div class="userInfo_box_uploadImg_content_mian">
                <div class="userInfo_box_uploadImg_content_mian_left fl">
                    <div class="userInfo_box_uploadImg_content_mian_left_imgBox">
                        <!-- 这是初始图片 -->
                        <img :src="originalImageURL" id="image">
                    </div>
                    <div class="userInfo_box_uploadImg_content_mian_left_btns_zooms">
                        <label id="userImg_zoomOut" class="fl curp">-</label>
                        <label id="userImg_zoomIn" class="fr curp">+</label>
                    </div>
                    <div class="userInfo_box_uploadImg_content_mian_left_btns_others">
                        <label id="userImg_rotate" class="fl curp">旋&nbsp;&nbsp;转</label>
                        <label id="userImg_reUpload" class="fr curp">重新上传</label>
                    </div>

                </div>
                <div class="userInfo_box_uploadImg_content_mian_right fr tc">
                    <div class="userInfo_box_uploadImg_content_mian_right_preview100">
                        <div class="userImg_preview"></div>
                    </div>
                    <label>100*100px</label>
                    <div class="userInfo_box_uploadImg_content_mian_right_preview50">
                        <div class="userImg_preview"></div>
                    </div>
                    <label>50*50px</label>
                    <div class="userInfo_box_uploadImg_content_mian_right_preview30">
                        <div class="userImg_preview"></div>
                    </div>
                    <label>30*30px</label>
                </div>
            </div>
            <!-- 根部工具栏 -->
            <div class="userInfo_box_uploadImg_toolbar">
                <label class="curp">取&nbsp;&nbsp;消</label>
                <label id="userImg_save" class="curp">确&nbsp;&nbsp;定</label>
            </div>
        </div>
    </div>
</template>

<script>
  import $ from 'jquery'
  import * as cropper from 'cropper'
  import originalImageURL from '../../static/img/user_unSet_image.png'

  $(function () {
    var URL = window.URL || window.webkitURL
    var $image = $('#image')
    var $rotate = $('#userImg_rotate')
    var $reUpload = $('#userImg_reUpload')
    var $zoomOut = $('#userImg_zoomOut')
    var $zoomIn = $('#userImg_zoomIn')
    var $save = $('#userImg_save')
    var croppable = false
    var $previews = $('.userImg_preview')
    var options = {
      aspectRatio: 1,
      viewMode: 1,
      built: function () {
        croppable = true
      },
      build: function (e) {
        var $clone = $(this).clone()

        $clone.css({
          display: 'block',
          width: '100%',
          minWidth: 0,
          minHeight: 0,
          maxWidth: 'none',
          maxHeight: 'none'
        })

        $previews.css({
          width: '100%',
          overflow: 'hidden'
        }).html($clone)
      },
      crop: function (e) {
        var imageData = $(this).cropper('getImageData')
        var previewAspectRatio = e.width / e.height

        $previews.each(function () {
          var $preview = $(this)
          var previewWidth = $preview.width()
          var previewHeight = previewWidth / previewAspectRatio
          var imageScaledRatio = e.width / previewWidth

          $preview.height(previewHeight).find('img').css({
            width: imageData.naturalWidth / imageScaledRatio,
            height: imageData.naturalHeight / imageScaledRatio,
            marginLeft: -e.x / imageScaledRatio,
            marginTop: -e.y / imageScaledRatio
          })
        })
      }
    }

    var uploadedImageURL

    // init
    $image.attr('src', originalImageURL).cropper(options)

    // rotate
    $rotate.on('click', function () {
      $image.cropper('rotate', 90)
    })

    // zoomOut
    $zoomOut.on('click', function () {
      $image.cropper('zoom', -0.1)
    })

    // zoomIn
    $zoomIn.on('click', function () {
      $image.cropper('zoom', 0.1)
    })

    // Move
    /*$move.on('click',function(){
     $image.cropper('setDragMode');
     });*/

    // reUpload
    $reUpload.on('click', function () {
      $image.cropper('destroy').attr('src', originalImageURL).cropper(options)
      if (uploadedImageURL) {
        URL.revokeObjectURL(uploadedImageURL)
        uploadedImageURL = ''
      }
    })

    // Keyboard
    $(document.body).on('keydown', function (e) {

      if (!$image.data('cropper') || this.scrollTop > 300) {
        return
      }

      switch (e.which) {
        case 37:
          e.preventDefault()
          $image.cropper('move', -1, 0)
          break

        case 38:
          e.preventDefault()
          $image.cropper('move', 0, -1)
          break

        case 39:
          e.preventDefault()
          $image.cropper('move', 1, 0)
          break

        case 40:
          e.preventDefault()
          $image.cropper('move', 0, 1)
          break
      }

    })

    // save and upload cropped Img
    $save.on('click', function () {
      $('#image').cropper('getCroppedCanvas').toBlob(function (blob) {
        // blob就是图片的二进制文件，至于怎么上传给你们的后端，需要和你们后端进行协商。在这里你就可以上传你的formData给后端了
        console.log('点击确定，上传所截取的图片！', blob)

        // var formData = new FormData();
        // formData.append('photoFile', blob);
        // $.ajax(API_URL+'', {
        //     method: "POST",
        //     data: formData,
        //     processData: false,
        //     contentType: false,
        //     success: function (res) {
        //         alert('头像上传成功！');
        //     },
        //     error: function () {
        //         alert('头像上传失败！');
        //     }
        // });
      })
    })

    // Inport Image
    var $inputImage = $('#inputImage')
    if (URL) {
      $inputImage.change(function () {
        var files = this.files
        var file

        if (!$image.data('cropper')) {
          return
        }

        if (files && files.length) {
          file = files[0]

          if (/^image\/\w+$/.test(file.type)) {
            if (uploadedImageURL) {
              URL.revokeObjectURL(uploadedImageURL)
            }

            uploadedImageURL = URL.createObjectURL(file)
            $image.cropper('destroy').attr('src', uploadedImageURL).cropper(options)
            $inputImage.val('')
          } else {
            alert('请选择图片再上传！')
          }
        }
      })
    } else {
      $inputImage.prop('disabled', true).parent().addClass('disabled')
    }
  })

  export default {
    name: 'avatar',
    data () {
      return {
        originalImageURL
      }
    }
  }
</script>

<style lang="less" scoped>
    @import './avatar/index.css';
    @import './avatar/cropper.css';
    *{
        box-sizing: initial;
    }
</style>