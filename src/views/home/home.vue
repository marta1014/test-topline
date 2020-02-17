<template>
  <el-carousel height="100vh" :interval="5000">
    <el-carousel-item v-for="item in swiper" :key="item">
      <img :src="item" alt style="height:100vh" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      swiper: [
        'http://pic.netbian.com/uploads/allimg/180417/174216-1523958136a79f.jpg',
        'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1305/21/c0/21161039_1369122792797.jpg',
        'https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/8d5494eef01f3a29223c63eb9d25bc315c607c1a.jpg',
        'https://imgstatic.ctfile.com/upload/portal/879674/MfEl1hE0/20170317-1489716566501250.jpg',
        'http://img.article.pchome.net/01/74/96/17/pic_lib/wm/7.jpg',
        'https://desk-fd.zol-img.com.cn/t_s1280x800c5/g5/M00/02/06/ChMkJlbKynSIIVfzAALNn_lMp3cAALIcABlkKgAAs23604.jpg'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
</style>
