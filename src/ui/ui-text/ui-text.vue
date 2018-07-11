<template>
    <div class="ui-text">
        <span class="ui-text__caption" :class="{'ui-text__caption_active':modFocus, 'ui-text__caption_completed':modCompleted}">Заголовок</span>
        <input class="ui-text__input" :class="{'ui-text__input_active':modFocus}" ref="input" @focus="isFocus()" @blur="isBlur()" />
        <hr class="ui-text__border" :class="{'ui-text__border_active':modFocus}">
        <span class="ui-text__help">Подсказка</span>
    </div>
</template>

<script>
export default {
  name: "ui-text",
  data() {
    return {
      modFocus: false,
      modCompleted: false
    };
  },
  methods: {
    isFocus() {
      this.modFocus = true;
      this.modCompleted = true;
    },
    isBlur() {
      this.modFocus = false;
      if (this.$refs.input.value == "") {
        this.modCompleted = false;
      } else {
        this.modCompleted = true;
      }
    }
  }
};
</script>
