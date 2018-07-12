<template>
    <div class="ui-select">
        <ui-text ref="text" :value="selectedValue" :caption="dCaption" :help="dHelp">
        </ui-text>
        <div class="ui-select__arrow" @click="$refs.text.$emit('onClick')">
            <i class="fa fa-angle-down"></i>
        </div>
        <ul class="ui-select__menu">
          <template v-for="(val, key) in sortMenu" >
            <li v-if="key==0 || sortMenu[key-1].group!=sortMenu[key].group" class="ui-select__group" :key="key">
              {{val.group}}
            </li>
            <li class="ui-select__option" :key="'option'+key">
              {{val.option}}
            </li>
          </template>
        </ul>
    </div>

</template>
<script>
export default {
  data() {
    return {
      dValue: this.value,
      dCaption: this.caption,
      dHelp: this.help,
      dMenu: this.menu
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
    menu:{
      type: Array,
      default:[]
    }
  },
  computed:{
    // возвращает отсортированное меню
    sortMenu () {
      let menu=this.menu.sort(
        function(d1, d2){
          return d1.option.toLowerCase() > d2.option.toLowerCase()
        }
      );
      return menu.sort(
        function(d1, d2){
          return d1.group.toLowerCase() > d2.group.toLowerCase()
        }
      );
    },
    selectedValue(){
      let selValStr="";
      let selValArr = this.menu.filter(
        function(menuF){
          return menuF.selected==true
        }
      );
      for(let k in selValArr){
        selValStr=selValStr+selValArr[k].option+",  ";
      }
      return selValStr.replace(/,\s*$/, "");;
    }
  }
};
</script>
