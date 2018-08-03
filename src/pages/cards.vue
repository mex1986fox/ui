<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <span class="ui-header ui-header_1"> Карточки </span>
                    <br>
                    <span class="ui-header ui-header_2"> Объявления </span>
                </div>
                <div class="col_6 col_offset-3 col-phone_6 col-phone_offset-0">
                    <div class="row">
                        <div class="col-12">
                            <div class="wg-content-frame">
                                <wg-card-ad>

                                </wg-card-ad>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col_12">
                    <span class="ui-header ui-header_2"> Фотографии </span>
                </div>
                <div class="col_6 col_offset-3 col-phone_6 col-phone_offset-0">
                    <div class="row">
                        <div class="col-12">
                            <div class="wg-content-frame">
                                <wg-card-photo>

                                </wg-card-photo>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>
<script>
export default {
  name: "pg-cards",
  data() {
    return { showMenu: false };
  },
  methods: {}
};
</script>