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
					<ui-text value="Text test 1"
					         caption="Стандартное текстовое поле">
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
					<ui-text value="Text test 2"
					         caption="Текстовое поле с подсказкой"
					         help="Подсказка">
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
					<ui-text value="Text test 3"
					         caption="Текстовое поле которое нельзя изменить"
					         :readonly="true">
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
					<ui-text value="Text test 4"
					         caption="Неактивное текстовое поле"
					         :disabled="true">
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
                            ]"
					                 :props="[
                                {name:'name', desc:'Задает имя текстового поля, должно быть уникальным',def:'Пустая строка - \'\''},
                                {name:'value', desc:'Задает значение текстового поля',def:'Пустая строка - \'\''},
                                {name:'caption', desc:'Задает заголовок текстового поля',def:'Пустая строка - \'\''},
                                {name:'help', desc:'Задает подсказку текстового поля',def:'Пустая строка - \'\''},
                                {name:'readonly', desc:'Устанавливает запрет на изменение текстового поля',def:'false'},
                                {name:'disabled', desc:'Устанавливает текстовое поле в положение неактивного',def:'false'}
                            ]"
					                 :events="[
                                {name:'onFocus',desc:'Событие возникает при фокусировке на текстовое поле',val:'Ничего не возвращает'},
                                {name:'onBlur',desc:'Событие возникает при потере фокуса',val:'Ничего не возвращает'},
                                {name:'onClick',desc:'Событие возникает при клике',val:'Ничего не возвращает'},
                                {name:'onInput',desc:'Событие возникает при изменение текста в текстовом поле',val:'Возвращает измененный текст'},
                            ]">
					</wg-desc-example>
				</div>
				<div class="col_12 col-phone_6">
					<span class="ui-header ui-header_2"> Текст многострочный (textarea): </span>
					<br/>
				</div>
				<div class="col_4 col-phone_6">
					<ui-textarea value="Textarea Lorem ipsum..."
					             caption="Многострочное текстовое поле"
					             autoresize="250">
					</ui-textarea>
				</div>
				<div class="col_12">
					<ui-code value='<ui-textarea 
    name="textarea1"                 
    value="Textarea Lorem ipsum..."
    caption="Многострочное текстовое поле"
    autoresize="250">
</ui-textarea>'>
					</ui-code>
				</div>
				<div class="col_12">
					<wg-desc-example :classes="[
                                {name:'.ui-textarea', desc:'Корневой класс для текстого поля'},
                                {name:'.ui-textarea__caption', desc:'Класс описывает заголовок текстового поля'},
                                {name:'.ui-textarea__input', desc:'Класс описывает текстовое поле'},
                                {name:'.ui-textarea__help', desc:'Класс описывает подсказку текстового поля'},
                            ]"
					                 :props="[
                                {name:'name', desc:'Задает имя текстового поля, должно быть уникальным',def:'Пустая строка - \'\''},
                                {name:'value', desc:'Задает значение текстового поля',def:'Пустая строка - \'\''},
                                {name:'caption', desc:'Задает заголовок текстового поля',def:'Пустая строка - \'\''},
                                {name:'help', desc:'Задает подсказку текстового поля',def:'Пустая строка - \'\''},
                                {name:'readonly', desc:'Устанавливает запрет на изменение текстового поля',def:'false'},
                                {name:'disabled', desc:'Устанавливает текстовое поле в положение неактивного',def:'false'},
                                 {name:'resize', desc:'Задает возможность растягивать элемент. // both 	Можно растягивать элемент по ширине и высоте. // horizontal 	Можно растягивать элемент только по ширине. // vertical 	Можно растягивать элемент только по высотею. // none 	Изменять размеры элемента нельзя. // inherit от родителя',def:'vertical'},
                                 {name:'autoresize', desc:'Устанавливает автоподбор высоты, при вводе текста, до указанной величины в px. type:Number',def:'undefined'},
                            ]"
					                 :events="[
                                {name:'onFocus',desc:'Событие возникает при фокусировке на текстовое поле',val:'Ничего не возвращает'},
                                {name:'onBlur',desc:'Событие возникает при потере фокуса',val:'Ничего не возвращает'},
                                {name:'onClick',desc:'Событие возникает при клике',val:'Ничего не возвращает'},
                                {name:'onInput',desc:'Событие возникает при изменение текста в текстовом поле',val:'Возвращает измененный текст'},
                            ]">
					</wg-desc-example>
				</div>

				<div class="col_4 col-phone_6">
					<ui-password value="password"
					             caption="Поле для ввода пароля">
					</ui-password>
				</div>
				<div class="col_12">
					<ui-code value='<ui-password value="password"
	caption="Поле для ввода пароля">
</ui-password>'>
					</ui-code>
				</div>
				<div class="col_12">
					<wg-desc-example :classes="[
                                {name:'.ui-зфыыцщкв', desc:'Корневой класс для текстого поля'},
                                {name:'.ui-зфыыцщкв__caption', desc:'Класс описывает заголовок текстового поля'},
                                {name:'.ui-зфыыцщкв__input', desc:'Класс описывает текстовое поле'},
                                {name:'.ui-зфыыцщкв__help', desc:'Класс описывает подсказку текстового поля'},
                            ]"
					                 :props="[
                                {name:'name', desc:'Задает имя текстового поля, должно быть уникальным',def:'Пустая строка - \'\''},
                                {name:'value', desc:'Задает значение текстового поля',def:'Пустая строка - \'\''},
                                {name:'caption', desc:'Задает заголовок текстового поля',def:'Пустая строка - \'\''},
                                {name:'help', desc:'Задает подсказку текстового поля',def:'Пустая строка - \'\''},
                                {name:'readonly', desc:'Устанавливает запрет на изменение текстового поля',def:'false'},
                                {name:'disabled', desc:'Устанавливает текстовое поле в положение неактивного',def:'false'}
                            ]"
					                 :events="[
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