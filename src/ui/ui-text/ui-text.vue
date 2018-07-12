<template>
    <div class="ui-text" @click="isClick()">
        <span 
          class="ui-text__caption" 
          :class="{'ui-text__caption_active':modFocus, 
                   'ui-text__caption_completed':modCompleted,
                   'ui-text__caption_disabled':dDisabled}"
          @click="isClick()">
            {{dCaption}}
        </span>
        <input 
          class="ui-text__input" 
          :class="{'ui-text__input_active':modFocus,
                   'ui-text__input_disabled':dDisabled}" 
          ref="input" 
          @focus="isFocus()" 
          @blur="isBlur()" 
          @input="isInputText()"
          :value="dValue"
          :readonly="dReadonly"
          :disabled="dDisabled"
          />
        <hr 
          class="ui-text__border" 
          :class="{'ui-text__border_active':modFocus,
                  'ui-text__border_disabled':dDisabled}">
        <span class="ui-text__help" 
            :class="{'ui-text__help_active':dHelp,
                    'ui-text__help_disabled':dDisabled}"
            @click="isClick()">
          {{dHelp}}
        </span>
    </div>
</template>

<script>
export default {
  name: "ui-text",
  data() {
    return {
      modFocus: false,
      modCompleted: false,
      dValue: this.value,
      dCaption: this.caption,
      dDisabled: this.disabled,
      dHelp: this.help,
      dReadonly: this.readonly
    };
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    caption:{
      type: String,
      default: ""
    },
    readonly:{
      type: Boolean,
      default: false
    },
    help:{
      type: String,
      default: ""
    },
    disabled:{
      type: String,
      default: false
    }

  },
  methods: {
    isFocus() {
      this.modFocus = true;
      this.modCompleted = true;
    },
    isBlur() {
      this.modFocus = false;
      if (this.dValue == "") {
        this.modCompleted = false;
      } else {
        this.modCompleted = true;
      }
    },
    isClick() {
      this.$emit("onClick");
      this.$refs.input.focus();
    },
    isInputText() {
      this.dValue = this.$refs.input.value;
      this.$emit("onInput", [this.dValue]);
    }
  },
  // watch: {
  //   value(newQ, oldQ) {
  //     this.dValue = newQ ? newQ : "";
  //    if (this.dValue == "") {
  //       this.modCompleted = false;
  //     } else {
  //       this.modCompleted = true;
  //     }
  //   }
  // },
  
   mounted() {
     if (this.dValue == "") {
        this.modCompleted = false;
      } else {
        this.modCompleted = true;
      }
  }
};
</script>
