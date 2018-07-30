<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col_4 col_offset-4">

                    <div class="ui-card wg-card-ad">
                        <div class="wg-card-ad__header">

                            <div class="ui-avatar-block">
                                <div class="ui-avatar">
                                    <img src="/public/img/avatar.jpg" alt="">
                                </div>
                                <div class="ui-avatar-block__title">
                                    Title
                                </div>
                                <div class="ui-avatar-block__link">
                                    Link
                                </div>
                            </div>

                            <button @click="showMenu=true" class="ui-button ui-button_flat ui-button_circle wg-card-ad__header__button">
                                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                            </button>
                            <ui-menu :show="showMenu" @onHide="showMenu=false">
                                <ul>
                                    <li>fgfgf</li>
                                    <li>fgfgf</li>
                                    <li>fgfgf</li>
                                    <li>fgfgf</li>
                                    <li>fgfgf</li>
                                    <li>fgfgf</li>
                                    <li>fgfgf</li>
                                    <li>fgfgf</li>
                                    <li>fgfgf</li>
                                    <li>fgfgf</li>
                                    <li>fgfgf</li>
                                    <li>fgfgf</li>
                                    <li>fgfgf</li>
                                    <li>fgfgf</li>
                                    <li>fgfgf</li>
                                </ul>
                            </ui-menu>

                        </div>

                        <img class="wg-card-ad__img" src="/public/img/canvas.jpg" alt="">

                        <div class="wg-card-ad__buttons">
                            <button class="ui-button ui-button_circle ui-button_flat">
                                <i class="fa fa-cogs" aria-hidden="true"></i>
                            </button>
                            <button class="ui-button ui-button_circle ui-button_flat">
                                <i class="fa fa-envelope-open-o" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col_12">
                    <ui-code value='<div class="ui-card wg-card-ad">
    <div class="wg-card-ad__header">

        <div class="ui-avatar-block">
            <div class="ui-avatar">
                <img src="/public/img/avatar.jpg" alt="">
            </div>
            <div class="ui-avatar-block__title">
                Title
            </div>
            <div class="ui-avatar-block__link">
                Link
            </div>
        </div>

        <button class="ui-button ui-button_flat ui-button_circle wg-card-ad__header__button">
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </button>
    </div>

    <img class="wg-card-ad__img" src="/public/img/canvas.jpg" alt="">

    <div class="wg-card-ad__buttons">
        <button class="ui-button ui-button_circle ui-button_flat">
            <i class="fa fa-cogs" aria-hidden="true"></i>
        </button>
        <button class="ui-button ui-button_circle ui-button_flat">
            <i class="fa fa-envelope-open-o" aria-hidden="true"></i>
        </button>
    </div>
</div>'>
                    </ui-code>
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