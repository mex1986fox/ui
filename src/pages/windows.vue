<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col_12 col-phone_6">
                    <h1 class="ui-header ui-header_1"> Всплывающие окна </h1>
                    <br/>
                </div>
                <div class="col_12">
                    <button class="ui-button ui-button_mini ui-button_flat" @click="showBlind=true">
                        <i class="fa fa-apple" aria-hidden="true"></i>
                        Показать шторку
                    </button>
                    <ui-blind :show="showBlind" @onHide="showBlind=false">
                        <div class="container">
                            <div class="row">
                                <div class="col_12">
                                    <div class="ui-modal-window">
                                        Контент не подвергается центрированию
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ui-blind>
                </div>
                <div class="col_12">
                    <button class="ui-button ui-button_mini ui-button_flat" @click="showBlindС=true">
                        <i class="fa fa-apple" aria-hidden="true"></i>
                        Показать шторку с центрированием
                    </button>
                    <ui-blind :show="showBlindС" @onHide="showBlindС=false" :centering="true">
                        <div class="container">
                            <div class="row">
                                <div class="col_12">
                                    <div class="ui-modal-window">
                                        Контент центрируется с отступом 30px
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ui-blind>
                </div>

                <div class="col_12">
                    <button class="ui-button ui-button_mini ui-button_flat" @click="showModal=true">
                        <i class="fa fa-apple" aria-hidden="true"></i>
                        Показать модальное окно
                    </button>
                    <ui-blind :show="showModal" @onHide="showModal=false" :centering="true">
                        <div class="container" >
                            <div class="row">
                                <div class="col_6 col_offset-3 col-phone_6 col-phone_offset-0">
                                    <div class="ui-modal-window">

                                        <div class="ui-modal-window__header">
                                            <button @click="showModal=false" class="ui-button ui-button_circle ui-button_circle_mini ui-button_flat ui-modal-window__header__button">
                                                <i class="fa fa-times" aria-hidden="true"></i>
                                            </button>
                                            Пример классического модального окна

                                        </div>

                                        <div class="ui-modal-window__content">
                                            <img class="ui-modal-window__content__img" src="/public/img/canvas.jpg" alt="">
                                            <span class="ui-description">
                                                Lorem ipsum dolor, dolores recusandae quibusdam quod nemo veniam iste blanditiis molestias consectetur, non similique explicabo tenetur necessitatibus aperiam alias in cum! Blanditiis commodi odio obcaecati hic esse. Veniam quam voluptas sequi?
                                            </span>
                                        </div>

                                        <div class="ui-modal-window__footer">
                                            <button class="ui-button ui-button_blue">
                                                OK
                                            </button>
                                            <button @click="showModal=false" class="ui-button">
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ui-blind>
                </div>

                <div class="col_12">
                    <button class="ui-button ui-button_mini ui-button_flat" @click="showNavigation=true">
                        <i class="fa fa-apple" aria-hidden="true"></i>
                        Показать навигационное менбю
                    </button>
                   <ui-navigation :show="showNavigation" @onHide="showNavigation=false">

                   </ui-navigation>
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
      showBlindС: false,
      showModal: false,
      showNavigation: false
    };
  }
};
</script>
<style lang="scss" scoped>
.ui-modal-window {
  height: auto;
  width: auto;
  background-color: #fefefe;
}
</style>
