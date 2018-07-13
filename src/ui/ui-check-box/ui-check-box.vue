<template>
<div class="ui-checkbox" @click="isClick()">
    <span class="ui-checkbox__check" :class="{'ui-checkbox__check_active': checked}" aria-hidden="true">
        <i class="fa fa-check" aria-hidden="true"></i>
    </span>
    <input class="ui-checkbox__input" type="checkbox" :name="dName"  :checked="dChecked" :value="dValue"/>
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
      dChecked: this.checked,
      dName: this.name,
      dValue: this.value
    };
  },
  methods: {
    isClick() {
      this.dChecked = !this.dChecked;
      this.$emit("onClick");
    }
  },
  props: {
    name:{
      type: String,
      default: ""
    },
    value:{
      type: String,
      default: ""
    },
    checked:{
      type: Boolean,
      default: false
    } 
  },
  mounted() {
    if (this.checked) {
      this.dChecked = this.checked;
    }
  },
  watch: {
    checked() {
      this.dChecked = this.checked;
    }
  }
};
</script>
