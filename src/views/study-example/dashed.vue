<template>
    <div class="dashed-page">
        <div class="box">
            <div class="content"></div>
        </div>

        <div class="mask"></div>

        <div class="dynamic-border">
            <div class="border-content">内容占位符</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'dashed'
  }
</script>

<style lang="less" scoped>
    .dashed-page {
        .box {
            width: 150px;
            border: 2px dashed #fff;
            background: linear-gradient(to bottom, #34538b, #cd0000);
            background-origin: border-box;
        }
        .content {
            height: 100px;
            background-color: #fff;
        }

        .mask {
            width: 200px;
            height: 150px;
            margin-top: 20px;
            border: 2px dashed #cd0000;
            box-sizing: border-box;
        }
        @supports (-webkit-mask: none) or (mask: none) {
            .mask {
                border: none;
                background: linear-gradient(to bottom, #34538b, #cd0000) no-repeat;
                mask: linear-gradient(to right, #000 6px, transparent 6px) repeat-x,
                linear-gradient(to bottom, #000 6px, transparent 6px) repeat-y,
                linear-gradient(to right, #000 6px, transparent 6px) repeat-x 0 100%,
                linear-gradient(to bottom, #000 6px, transparent 6px) repeat-y 100% 0;
                mask-size: 8px 2px, 2px 8px, 8px 2px, 2px 8px;
            }
        }

        .dynamic-border{
            margin-top: 20px;
            width: 200px;
            background: repeating-linear-gradient(135deg,transparent,transparent 3px,#000 3px,
            #000 8px);
            animation: shine 1s infinite linear;
            overflow: hidden;
            .border-content{
                height: 128px;
                margin: 1px;
                padding: 10px;
                background-color: #fff;
            }

            @keyframes shine{
                0% {background-position:-1px -1px}
                100% {background-position:-12px -12px}
            }
        }



        /*.mask{*/
            /*width: 200px;*/
            /*height: 150px;*/
            /*border:2px dashed #cd0000;*/
            /*box-sizing: border-box;*/
        /*}*/
        /*@supports (-webkit-mask:none) or (mask :none) {*/
            /*.mask{*/
                /*border:none;*/
                /*background: linear-gradient(to bottom, #34538b,#cd00000) no-repeat;*/
                /*mask:linear-gradient(to right,#000 6px,transparent 6px) repeat-x,*/
                     /*linear-gradient(to bottom,#000 6px,transparent 6px) repeat-y,*/
                     /*linear-gradient(to right,#000 6px,transparent 6px) repeat-x 0 100%,*/
                     /*linear-gradient(to bottom,#000 6px,transparent 6px) repeat-y 100% 0;*/
                /*mask-size: 8px 2px,2px 8px,8px 2px,2px 8px;*/
            /*}*/
        /*}*/
    }
</style>