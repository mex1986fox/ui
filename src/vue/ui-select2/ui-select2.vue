<template>
    <div class="ui-select" >
      <ui-text2 ref="text"
        @onClick="isClickUiSelect()"
        :value="dSelectText"
        :caption="dCaption"
        :help="dHelp"
        :readonly="dReadonly">
      </ui-text2>
      <div class="ui-select__arrow" @click="$refs.text.$emit('onClick')">
        <i class="fa fa-angle-down"></i>
      </div>
      <ui-menu ref="menu" v-show="dFocusSelect" class="ui-list">
        <div
          class="ui-select__menu-list ui-list__item ui-list__caption"

          v-for="(value, key) in dOptions"
          :key="key"
          @click="setSelect(value.value)">

          <span class="ui-select__check">
            <i class="fa fa-check" aria-hidden="true" v-if="value.selected"></i>
          </span>

          {{value.text}}
        </div>
      </ui-menu>
    </div>
</template>
<script>
export default {
  data() {
    return {
      dFocusSelect: false,
      // dSelectText: this.options.text,
      // dSelectValue: this.options.value,
      dCaption: this.caption,
      dReadonly: this.readonly,
      dHelp: this.help,
      dOptions: this.options
    };
  },
  computed: {
    dSelectText() {
      let opt = this.dOptions;
      for (let i = 0; i < opt.length; i++) {
        if (opt[i].selected == true) {
          return opt[i].text;
        }
      }
    },
    dSelectValue() {
      let opt = this.dOptions;
      for (let i = 0; i < opt.length; i++) {
        if (opt[i].selected == true) {
          return opt[i].value;
        }
      }
    }
  },
  beforeUpdate() {
    this.dOptions = this.options;
  },
  props: {
    options: {
      type: Array,
      default: [
        {
          value: "",
          text: "",
          selected: true,
          disabled: false
        }
      ]
    },
    caption: {
      type: String,
      default: ""
    },
    readonly: {
      type: Boolean,
      default: true
    },
    help: {
      type: String,
      default: ""
    }
  },
  methods: {
    setSelect(optValue) {
      this.dFocusSelect = false;
      let opt = this.dOptions;
      for (let i = 0; i < opt.length; i++) {
        opt[i].selected = false;
        if (opt[i].value == optValue) {
          opt[i].selected = true;
        }
      }
      this.dOptions = [];
      this.dOptions = opt;
      this.$emit("onSelected", optValue);
    },
    isClickUiSelect() {
      this.dFocusSelect = true;
      setTimeout(() => {
        this.regulationMarginMenu();
        this.regulationMapginSelectedOption();
      }, 500);
      this.$emit("onClick");
    },
    // регулирует отступ меню
    regulationMarginMenu() {
      //определить позицию элемента
      let menu = this.$el.getElementsByClassName("ui-menu")[0];
      let yHeight = window.innerHeight;
      let bottom = menu.getBoundingClientRect().bottom;
      if (yHeight < bottom) {
        menu.style.marginTop = yHeight - bottom - 20 + "px";

      }
    },
    // регулирует отступ активного селекта
    regulationMapginSelectedOption() {
      let opt = this.dOptions;
      for (let i = 0; i < opt.length; i++) {
        if (opt[i].selected == true) {
          let menu = this.$el.getElementsByClassName("ui-menu")[0];
          menu.scrollTop = 40 * i - 40;
          break;
        }
      }
    }
  },
  mounted() {
    window.addEventListener(
      "click",
      event => {
        let ev = event.target;
        let flCl = false;
        while (ev) {
          if (ev == this.$el) {
            flCl = true;
            break;
          }
          if (ev == undefined) {
            flCl = false;
            break;
          }
          ev = ev.parentNode;
        }
        if (!flCl) {
          this.dFocusSelect = false;
        }
      },
      true
    );
  }
};
</script>
