<template>
<div class="ui-checkbox" @click="emitClickUiChecbox()">
    <span class="ui-checkbox__check" :class="{'ui-checkbox__check_active': checked}" aria-hidden="true">
        <i class="fa fa-check" aria-hidden="true"></i>
    </span>
    <input class="ui-checkbox__input" type="checkbox" :checked="checked"/>
    <span  class="ui-checkbox__caption">
        <slot name="caption"></slot>
    </span>
</div>
</template>
<script>
export default {
  name: "uiCheckBox",
  data() {
    return {
      checked: false
    };
  },
  methods: {
    emitClickUiChecbox() {
      this.checked = !this.checked;
      this.$emit("onClickUiChecbox");
    }
  },
  props: {propsChecked: Boolean},
  mounted() {
    if (this.propsChecked) {
      this.checked = this.propsChecked;
    }
  },
  watch: {
    propsChecked() {
      this.checked = this.propsChecked;
    }
  }
};
</script>
