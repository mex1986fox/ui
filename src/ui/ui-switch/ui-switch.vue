<template>
  <div class="ui-switch" v-on:click="emitClickUiSwith()">
      <input class="ui-switch__checkbox" type="checkbox" :checked="checked">
        <div class="ui-switch__track"
        v-bind:class="{ 'ui-switch__track_active': checked }"></div>
        <div class="ui-switch__thumb"
        v-bind:class="{ 'ui-switch__thumb_active': checked }"></div>
  </div>
</template>
<script>
export default {
  name: "uiSwitch",
  data() {
    return {
      checked: false
    };
  },
  methods: {
    emitClickUiSwith() {
      this.checked = !this.checked;
      this.$emit("onClickUiSwitch");
    }
  },
  props: ["propsChecked"],
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
