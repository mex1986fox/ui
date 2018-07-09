<template>
<transition name="ui-blackout">
  <div class="ui-blackout"
        @click="isShow">
        <slot></slot>
  </div>
</transition>
</template>
<script>
export default {
  name: "Blacout",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    isShow: function(event) {
      if (event.target == this.$el) {
        this.$emit("click-blacout");
      }
    }
  }
};
</script>
