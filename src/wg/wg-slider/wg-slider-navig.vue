<template>
    <div class="wg-slider-navig">
        <div class="wg-slider-navig__container">
            <div class="wg-slider-navig__slide" :class="{'wg-slider-navig__slide_active':key+1==checked}" v-for="(val, key) in slide" :key="key">
                
                <img class="wg-slider-navig__img" :src="val.src">
            </div>

        </div>
    </div>
</template>
<script>
export default {
  name: "wg-slider-navig",
  data: {},
  props: {
    slide: { type: Array, default: () => [] },
    checked: { type: Number, default: 1 }
  }
};
// dSlide: [
//         { src: "/static/img/photo_car1.jpg"},
//         { src: "/static/img/photo_car2.jpg" },
//         { src: "/static/img/photo_car3.jpg" },
//         { src: "/static/img/photo_car4.jpg" }
//       ]
</script>
