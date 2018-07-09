<template>
    <div class="ui-select" >
        <ui-text @onInputText="isInputText()"
                 @onClickText="isClickUiSelect()"
                 :propUiText="{value: compTextVal,
                   caption: selectCaption,
                   readonly: true }">
        </ui-text>

          <ui-menu ref="menu" v-if="focusText" class="ui-list">

              <div  class="ui-select__menu-list ui-list__item ui-list__caption"
                  @click="isClickList(val)"
                  v-for="(val, key) in selectData" :key="key">
              {{val.value}}
              </div>

          </ui-menu>

    </div>
</template>
<script>
export default {
  data() {
    return {
      focusText: false,
      selectCheck: this.propUiSelect.check ? this.propUiSelect.check : "",
      selectData: this.propUiSelect.data ? this.propUiSelect.data : [],
      selectCaption: this.propUiSelect.caption ? this.propUiSelect.caption : ""
    };
  },
  props: {
    propUiSelect: Object
    // propUiSelect:{data: [{ value: "Audi", check: false },
    //                      { value: "BMW", check: false }],
    //               caption: "Сортировать по"}
  },

  methods: {
    isClickUiSelect() {
      this.focusText = true;
      setTimeout(() => {
        this.regulationMarginMenu();
      }, 500);
      this.$emit("onClick");
    },
    isInputText() {},

    isClickList(list) {
      let lists = this.selectData;
      for (let k in lists) {
        lists[k].check = false;
      }
      list.check = true;
      this.selectData = [];
      this.selectData = lists;
      this.selectCheck = list.id;
      this.focusText = false;
      this.$emit("onChekElem", [this.selectCheck]);
    },
    // регулирует отступ меню
    regulationMarginMenu() {
      //определить позицию элемента
      let menu=this.$el.getElementsByClassName("ui-menu")[0];
      let yHeight=window.innerHeight;
      let bottom=menu.getBoundingClientRect().bottom;
      if(yHeight<bottom){
        menu.style.marginTop=yHeight-bottom-20+"px";
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
          this.focusText = false;
        }
      },
      true
    );
  },
  computed: {
    compTextVal() {
      let lists = this.selectData;
      if (this.selectCheck != undefined) {
        for (let k in lists) {
          if (lists[k].id == this.selectCheck) {
            return lists[k].value;
            break;
          }
        }
      }
      for (let k in lists) {
        if (lists[k].check == true) {
          return lists[k].value;
          break;
        }
      }
    }
  }
};
</script>
