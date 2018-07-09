<template>
<ui-blackout :show="propShow" v-if="propShow" ref="conteiner">
  <ui-container >
    <ui-row style="padding:0; width: auto;">

        <ui-coll class="ui-coll_3
                        ui-coll_nbook-4
                        ui-coll_tablet-6
                        ui-coll_phone-6">
         <div ref="menu" class="ui-app-menu">
          <div class="ui-border_15">
            <ui-coll class="ui-coll_12">
            <button @click="isHide" class="ui-button ui-button_circle
                  ui-button_flat ui-app-menu__button">
              <i aria-hidden="true" class="fa fa-angle-left"></i>
            </button>
            <div class="ui-app-menu__header">
                <ui-link>
                  <a href="http://google.com">
                    <img class="wg-header__logo-img" src="/static/img/icon.png" alt="" srcset="">
                  </a>
                </ui-link>
            </div>
            </ui-coll>

            <slot></slot>
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
  methods: {
    isHide() {
      this.$emit("onHide");
      this.propShow = false;
    },
    // подгоняет высоту меню
    transformWidth() {
      if (this.$refs.menu) {
        let hCont = this.$refs.conteiner.$el.scrollHeight;
        let hMen = this.$refs.menu.scrollHeight;

        if (hCont > hMen) {
          this.$refs.menu.style.minHeight = hCont + "px";
        } else {
          this.$refs.menu.style.minHeight = "auto";
        }
      }
    }
  },
  updated() {
    this.transformWidth();
  },
  mounted() {
    this.transformWidth();
    window.addEventListener("resize", () => {
      this.transformWidth();
    });
  }
};
</script>
