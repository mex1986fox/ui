<template>
    <transition name="ui-blind">
        <div class="ui-blind" v-if="dShow" @click="isClick">
            <div ref="content" class="ui-blind__content" :style="autoMargin"  @click="isClick">
                <slot>

                </slot>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
  name: "UiBlind",
  data() {
    return {
      dShow: this.show,
      dMargin: "30px",
      dScrollHeight: 0
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    centering: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show(newQ) {
      this.dShow = newQ;
    }
  },
  methods: {
    isClick(event) {
      if (event.target == this.$el || event.target==this.$refs.content) {
        this.dShow = false;
        this.$emit("onHide");
      }
    }
  },
  updated() {
    if (this.centering && this.show) {
      setTimeout(() => {
        let wHeight = document.documentElement.clientHeight;
        let el = this.$slots.default[0].elm;
        el.style.overflow = "hidden";
        let elHeight = el.offsetHeight;
        el.style.overflow = "visible";
        if (wHeight > elHeight) {
          this.dMargin = (wHeight - elHeight) / 2 + "px";
        }
      }, 100);
    }
  },
  computed: {
    autoMargin() {
      return this.centering == true ? { margin: this.dMargin + " 0" } : {};
    }
  }
};
</script>
