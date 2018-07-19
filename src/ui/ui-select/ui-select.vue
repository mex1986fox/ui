<template>
  <div class="ui-select">
    <ui-text ref="text" :disabled="dDisabled" :value="this.dValue" :caption="this.dCaption" :help="this.dHelp" :readonly="true" @onFocus="isFocus" @onBlur="isBlur">
    </ui-text>
    
    <transition name="ui-select__arrow">
      <div class="ui-select__arrow" v-if="!dFocus && !dDisabled" @click="dFocus=!dFocus">
        <i class="fa fa-angle-down"></i>
      </div>
    </transition>
    <transition name="ui-select__arrow_transit">
      <div class="ui-select__arrow_transit" v-if="dFocus && !dDisabled" @click="dFocus=!dFocus">
        <i class="fa fa-angle-down"></i>
      </div>
    </transition>

    <transition name="ui-select__menu">
      <ul class="ui-select__menu" v-show="dFocus">
        <template v-for="(val, key) in sortMenu">
          <li v-if="key==0 || sortMenu[key-1].group!=sortMenu[key].group" class="ui-select__group" :key="key">
            {{val.group}}
          </li>
          <li class="ui-select__option ui-select__option_disabled" 
              :key="'option'+key" 
              v-if="val.disabled">
             <ui-check-box :name="dName" :disabled="true" :checked="val.selected" :value="val.value" v-show="dMultiple"/>
            {{val.option}}
          </li>
          <li class="ui-select__option" :key="'option'+key" @click="isClickOption(key)" v-if="!val.disabled">
             <ui-check-box :name="dName" :disabled="false" :checked="val.selected" :value="val.value" v-show="dMultiple"/>
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
      dName: this.name,
      dValue: "",
      dCaption: this.caption,
      dMultiple: this.multiple,
      dHelp: this.help,
      dMenu: this.menu,
      dDisabled: this.disabled,
      dFocus: false
    };
  },
  props: {
    name:{
      type: String,
      default:""
    },
    caption: {
      type: String,
      default: ""
    },
    multiple:{
      type: Boolean,
      default:false
    },
    help: {
      type: String,
      default: ""
    },
    disabled: {
      stype: Boolean,
      default: false
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
      //this.dMultip==true? this.dFocus=true : this.dFocus = false;
    },
    isClickOption(key) {
      let copyDMeny = this.dMenu;
      if(this.dMultiple==true){
        copyDMeny[key].selected = !copyDMeny[key].selected;
      }else{
        for (let k in copyDMeny) {
          key == k
            ? (copyDMeny[k].selected = true)
            : (copyDMeny[k].selected = false);
        }
      }
      
      this.dMenu = copyDMeny;
      this.isCreatedValue();

      let selOdjects = [];
      for(let k in copyDMeny){
        if(copyDMeny[k].selected==true){
          selOdjects.push(copyDMeny[k]);
        }
      }
      this.$emit('onSelect', selOdjects);
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
          this.dFocus = false;
        }
      },
      true
    );
  },
  created() {
    this.isCreatedValue();
  }
};
</script>
