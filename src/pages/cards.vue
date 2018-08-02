<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <span class="ui-header ui-header_1"> Карточки </span>
                </div>
                                <div class="col_6 col_offset-3">
                    <div class="wg-content-frame">
                        <div class="wg-card-ad__header">

                            <div class="ui-avatar-block wg-card-ad__avatar-block">
                                <div class="ui-avatar">
                                    <img src="/public/img/avatar.jpg" alt="">
                                </div>
                                <div class="ui-link ui-avatar-block__link">
                                    Alisochka Frolova
                                </div>
                                <div class="ui-avatar-block__title">
                                    25/17/2018
                                </div>
                                
                            </div>

                            <button @click="showMenu=true" class="ui-button ui-button_flat ui-button_circle wg-card-ad__header-button">
                                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            </button>
                            <ui-menu :show="showMenu" @onHide="showMenu=false" position="left-bottom">
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
                        <a class="ui-link wg-card-ad__link" href="http://google.com">
                            Honda Fit-Aria 2008г. Кемерово
                        </a>
                        <div class="row">
                            <div class="col_6">
                                <wg-slider class="wg-card-ad__slider"
                                    :slide='[
                                        { src: "/public/img/canvas.jpg", show: true },
                                        { src: "/public/img/canvas2.jpg" },
                                        { src: "/public/img/canvas3.jpg" },
                                        { src: "/public/img/canvas4.jpg" },
                                        { src: "/public/img/canvas.jpg" },
                                        { src: "/public/img/canvas2.jpg" },
                                        { src: "/public/img/canvas3.jpg" },
                                        { src: "/public/img/canvas4.jpg" }
                                    ]'>
                                </wg-slider>
                            </div>
                            <div class="col_6">
                                <div class="wg-card-ad__info">
                                    <div class="wg-card-ad__info-header">
                                        2 500 000 руб.
                                    </div>
                                    <span class="wg-card-ad__info-param">
                                        <span class="wg-card-ad__info-title">Двигатель</span>
                                        <span class="wg-card-ad__info-value">бензин/2.3</span>
                                    </span>
                                    <span class="wg-card-ad__info-param">
                                        <span class="wg-card-ad__info-title">Руль</span>
                                        <span class="wg-card-ad__info-value">правый</span>
                                    </span>
                                    <span class="wg-card-ad__info-param">
                                        <span class="wg-card-ad__info-title">Пробег</span>
                                        <span class="wg-card-ad__info-value">234 000 км.</span>
                                    </span>
                                    <span class="wg-card-ad__info-param">
                                        <span class="wg-card-ad__info-title">Коробка</span>
                                        <span class="wg-card-ad__info-value">вариатор</span>
                                    </span>
                                    <span class="wg-card-ad__info-param">
                                        <span class="wg-card-ad__info-title">Привод</span>
                                        <span class="wg-card-ad__info-value">передний</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        

                        <div class="wg-card-ad__buttons">
                            <button class="ui-button ui-button_circle ui-button_flat">
                                <i class="fa fa-cogs" aria-hidden="true"></i>
                            </button>
                            <button class="ui-button ui-button_circle ui-button_flat">
                                <i class="fa fa-envelope-open-o" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col_12">
                    <ui-code value='<div class="ui-card wg-card-ad">
    <div class="wg-card-ad__header">

        <div class="ui-avatar-block">
            <div class="ui-avatar">
                <img src="/public/img/avatar.jpg" alt="">
            </div>
            <div class="ui-avatar-block__title">
                Title
            </div>
            <div class="ui-avatar-block__link">
                Link
            </div>
        </div>

        <button @click="showMenu=true" class="ui-button ui-button_flat ui-button_circle wg-card-ad__header__button">
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </button>

        <ui-menu :show="showMenu" @onHide="showMenu=false" position="left-bottom">
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
    
    <img class="wg-card-ad__img" src="/public/img/canvas.jpg" alt="">

    <div class="wg-card-ad__buttons">
        <button class="ui-button ui-button_circle ui-button_flat">
            <i class="fa fa-cogs" aria-hidden="true"></i>
        </button>
        <button class="ui-button ui-button_circle ui-button_flat">
            <i class="fa fa-envelope-open-o" aria-hidden="true"></i>
        </button>
    </div>
</div>'>
                    </ui-code>
                </div>

            </div>
        </div>
    </layout>
</template>
<script>
export default {
  name: "pg-cards",
  data() {
    return { showMenu: false };
  },
  methods: {}
};
</script>