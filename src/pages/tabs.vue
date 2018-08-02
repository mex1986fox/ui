<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col_12">
                    <h1 class="ui-header ui-header_1"> Табы </h1>
                    <br/>
                </div>
                <div class="col_12">
                    <ui-tabs>
                        <ui-tabs-tab id="1" :checked="true" @onFocus="isTabs">
                            Кнопка 1
                        </ui-tabs-tab>
                        <ui-tabs-tab id="2" @onFocus="isTabs">
                            Кнопка 2
                        </ui-tabs-tab>
                        <ui-tabs-tab id="3" @onFocus="isTabs">
                            Кнопка 3
                        </ui-tabs-tab>
                        <ui-tabs-tab id="4" @onFocus="isTabs">
                            Кнопка 4
                        </ui-tabs-tab>
                    </ui-tabs>
                </div>
                <div class="col_12" v-if="tabs==1">
                    <div class="canvas">
                        <img src="/public/img/canvas.jpg"> Сработал таб №{{tabs}}
                    </div>
                </div>
                <div class="col_12" v-if="tabs==2">

                    <div class="canvas"> <img src="/public/img/canvas2.jpg"> Сработал таб №{{tabs}}
                    </div>
                </div>
                <div class="col_12" v-if="tabs==3">

                    <div class="canvas"><img src="/public/img/canvas3.jpg"> Сработал таб №{{tabs}}
                    </div>
                </div>
                <div class="col_12" v-if="tabs==4">

                    <div class="canvas"><img src="/public/img/canvas.jpg"> Сработал таб №{{tabs}}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col_12">
                    <ui-tabs>
                        <ui-tabs-tab id="5" :checked="true" @onFocus="isTabs2">
                            <div class="ui-tabs__icone">
                                <i class="fa fa-telegram" aria-hidden="true"></i>
                            </div>
                            Кнопка 1
                        </ui-tabs-tab>
                        <ui-tabs-tab id="6" @onFocus="isTabs2">
                            <div class="ui-tabs__icone">
                                <i class="fa fa-ravelry" aria-hidden="true"></i>

                            </div>
                            Кнопка 2
                        </ui-tabs-tab>
                        <ui-tabs-tab id="7" @onFocus="isTabs2">
                            <div class="ui-tabs__icone">
                                <i class="fa fa-meetup" aria-hidden="true"></i>

                            </div>
                            Кнопка 3
                        </ui-tabs-tab>
                        <ui-tabs-tab id="8" @onFocus="isTabs2">
                            <div class="ui-tabs__icone">
                                <i class="fa fa-at" aria-hidden="true"></i>

                            </div>
                            Кнопка 4
                        </ui-tabs-tab>
                    </ui-tabs>
                </div>
                <div class="col_12" v-if="tabs2==5">
                    <div class="canvas">
                        <img src="/public/img/canvas.jpg"> Сработал таб №{{tabs2}}
                    </div>
                </div>
                <div class="col_12" v-if="tabs2==6">

                    <div class="canvas"> <img src="/public/img/canvas2.jpg"> Сработал таб №{{tabs2}}
                    </div>
                </div>
                <div class="col_12" v-if="tabs2==7">

                    <div class="canvas"><img src="/public/img/canvas3.jpg"> Сработал таб №{{tabs2}}
                    </div>
                </div>
                <div class="col_12" v-if="tabs2==8">

                    <div class="canvas"><img src="/public/img/canvas.jpg"> Сработал таб №{{tabs2}}
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>
<script>
export default {
  name: "pg-tabs",
  data() {
    return {
      tabs: "1",
      tabs2: "5"
    };
  },
  methods: {
    isTabs(id) {
      this.tabs = id;
    },
    isTabs2(id) {
      this.tabs2 = id;
    }
  }
};
</script>
<style lang="scss" scoped>
.canvas {
  margin: 50px 0;
  text-indent: 35px;
  text-align: justify;
  line-height: 65px;
  width: 100%;
  height: 400px;
  position: relative;
  box-shadow: 0px 9px 19px rgb(120, 147, 161);
  overflow: hidden;
  & > img {
    position: absolute;
    height: auto;
    width: 100%;
    margin: 0 auto;
    z-index: -2;
    display: block;
  }
  text-align: left;
  font-size: 26px;
  color: #fff;
}
</style>

        