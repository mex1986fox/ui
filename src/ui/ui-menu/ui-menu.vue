<template>
  <div class="ui-menu" :style="styleMenu">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      styleMenu: {
        width: ""
      }
    };
  },
  props: ["propsUiMenuShow"],
  mounted() {
    this.styleMenu.width = this.$el.parentNode.offsetWidth + "px";
  }
};
</script>
