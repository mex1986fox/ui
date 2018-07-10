<template>
  <div class="ui-slider-photo" @mouseover="buttonsShow=true" @mouseout="buttonsShow=false">
    <div class="ui-slider-photo__buttons" :style="marginButtons" v-show="buttonsShow">
      <div class="ui-slider-photo__left-button" @click="leafLeft">
        <button class="ui-button ui-button_circle ui-button_flat ui-slider-photo__button_flat">
          <i aria-hidden="true" class="fa fa-angle-left"></i>
        </button>
      </div>
      <div class="ui-slider-photo__right-button" @click="leafRight()">
        <button class="ui-button ui-button_circle ui-button_flat ui-slider-photo__button_flat">
          <i aria-hidden="true" class="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
    <div ref="container" class="ui-slider-photo__container">
      <div class="ui-slider-photo__frame" v-for="(val, key) in photos" :key="key" v-if="key<3">
        <img  class="ui-slider-photo__fon" :src="val.src" alt="">
        <img ref="photo" class="ui-slider-photo__img" :src="val.src" alt="" >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    //выравнивает кнопки по центру
    centerButtons() {
      if (this.$el.clientHeight > 66) {
        this.marginButtons = { marginTop: this.$el.clientHeight / 2 + "px" };
      } else {
        this.marginButtons = {};
      }
    },
    //устанавливает главную фотку в свою позицию
    setPosition() {
      for (let key in this.photos) {
        if (this.photos[key].show == true) {
          let elem = this.photos.splice(key, 1);
          this.photos.splice(1, 0, elem[0]);
        }
      }
    },
    //листает слайдер влево
    leafLeft() {
      this.$refs.container.style.cssText =
        "margin-left: -200%; transition: margin-left 0.3s;";
      setTimeout(() => {
        this.$refs.container.style.cssText = "";
        this.photos.push(this.photos.shift());
      }, 400);
    },
    leafRight() {
      this.$refs.container.style.cssText =
        "margin-left: 0%; transition: margin-left 0.3s;";
      setTimeout(() => {
        this.$refs.container.style.cssText = "";
        this.photos.unshift(this.photos.pop());
      }, 400);
    },
    // определяет размещение блока горизонтальное или вертикальное
    defineLocation(htmlEl) {
      return htmlEl.clientHeight / htmlEl.clientWidth;
    },
    // выравнивает фотографию относительно блока
    alignmentPhoto(htmlElPhoto) {
      let locBlock = this.defineLocation(this.$el);
      let locPhoto = this.defineLocation(htmlElPhoto);
      if (locPhoto > locBlock) {
        htmlElPhoto.style.cssText = "height:100%; width:auto;";
      } else {
        htmlElPhoto.style.cssText = "height:auto; width:100%;";
      }
    },
    //центрует фотки
    centerPhoto(htmlEl, htmlElPhoto) {
      if (htmlEl.clientHeight > htmlElPhoto.clientHeight) {
        htmlElPhoto.style.marginTop =
          (htmlEl.clientHeight - htmlElPhoto.clientHeight) / 2 + "px";
      }
    }
  },
  data() {
    return {
      buttonsShow: false,
      marginButtons: {},
      photos: this.slidePhotoObject
    };
  },
  beforeMount() {
    this.setPosition();
  },
  mounted() {
    this.centerButtons();
    for (let k in this.$refs.photo) {
      this.alignmentPhoto(this.$refs.photo[k]);
      this.centerPhoto(this.$el, this.$refs.photo[k]);
    }
    setTimeout(()=>{this.$forceUpdate()}, 1500);
  },
  updated(){
    for (let k in this.$refs.photo) {
      this.alignmentPhoto(this.$refs.photo[k]);
      this.centerPhoto(this.$el, this.$refs.photo[k]);
    }
  },
  props: { slidePhotoObject: Array }
};

// photos: [
//         { src: "/static/img/photo_car1.jpg", show: true },
//         { src: "/static/img/photo_car2.jpg" },
//         { src: "/static/img/photo_car3.jpg" },
//         { src: "/static/img/photo_car4.jpg" }
//       ]
</script>
<style lang="scss">

</style>
