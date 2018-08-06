<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col_12 col-phone_6">
                    <h1 class="ui-header ui-header_1"> Всплывающие окна </h1>
                    <br/>
                    <span class="ui-header ui-header_2"> Шторка (без центрирования)
                    </span>
                    <br/>
                    <span class="ui-description">Шторка - всплывающее затемнение экрана для размещения модальных окон</span>

                </div>
                <div class="col_12">
                    <br/>
                    <button class="ui-button"
                        @click="showBlind=true">
                        Показать шторку
                    </button>
                    <ui-blind :show="showBlind"
                        @onHide="showBlind=false">
                        <div class="ui-modal-window">
                            Контент не подвергается центрированию
                        </div>
                    </ui-blind>
                </div>
                <div class="col_12">
                    <ui-code value='<ui-blind :show="showBlind" @onHide="showBlind=false">
    <div class="ui-modal-window">
        Контент не подвергается центрированию
    </div>
</ui-blind>'>
                    </ui-code>

                </div>
                <div class="col_12">
                    <span class="ui-header ui-header_2"> Шторка (с центрированием)
                    </span>
                    <br/>
                    <button class="ui-button"
                        @click="showBlindС=true">
                        Показать шторку с центрированием
                    </button>
                    <ui-blind :show="showBlindС"
                        @onHide="showBlindС=false"
                        :centering="true">
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
                    <ui-code value='
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
                    '>

                    </ui-code>
                </div>
                <div class="col_12">
                    <wg-desc-example :classes="[
                                {name:'.ui-blind', desc:'Корневой класс'},
                                {name:'.ui-blind_flat', desc:'Модификатор фона (прозрачный)'}
                            ]"
                        :props="[
                                {name:'show', desc:'Скрыть, показать элемент',def:'false'},
                                {name:'centering', desc:'Включает центрирование содержимого',def:'false'},
                                {name:'animate', desc:'Определяет тип анимации при появление и исчезновении. Значения (left, right, bottom, top, opacity)',def:'left'}
                            ]"
                        :events="[
                                {name:'onHide',desc:'Событие возникает когда элемент скрывается',val:'Ничего не возвращает'},
                            ]">
                    </wg-desc-example>
                </div>
                <div class="col_12">
                    <span class="ui-header ui-header_2"> Классическое модальное окно
                    </span>
                    <br/>
                    <button class="ui-button"
                        @click="showModal=true">
                        Показать модальное окно
                    </button>
                    <ui-blind :show="showModal"
                        @onHide="showModal=false"
                        :centering="true"
                        animate="opacity">
                        <div class="container">
                            <div class="row">
                                <div class="col_6 col_offset-3 col-phone_6 col-phone_offset-0">

                                    <!--модальное окно-->
                                    <div class="ui-modal-window">
                                        <div class="ui-modal-window__header">
                                            <button @click="showModal=false"
                                                class="ui-button ui-button_circle ui-button_circle_mini ui-button_flat ui-modal-window__header__button">
                                                <i class="fa fa-times"
                                                    aria-hidden="true"></i>
                                            </button>
                                            Пример классического модального окна
                                        </div>
                                        <div class="ui-modal-window__content">
                                            <img class="ui-modal-window__content__img"
                                                src="/public/img/canvas.jpg"
                                                alt="">
                                            <span class="ui-description">
                                                Lorem ipsum dolor, dolores recusandae quibusdam quod nemo veniam iste blanditiis molestias consectetur, non similique explicabo tenetur necessitatibus aperiam alias in cum! Blanditiis commodi odio obcaecati hic esse. Veniam quam voluptas sequi?
                                            </span>
                                        </div>
                                        <div class="ui-modal-window__footer">
                                            <button class="ui-button ui-button_blue">
                                                OK
                                            </button>
                                            <button @click="showModal=false"
                                                class="ui-button">
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

                    <ui-code value='
<ui-blind :show="showModal" @onHide="showModal=false" :centering="true" animate="opacity">
    <div class="container">
        <div class="row">
            <div class="col_6 col_offset-3 col-phone_6 col-phone_offset-0">

                <!--модальное окно-->
                <div class="ui-modal-window">
                    <div class="ui-modal-window__header">
                        <button @click="showModal=false" 
                                class="ui-button ui-button_circle ui-button_circle_mini 
                                       ui-button_flat ui-modal-window__header__button">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </button>
                        Пример классического модального окна
                    </div>
                    <div class="ui-modal-window__content">
                        <img class="ui-modal-window__content__img" src="/public/img/canvas.jpg" alt="">
                        <span class="ui-description">
                            Lorem ipsum dolor, dolores recusandae 
                            quibusdam quod nemo veniam iste 
                            blanditiis molestias consectetur,
                             non similique explicabo tenetur?
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
                    '>

                    </ui-code>
                </div>
                <div class="col_12">
                    <wg-desc-example :classes="[
                                {name:'.ui-modal-window', desc:'Корневой класс'},
                                {name:'.ui-modal-window__header', desc:'Класс заголовка'},
                                {name:'.ui-modal-window__header__button', desc:'Класс кнопки закрытия'},
                                {name:'.ui-modal-window__content', desc:'Класс контента'},
                                {name:'.ui-modal-window__content__img', desc:'Класс картинки контента'},
                                {name:'.ui-modal-window__footer', desc:'Класс подвала'}
                            ]">
                    </wg-desc-example>
                </div>
                <div class="col_12">
                    <span class="ui-header ui-header_2"> Навигационное меню
                    </span>
                    <br/>
                    <button class="ui-button"
                        @click="showNavigation=true">
                        Показать навигационное менбю
                    </button>
                    <ui-navigation :show="showNavigation"
                        @onHide="showNavigation=false">
                        <div class="ui-navigation__header">
                            <img class="ui-navigation__header__label"
                                src="/public/img/label.png"
                                alt="">
                            <div class="ui-navigation__header__burger">
                                <button @click="showNavigation=false"
                                    class="ui-button ui-button_circle ui-button_circle_mini ui-button_flat">
                                    <i class="fa fa-bars"
                                        aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>

                        <div class="ui-navigation__unit">
                            <ui-navigation-list :show="true">
                                <div slot="header">
                                    <div class="ui-navigation__unit__header">
                                        Элементы формы
                                    </div>
                                </div>
                                <div slot="content">
                                    <router-link to="/grid"
                                        class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-th"
                                                aria-hidden="true"></i>
                                        </div>
                                        Сетка
                                    </router-link>
                                    <router-link to="/buttons"
                                        class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-square-o"
                                                aria-hidden="true"></i>
                                        </div>
                                        Кнопки
                                    </router-link>
                                    <router-link to="/typography"
                                        class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-font"
                                                aria-hidden="true"></i>
                                        </div>
                                        Типография
                                    </router-link>
                                    <router-link to="/inputs"
                                        class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-tumblr"
                                                aria-hidden="true"></i>
                                        </div>
                                        Строка ввода
                                    </router-link>
                                    <router-link to="/selects"
                                        class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-chevron-down"
                                                aria-hidden="true"></i>
                                        </div>
                                        Селект
                                    </router-link>
                                    <router-link to="/checkboxs"
                                        class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-check-square-o"
                                                aria-hidden="true"></i>
                                        </div>
                                        Чекбокс
                                    </router-link>
                                    <router-link to="/datepicker"
                                        class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-calendar"
                                                aria-hidden="true"></i>
                                        </div>
                                        Датапикер
                                    </router-link>
                                    <router-link to="/chips"
                                        class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-times-circle"
                                                aria-hidden="true"></i>
                                        </div>
                                        Chips
                                    </router-link>
                                    <router-link to="/windows"
                                        class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-windows"
                                                aria-hidden="true"></i>
                                        </div>
                                        Окна
                                    </router-link>
                                </div>
                            </ui-navigation-list>
                        </div>
                        <div class="ui-navigation__unit">
                            <ui-navigation-list>
                                <div slot="header">
                                    <div class="ui-navigation__unit__header">
                                        Элементы формы
                                    </div>
                                </div>
                                <div slot="content">
                                    <router-link to="/grid"
                                        class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-th"
                                                aria-hidden="true"></i>
                                        </div>
                                        Сетка
                                    </router-link>
                                    <router-link to="/buttons"
                                        class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-square-o"
                                                aria-hidden="true"></i>
                                        </div>
                                        Кнопки
                                    </router-link>
                                    <router-link to="/typography"
                                        class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-font"
                                                aria-hidden="true"></i>
                                        </div>
                                        Типография
                                    </router-link>
                                    <router-link to="/inputs"
                                        class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-tumblr"
                                                aria-hidden="true"></i>
                                        </div>
                                        Строка ввода
                                    </router-link>
                                    <router-link to="/selects"
                                        class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-chevron-down"
                                                aria-hidden="true"></i>
                                        </div>
                                        Селект
                                    </router-link>
                                    <router-link to="/checkboxs"
                                        class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-check-square-o"
                                                aria-hidden="true"></i>
                                        </div>
                                        Чекбокс
                                    </router-link>
                                    <router-link to="/datepicker"
                                        class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-calendar"
                                                aria-hidden="true"></i>
                                        </div>
                                        Датапикер
                                    </router-link>
                                    <router-link to="/chips"
                                        class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-times-circle"
                                                aria-hidden="true"></i>
                                        </div>
                                        Chips
                                    </router-link>
                                    <router-link to="/windows"
                                        class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-windows"
                                                aria-hidden="true"></i>
                                        </div>
                                        Окна
                                    </router-link>
                                </div>
                            </ui-navigation-list>
                        </div>
                    </ui-navigation>
                </div>
                <div class="col_12">
                    <ui-code value='
<ui-navigation :show="showNavigation" @onHide="showNavigation=false">
    <div class="ui-navigation__header">
        <img class="ui-navigation__header__label" src="/public/img/label.png" alt="">
        <div class="ui-navigation__header__burger">
            <button @click="showNavigation=false" class="ui-button ui-button_circle ui-button_circle_mini ui-button_flat">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
        </div>
    </div>

    <div class="ui-navigation__unit">
        <ui-navigation-list  :show="true">
            <div slot="header">
                <div class="ui-navigation__unit__header">
                    Элементы формы
                </div>
            </div>
            <div slot="content">
                <router-link to="/grid" class="ui-navigation__unit__button">
                    <div class="ui-navigation__unit__icon">
                        <i class="fa fa-th" aria-hidden="true"></i>
                    </div>
                    Сетка
                </router-link>
                    <!--...-->
                <router-link to="/windows" class="ui-navigation__unit__button">
                    <div class="ui-navigation__unit__icon">
                        <i class="fa fa-windows" aria-hidden="true"></i>
                    </div>
                    Окна
                </router-link>
            </div>
        </ui-navigation-list>
    </div>
</ui-navigation>'>

                    </ui-code>
                </div>

                <div class="col_12">
                    <wg-desc-example :classes="[
                        {name:'.ui-navigation', desc:'Корневой класс'},
                        {name:'.ui-navigation__header', desc:'Класс описывает заголовок навигации'},
                        {name:'.ui-navigation__header__label', desc:'Класс описывает лейбел заголовка'},
                        {name:'.ui-navigation__header__burger', desc:'Классс описыват кнопку заголовка'},
                        {name:'.ui-navigation__unit', desc:'Класс описывает раскрывающийся список'},
                        {name:'.ui-navigation__unit__header', desc:'Заголовок раскрывающегося списка'},
                        {name:'.ui-navigation__unit__button', desc:'Селекты (кнопки) раскрывающегося списка'},
                         {name:'.ui-navigation__unit__icon', desc:'Иконки раскрывающегося списка'},
                    ]">

                    </wg-desc-example>
                </div>
                <div class="col_12">
                    <span class="ui-header ui-header_2"> Кнопочное меню
                    </span>
                    <br/>
                    <button class="ui-button"
                        @click="showMenuRT=true">
                        Правое-верхнее
                    </button>
                    <ui-menu :show="showMenuRT"
                        @onHide="showMenuRT=false"
                        position="right-top">
                        <ul class="wg-card-ad__menu">
                            <li class="wg-card-ad__menu-li">Ссылка 1</li>
                            <li class="wg-card-ad__menu-li">Ссылка 2</li>
                            <li class="wg-card-ad__menu-li">Ссылка 3</li>
                            <li class="wg-card-ad__menu-li">Ссылка 1</li>
                            <li class="wg-card-ad__menu-li">Ссылка 2</li>
                            <li class="wg-card-ad__menu-li">Ссылка 3</li>
                            <li class="wg-card-ad__menu-li">Ссылка 1</li>
                            <li class="wg-card-ad__menu-li">Ссылка 2</li>
                            <li class="wg-card-ad__menu-li">Ссылка 3</li>
                        </ul>
                    </ui-menu>
                    <button class="ui-button"
                        @click="showMenuRB=true">
                        Правое-нижнее
                    </button>
                    <ui-menu :show="showMenuRB"
                        @onHide="showMenuRB=false"
                        position="right-bottom">
                        <ul class="wg-card-ad__menu">
                            <li class="wg-card-ad__menu-li">Ссылка 1</li>
                            <li class="wg-card-ad__menu-li">Ссылка 2</li>
                            <li class="wg-card-ad__menu-li">Ссылка 3</li>
                            <li class="wg-card-ad__menu-li">Ссылка 1</li>
                            <li class="wg-card-ad__menu-li">Ссылка 2</li>
                            <li class="wg-card-ad__menu-li">Ссылка 3</li>
                            <li class="wg-card-ad__menu-li">Ссылка 1</li>
                            <li class="wg-card-ad__menu-li">Ссылка 2</li>
                            <li class="wg-card-ad__menu-li">Ссылка 3</li>
                        </ul>
                    </ui-menu>
                    <button class="ui-button"
                        @click="showMenuLT=true">
                        Левое-верхнее
                    </button>
                    <ui-menu :show="showMenuLT"
                        @onHide="showMenuLT=false"
                        position="left-top">
                        <ul class="wg-card-ad__menu">
                            <li class="wg-card-ad__menu-li">Ссылка 1</li>
                            <li class="wg-card-ad__menu-li">Ссылка 2</li>
                            <li class="wg-card-ad__menu-li">Ссылка 3</li>
                            <li class="wg-card-ad__menu-li">Ссылка 1</li>
                            <li class="wg-card-ad__menu-li">Ссылка 2</li>
                            <li class="wg-card-ad__menu-li">Ссылка 3</li>
                            <li class="wg-card-ad__menu-li">Ссылка 1</li>
                            <li class="wg-card-ad__menu-li">Ссылка 2</li>
                            <li class="wg-card-ad__menu-li">Ссылка 3</li>
                        </ul>
                    </ui-menu>
                    <button class="ui-button"
                        @click="showMenuLB=true">
                        Левое-нижнее
                    </button>
                    <ui-menu :show="showMenuLB"
                        @onHide="showMenuLB=false"
                        position="left-bottom">
                        <ul class="wg-card-ad__menu">
                            <li class="wg-card-ad__menu-li">Ссылка 1</li>
                            <li class="wg-card-ad__menu-li">Ссылка 2</li>
                            <li class="wg-card-ad__menu-li">Ссылка 3</li>
                            <li class="wg-card-ad__menu-li">Ссылка 1</li>
                            <li class="wg-card-ad__menu-li">Ссылка 2</li>
                            <li class="wg-card-ad__menu-li">Ссылка 3</li>
                            <li class="wg-card-ad__menu-li">Ссылка 1</li>
                            <li class="wg-card-ad__menu-li">Ссылка 2</li>
                            <li class="wg-card-ad__menu-li">Ссылка 3</li>
                        </ul>
                    </ui-menu>

                </div>
                <div class="col-12">
                    <ui-code value='<ui-menu :show="showMenuLB" @onHide="showMenuLB=false" position="left-bottom">
    <ul class="wg-card-ad__menu">
        <li class="wg-card-ad__menu-li">Ссылка 1</li>
        <li class="wg-card-ad__menu-li">Ссылка 2</li>
        <li class="wg-card-ad__menu-li">Ссылка 3</li>
        <li class="wg-card-ad__menu-li">Ссылка 1</li>
        <li class="wg-card-ad__menu-li">Ссылка 2</li>
        <li class="wg-card-ad__menu-li">Ссылка 3</li>
        <li class="wg-card-ad__menu-li">Ссылка 1</li>
        <li class="wg-card-ad__menu-li">Ссылка 2</li>
        <li class="wg-card-ad__menu-li">Ссылка 3</li>
    </ul>
</ui-menu>'>

                    </ui-code>
                </div>
                <div class="col_12">
                    <wg-desc-example :classes="[
                        {name:'.ui-menu', desc:'Корневой класс'}
                    ]"
                        :props="[
                        {name:'show', desc:'Показывает или скрывает меню',def:'false'},
                        {name:'position', desc:'Позицианирует меню. Значения: left-bottom, left-top, right-bottom, right-top.',def:'left-bottom'},
                       
                    ]"
                        :events="[
                        {name:'onHide',desc:'Событие возникает при закрытии меню',val:'Ничего не возвращает'},
                       
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
      showNavigation: false,
      showMenuLT: false,
      showMenuLB: false,
      showMenuRT: false,
      showMenuRB: false
    };
  }
};
</script>

