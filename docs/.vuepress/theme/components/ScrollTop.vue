<template>
  <div v-if="showDom" class="scroll-top">
    <div class="arrow-up" @click="scrollToPosition(to)">
      <svg t="1647698673547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5358" width="30" height="30"><path d="M546 511.4l272 272c18.8 18.8 18.8 49.2 0 67.8l-45.2 45.2c-18.8 18.8-49.2 18.8-67.8 0L512 703.8l-192.8 192.8c-18.8 18.8-49.2 18.8-67.8 0L206 851.4c-18.8-18.8-18.8-49.2 0-67.8l272-272c18.8-19 49.2-19 68-0.2z m-68-384L206 399.4c-18.8 18.8-18.8 49.2 0 67.8l45.2 45.2c18.8 18.8 49.2 18.8 67.8 0l192.8-192.8 192.8 192.8c18.8 18.8 49.2 18.8 67.8 0l45.2-45.2c18.8-18.8 18.8-49.2 0-67.8l-272-272c-18.4-18.8-48.8-18.8-67.6 0z" p-id="5359"></path></svg>
      <div class="to-top">回到顶部</div>
    </div>
  </div>
</template>

<script>
import { throttle } from '../util'
export default {
  name: "ScrollTop",
  props: {
    to: null
  },
  data() {
    return {
      showDom: false
    }
  },
  computed: {
    // showDom() {
    //   return document.documentElement.scrollTop > 500
    // }
  },
  mounted() {
    // 监听滚动事件
    window.addEventListener('scroll', throttle(this.onScroll,500))
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener('scroll', throttle(this.onScroll,500))
  },
  methods: {
    scrollToPosition(id){
      if (!id) return
      document.getElementById(id).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    },
    onScroll() {
      // 滚动监听器
      this.showDom = document.documentElement.scrollTop > 100;
    }
  }
}
</script>

<style lang="stylus">
.scroll-top
  position fixed
  bottom 0
  right 0
  cursor pointer
  .arrow-up
    text-align: center;
    margin: 0 auto;
    padding: .5rem 1rem;
  .to-top
    text-align center
    font-size .5rem
    padding-top .125rem

</style>