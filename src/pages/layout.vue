<template>
    <div style="height:100%">
        <div class="ui-app-bar">
            <div class="ui-app-bar__content">
                <div class="container">
                    <div class="row">
                        <div class="col_12">
                            <button @click="showNavigation=true" class="ui-button ui-button_circle ui-button_circle_mini ui-button_flat">
                                <i class="fa fa-bars" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col_12">

                    <ui-navigation :show="showNavigation" @onHide="showNavigation=false">
                        <div class="ui-navigation__header">
                            <router-link to="/">
                                <img class="ui-navigation__header__label" src="/public/img/label.png" alt="">
                            </router-link>
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
                                    <router-link to="/buttons" class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-square-o" aria-hidden="true"></i>
                                        </div>
                                        Кнопки
                                    </router-link>
                                    <router-link to="/typography" class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-font" aria-hidden="true"></i>
                                        </div>
                                        Типография
                                    </router-link>
                                    <router-link to="/inputs" class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-tumblr" aria-hidden="true"></i>
                                        </div>
                                        Строка ввода
                                    </router-link>
                                    <router-link to="/selects" class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                        </div>
                                        Селект
                                    </router-link>
                                    <router-link to="/checkboxs" class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                        </div>
                                        Чекбокс
                                    </router-link>
                                    <router-link to="/datepicker" class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-calendar" aria-hidden="true"></i>
                                        </div>
                                        Датапикер
                                    </router-link>
                                    <router-link to="/chips" class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-times-circle" aria-hidden="true"></i>
                                        </div>
                                        Chips
                                    </router-link>
                                    <router-link to="/windows" class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-windows" aria-hidden="true"></i>
                                        </div>
                                        Окна
                                    </router-link>
                                    <router-link to="/tabs" class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-window-minimize" ></i>
                                        </div>
                                        Табы
                                    </router-link>
                                    <router-link to="/avatars" class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                                        </div>
                                        Аватарки
                                    </router-link>
                                </div>
                            </ui-navigation-list>
                        </div>
                        <div class="ui-navigation__unit">
                            <ui-navigation-list  :show="true">
                                <div slot="header">
                                    <div class="ui-navigation__unit__header">
                                        Примеры виджетов
                                    </div>
                                </div>
                                <div slot="content">
                                    <router-link to="/cards" class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-th" aria-hidden="true"></i>
                                        </div>
                                        Карточки
                                    </router-link>
                                </div>
                            </ui-navigation-list>
                        </div>
                        <div class="ui-navigation__unit">
                            <ui-navigation-list  :show="true">
                                <div slot="header">
                                    <div class="ui-navigation__unit__header">
                                        Примеры страниц
                                    </div>
                                </div>
                                <div slot="content">
                                    <router-link to="/registration" class="ui-navigation__unit__button">
                                        <div class="ui-navigation__unit__icon">
                                            <i class="fa fa-th" aria-hidden="true"></i>
                                        </div>
                                        Регистрация
                                    </router-link>
                                </div>
                            </ui-navigation-list>
                        </div>

                    </ui-navigation>
                </div>
            </div>
        </div>
        <slot >

        </slot>
    </div>
</template>
<script>
export default {
  name: "layout",
  data() {
    return { showNavigation: false };
  }
};
</script>
