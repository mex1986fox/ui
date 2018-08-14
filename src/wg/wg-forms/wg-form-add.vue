<template>
	<div class="wg-form-add">
		<div class="row">
			<div class="col-12">
				<div class="wg-form-add__bar">
					<div class="ui-header ui-header_2 wg-form-add__header">
						<span>Форма подачи объявления</span>
					</div>
					<button class="ui-button ui-button_circle ui-button_flat wg-form-add__close"
					        @click="isClose">
						<i class="fa fa-angle-up"></i>
					</button>
					<ui-tabs class=" wg-form-add__tabs">
						<ui-tabs-tab id="basic"
						             :checked="tabs=='basick'"
						             @onFocus="isTabs">
							Основное
						</ui-tabs-tab>
						<ui-tabs-tab id="photo"
						             :checked="tabs=='photo'"
						             @onFocus="isTabs">
							Фотографии
						</ui-tabs-tab>
						<ui-tabs-tab id="excess"
						             :checked="tabs=='excess'"
						             @onFocus="isTabs">
							Дополнительно
						</ui-tabs-tab>
					</ui-tabs>

				</div>

				<div class="wg-form-add__content"
				     v-show="tabs=='basic'">

					<div class="wg-form-add__hr">
						<i class="fa fa-map-marker"
						   aria-hidden="true"></i>
						Местоположение
					</div>
					<div class="row">
						<div class="col_5">
							<ui-select name="region"
							           caption="Субъект"
							           :menu='[{value:"1",option:"Кемеровская", group:"Область", selected:true},
                                        {value:"2",option:"Новосибирская", group:"Область", selected:false},
                                        {value:"3",option:"Омская", group:"Области", selected:false},
                                        {value:"4",option:"Алтайский", group:"Край",selected:false},
                                        {value:"5",option:"Камчатский", group:"Край",selected:false}]'>
							</ui-select>
						</div>
						<div class="col_5 col_offset-2">
							<ui-select name="city"
							           caption="Город"
							           :multiple="true"
							           :menu='[{value:"1",option:"Анжеро-Судженск", group:"Город", selected:true},
                                        {value:"2",option:"Новосибирск", group:"Город", selected:false},
                                        {value:"3",option:"Кемерово", group:"Город", selected:false},
                                        {value:"4",option:"Алтай", group:"Город",selected:false},
                                        {value:"5",option:"Яя", group:"Поселок",selected:false}]'>
							</ui-select>
						</div>
					</div>

					<div class="wg-form-add__hr">
						<i class="fa fa-car"
						   aria-hidden="true"></i>

						Автомобиль
					</div>
					<div class="row">
						<div class="col_5">
							<ui-select name="marca"
							           caption="Марка"
							           :menu='[{value:"1",option:"Audi", group:"Область", selected:true},
                                        {value:"2",option:"Новосибирская", group:"Область", selected:false},
                                        {value:"3",option:"Омская", group:"Области", selected:false},
                                        {value:"4",option:"Алтайский", group:"Край",selected:false},
                                        {value:"5",option:"Камчатский", group:"Край",selected:false}]'>
							</ui-select>
						</div>
						<div class="col_5 col_offset-2">
							<ui-select name="model"
							           caption="Модель"
							           :multiple="true"
							           :menu='[{value:"1",option:"A-150", group:"Город", selected:true},
                                        {value:"2",option:"Новосибирск", group:"Город", selected:false},
                                        {value:"3",option:"Кемерово", group:"Город", selected:false},
                                        {value:"4",option:"Алтай", group:"Город",selected:false},
                                        {value:"5",option:"Яя", group:"Поселок",selected:false}]'>
							</ui-select>
						</div>
					</div>
					<div class="row">
						<div class="col_5">
							<ui-text caption="Пробег"></ui-text>
						</div>
					</div>

					<ui-textarea name="textarea1"
					             caption="Описание"
					             :autoresize="250"
					             :height="100">
					</ui-textarea>
					<div class="wg-form-add__hr">
						<i class="fa fa-exclamation"
						   aria-hidden="true"></i>
						Особые отметки
					</div>
					<div class="wg-form-add__checkboxs">
						<ui-check-box name="checkbox1"
						              value="1"
						              :checked="true">
							без документов
						</ui-check-box>
						<ui-check-box name="checkbox1"
						              value="1"
						              :checked="true">
							требует ремонта
						</ui-check-box>
						<ui-check-box name="checkbox1"
						              value="1"
						              :checked="true">
							готов к обмену
						</ui-check-box>
					</div>

					<div class="wg-form-add__hr">
						<i class="fa fa-phone"
						   aria-hidden="true"></i>
						Связь
					</div>
					<div class="row">
						<div class="col_5">
							<ui-text caption="Телефон"></ui-text>
						</div>
					</div>
					<div class="row">
						<div class="col_5">
							<ui-text caption="Цена"></ui-text>
						</div>
					</div>
				</div>

				<div class="wg-form-add__content"
				     v-show="tabs=='photo'">

					<div class="wg-form-add__hr">
						<i class="fa fa-camera"
						   aria-hidden="true"></i>

						Фотографии
					</div>
					<ui-file-img caption="Выберите фотографии"
					             captionCompleted="Выбранные фотографии"
					             :autoresize="300"
					             accept="image/*">

					</ui-file-img>

				</div>

				<div class="wg-form-add__buttons">
					<button class="ui-button ui-button_blue  ">
						Сохранить
					</button>
					<button class="ui-button ui-button_flat ">
						Отмена
					</button>

				</div>
			</div>
		</div>
	</div>

</template>

<script>
export default {
  name: "wg-form-add",
  data() {
    return { tabs: "photo" };
  },
  methods: {
    isTabs(id) {
      this.tabs = id;
      //   console.log(id);
    },
    isClose() {
      this.$emit("onHide");
    }
  }
};
</script>

