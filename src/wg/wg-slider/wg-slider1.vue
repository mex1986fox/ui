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
      <div ref="frame"
        class="wg-slider__frame"
        v-for="(val, key) in dSlide"
        :key="key"
        v-if="key<3">
        <img class="wg-slider__fon"
          :src="val.src"
          alt="">
        <img ref="photo"
          @click="isZoom(val.number)"
          class='wg-slider__img'
          :src="val.src"
          alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "wg-slider",
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
  props: {
    slide: { type: Array, default: () => [] },
    select: {
      type: Number,
      default: 1
    },
    animate: {
      type: String,
      default: undefined
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
    }
  },
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
    //вызывает событие увеличения фотографий на весь экран
    isZoom(number) {
      this.$emit("onZoom", number);
    },
    //листает слайдер влево
    leafLeft() {
      this.dSlide.push(this.dSlide.shift());
    },
    leafRight() {
      this.dSlide.unshift(this.dSlide.pop());
    }
  },

  beforeMount() {
    this.setNumbers();
    this.setPosition();
  },

  mounted() {
    this.isSelect();
    this.centerButtons();
  },
  updated() {
    this.isSelect();
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
