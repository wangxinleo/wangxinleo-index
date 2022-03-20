<template>
  <div class="browser-notes">
    <span>All the magic tricks in this site work best in <b>Chrome!</b></span>
  </div>
</template>

<script>
export default {
  name: "BrowserNotes"
}
</script>

<style lang="stylus">
.browser-notes
  font-size 1rem

  span
    border-width 1px
    border-style solid
    padding .125rem .5rem

@media (max-width: $MQMobile)
  .browser-notes
    font-size 0.5rem
</style>