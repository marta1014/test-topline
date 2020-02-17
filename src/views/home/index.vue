<template>
  <el-container class="homePage">
    <!-- 侧栏 -->
    <el-aside style="width:200">
      <aside-list />
    </el-aside>

    <!-- 主区域 -->
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'homePage',
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
</style>
