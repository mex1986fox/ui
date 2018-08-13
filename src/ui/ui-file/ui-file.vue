<template>
  <div class="ui-file"
    @click="isClick()">
    <input class="ui-file__input"
      ref="file"
      type="file"
      :name="dName"
      multiple>

    <span class="ui-file__caption"
      :class="{'ui-file__caption_active':modFocus, 
                   'ui-file__caption_completed':modCompleted,
                   'ui-file__caption_disabled':dDisabled}"
      @click="isClick()">
      {{dCaption}}
    </span>

    <div v-for="(val, key) in dFiles"
      :key="key"
      class="ui-file__file">
      <div class="ui-file__file-icon">
        <i class="fa fa-file-o"
          aria-hidden="true"></i>
      </div>
      <div class="ui-file__file-type">
        {{val.type.split("/")[1]}}
      </div>
      <div class="ui-file__file-src">
        {{val.name}}
      </div>
    </div>

    <hr class="ui-file__border"
      :class="{'ui-file__border_active':modFocus,
                  'ui-file__border_disabled':dDisabled}">
    <span class="ui-file__help"
      :class="{'ui-file__help_active':dHelp,
                    'ui-file__help_disabled':dDisabled}"
      @click="isClick()">
      {{dHelp}}
    </span>
  </div>
</template>

<script>
export default {
  name: "ui-file",
  data() {
    return {
      modFocus: false,
      //modCompleted: false,
      dName: this.name,
      dValue: this.value,
      dCaption: this.caption,
      dDisabled: this.disabled,
      dHelp: this.help,
      dReadonly: this.readonly
    };
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: String,
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
    },
    resize: {
      type: String,
      default: "vertical"
      // both 	Можно растягивать элемент по ширине и высоте.
      // horizontal 	Можно растягивать элемент только по ширине.
      // vertical 	Можно растягивать элемент только по высоте.
      // none 	Изменять размеры элемента нельзя.
      // inherit от родителя
    },
    autoresize: {
      type: Number,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: undefined
    }
  },
  methods: {
    isFocus() {
      this.modFocus = true;
      this.$emit("onFocus");
    },
    isBlur() {
      this.modFocus = false;
      this.$emit("onBlur");
    },
    isClick() {
      this.$emit("onClick");
      this.$refs.textarea.focus();
    },
    isInputText() {
      this.dValue = this.$refs.textarea.value;
      this.isAutoresize();
      this.$emit("onInput", this.dValue);
    },
    isAutoresize() {
      if (
        this.$refs.textarea.clientHeight != undefined &&
        this.$refs.textarea.clientHeight < this.autoresize
      ) {
        let scrollHeigth = this.$refs.textarea.scrollHeight;
        this.$refs.textarea.style.height = scrollHeigth + "px";
      }
      if (this.$refs.textarea.clientHeight < this.height) {
        this.$refs.textarea.style.height = this.height + "px";
      }
    }
  },
  computed: {
    modCompleted() {
      if (this.dValue == "") {
        return false;
      } else {
        return true;
      }
    }
  },
  watch: {
    value(newQ, oldQ) {
      this.dValue = newQ;
    }
  },
  mounted() {
    this.$refs.textarea.style.resize = this.resize;
    this.isAutoresize();
  }
};
</script>
