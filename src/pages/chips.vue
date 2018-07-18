<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col_12 col-phone_6">
                    <h1 class="ui-header ui-header_1"> Chips </h1>
                    <br/>
                </div>
                <div class="col_2">
                    <ui-chips>
                        <!-- <span class="ui-chips__button">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </span> -->
                        <img class="ui-chips__icon" src="/public/img/avatar.jpg" alt="">
                        <span class="ui-chips__caption">
                            Описание
                        </span>
                    </ui-chips>
                </div>
                <div class="col_12">
                    <ui-code value='<ui-chips>
    <span class="ui-chips__icon">
        <img src="/public/img/avatar.jpg" alt="">
    </span>
    <span class="ui-chips__caption">
        Описание
    </span>
</ui-chips>'>

                    </ui-code>
                </div>


                <div class="col_2">
                    <ui-chips>
                        <span class="ui-chips__button">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </span>
                        <span class="ui-chips__caption">
                            Описание
                        </span>
                    </ui-chips>
                </div>
                <div class="col_12">
                    <ui-code value='<ui-chips>
    <span class="ui-chips__button">
        <i class="fa fa-times" aria-hidden="true"></i>
    </span>
    <span class="ui-chips__caption">
        Описание
    </span>
</ui-chips>'>

                    </ui-code>
                </div>
            </div>
        </div>
    </layout>
</template>
<script>
export default {
  name: "page-chips",
  data() {
    return {};
  }
};
</script>
