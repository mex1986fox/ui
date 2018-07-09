<template>
  <div class="ui-text" @click="isClickText()">
       <div  class="ui-text__caption"
          :class="{'ui-text__caption_active':modActive,
                   'ui-text__caption_completed':modCompleted}"
          v-if="dCaption">

          {{dCaption}}
    </div>
    <input  class="ui-text__input"
            :class="{'ui-text__input_active':modActive}"
            type="text"
            :value="dValue"
            pattern="^\\d{10}$"
            ref="input"
            @focus="isActive()"
            @blur="isNotActive()"
            @input="isInputText()"
            :readonly=" dReadonly"/>

    <hr class="ui-text__border"
        :class="{'ui-text__border_active':modActive}"
         >
    <div class="ui-text__help ui-text__help_active"
         v-show="dHelp"
    >{{dHelp}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modActive: false,
      modCompleted: this.value != "" ? true : false,
      dValue: this.value,
      dCaption: this.caption,
      dReadonly: this.readonly,
      dHelp: this.help,
      ceshPropsValue: this.value
    };
  },
  beforeUpdate(){
    if(this.value!=this.ceshPropsValue){
      this.ceshPropsValue = this.value;
      this.dValue=this.value;
      this.modCompleted=false;
    }
  },
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    caption: {
      type: String,
      default: ""
    },
    readonly: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: ""
    }
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
      this.$emit("onClick");
      if (this.$refs.input.value == "") {
        this.$refs.input.focus();
      }
    },
    isInputText() {
      this.dValue = this.$refs.input.value;
      this.$emit("onInput", [this.dValue]);
    }
  },
  watch: {
    propUiText(newQ, oldQ) {
      this.dValue = newQ.value ? newQ.value : "";
      this.dCaption = newQ.caption ? newQ.caption : "";
      this.dReadonly = newQ.readonly ? newQ.readonly : false;
      if (this.dValue != "") {
        this.isCompleted();
      } else {
        this.isNotCompleted();
      }
    }
  },
  mounted() {
    if (this.dValue != "") {
      this.isCompleted();
    } else {
      this.isNotCompleted();
    }
  }
};
</script>
