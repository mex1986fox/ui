<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col_12 col-phone_6">
                    <h1 class="ui-header ui-header_1"> Chips </h1>
                    <br/>
                </div>
                <div class="col_12">
                    <ui-chips name="chips1" value="value1" caption="Chip классический">
                    </ui-chips>
                    <ui-chips name="chips2" value="value2" src="/public/img/avatar.png" caption="Chip с аватаркой">
                    </ui-chips>
                    <ui-chips name="chips3" value="value3" src="/public/img/avatar3.jpg" caption="Chip с кнопкой удаления" deleted>
                    </ui-chips>
                    <ui-chips name="chips4" value="value4" src="/public/img/avatar.jpg" caption="Chip не активный" deleted disabled>
                    </ui-chips>
                </div>
                <div class="col_12">
                    <ui-code value='<ui-chips 
    name="chips1" 
    value="value1"
    caption="Chip классический">
</ui-chips>
<ui-chips 
    name="chips2" 
    value="value2"
    src="/public/img/avatar.png" 
    caption="Chip с аватаркой">
</ui-chips>
<ui-chips 
    name="chips3" 
    value="value3"
    src="/public/img/avatar3.jpg" 
    caption="Chip с кнопкой удаления"
    deleted>
</ui-chips>
<ui-chips 
    name="chips4" 
    value="value4" 
    src="/public/img/avatar.jpg" 
    caption="Chip не активный" 
    deleted
    disabled>
</ui-chips>'>

                    </ui-code>
                </div>

                <div class="col_12">
                    <wg-desc-example :classes="[
                        {name:'.ui-chips', desc:'Корневой класс для chips'},
                        {name:'.ui-chips__button', desc:'Описывает элемент кнопки для блока chips'},
                        {name:'.ui-chips__icon', desc:'Описывает элемент аватарки для блока chips'},
                        {name:'.ui-chips__caption', desc:'Описывает элемент описания для блока chips'},
                    ]" :props="[
                        {name:'name', desc:'Задает имя chip, должно быть уникальным',def:'Пустая строка - \'\''},
                        {name:'value', desc:'Задает значение chip',def:'Пустая строка - \'\''},
                        {name:'caption', desc:'Задает описание chip',def:'Пустая строка - \'\''},
                        {name:'disabled', desc:'Устанавливает chip поле в положение неактивного',def:'false'},
                        {name:'deleted', desc:'Добавляет кнопку удаления',def:'false'}
                    ]" :events="[
                        {name:'onDeleted',desc:'Событие возникает при удалении chip',val:'Ничего не возвращает'},
                    ]">

                    </wg-desc-example>
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
