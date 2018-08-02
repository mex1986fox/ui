<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col_12">
                    <h1 class="ui-header ui-header_1"> Слайдер </h1>
                    <br/>
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
    height="250px">
</wg-slider>'></ui-code>
                </div>
               <div class="col_12">
                    <wg-desc-example :classes="[
                                {name:'.wg-slider', desc:'Корневой класс'},
                            ]" :props="[
                                {name:'slide', desc:'Массив фотографий. Пример [{ src: `/public/img/canvas.jpg`, show: true },{ src: `/public/img/canvas2.jpg` }]',def:'[]'},
                                {name:'height', desc:'Высота слайдера',def:'250px'}
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
    return {};
  },
  methods: {}
};
</script>