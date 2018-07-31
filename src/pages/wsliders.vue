<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col_12">
                   <wg-slider :slide='[
                                { src: "/public/img/canvas.jpg", show: true },
                                { src: "/public/img/canvas2.jpg" },
                                { src: "/public/img/canvas3.jpg" },
                                { src: "/public/img/canvas.jpg" }
                            ]'>

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