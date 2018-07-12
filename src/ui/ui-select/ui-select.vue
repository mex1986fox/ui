<template>
    <div class="ui-select">
        <ui-text ref="text" :value="dValue" :caption="dCaption" :help="dHelp">
        </ui-text>
        <div class="ui-select__arrow" @click="$refs.text.$emit('onClick')">
            <i class="fa fa-angle-down"></i>
        </div>
        <ul class="ui-select__menu">
            <li class="ui-select__group">Обезьяны</li>
            <li class="ui-select__option">Мартышка </li>
            <li class="ui-select__option">Арангутан</li>
            <li class="ui-select__group">Обезьяны</li>
            <li class="ui-select__option">Мартышка </li>
            <li class="ui-select__option">Арангутан</li>
            <li class="ui-select__group">Обезьяны</li>
            <li class="ui-select__option">Мартышка </li>
            <li class="ui-select__option">Арангутан</li>
            <li class="ui-select__option">Мартышка </li>
            <li class="ui-select__option">Арангутан</li>
        </ul>

    </div>

</template>
<script>
export default {
  data() {
    return {
      dValue: this.value,
      dCaption: this.caption,
      dHelp: this.help
    };
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    caption: {
      type: String,
      default: ""
    },
    help: {
      type: String,
      default: ""
    }
  }
};
</script>
