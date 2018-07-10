<template>
  <ui-blackout class="ui-blackout_flat" :show="propShow" v-if="propShow">
    <ui-container>
      <ui-row>
        <ui-coll class="ui-coll_12">
          <div ref="window" class="ui-editing-window ">
            <button @click="isHide" class="ui-button ui-button_circle
                  ui-button ui-editing-window__button">
              <i aria-hidden="true" class="fa fa-angle-left"></i>
            </button>
            <div class="ui-editing-window__header">
              <slot name="header">

              </slot>
            </div>
            <div class="ui-border_25">
              <slot name="content">

              </slot>
            </div>
          </div>
        </ui-coll>
      </ui-row>
    </ui-container>
  </ui-blackout>
</template>
<script>
export default {
  data() {
    return {
      propShow: this.show ? this.show : false
    };
  },
  props: {
    show: {
      type: Boolean
    }
  },
  watch: {
    show(newQ) {
      this.propShow = newQ;
    }
  },
  mounted() {
    this.compMargin();
    window.addEventListener(
      "resize",
      () => {
        this.compMargin();
      },
      true
    );
  },
  updated() {
    this.compMargin();
  },
  methods: {
    //закрывает модальное окно
    isHide() {
      this.$emit("onHide");
      this.propShow = false;
    },
    //устанавливает отступ
    compMargin() {
      if (this.$refs.window) {
        let thisHeight = this.$refs.window.getBoundingClientRect().height;
        let wHeight = window.innerHeight;
        if (wHeight - 30 > thisHeight) {
          this.$refs.window.style.marginTop = wHeight - thisHeight - 15 + "px";
        } else {
          this.$refs.window.style.marginTop = 5 + "px";
        }
      }
    }
  }
};
</script>

