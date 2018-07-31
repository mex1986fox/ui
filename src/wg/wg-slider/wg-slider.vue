<template>
  <div class="wg-slider" @mouseover="buttonsShow=true" @mouseout="buttonsShow=false">
    <div class="wg-slider__buttons" :style="marginButtons" v-show="buttonsShow">
      <div class="wg-slider__left-button" @click="leafLeft">
        <button class="ui-button ui-button_circle ui-button_flat wg-slider__button_flat">
          <i aria-hidden="true" class="fa fa-angle-left"></i>
        </button>
      </div>
      <div class="wg-slider__right-button" @click="leafRight">
        <button class="ui-button ui-button_circle ui-button_flat wg-slider__button_flat">
          <i aria-hidden="true" class="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
    <div ref="container" class="wg-slider__container">
      <div class="wg-slider__frame" v-for="(val, key) in dSlide" :key="key" v-if="key<3">
        <img  class="wg-slider__fon" :src="val.src" alt="">
        <img ref="photo" class="wg-slider__img" :src="val.src" alt="" >
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
        console.log(this.$el.clientHeight)
        this.marginButtons = { marginTop: this.$el.clientHeight / 2 + "px" };
      } else {
        console.log(this.$el)
        this.marginButtons = {};
      }
    },
    //устанавливает главную фотку в свою позицию
    setPosition() {
      for (let key in this.dSlide) {
        if (this.dSlide[key].show == true) {
          let elem = this.dSlide.splice(key, 1);
          this.dSlide.splice(1, 0, elem[0]);
        }
      }
    },
    //листает слайдер влево
    leafLeft() {
      this.$refs.container.style.cssText =
        "margin-left: -200%; transition: margin-left 0.3s;";
      setTimeout(() => {
        this.$refs.container.style.cssText = "";
        this.dSlide.push(this.dSlide.shift());
      }, 100);
    },
    leafRight() {
      this.$refs.container.style.cssText =
        "margin-left: 0%; transition: margin-left 0.3s;";
      setTimeout(() => {
        this.$refs.container.style.cssText = "";
        this.dSlide.unshift(this.dSlide.pop());
      }, 100);
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
      dSlide: this.slide
    };
  },
  beforeMount() {
    this.setPosition();
  },
  mounted() {
    
    for (let k in this.$refs.photo) {
      this.alignmentPhoto(this.$refs.photo[k]);
      this.centerPhoto(this.$el, this.$refs.photo[k]);
    }
    setTimeout(()=>{this.centerButtons()}, 500);
  },
  updated(){
    
    for (let k in this.$refs.photo) {
      this.alignmentPhoto(this.$refs.photo[k]);
      this.centerPhoto(this.$el, this.$refs.photo[k]);
    }
  },
  props: { slide: Array }
};

// dSlide: [
//         { src: "/static/img/photo_car1.jpg", show: true },
//         { src: "/static/img/photo_car2.jpg" },
//         { src: "/static/img/photo_car3.jpg" },
//         { src: "/static/img/photo_car4.jpg" }
//       ]
</script>
<style lang="scss">

</style>
