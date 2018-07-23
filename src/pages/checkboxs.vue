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
                    <ui-check-box name="checkbox1" value="1" :checked="true" :disabled="false">
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
                        {name:'.ui-classes', desc:'Описание класса'},
                        {name:'.ui-classes2', desc:'Описание класса2'}
                    ]" :props="[
                        {name:'name', desc:'Задает имя чекбоксу', def:'Пустая строка'},
                        {name:'value', desc:'Задает значение которое будет передаваться при отправке формы', def:'Пустая строка'},
                        {name:'checked', desc:'Задает памечен ли флажком чекбокс', def:'false'},
                        {name:'disabled', desc:'Устанавливает чекбокс в положение неактивного', def:'false'},
                    ]" :events="[
                        {name:'onClick', desc:'Возникает при клике на чекбокс', val:'Возвращает положение cheked (true или false) '},
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
                    <ui-switch name="switch1" value="1" :checked="false" :disabled="false">
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
                <div class="col_12 col-phone_6">
                    <span class="ui-header ui-header_2"> Radio переключатель: </span>
                    <br/>
                </div>
                <div class="col_4 col-phone_6">
                    <ui-radio name="radio1" value="1" :disabled="false">
                        Radio 1
                    </ui-radio>
                    <ui-radio name="radio1" value="2" :disabled="false">
                        Radio 2
                    </ui-radio>
                    <ui-radio name="radio1" value="2" :checked="true" :disabled="false">
                        Radio 3
                    </ui-radio>
                    <ui-radio name="radio1" value="2" :disabled="false">
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
            </div>
        </div>
    </layout>
</template>
<script>
export default {
  name: "page-checkboxs"
};
</script>