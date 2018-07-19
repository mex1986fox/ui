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
                    <ui-text value="Text test 1" caption="Стандартное текстовое поле">
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
                    <ui-text value="Text test 2" caption="Текстовое поле с подсказкой" help="Подсказка">
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
                    <ui-text value="Text test 3" caption="Текстовое поле которое нельзя изменить" :readonly="true">
                    </ui-text>
                </div>
                <div class="col_12">
                    <ui-code value='<ui-text 
    name="tex1"                
    value="Text test 1"
    caption="Описание текстового поля 1"
    :readonly="true">
</ui-text>'>
                    </ui-code>
                </div>
                <div class="col_4 col-phone_6">
                    <ui-text value="Text test 4" caption="Неактивное текстовое поле" :disabled="true">
                    </ui-text>
                </div>

                <div class="col_12">
                    <ui-code value='<ui-text 
    value="Text test 1"
    caption="Описание текстового поля 1"
    :disabled="true">
</ui-text>'>
                    </ui-code>
                </div>
                <div class="col_12">
                    <wg-desc-example :classes="[
                                {name:'.ui-text', desc:'Корневой класс для текстого поля'},
                                {name:'.ui-text__caption', desc:'Класс описывает заголовок текстового поля'},
                                {name:'.ui-text__input', desc:'Класс описывает текстовое поле'},
                                {name:'.ui-text__help', desc:'Класс описывает подсказку текстового поля'},
                            ]" :props="[
                                {name:'name', desc:'Задает имя текстового поля, должно быть уникальным',def:'Пустая строка - \'\''},
                                {name:'value', desc:'Задает значение текстового поля',def:'Пустая строка - \'\''},
                                {name:'caption', desc:'Задает заголовок текстового поля',def:'Пустая строка - \'\''},
                                {name:'help', desc:'Задает подсказку текстового поля',def:'Пустая строка - \'\''},
                                {name:'readonly', desc:'Устанавливает запрет на изменение текстового поля',def:'false'},
                                {name:'disabled', desc:'Устанавливает текстовое поле в положение неактивного',def:'false'}
                            ]" :events="[
                                {name:'onFocus',desc:'Событие возникает при фокусировке на текстовое поле',val:'Ничего не возвращает'},
                                {name:'onBlur',desc:'Событие возникает при потере фокуса',val:'Ничего не возвращает'},
                                {name:'onClick',desc:'Событие возникает при клике',val:'Ничего не возвращает'},
                                {name:'onInput',desc:'Событие возникает при изменение текста в текстовом поле',val:'Возвращает измененный текст'},
                            ]">
                    </wg-desc-example>
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