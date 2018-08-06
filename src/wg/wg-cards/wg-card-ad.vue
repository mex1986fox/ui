<template>
    <div class="wg-card-ad">
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

            <button @click="showMenu=true" class="ui-button ui-button_flat ui-button_circle ui-button_circle_mini wg-card-ad__header-button">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ui-menu :show="showMenu" @onHide="showMenu=false" position="left-bottom">
                <ul class="wg-card-ad__menu">
                    <li class="wg-card-ad__menu-li">Комментарии</li>
                    <li class="wg-card-ad__menu-li">Пожаловаться</li>
                    <li class="wg-card-ad__menu-li">Авто продан</li>
                </ul>
            </ui-menu>

        </div>
        <a class="ui-link wg-card-ad__link" href="http://google.com">
            Chevrolet Camaro 2009 г. Новокузнецк 
        </a>
        <div class="row">
            <div class="col_6 col-phone_6">
                <wg-slider class="wg-card-ad__slider" :slide='[
                                        { src: "/public/img/cam1.jpg"},
                                        { src: "/public/img/cam2.jpg" },
                                        { src: "/public/img/cam3.jpg" },
                                        { src: "/public/img/cam4.jpg" },
                                        { src: "/public/img/cam5.jpg" }
                                    ]'
                                    :select="1">
                </wg-slider>
            </div>
            <div class="col_6 col-phone_6">
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

        <transition name="wg-card-ad__description">
            <span v-show="descActive" class="ui-description ui-description_mini wg-card-ad__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum atque ex vero nam, harum impedit velit ea aliquam dolorum quia quibusdam quo maiores quod maxime beatae praesentium ullam porro quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, minus quaerat fugiat iste nostrum expedita, sit voluptas dolorem ducimus quos provident impedit, vel tempora excepturi illum perspiciatis cupiditate accusantium aspernatur!Nostrum nobis libero magni maxime, vero, aliquid consequuntur eligendi nesciunt suscipit repellendus adipisci, ex dolorum? Perferendis culpa minus cumque harum rem corporis nostrum voluptatum sequi possimus in, ipsa deserunt maxime. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore libero voluptatum voluptatibus culpa illum odit vero. Error voluptatum animi tempora ad quos explicabo itaque rerum delectus incidunt, quaerat non accusamus!Magni eius nobis tempora eveniet recusandae molestias minima tempore praesentium quibusdam exercitationem, modi officia dolorem ullam omnis fuga aut architecto incidunt aperiam inventore, odio beatae! Perspiciatis maiores odio modi. Corrupti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum atque ex vero nam, harum impedit velit ea aliquam dolorum quia quibusdam quo maiores quod maxime beatae praesentium ullam porro quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, minus quaerat fugiat iste nostrum expedita, sit voluptas dolorem ducimus quos provident impedit, vel tempora excepturi illum perspiciatis cupiditate accusantium aspernatur!Nostrum nobis libero magni maxime, vero, aliquid consequuntur eligendi nesciunt suscipit repellendus adipisci, ex dolorum? Perferendis culpa minus cumque harum rem corporis nostrum voluptatum sequi possimus in, ipsa deserunt maxime. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore libero voluptatum voluptatibus culpa illum odit vero. Error voluptatum animi tempora ad quos explicabo itaque rerum delectus incidunt, quaerat non accusamus!Magni eius nobis tempora eveniet recusandae molestias minima tempore praesentium quibusdam exercitationem, modi officia dolorem ullam omnis fuga aut architecto incidunt aperiam inventore, odio beatae! Perspiciatis maiores odio modi. Corrupti!

            </span>
        </transition>

        <div class="wg-card-ad__buttons">
            <button class="ui-button ui-button_circle ui-button_circle_mini ui-button_flat">
                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
            </button>
            <button class="ui-button ui-button_circle ui-button_circle_mini ui-button_flat">
                <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
            </button>
            <button class="ui-button ui-button_circle ui-button_flat ui-button_circle_mini wg-card-ad__angel" :class="{'wg-card-ad__angel_transit':descActive}" @click="isDascActive">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
            </button>
        </div>

    </div>
</template>
<script>
export default {
  name: "wg-card-ad",
  data() {
    return { showMenu: false,descActive: false };
  },
  methods: {
    isDascActive() {
      this.descActive = !this.descActive;
    }
  }
};
</script>
