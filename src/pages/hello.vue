<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col_6 col_offset-3 col-tablet_8 col-tablet_offset-2 col-phone_6 col-phone_offset-0">
                    <div class="pg-hello__card">
                        <img class="pg-hello__label" src="/public/img/label.png" alt="">
                        <div class="pg-hello__salute">
                            <span class="ui-header ui-header_1">
                                Салют!
                            </span>
                            <span class="ui-description"> 
                            
                            Здесь ведется разработка VUE.JS компонетов для сайта DROVITO.RU
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>
<script>
export default {
  name: "page-hello",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
    .pg-hello{
        &__card{
            background-image: url("/public/img/canvas.jpg");
            background-size: cover;
            width: 100%;
            height: auto;
            position: relative;
            display: block;
            margin: 12% auto 12% auto;
            box-shadow: 0px 9px 19px rgb(120, 147, 161);
            overflow: hidden;
        }
        &__fon{
            height: 100%;
            margin: 0 auto;
        }
        &__label{
            width: 276px;
            height: auto;
            position: relative;
            display: block;
            padding: 0 10px;
            margin: 90px auto;
        }
        &__salute{
            background-color: rgb(255, 255, 255);
            text-align: left;
            padding: 10px 40px 39px;
            &>.ui-description{
                font-size: 16px;
                line-height: 28px;
            }
        }
    }
    @media (max-width: 770px) {
    .pg-hello{
        &__label{
            width: 150px;
            height: auto;
            position: relative;
            display: block;
            padding: 0 10px;
            margin: 40px auto;
        }
        &__salute{
            padding: 1px 20px 20px;
        }
    }
    }
</style>

