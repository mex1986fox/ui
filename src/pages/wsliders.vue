<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col_4">
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
                            height="450px">

                   </wg-slider>
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