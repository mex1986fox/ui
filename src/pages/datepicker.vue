<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col_12 col-phone_6">
                    <h1 class="ui-header ui-header_1"> Датапикер </h1>
                    <br/>
                </div>
                <div class="col_2 col-phone_6">
                    <ui-datepicker 
                        value="2015-11-07" name="datepicker" :disabled="false" caption="Выбрать дату">
                    </ui-datepicker>
                </div>
                <div class="col_2 col_offset-1 col-phone_6 col-phone_offset-0">
                    <ui-datepicker value="2015-11-07" name="datepicker" :disabled="true" caption="Выбрать дату">
                    </ui-datepicker>
                </div>
                <div class="col_12">
                    <ui-code value='<ui-datepicker
    value="2015-11-07"
    :disabled="false"
    name="datepicker"
    caption="Выбрать дату">
</ui-datepicker>'>

                    </ui-code>
                </div>
                <div class="col_12">
                    <wg-desc-example :classes="[
                        {name:'.ui-datepicker', desc:'Корневой класс для датапикера'}
                    ]" :props="[
                        {name:'name', desc:'Задает имя датапикеру', def:'Пустая строка'},
                        {name:'caption', desc:'Задает заголовок датапикеру', def:'Пустая строка'},
                        {name:'value', desc:'Задает дату датапикеру. Пример: 2017-10-14 ', def:'Настоящая дата'},
                        {name:'disabled', desc:'Устанавливает датапикер в положение неактивного', def:'false'},
                    ]" :events="[
                        {name:'onSelect', desc:'Возникает при выборе даты', val:'Возвращает выбранную дату. В текстовом формате 2017-10-14'},
                    ]">

                    </wg-desc-example>
                </div>
            </div>
        </div>
    </layout>
</template>
<script>
export default {
  name: "page-datepicker",
  methods:{
  }
};
</script>