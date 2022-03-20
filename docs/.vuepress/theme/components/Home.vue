<template>
  <main class="home" aria-labelledby="main-title">

    <header id="landing" class="landing-page">

      <div class="flex-div text-center">

        <BrowserNotes></BrowserNotes>

        <div class="flex-div">
          <img
              v-if="data.heroImage"
              :src="$withBase(data.heroImage)"
              :alt="data.heroAlt || 'hero'"
          >

          <h1
              v-if="data.heroText !== null"
              id="main-title"
              class="animate__animated animate__infinite animate__slower animate__pulse"
          >{{ data.heroText || $title || 'Hello' }}</h1>

          <p class="description">
            {{ data.tagline || $description || 'Welcome to WeCode' }}
          </p>

          <p
              class="action social-btn"
              v-if="data.socialLink && data.socialLink.length"
          >
            <template v-for="item in data.socialLink">
              <NavLink
                  class="button-img"
                  :item="outLink(item)"
              />
            </template>
          </p>

          <p
              class="action"
              v-if="data.actionText && data.actionLink"
          >
            <NavLink
                class="action-button"
                :item="actionLink"
            />
          </p>

        </div>
        <ArrowDown class="text-center" :to="'about'"></ArrowDown>

      </div>
    </header>


    <div id="about"
      class="about-page flex-div"
      v-if="data.features && data.features.length"
    >
      <div class="features">
        <div
            class="feature"
            v-for="(feature, index) in data.features"
            :key="index"
        >
          <h2>{{ feature.title }}</h2>
          <template v-for="line in feature.details">
            <p
                v-if="line.type === 'emoji'"
                class="animate__animated animate__infinite animate__slower animate__shakeX text-emoji"
                v-html="line.content"
            ></p>
            <p
                v-else
                v-html="line"
            >
            </p>
          </template>
        </div>
      </div>
      <ArrowDown class="text-center" :to="'productions'"></ArrowDown>

    </div>

    <div id="productions"
         class="productions-page flex-div text-center"
         v-if="data.productions && data.productions.length"
    >
      <div class="production-title">
        <h2>{{ data.productionTitle }}</h2>
      </div>
      <div class="productions">
        <div class="production-body">
          <div
              v-for="(production, index) in data.productions"
              :key="index"
          >
            <el-card class="production" shadow="hover">
              <div class="production-title">{{ production.title }}</div>
              <div class="production-details">{{ production.details }}</div>
              <div class="production-technicalLines">
                <span class="svg-inline" v-for="item in production.technicalLines">
                  <svg v-if="item === 'javascript'" t="1647686239634" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3321" width="25" height="25"><path d="M0 0h1024v1024H0V0z m940.117333 779.776c-7.466667-46.72-37.888-85.973333-128.128-122.581333-31.402667-14.72-66.304-24.96-76.672-48.64-3.882667-14.08-4.48-21.76-1.962666-30.08 6.4-27.562667 39.04-35.84 64.64-28.16 16.64 5.12 32 17.92 41.642666 38.4 44.117333-28.842667 44.117333-28.842667 74.88-48-11.52-17.92-17.237333-25.642667-25.002666-33.28-26.88-30.08-62.677333-45.44-120.917334-44.117334l-30.08 3.797334c-28.842667 7.04-56.32 22.4-72.96 42.88-48.64 55.082667-34.602667 151.082667 24.277334 190.762666 58.24 43.52 143.402667 53.077333 154.282666 94.08 10.24 49.92-37.12 65.92-83.882666 60.16-34.602667-7.68-53.76-25.002667-74.88-57.002666l-78.08 44.842666c8.96 20.48 19.2 29.397333 34.56 47.317334 74.24 74.922667 259.84 71.082667 293.162666-42.837334 1.237333-3.84 10.24-30.08 3.157334-70.4l1.962666 2.858667z m-383.274666-309.12h-95.914667c0 82.688-0.384 164.864-0.384 247.68 0 52.565333 2.688 100.821333-5.888 115.669333-14.08 29.397333-50.346667 25.642667-66.816 20.48-16.896-8.362667-25.472-19.882667-35.413333-36.48-2.688-4.48-4.693333-8.362667-5.418667-8.362666l-77.866667 48c13.013333 26.88 32 50.005333 56.490667 64.725333 36.48 21.76 85.504 28.8 136.832 17.28 33.408-9.642667 62.208-29.482667 77.269333-60.202667 21.76-39.68 17.152-88.32 16.938667-142.762666 0.512-87.637333 0-175.317333 0-263.637334l0.170667-2.389333z" fill="" p-id="3322"></path></svg>
                  <svg v-if="item === 'npm'" t="1647691544971" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5236" width="25" height="25"><path d="M0 312.917333v341.333334h284.416v56.832H512v-56.832h512v-341.333334H0z m284.416 284.330667H227.584v-170.666667H170.624v170.666667H56.96V369.792h227.456v227.456z m170.666667 0v57.002667H341.376V369.792h227.584v227.498667h-113.877333v-0.042667z m512.042666 0h-56.746666v-170.666667h-57.002667v170.666667h-56.96v-170.666667h-56.746667v170.666667h-113.962666V369.792h341.418666v227.456z" fill="" p-id="5237"></path><path d="M455.04 426.666667H512v113.792h-56.96V426.666667z" fill="" p-id="5238"></path></svg>
                  <svg v-if="item === 'vue'" t="1647691624715" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6175" width="25" height="25"><path d="M512 504L764.8 68.8h-134.4L512 275.2 393.6 70.4h-134.4L512 504zM819.2 70.4L512 600 204.8 68.8H0l512 886.4L1024 70.4H819.2z" fill="#333333" p-id="6176"></path></svg>
                  <svg v-if="item === 'typescript'" t="1647691700469" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7565" width="25" height="25"><path d="M0 512v512h1024V0H0z m825.216-40.789333c26.026667 6.485333 45.824 18.048 64.042667 36.906666 9.429333 10.069333 23.424 28.416 24.533333 32.853334 0.341333 1.28-44.202667 31.146667-71.168 47.914666-0.981333 0.64-4.906667-3.584-9.258667-10.069333-13.226667-19.2-27.008-27.477333-48.128-28.928-31.061333-2.133333-51.029333 14.122667-50.858666 41.258667a37.546667 37.546667 0 0 0 4.352 19.2c6.826667 14.122667 19.541333 22.613333 59.306666 39.808 73.344 31.573333 104.704 52.352 124.202667 81.92 21.76 32.981333 26.666667 85.674667 11.861333 124.842666-16.213333 42.581333-56.533333 71.509333-113.28 81.066667-17.536 3.114667-59.136 2.645333-77.994666-0.768-41.130667-7.338667-80.128-27.648-104.192-54.314667-9.429333-10.368-27.818667-37.546667-26.666667-39.466666a67.413333 67.413333 0 0 1 9.386667-6.016c4.608-2.602667 21.802667-12.544 38.058666-21.973334l29.44-17.066666 6.186667 9.130666c8.618667 13.141333 27.434667 31.189333 38.826667 37.205334 32.682667 17.237333 77.525333 14.805333 99.626666-5.034667a37.674667 37.674667 0 0 0 13.354667-30.72c0-11.861333-1.493333-17.066667-7.68-26.026667-7.936-11.349333-24.192-20.906667-70.357333-40.96-52.821333-22.741333-75.562667-36.864-96.384-59.306666a135.04 135.04 0 0 1-28.117334-51.2c-3.882667-14.464-4.864-50.730667-1.792-65.322667 10.88-51.072 49.408-86.613333 105.002667-97.194667 18.048-3.413333 59.989333-2.133333 77.696 2.261334z m-240.384 42.752l0.341333 41.941333H451.84v378.709333H357.546667v-378.709333H224.341333v-41.130667c0-22.784 0.469333-41.813333 1.109334-42.24 0.512-0.682667 81.621333-1.024 179.925333-0.853333l178.986667 0.512z" p-id="7566"></path></svg>
                  <svg v-if="item === 'node'" t="1647691780771" class="icon" viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8508" width="25" height="25"><path d="M632.6 904c-4.2 0-8.4-1.2-12.2-3.2L582 878c-5.8-3.2-3-4.4-1-5 7.6-2.6 9.2-3.2 17.4-8 0.8-0.4 2-0.2 2.8 0.2l29.6 17.6c1 0.6 2.6 0.6 3.6 0L750 816c1-0.6 1.8-1.8 1.8-3.2v-133.4c0-1.4-0.6-2.6-1.8-3.2l-115.6-66.6c-1-0.6-2.4-0.6-3.6 0l-115.6 66.6c-1.2 0.6-1.8 2-1.8 3.2v133.4c0 1.2 0.8 2.4 1.8 3l31.6 18.2c17.2 8.6 27.8-1.6 27.8-11.6v-131.8c0-1.8 1.4-3.4 3.4-3.4h14.6c1.8 0 3.4 1.4 3.4 3.4v131.8c0 23-12.4 36-34.2 36-6.6 0-12 0-26.6-7.2l-30.4-17.4c-7.4-4.4-12.2-12.4-12.2-21v-133.4c0-8.6 4.6-16.8 12.2-21l115.6-66.8c7.4-4.2 17-4.2 24.2 0l115.6 66.8c7.4 4.4 12.2 12.4 12.2 21v133.4c0 8.6-4.6 16.8-12.2 21l-115.6 66.8c-3.4 2.2-7.6 3.4-12 3.4z m93.4-131.6c0-25-16.8-31.6-52.4-36.4-36-4.8-39.6-7.2-39.6-15.6 0-7 3-16.2 29.6-16.2 23.8 0 32.6 5.2 36.2 21.2 0.4 1.6 1.6 2.6 3.2 2.6h15c1 0 1.8-0.4 2.4-1 0.6-0.8 1-1.6 0.8-2.6-2.4-27.6-20.6-40.4-57.6-40.4-33 0-52.6 14-52.6 37.2 0 25.4 19.6 32.2 51.2 35.4 37.8 3.8 40.8 9.2 40.8 16.6 0 13-10.4 18.4-34.8 18.4-30.6 0-37.4-7.6-39.6-22.8-0.2-1.6-1.6-2.8-3.4-2.8h-15c-1.8 0-3.4 1.4-3.4 3.4 0 19.4 10.6 42.6 61.2 42.6 37 0 58-14.4 58-39.6z m109-100.2c0 12.2-10 22.2-22.2 22.2s-22.2-10-22.2-22.2c0-12.6 10.4-22.2 22.2-22.2 12-0.2 22.2 9.6 22.2 22.2z m-3.6 0c0-10.4-8.4-18.6-18.8-18.6-10.2 0-18.6 8.2-18.6 18.6 0 10.4 8.4 18.8 18.6 18.8 10.4-0.2 18.8-8.6 18.8-18.8z m-9 12.4h-5.2c-0.2-1.2-1-7.6-1-7.8-0.4-1.4-0.8-2.2-2.6-2.2h-4.4v10h-4.8v-25h8.6c3 0 8.8 0 8.8 6.6 0 4.6-3 5.6-4.8 6.2 3.4 0.2 3.6 2.4 4.2 5.6 0.2 2 0.6 5.4 1.2 6.6z m-5.6-17.6c0-3.4-2.4-3.4-3.6-3.4h-4v7h3.8c3.2 0 3.8-2.2 3.8-3.6zM274.6 382c0-5.4-2.8-10.2-7.4-12.8l-122.6-70.6c-2-1.2-4.4-1.8-6.8-2h-1.2c-2.4 0-4.6 0.8-6.8 2L7.4 369.2C2.8 371.8 0 376.8 0 382l0.2 190c0 2.6 1.4 5 3.6 6.4 2.2 1.4 5 1.4 7.4 0L84 536.6c4.6-2.8 7.4-7.6 7.4-12.8v-88.8c0-5.2 2.8-10.2 7.4-12.8l31-17.8c2.4-1.4 4.8-2 7.4-2 2.6 0 5.2 0.6 7.4 2l31 17.8c4.6 2.6 7.4 7.6 7.4 12.8v88.8c0 5.2 2.8 10.2 7.4 12.8l72.8 41.8c2.2 1.4 5.2 1.4 7.4 0 2.2-1.2 3.6-3.8 3.6-6.4l0.4-190zM945 174.6v352.8c0 5.2-2.8 10.2-7.4 12.8l-122.6 70.8c-4.6 2.6-10.2 2.6-14.8 0l-122.6-70.8c-4.6-2.6-7.4-7.6-7.4-12.8v-141.6c0-5.2 2.8-10.2 7.4-12.8l122.6-70.8c4.6-2.6 10.2-2.6 14.8 0l30.6 17.6c3.4 2 7.8-0.6 7.8-4.4v-188c0-5.6 6-9.2 11-6.4l73 40.8c4.6 2.4 7.6 7.4 7.6 12.8z m-92 257.8c0-1.4-0.8-2.6-1.8-3.2l-42-24.4c-1.2-0.6-2.6-0.6-3.8 0l-42 24.4c-1.2 0.6-1.8 1.8-1.8 3.2v48.6c0 1.4 0.8 2.6 1.8 3.2l42 24.2c1.2 0.6 2.6 0.6 3.6 0l42-24.2c1.2-0.6 1.8-1.8 1.8-3.2v-48.6z m419.6-1.4c4.6-2.6 7.4-7.6 7.4-12.8V384c0-5.2-2.8-10.2-7.4-12.8l-121.8-70.8c-4.6-2.6-10.2-2.6-14.8 0l-122.6 70.8c-4.6 2.6-7.4 7.6-7.4 12.8v141.6c0 5.4 2.8 10.2 7.4 12.8l121.8 69.4c4.4 2.6 10 2.6 14.6 0l73.6-41c5-2.8 5-10 0-12.8L1100 483.2c-2.4-1.4-3.8-3.8-3.8-6.4v-44.4c0-2.6 1.4-5 3.8-6.4l38.4-22.2c2.2-1.4 5.2-1.4 7.4 0l38.4 22.2c2.2 1.4 3.8 3.8 3.8 6.4v34.8c0 5.6 6.2 9.2 11.2 6.4l73.4-42.6zM1118 438c-0.8 0.6-1.4 1.4-1.4 2.4v27.2c0 1 0.6 2 1.4 2.4l23.6 13.6c0.8 0.6 2 0.6 2.8 0L1168 470c0.8-0.6 1.4-1.4 1.4-2.4v-27.2c0-1-0.6-2-1.4-2.4l-23.6-13.6c-0.8-0.6-2-0.6-2.8 0L1118 438z m-508.4 87v-140.8c0-5.2-3.2-10.2-7.8-12.8l-122.2-70.4c-4.2-2.4-10-2.8-14.8 0l-122.2 70.4c-4.6 2.6-7.8 7.4-7.8 12.8v140.8c0 5.6 3.8 10.4 8 12.8l122.4 70.4c4.8 2.8 10.4 2.6 14.8 0l122-70.4c3.6-2 6.2-5.4 7.2-9.4 0.2-1 0.4-2.2 0.4-3.4z m-148.6-249.8l-1.6 1h2.2l-0.6-1z m152.4 260.4l-0.8-1.4v1.8l0.8-0.4z" p-id="8509"></path></svg>
                </span>
              </div>
              <div class="production-url">
                <router-link
                    :to="production.url"
                >地址</router-link>
              </div>
            </el-card>
          </div>



        </div>
      </div>
      <ArrowDown class="text-center" :to="'web-top'" :is-up="true"></ArrowDown>
    </div>

    <Content class="theme-default-content custom"/>

    <div
      class="footer"
      v-if="data.footer"
      v-html="data.footer"
    ></div>

    <ScrollTop :to="'web-top'"></ScrollTop>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import BrowserNotes from "./BrowserNotes";
import ArrowDown from "./ArrowDown";
import ScrollTop from "./ScrollTop";

export default {
  components: { NavLink, BrowserNotes, ArrowDown, ScrollTop },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
        type: 'default'
      }
    },

    outLink () {
      return function (item) {
        return {
          link: item.link,
          icon: item.icon,
          type: 'social'
        }
      }
    }

  }
}
</script>

<style lang="stylus">

.flex-div
  flex auto
  display -ms-flexbox
  display flex
  -ms-flex-direction column
  flex-direction column
  -ms-flex-pack center
  justify-content center

.text-center
  text-align center

.home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0 auto
  display block
  .landing-page
    display flex
    min-height 90vh
    -ms-flex 0 1 auto
    flex 0 1 auto
    -ms-flex-direction column
    flex-direction column
    -ms-flex-pack center
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-family Reem Kufi,sans-serif
      font-size 4rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.375rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
    .social-btn
      display flex
      a
        margin 0 0.625rem
    .button-img
        img
          max-height 4rem
          display block
          margin unset

  .about-page
    .features
      padding $navbarHeight 4rem 0
      display flex
      min-height 85vh
      -ms-flex 0 1 auto
      flex 0 1 auto
      -ms-flex-direction column
      flex-direction column
      -ms-flex-pack center
      //text-align center
      padding-top 2rem
      //margin-top 4.5rem

    .feature
      min-height 10rem
      //flex-grow 1
      //flex-basis 30%
      //max-width 30%
      h2
        font-size 2rem
        font-weight 900
        border-bottom none
        padding-bottom 0
        color lighten($textColor, 10%)
      p
        font-weight 300
        color lighten($textColor, 25%)
      .text-emoji
        font-size 1.5rem
        font-weight 300
        text-align center
  .productions-page
    .production-title
      padding $navbarHeight 4rem 0
      h2
        font-size 2rem
        font-weight 900
        border-bottom none
        padding-bottom 0
        color lighten($textColor, 10%)
    text-align left
    .productions
      //padding $navbarHeight 0rem 0
      display flex
      min-height 75vh
      -ms-flex 0 1 auto
      flex 0 1 auto
      -ms-flex-direction column
      flex-direction column
      -ms-flex-pack center
      //text-align center
      //margin-top 4.5rem
      flex-wrap wrap

      .production-body
        display -ms-flexbox
        display flex
        -ms-flex-wrap wrap
        flex-wrap wrap
        -ms-flex-pack center
        justify-content center
        .production
          display -ms-flexbox
          display flex
          -ms-flex-direction column
          flex-direction column
          border-radius 2px
          width 12rem
          margin 1rem
          .production-title
            flex 1 1
            padding 1rem 1.5rem
            font-size 1.125rem
            font-weight 400
            text-align center
          .production-details
            display -ms-flexbox
            display flex
            -ms-flex-direction column
            flex-direction column
            padding 0 .5rem
            font-size .75rem
            font-weight 400
            text-align center
            line-height 1.25rem
          .production-technicalLines
            padding 1rem 0
            font-size 1.5rem
            font-weight 100
            text-align center
            .svg-inline
              margin 0 5px
          .production-url
            padding: 0 0 .75rem;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-pack: distribute;
            justify-content: space-around;
            font-size: .875rem;
            font-weight: 400;


  .footer
    padding 2.5rem
    //border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .about-page
      .features
        flex-direction column
        padding: $navbarHeight 0 0;
      .feature
        max-width 100%
        //padding 0 2.5rem
    .productions-page
      .production-title
        padding $navbarHeight 0rem 0

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .landing-page
      img
        max-height 140px
        //max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
    .productions-page
      .production-title
        padding $navbarHeight 0rem 0
</style>
