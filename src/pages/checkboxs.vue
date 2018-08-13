<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col_12 col-phone_6">
                    <h1 class="ui-header ui-header_1"> Чекбоксы </h1>
                    <span class="ui-header ui-header_2"> Классический: </span>
                    <br/>
                </div>
                <div class="col_4 col-phone_6">
                    <ui-check-box name="checkbox1" value="1" :checked="true">
                        Классический чекбокс
                    </ui-check-box>
                    <ui-check-box name="checkbox1" value="1" >
                        Классический чекбокс
                    </ui-check-box>
                </div>
                <div class="col_12">
                    <ui-code value='
<ui-check-box 
    name="checkbox1"
    value="1"
    :checked="true"
    :disabled="false">
    Классический чекбокс
</ui-check-box>
                    '>
                    </ui-code>
                </div>
                <div class="col_12">
                    <wg-desc-example :classes="[
                        {name:'.ui-checkbox', desc:'Корневой класс для чекбокса'},
                        {name:'.ui-checkbox__caption', desc:'Класс описывает описание чекбокса'},
                        {name:'.ui-checkbox__check', desc:'Класс описывает внешний вид чекбокса'},
                        {name:'.ui-checkbox__check_checked', desc:'Модификатор внешнего вида чекбокса в отмеченном состоянии'}
                    ]" :props="[
                        {name:'name', desc:'Задает имя чекбоксу', def:'Пустая строка'},
                        {name:'value', desc:'Задает значение которое будет передаваться при отправке формы', def:'Пустая строка'},
                        {name:'checked', desc:'Задает отмечен ли флажком чекбокс', def:'false'},
                        {name:'disabled', desc:'Устанавливает чекбокс в положение неактивного', def:'false'},
                    ]" :events="[
                        {name:'onClick', desc:'Возникает при клике на чекбокс', val:'Возвращает положение checked (true или false) '},
                    ]">

                    </wg-desc-example>
                </div>
            </div>

            <div class="row">
                <div class="col_12 col-phone_6">
                    <span class="ui-header ui-header_2"> Switch переключатель: </span>
                    <br/>
                </div>
                <div class="col_4 col-phone_6">
                    <ui-switch name="switch1" value="1" :checked="false">
                        Switch переключатель
                    </ui-switch>
                    <ui-switch name="switch1" value="1">
                        Switch переключатель
                    </ui-switch>
                </div>
                <div class="col_12">
                    <ui-code value='
<ui-switch
    name="switch1"
    value="1"
    :checked="false"
    :disabled="false">
    Switch переключатель    
</ui-switch>
                    '>
                    </ui-code>
                </div>
                <div class="col_12">
                    <wg-desc-example :classes="[
                        {name:'.ui-switch', desc:'Корневой класс switch переключателя'},
                        {name:'.ui-switch__caption', desc:'Класс описывает описатие switch переключателя'},
                        {name:'.ui-switch__track, .ui-switch__thumb', desc:'Классы описывают внешний вид switch переключателя'},
                        {name:'.ui-switch__track_active, .ui-switch__track_disabled, .ui-switch__thumb_active, .ui-switch__thumb_disabled', desc:'Модификаторы внешнего вида switch переключателя'}
                    ]" :props="[
                        {name:'name', desc:'Задает имя switch переключателю', def:'Пустая строка'},
                        {name:'value', desc:'Задает значение которое будет передаваться при отправке формы', def:'Пустая строка'},
                        {name:'checked', desc:'Задает отмечен ли switch переключатель', def:'false'},
                        {name:'disabled', desc:'Устанавливает switch переключатель в положение неактивного', def:'false'},
                    ]" :events="[
                        {name:'onClick', desc:'Возникает при клике на switch переключатель', val:'Возвращает положение checked (true или false) '},
                    ]">

                    </wg-desc-example>
                </div>
                <div class="col_12 col-phone_6">
                    <span class="ui-header ui-header_2"> Radio переключатель: </span>
                    <br/>
                </div>
                <div class="col_4 col-phone_6">
                    <ui-radio name="radio1" value="1" :checked="false" :disabled="true">
                        Radio 1
                    </ui-radio>
                    <ui-radio name="radio1" value="2" :checked="true"  :disabled="false">
                        Radio 2
                    </ui-radio>
                    <ui-radio name="radio1" value="2" :disabled="false">
                        Radio 3
                    </ui-radio>
                    <ui-radio name="radio1" value="2" :disabled="true" >
                        Radio 4
                    </ui-radio>
                </div>
                <div class="col_12">
                    <ui-code value='
<ui-radio
    name="radio1"
    value="1"
    :disabled="false">
    Radio 1    
</ui-radio>
<ui-radio
    name="radio1"
    value="2"
    :disabled="false">
    Radio 2    
</ui-radio>
<ui-radio
    name="radio1"
    value="2"
    :checked="true"
    :disabled="false">
    Radio 3    
</ui-radio>
<ui-radio
    name="radio1"
    value="2"
    :disabled="false">
    Radio 4    
</ui-radio>
                    '>
                    </ui-code>
                </div>
                <div class="col_12 col-phone_6">
                    <span class="ui-header ui-header_3"> Примечание! </span>
                    <br/>
                    <span class="ui-description"> Одноименные radio переключатели должны быть помещены в один компонент vue, т.к. для определения одноименных сестринских компонентов ui-radio, используется всплытие на один компонент выше.  </span>
                </div>
                 <div class="col_12">
                    <wg-desc-example :classes="[
                        {name:'.ui-radio', desc:'Корневой класс radio переключателя'},
                        {name:'.ui-radio__caption', desc:'Класс описывает описатие radio переключателя'},
                        {name:'.ui-radio__radio, .ui-radio__radio-point', desc:'Классы описывают внешний вид radio переключателя'},
                        {name:'.ui-radio__radio_active', desc:'Модификаторы внешнего вида radio переключателя'}
                    ]" :props="[
                        {name:'name', desc:'Задает имя radio переключателю', def:'Пустая строка'},
                        {name:'value', desc:'Задает значение которое будет передаваться при отправке формы', def:'Пустая строка'},
                        {name:'checked', desc:'Задает отмечен ли radio переключатель', def:'false'},
                        {name:'disabled', desc:'Устанавливает radio переключатель в положение неактивного', def:'false'},
                    ]" :events="[
                        {name:'onClick', desc:'Возникает при клике на radio переключатель', val:'Возвращает положение checked (true или false) '},
                    ]">

                    </wg-desc-example>
                </div>
            </div>
        </div>
    </layout>
</template>
<script>
export default {
  name: "page-checkboxs"
};
</script>