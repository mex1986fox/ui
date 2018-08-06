<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col_12">
                    <h1 class="ui-header ui-header_1"> Слайдер </h1>
                    <br/>
                    <span class="ui-header ui-header_2"> Слайдер классический </span>
                </div>
                <div class="col_4 col_offset-4">
                    <wg-slider :slide='[
                                { src: "/public/img/canvas.jpg", show: true },
                                { src: "/public/img/canvas2.jpg" },
                                { src: "/public/img/canvas3.jpg" },
                                { src: "/public/img/canvas4.jpg" },
                                { src: "/public/img/canvas.jpg" },
                                { src: "/public/img/canvas2.jpg" },
                                { src: "/public/img/canvas3.jpg" },
                                { src: "/public/img/canvas4.jpg" }
                            ]'
                        height="250px">

                    </wg-slider>
                </div>
                <div class="col_12 ">
                    <ui-code value='<wg-slider 
    :slide=`[
        { src: "/public/img/canvas.jpg", show: true },
        { src: "/public/img/canvas2.jpg" },
        { src: "/public/img/canvas3.jpg" },
        { src: "/public/img/canvas4.jpg" },
        { src: "/public/img/canvas.jpg" },
        { src: "/public/img/canvas2.jpg" },
        { src: "/public/img/canvas3.jpg" },
        { src: "/public/img/canvas4.jpg" }
    ]`
    :select="numberPhoto"
    @onSelect="isSelectPhoto">
</wg-slider>'></ui-code>
                </div>
                <div class="col_12">
                    <wg-desc-example :classes="[
                                {name:'.wg-slider', desc:'Корневой класс'},
                            ]"
                        :props="[
                                {name:'slide', desc:'Массив фотографий. Пример [{ src: `/public/img/canvas.jpg`, show: true },{ src: `/public/img/canvas2.jpg` }]',def:'[]'},
                                {name:'select', desc:'Номер активной фотографии',def:'1'}
                            ]"
                        :events="[
                                {name:'onSelect',desc:'Событие возникает при пролистовании слайдера',val:'Возвращает номер активной фотографии'},
                            ]">
                    </wg-desc-example>
                </div>

                <div class="col_12">
                    <span class="ui-header ui-header_2"> Навигаци для слайдера </span>
                    <br/>
                </div>

                <div class="col_8 col_offset-2">
                    <wg-slider class="wg-card-photo__slider"
                        :slide='[
                            { src: "/public/img/cam1.jpg"},
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
                        :select="numberPhoto"
                        @onSelect="isSelectPhoto">
                    </wg-slider>
                    <wg-slider-navig class="wg-card-photo__slider-navig"
                        :slide='[
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
                        :select="numberPhoto"
                        @onSelect="isSelectPhoto">
                    </wg-slider-navig>
                </div>
                <div class="col_12">
                    <ui-code value='
<wg-slider-navig
    :slide=`[
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
    ]`
    :select="numberPhoto"
    @onSelect="isSelectPhoto">
</wg-slider-navig>'>

                    </ui-code>
                </div>
                <div class="col_12">
                    <wg-desc-example :classes="[
                                {name:'.wg-slider-navig', desc:'Корневой класс'},
                            ]"
                        :props="[
                                {name:'slide', desc:'Массив фотографий. Пример [{ src: `/public/img/canvas.jpg`, show: true },{ src: `/public/img/canvas2.jpg` }]',def:'[]'},
                                {name:'select', desc:'Номер активной фотографии',def:'1'}
                            ]"
                        :events="[
                                {name:'onSelect',desc:'Событие возникает при клике на слайд',val:'Возвращает номер выбранного слайда'},
                            ]">
                    </wg-desc-example>
                </div>

            </div>
        </div>
    </layout>
</template>
<script>
export default {
  name: "pg-avatars",
  data() {
    return {
      numberPhoto: 1
    };
  },
  methods: {
    isSelectPhoto(numberPhoto) {
      this.numberPhoto = numberPhoto;
    }
  }
};
</script>