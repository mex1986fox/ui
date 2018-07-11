<template>
    <div class="ui-text" @click="isClickText()">
        <div class="ui-text__caption" :class="{'ui-text__caption_active':modActive,
                   'ui-text__caption_completed':modCompleted}" v-if="uiTextCaption">
            {{uiTextCaption}}
        </div>
        <input class="ui-text__input" :class="{'ui-text__input_active':modActive}" type="text" :value="uiTextValue" pattern="^\\d{10}$" ref="input" @focus="isActive()" @blur="isNotActive()" @input="isInputText()" :readonly=" uiTextReadonly" />

        <hr class="ui-text__border" :class="{'ui-text__border_active':modActive}">
        <div class="ui-text__help" :class="{'ui-text__help_active':modActive}">Ввели не правильно</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      modActive: false,
      modCompleted: false,
      uiTextValue: this.propUiText.value ? this.propUiText.value : "",
      uiTextCaption: this.propUiText.caption ? this.propUiText.caption : "",
      uiTextReadonly: this.propUiText.readonly
        ? this.propUiText.readonly
        : false
    };
  },
  props: {
    propUiText: Object
    // propUiText:{ value: "String"
    //               caption: "string"
    //               readonly: Boolen }
  },

  methods: {
    isActive() {
      this.$emit("onFocusText");
      this.modActive = true;
      this.isCompleted();
    },
    isNotActive() {
      this.$emit("onNonFocusText");
      this.modActive = false;
      if (this.$refs.input.value == "") {
        this.isNotCompleted();
      } else {
        this.isCompleted();
      }
    },
    isCompleted() {
      this.modCompleted = false;
    },
    isNotCompleted() {
      this.modCompleted = true;
    },
    isClickText() {
      this.$emit("onClickText");
      if (this.$refs.input.value == "") {
        this.$refs.input.focus();
      }
    },
    isInputText() {
      this.uiTextValue = this.$refs.input.value;
      this.$emit("onInputText", [this.uiTextValue]);
    }
  },
  watch: {
    propUiText(newQ, oldQ) {
      this.uiTextValue = newQ.value ? newQ.value : "";
      this.uiTextCaption = newQ.caption ? newQ.caption : "";
      this.uiTextReadonly = newQ.readonly ? newQ.readonly : false;
      if (this.uiTextValue != "") {
        this.isCompleted();
      } else {
        this.isNotCompleted();
      }
    }
  },
  mounted() {
    if (this.uiTextValue != "") {
      this.isCompleted();
    } else {
      this.isNotCompleted();
    }
  }
};
</script>
