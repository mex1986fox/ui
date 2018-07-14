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
                        name="select1"
                        caption="Классический селект"
                        :menu="[{value:'1',option:'Мартышка', group:'Обезьяны', selected:false, disabled:true},
                                {value:'2',option:'Соловей', group:'Птици', selected:true},
                                {value:'3',option:'Макака', group:'Обезьяны', selected:false},
                                {value:'4',option:'Петух', group:'Птици',selected:false},
                                {value:'5',option:'Гибон', group:'Обезьяны',selected:false},
                                {value:'6',option:'Годзила', group:'Динозавры',selected:false},
                                {value:'7',option:'Крокодилл', group:'Динозавры',selected:false}]">
                    </ui-select>
                </div>
                <div class="col_12">
                    <ui-code value='<ui-select 
    name="select1"
    caption="Классический селект"
    :menu=`[{value:"1",option:"Мартышка", group:"Обезьяны", selected:false, disabled:true},
            {value:"2",option:"Соловей", group:"Птици", selected:true},
            {value:"3",option:"Макака", group:"Обезьяны", selected:false},
            {value:"4",option:"Петух", group:"Птици",selected:true},
            {value:"5",option:"Гибон", group:"Обезьяны",selected:true}]`>
</ui-select>'>
                    </ui-code>
                </div>

                <div class="col_12 col-phone_6">
                    <span class="ui-header ui-header_2">С множественным выбором: </span>
                    <br/>
                </div>
                <div class="col_4 col-phone_6">
                    <ui-select 
                        name="select2"
                        caption="Множественный селект"
                        help="Строка помощи"
                        :multiple="true"
                        :menu="[{value:'1',option:'Мартышка', group:'Обезьяны', selected:false, disabled:true},
                                {value:'2',option:'Соловей', group:'Птици', selected:true},
                                {value:'3',option:'Макака', group:'Обезьяны', selected:false},
                                {value:'4',option:'Петух', group:'Птици',selected:true},
                                {value:'5',option:'Гибон', group:'Обезьяны',selected:true},
                                {value:'6',option:'Годзила', group:'Динозавры',selected:true},
                                {value:'7',option:'Крокодилл', group:'Динозавры',selected:true}]">
                    </ui-select>
                </div>
                <div class="col_12">
                    <ui-code value='<ui-select 
    name="select2"
    caption="Классический селект"
    help="Строка помощи"
    :multiple="true"
    :menu=`[{value:"1",option:"Мартышка", group:"Обезьяны", selected:false, disabled:true},
            {value:"2",option:"Соловей", group:"Птици", selected:true},
            {value:"3",option:"Макака", group:"Обезьяны", selected:false},
            {value:"4",option:"Петух", group:"Птици",selected:false},
            {value:"5",option:"Гибон", group:"Обезьяны",selected:false}]`>
</ui-select>'>
                    </ui-code>
                </div>

                <div class="col_12 col-phone_6">
                    <span class="ui-header ui-header_2">Неактивный: </span>
                    <br/>
                </div>
                <div class="col_4 col-phone_6">
                    <ui-select 
                        name="select3"
                        caption="Неактивный селект"
                        :disabled="true"
                        :menu="[{value:'1',option:'Мартышка', group:'Обезьяны', selected:false},
                                {value:'2',option:'Соловей', group:'Птици', selected:true},
                                {value:'3',option:'Макака', group:'Обезьяны', selected:false},
                                {value:'4',option:'Петух', group:'Птици',selected:true},
                                {value:'5',option:'Гибон', group:'Обезьяны',selected:true},
                                {value:'6',option:'Годзила', group:'Динозавры',selected:true},
                                {value:'7',option:'Крокодилл', group:'Динозавры',selected:true}]">
                    </ui-select>
                </div>
                <div class="col_12">
                    <ui-code value='<ui-select 
    name="select3"
    caption="Неактивный селект"
    :disabled="true"
    :menu=`[{value:"1",option:"Мартышка", group:"Обезьяны", selected:false},
            {value:"2",option:"Соловей", group:"Птици", selected:true},
            {value:"3",option:"Макака", group:"Обезьяны", selected:false},
            {value:"4",option:"Петух", group:"Птици",selected:false},
            {value:"5",option:"Гибон", group:"Обезьяны",selected:false}]`>
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