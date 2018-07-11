<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col_12 col-phone_6">
                    <h1 class="ui-header ui-header_1"> Инпуты </h1>
                    <span class="ui-header ui-header_2"> Текст: </span>
                    <br/>
                </div>
                <div class="col_4 col-phone_6">
                    <ui-text 
                        value="Text test 1"
                        caption="Стандартное текстовое поле"
                        >
                    </ui-text>
                </div>
                <div class="col_12">
                    <ui-code value='<ui-text 
    value="Text test 1"
    caption="Описание текстового поля 1">
</ui-text>'>
                    </ui-code>
                </div>
                <div class="col_4 col-phone_6">
                    <ui-text 
                        value="Text test 2"
                        caption="Текстовое поле с подсказкой"
                        help="Подсказка"
                        >
                    </ui-text>
                </div>
                <div class="col_12">
                    <ui-code value='<ui-text 
    value="Text test 1"
    caption="Описание текстового поля 1"
    help="Подсказка">
</ui-text>'>
                    </ui-code>
                </div>
                <div class="col_4 col-phone_6">
                    <ui-text 
                        value="Text test 3"
                        caption="Текстовое поле которое нельзя изменить"
                        readonly="true"
                        >
                    </ui-text>
                </div>
                <div class="col_12">
                    <ui-code value='<ui-text 
    value="Text test 1"
    caption="Описание текстового поля 1"
    readonly="true">
</ui-text>'>
                    </ui-code>
                </div>
                <div class="col_4 col-phone_6">
                    <ui-text 
                        value="Text test 4"
                        caption="Неактивное текстовое поле"
                        disabled="true"
                        >
                    </ui-text>
                </div>

                <div class="col_12">
                    <ui-code value='<ui-text 
    value="Text test 1"
    caption="Описание текстового поля 1"
    disabled="true">
</ui-text>'>
                    </ui-code>
                </div>

            </div>
        </div>
    </layout>
</template>
<script>
export default {
  name: "page-typography"
};
</script>