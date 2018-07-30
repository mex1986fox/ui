<template>
    <ui-blind :show="dShow" @onHide="isHide" class="ui-blind_flat" animate="opacity">
        <div ref="menu" class="ui-menu" >
            <slot>

            </slot>
        </div>
    </ui-blind>

</template>
<script>
export default {
  data() {
    return {
      dShow: this.show,
      dX:0,
      dY:0
    };
  },
  methods:{
      isHide(){
          document.body.style.overflow="auto";
          this.dShow=false;
          this.$emit("onHide");
      }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    event: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    show(newQ) {
      this.dShow = newQ;
    }
  },
  mounted() {
    window.addEventListener("click", event => {
      this.dX=event.clientX;
      this.dY=event.clientY;
    });
  },
  updated() {
      if(this.dShow==true){
          this.$refs.menu.style.top=this.dY+"px";
          this.$refs.menu.style.left=this.dX-this.$refs.menu.clientWidth+"px";
          document.body.style.overflow="hidden";
      }
  }
};
</script>
