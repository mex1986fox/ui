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

                 <div class="col_12">
                    <wg-desc-example :classes="[
                                {name:'.ui-select', desc:'Корневой класс для селекта'},
                                {name:'.ui-select__menu', desc:'Описывает выпадающее меню селекта'},
                                {name:'.ui-select__option', desc:'Описывает строки выбора в меню селекта'},
                                {name:'.ui-select__group', desc:'Описывает строки групп в меню селекта'}
                            ]" :props="[
                                {name:'name', desc:'Задает имя селекта, должно быть уникальным',def:'Пустая строка - \'\''},
                                {name:'caption', desc:'Задает заголовок селекта',def:'Пустая строка - \'\''},
                                {name:'help', desc:'Задает подсказку селекта',def:'Пустая строка - \'\''},
                                {name:'multiple',desc:'Устанавливает селект в многовыборочный',def:'false'},
                                {name:'readonly', desc:'Устанавливает запрет на изменение селекта',def:'false'},
                                {name:'disabled', desc:'Устанавливает селект в положение неактивного',def:'false'},
                                {name:'menu',desc:'Массив объектов из которых строится меню селекта.', def:'[]'}
                            ]" :events="[
                                {name:'onSelect',desc:'Событие возникает при клике на поле option в меню селекта',val:'Возвращает массив выбранных объектов [{value:`1`,option:`Мартышка`, group:`Обезьяны`, selected:false, disabled:true}, ..., ...]'},
                                {name:'onFocus',desc:'Событие возникает при фокусировке на текстовое поле',val:'Ничего не возвращает'},
                                {name:'onBlur',desc:'Событие возникает при потере фокуса',val:'Ничего не возвращает'},
                                {name:'onClick',desc:'Событие возникает при клике на любой участок селекта',val:'Ничего не возвращает'},
                            ]">
                    </wg-desc-example>
                </div>
            </div>
        </div>
    </layout>
</template>
<script>
export default {
  name: "page-selects",
  methods: {
      cons(v){
          console.log(v);
      }
  }
};
</script>