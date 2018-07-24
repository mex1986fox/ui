<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col_12 col-phone_6">
                    <h1 class="ui-header ui-header_1"> Всплывающие окна </h1>
                    <br/>
                </div>
                <div class="col_12">
                    <button class="ui-button ui-button_mini" @click="showBlind=true" >
                        <i class="fa fa-apple" aria-hidden="true"></i>
                        Показать шторку 
                    </button>
                    <ui-blind :show="showBlind" @onHide="showBlind=false">
                    </ui-blind>
                </div>
                <div class="col_12">
                    <button class="ui-button ui-button_mini" @click="showModalW=true" >
                        <i class="fa fa-apple" aria-hidden="true"></i>
                        Показать модальное окно 
                    </button>
                    <ui-blind :show="showModalW" @onHide="showModalW=false">
                        <div class="container">
                            <div class="row">
                                <div class="col_12">
                                    <div class="ui-modal-window" :style="isMarg">
                                        <div class="ui-modal-window__content">
                                            fgfgfg
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ui-blind>
                </div>
                <div class="col_12">
                    <ui-code value=''>

                    </ui-code>
                </div>

                <div class="col_12">
                    <wg-desc-example :classes="[
                        {name:'.ui-chips', desc:'Корневой класс для chips'},
                        {name:'.ui-chips__button', desc:'Описывает элемент кнопки для блока chips'},
                        {name:'.ui-chips__icon', desc:'Описывает элемент аватарки для блока chips'},
                        {name:'.ui-chips__caption', desc:'Описывает элемент описания для блока chips'},
                    ]" :props="[
                        {name:'name', desc:'Задает имя chip, должно быть уникальным',def:'Пустая строка - \'\''},
                        {name:'value', desc:'Задает значение chip',def:'Пустая строка - \'\''},
                        {name:'caption', desc:'Задает описание chip',def:'Пустая строка - \'\''},
                        {name:'disabled', desc:'Устанавливает chip поле в положение неактивного',def:'false'},
                        {name:'deleted', desc:'Добавляет кнопку удаления',def:'false'}
                    ]" :events="[
                        {name:'onDeleted',desc:'Событие возникает при удалении chip',val:'Ничего не возвращает'},
                    ]">

                    </wg-desc-example>
                </div>
            </div>
        </div>
    </layout>
</template>
<script>
export default {
  name: "page-windows",
  data() {
    return {
        showBlind: false,
        showModalW: false,
        marg: "50px"
    };
  },
  mounted() {
    let wHeight = document.documentElement.clientHeight;
    let elHeight = this.$el.clientHeight;
    if (wHeight > elHeight) {
      this.marg = ((wHeight - elHeight)/2)+"px";
    }
  },
  computed:{
    isMarg(){
        return {marginTop: this.marg};
    }
  }
};
</script>
<style lang="scss" scoped>
.ui-modal-window{
    &__content{
        margin: 0;
        background-color: aqua;
    }
}

</style>
