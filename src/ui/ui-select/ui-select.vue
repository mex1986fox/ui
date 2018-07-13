<template>
  <div class="ui-select">
    <ui-text ref="text" :value="this.dValue" :caption="this.dCaption" :help="this.dHelp" @onFocus="isFocus" @onBlur="isBlur">
    </ui-text>
    <transition name="ui-select__arrow">
      <div class="ui-select__arrow" v-if="!dFocus" @click="$refs.text.$emit('onClick')">
        <i class="fa fa-angle-down"></i>
      </div>
    </transition>
    <transition name="ui-select__arrow_transit">
      <div class="ui-select__arrow_transit" v-if="dFocus" @click="$refs.text.$emit('onClick')">
        <i class="fa fa-angle-down"></i>
      </div>
    </transition>

    <transition name="ui-select__menu">
      <ul class="ui-select__menu" v-if="dFocus">
        <template v-for="(val, key) in sortMenu">
          <li v-if="key==0 || sortMenu[key-1].group!=sortMenu[key].group" class="ui-select__group" :key="key">
            {{val.group}}
          </li>
          <li class="ui-select__option" :key="'option'+key" @click="isClickOption(key)">
            {{val.option}}
          </li>
        </template>
      </ul>
    </transition>
  </div>

</template>
<script>
export default {
  data() {
    return {
      dValue: "",
      dCaption: this.caption,
      dHelp: this.help,
      dMenu: this.menu,
      dFocus: false
    };
  },
  props: {
    caption: {
      type: String,
      default: ""
    },
    help: {
      type: String,
      default: ""
    },
    menu: {
      type: Array,
      default: []
    }
  },
  methods: {
    isFocus() {
      this.dFocus = true;
    },
    isBlur() {
      this.dFocus = false;
    },
    isClickOption(key) {
      let copyDMeny = this.dMenu;
      for (let k in copyDMeny) {
        key == k
          ? (copyDMeny[k].selected = true)
          : (copyDMeny[k].selected = false);
      }
      this.dMenu = copyDMeny;
      this.isCreatedValue();
    },
    isCreatedValue() {
      let selValStr = "";
      let selValArr = this.dMenu.filter(function(menuF) {
        return menuF.selected == true;
      });
      for (let k in selValArr) {
        selValStr = selValStr + selValArr[k].option + ",  ";
      }
      this.dValue=selValStr.replace(/,\s*$/, "");
      
    }

  },
  computed: {
    // возвращает отсортированное меню
    sortMenu() {
      let menu = this.menu.sort(function(d1, d2) {
        return d1.option.toLowerCase() > d2.option.toLowerCase();
      });
      return menu.sort(function(d1, d2) {
        return d1.group.toLowerCase() > d2.group.toLowerCase();
      });
    }
  },
  created() {
    this.isCreatedValue();
  },
  updated(){
    console.log(this.dValue);
    this.$refs.text.$forceUpdate();
  }
};
</script>
