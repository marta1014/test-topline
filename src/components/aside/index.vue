<template>
  <div class="asidePage">
    <!-- 此处预留搜索建议 -->
    <el-menu default-active="2"
     router
    class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">
          <span>导航一</span>
        </template>
        <el-menu-item index="/home/1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
       <el-submenu index="2">
        <template slot="title">
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
       <el-submenu index="3">
        <template slot="title">
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
    <el-row class="btn-close">
        <i class="el-icon-d-arrow-left" @click="$router.push('/home')"></i>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'asidePage',
  props: {},
  data () {
    return {}
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {},
  watch: {}
}
</script>

<style scoped lang="less">
.asidePage {
  width: 200px;
  text-align: center;
  .btn-close{
      position: fixed;
      bottom: 20px;
      font-size: 30px;
      margin-left: 20px;
      color: rgb(16, 189, 131);
      opacity: .5
  }
}
</style>
