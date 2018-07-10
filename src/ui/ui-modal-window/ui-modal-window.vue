<template>
  <div class="ui-modal-window" :style="isMarg">
   <div class="ui-modal-window__header">
     <div class="ui-modal-window__button">
       <slot name="header-button">

      </slot>
     </div>
     <div class="ui-modal-window__message">
       <slot name="header-message">

      </slot>
     </div>

   </div>
   <slot name="content">

     </slot>
  </div>
</template>
<script>
export default {
  data(){
    return{
      marg: "20px"
    }
  },
  mounted() {
    let wHeight = document.documentElement.clientHeight;
    let elHeight = this.$el.clientHeight;
    if (wHeight > elHeight) {
      this.marg = ((wHeight - elHeight)/2)+"px";
    }
  },
  computed:{
    isMarg(){
      return {marginTop: this.marg};
    }
  }
};
</script>

