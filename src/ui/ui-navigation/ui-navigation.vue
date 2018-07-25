<template>
    <div>
        <ui-blind :show="show" @onHide="isHide">
            <div  class="ui-navigation">
                yfdbufwbz
            </div>
        </ui-blind>
    </div>
</template>
<script>
export default {
  name: "UiNavigation",
  data() {
    return { dShow: this.show };
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    isHide() {
      this.dShow = false;
      this.$emit("onHide");
    }
  },
  updated() {
    setTimeout(() => {
      let wHeight = document.documentElement.clientHeight;
      this.$el.style.height=wHeight+"px";
    }, 100);
  },
  watch: {
    show(newQ) {
      this.dShow = newQ;
    }
  }
};
</script>
