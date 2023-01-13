<template>
  <div>
    <el-row :gutter="20">
      <el-col :sm="0" :md=2 :lg="4" style="display: block;"><div style="width: 1px; height: 1px;"></div></el-col>
      <el-col :sm="24" :md="18" :lg="16">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>嘤嘤嘤…</span>
          </div>
          <el-row :gutter="20">
            <el-col :xs="24" :sm="24">
              <div class="copyright-text">
                <div>都看到这里了，可以给个 <a href="https://github.com/wangxinleo/wangxinleo-index" target="_blank">star</a>⭐ 吗？</div>
                <div>作者：<a href="https://github.com/wangxinleo" target="_blank">wangxinleo</a></div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
function getImgSoource() {
  return (
    "https://api.thecatapi.com/v1/images/search?format=src&t=" +
    new Date().getTime()
  );
}

export default {
  data() {
    return {
      imgSrc: getImgSoource()
    };
  },
  watch: {
    $route(to) {
      this.imgSrc = getImgSoource();
    }
  }
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.image-slot
  width 100%
  display block

.copyright-text 
  font-size 15px
  color #999
  background #eee
  padding 10px

.copyright-text 
  > div 
    margin-bottom 10px

@media (max-width: $MQMobile)
  .copyright-text 
    font-size 13px
  .el-card__header
    padding 8px 10px
    font-size 13px

</style>
