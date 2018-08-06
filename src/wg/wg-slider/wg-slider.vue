<template>
  <div class="wg-slider"
    @mouseover="buttonsShow=true"
    @mouseout="buttonsShow=false">
    <div class="wg-slider__buttons"
      :style="marginButtons"
      v-show="buttonsShow">
      <div class="wg-slider__left-button"
        @click="leafLeft">
        <button class="ui-button ui-button_circle ui-button_flat wg-slider__button_flat">
          <i aria-hidden="true"
            class="fa fa-angle-left"></i>
        </button>
      </div>
      <div class="wg-slider__right-button"
        @click="leafRight">
        <button class="ui-button ui-button_circle ui-button_flat wg-slider__button_flat">
          <i aria-hidden="true"
            class="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
    <div class="wg-slider__menu"
      v-show="buttonsShow">
      <div class="wg-slider__numeric">
        {{dSlide[0].number}} / {{dSlide.length}}
      </div>
    </div>
    <div ref="container"
      class="wg-slider__container">
      <div class="wg-slider__frame"
        v-for="(val, key) in dSlide"
        :key="key"
        v-if="key<3">
        <img class="wg-slider__fon"
          :src="val.src"
          alt="">
        <img ref="photo"
          class="wg-slider__img"
          :src="val.src"
          alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    //выравнивает кнопки по центру
    centerButtons() {
      if (this.$refs.container.clientHeight > 66) {
        this.marginButtons = {
          marginTop: this.$refs.container.clientHeight / 2 + "px"
        };
      } else {
        this.marginButtons = {};
      }
    },
    //устанавливает главную фотку в свою позицию
    setPosition() {
      for (let key in this.dSlide) {
        if (this.dSlide[key].number == this.dSelect && key >= 1) {
          let elem = this.dSlide.splice(key - 1, this.dSlide.length - key + 1);
          this.dSlide = elem.concat(this.dSlide);
          break;
        }
      }
    },
    //номерует фотки
    setNumbers() {
      for (let key in this.dSlide) {
        this.dSlide[key].number = Number(key) + 1;
      }
    },
    // определяет номер выбранной фотки
    isSelect() {
      if (this.dSlide[0].number == this.dSlide.length) {
        this.$emit("onSelect", 1);
      } else {
        this.$emit("onSelect", this.dSlide[0].number + 1);
      }
    },
    //листает слайдер влево
    leafLeft() {
      this.$refs.container.style.cssText =
        "margin-left: -200%;  transition: 0.2s;";
      setTimeout(() => {
        this.$refs.container.style.cssText = "";
        this.dSlide.push(this.dSlide.shift());
        this.noOpacity=true;
      }, 300);
    },
    leafRight() {
      this.$refs.container.style.cssText =
        "margin-left: 0%;  transition: 0.2s;";
      setTimeout(() => {
        this.$refs.container.style.cssText = "";
        this.dSlide.unshift(this.dSlide.pop());
        this.noOpacity=true;
      }, 300);
    },
    // определяет размещение блока горизонтальное или вертикальное
    defineLocation(htmlEl) {
      return htmlEl.clientHeight / htmlEl.clientWidth;
    },
    // выравнивает фотографию относительно блока
    alignmentPhoto(htmlElPhoto) {
      let locBlock = this.defineLocation(this.$refs.container);
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
      dSlide: this.slide,
      dInsertNumber: 0,
      dSelect: this.select,
      noOpacity: true
    };
  },
  beforeMount() {
    this.setNumbers();
    this.setPosition();
  },

  mounted() {
    this.$el.style.transition = "opacity 0.6s";
    this.$el.style.opacity = 0;
    setTimeout(() => {
      this.$el.style.transition = "opacity 0.6s";
      this.$el.style.opacity = 1;
    }, 600);
    for (let k in this.$refs.photo) {
      this.alignmentPhoto(this.$refs.photo[k]);
      this.centerPhoto(this.$refs.container, this.$refs.photo[k]);
    }
    setTimeout(() => {
      this.centerButtons();
    }, 100);
    this.isSelect();
  },
  updated() {
    for (let k in this.$refs.photo) {
      this.alignmentPhoto(this.$refs.photo[k]);
      this.centerPhoto(this.$refs.container, this.$refs.photo[k]);
    }
    setTimeout(() => {
      for (let k in this.$refs.photo) {
        if (this.$refs.photo[k].show != true) {
          this.alignmentPhoto(this.$refs.photo[k]);
          this.centerPhoto(this.$refs.container, this.$refs.photo[k]);
        }
      }
    }, 100);
    this.isSelect();
  },
  props: {
    slide: { type: Array, default: () => [] },
    select: {
      type: Number,
      default: 1
    }
  },
  watch: {
    select(newQ) {
      this.dSelect = newQ;
      for (let key in this.dSlide) {
        if (this.dSlide[key].number == this.dSelect && key >= 1) {
          let elem = this.dSlide.splice(key - 1, this.dSlide.length - key + 1);
          this.dSlide = elem.concat(this.dSlide);
          break;
        }
        if (this.dSlide[key].number == this.dSelect && key == 0) {
           this.dSlide.unshift(this.dSlide.pop());
          break;
        }
      }
      if(this.noOpacity==false){
        this.$refs.container.style.cssText =
        "opacity: 0;";
      setTimeout(() => {
         this.$refs.container.style.cssText =
        "opacity: 1;  transition: opacity 0.5s;";
      }, 100);
      }
      
      this.noOpacity=false;
    }
  }
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
