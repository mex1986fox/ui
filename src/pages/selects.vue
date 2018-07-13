<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col_12 col-phone_6">
                    <h1 class="ui-header ui-header_1"> Селекты </h1>
                    <span class="ui-header ui-header_2"> Классический: </span>
                    <br/>
                </div>
                <div class="col_4 col-phone_6">
                    <ui-select 
                        value="Select test 1"
                        caption="Классический селект"
                        help="Строка помощи"
                        :menu="[{option:'Мартышка', group:'Обезьяны', selected:false},
                            {option:'Соловей', group:'Птици', selected:true},
                            {option:'Макака', group:'Обезьяны', selected:false},
                            {option:'Петух', group:'Птици',selected:true},
                            {option:'Гибон', group:'Обезьяны',selected:true}]">
                    </ui-select>
                </div>
                <div class="col_12">
                    <ui-code value='<ui-select 
    value="Select test 1"
    caption="Классический селект"
    help="Строка помощи"
    :menu=`[{option:"Мартышка", group:"Обезьяны", selected:false},
        {option:"Соловей", group:"Птици", selected:true},
        {option:"Макака", group:"Обезьяны", selected:false},
        {option:"Петух", group:"Птици",selected:true},
        {option:"Гибон", group:"Обезьяны",selected:true}]`>
</ui-select>'>
                    </ui-code>
                </div>
            </div>
        </div>
    </layout>
</template>
<script>
export default {
  name: "page-selects"
};
</script>