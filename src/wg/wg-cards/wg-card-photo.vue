<template>
    <div class="wg-card-photo">
        <div class="wg-card-photo__header">

            <div class="ui-avatar-block wg-card-photo__avatar-block">
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

            <button @click="showMenu=true" class="ui-button ui-button_flat ui-button_circle ui-button_circle_mini wg-card-photo__header-button">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </button>
            <ui-menu :show="showMenu" @onHide="showMenu=false" position="left-bottom">
                <ul class="wg-card-photo__menu">
                    <li class="wg-card-photo__menu-li">Комментарии</li>
                    <li class="wg-card-photo__menu-li">Пожаловаться</li>
                </ul>
            </ui-menu>

        </div>
        <a class="ui-link wg-card-photo__link" href="http://google.com">
            Фотографии мастодонта Chevrolet Camaro
        </a>

        <wg-slider class="wg-card-photo__slider" :slide='[
                                        { src: "/public/img/cam1.jpg", show: true },
                                        { src: "/public/img/cam2.jpg" },
                                        { src: "/public/img/cam3.jpg" },
                                        { src: "/public/img/cam4.jpg" },
                                        { src: "/public/img/cam5.jpg"},
                                        { src: "/public/img/canvas.jpg" , },
                                        { src: "/public/img/canvas2.jpg" },
                                        { src: "/public/img/canvas3.jpg" },
                                        { src: "/public/img/canvas4.jpg" },
                                        { src: "/public/img/label.png" }
                                    ]'
                   @onInsert="isInsertPhoto">
        </wg-slider>
        <wg-slider-navig :slide='[
                                         { src: "/public/img/cam1.jpg" },
                                        { src: "/public/img/cam2.jpg" },
                                        { src: "/public/img/cam3.jpg" },
                                        { src: "/public/img/cam4.jpg" },
                                        { src: "/public/img/cam5.jpg"},
                                        { src: "/public/img/canvas.jpg" , },
                                        { src: "/public/img/canvas2.jpg" },
                                        { src: "/public/img/canvas3.jpg" },
                                        { src: "/public/img/canvas4.jpg" },
                                        { src: "/public/img/label.png" }
                                    ]'
        :checked="numberPhoto">
        </wg-slider-navig>
        <transition name="wg-card-photo__description">
            <span v-show="descActive" class="ui-description ui-description_mini wg-card-photo__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum atque ex vero nam, harum impedit velit ea aliquam dolorum quia quibusdam quo maiores quod maxime beatae praesentium ullam porro quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, minus quaerat fugiat iste nostrum expedita, sit voluptas dolorem ducimus quos provident impedit, vel tempora excepturi illum perspiciatis cupiditate accusantium aspernatur!Nostrum nobis libero magni maxime, vero, aliquid consequuntur eligendi nesciunt suscipit repellendus adipisci, ex dolorum? Perferendis culpa minus cumque harum rem corporis nostrum voluptatum sequi possimus in, ipsa deserunt maxime. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore libero voluptatum voluptatibus culpa illum odit vero. Error voluptatum animi tempora ad quos explicabo itaque rerum delectus incidunt, quaerat non accusamus!Magni eius nobis tempora eveniet recusandae molestias minima tempore praesentium quibusdam exercitationem, modi officia dolorem ullam omnis fuga aut architecto incidunt aperiam inventore, odio beatae! Perspiciatis maiores odio modi. Corrupti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum atque ex vero nam, harum impedit velit ea aliquam dolorum quia quibusdam quo maiores quod maxime beatae praesentium ullam porro quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, minus quaerat fugiat iste nostrum expedita, sit voluptas dolorem ducimus quos provident impedit, vel tempora excepturi illum perspiciatis cupiditate accusantium aspernatur!Nostrum nobis libero magni maxime, vero, aliquid consequuntur eligendi nesciunt suscipit repellendus adipisci, ex dolorum? Perferendis culpa minus cumque harum rem corporis nostrum voluptatum sequi possimus in, ipsa deserunt maxime. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore libero voluptatum voluptatibus culpa illum odit vero. Error voluptatum animi tempora ad quos explicabo itaque rerum delectus incidunt, quaerat non accusamus!Magni eius nobis tempora eveniet recusandae molestias minima tempore praesentium quibusdam exercitationem, modi officia dolorem ullam omnis fuga aut architecto incidunt aperiam inventore, odio beatae! Perspiciatis maiores odio modi. Corrupti!

            </span>
        </transition>

        <div class="wg-card-photo__buttons">
            <button class="ui-button ui-button_circle ui-button_circle_mini ui-button_flat">
                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
            </button>
            <button class="ui-button ui-button_circle ui-button_circle_mini ui-button_flat">
                <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
            </button>
            <button class="ui-button ui-button_circle ui-button_flat ui-button_circle_mini wg-card-photo__angel" :class="{'wg-card-photo__angel_transit':descActive}" @click="isDascActive">
                <i class="fa fa-angle-down" aria-hidden="true"></i>
            </button>
        </div>

    </div>
</template>
<script>
export default {
  name: "wg-card-photo",
  data() {
    return {
      showMenu: false,
      descActive: false,
      numberPhoto: 1
    };
  },
  methods: {
    isDascActive() {
      this.descActive = !this.descActive;
    },
    isInsertPhoto(numberPhoto) {
      this.numberPhoto = numberPhoto;
    }
  }
};
</script>
