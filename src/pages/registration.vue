<template>
	<layout>
		<div class="pg-registration__fon">
		</div>
		<div class="container">
			<div class="row">
				<div class="col_7 col-phone_6">
					<img class="pg-registration__logo"
					     src="/public/img/label.png"
					     alt=""
					     srcset="">
					<div class="pg-registration__remark">
						<span class="pg-registration__remark-header">
							Социальная сеть для автомобилистов
						</span>
						<br/> Мы нацелены на объединение авомобилистов, автолюбителей, автоманьяков и всех кто хоть как-то связан с автомобилями.
					</div>
				</div>
				<div class="col_5 col-phone_6">
					<div class="pg-registration__card">
						<div class="ui-border_25">
							<div class="ui-header_1">Вход на Drovito.ru
								<hr class="pg-registration__hr" />

							</div>
							<ui-text :value="'mex1986fox@mail.ru'"
							         :caption="'Email или логин'">
							</ui-text>
							<ui-text :caption="'Пароль'">
							</ui-text>

							<div class="pg-registration__padding" />
							<button class="ui-button ">Войти</button>
							<button class="ui-button ui-button_red"
							        @click="showRegistrationCard=!showRegistrationCard">Регистрация</button>

							<hr class="pg-registration__hr" />

							<span style="font-size: 12px; float: left; margin-bottom:10px;">Если вы забыли свой пароль, попробуйте его восстановить!</span><br/><br/>
							<a style="font-size: 12px; float: left; width: 100%;"
							   class="ui-link"
							   href="http://www.google.com">Восстановить пароль</a>

						</div>
					</div>
				</div>

			</div>

		</div>
		<ui-blind @onHide="showRegistrationCard=!showRegistrationCard"
		          :show="showRegistrationCard">
			<div class="container">

				<div class="pg-registration__card-registration">
					<div class="row">
						<div class="col_12">
							<div class="ui-border_25">
								<div class="ui-header_2">Регистрация нового пользователя
								</div>
							</div>
							<div class="pg-registration__padding" />
						</div>
					</div>
					<div class="row">

						<div class="col_12">
							<div class="ui-border_25">
								<hr class="pg-registration__hr" />
								<div class="ui-header_4">1. Личные данные
								</div>
							</div>
						</div>
						<div class="col_4">
							<div class="ui-border_25">
								<ui-text :caption="'Укажите Ваше Имя'">
								</ui-text>
							</div>
						</div>
						<div class="col_4">
							<div class="ui-border_25">
								<ui-text :caption="'Укажите Вашу Фамилию'">
								</ui-text>
							</div>
						</div>

					</div>

					<div class="row">
						<div class="col_3">
							<div class="ui-border_25">
								<ui-text :caption="'Укажите Вашу дату рождения'">
								</ui-text>
							</div>
						</div>
						<div class="pg-registration__padding" />
					</div>

					<div class="row">
						<div class="col_12">
							<div class="ui-border_25">
								<hr class="pg-registration__hr" />
								<div class="ui-header_4">2. Местоположение
								</div>
							</div>
						</div>
						<div class="col_3">
							<div class="ui-border_25">
								<ui-text :caption="'Выберите Ваш регион'">
								</ui-text>
							</div>
						</div>
						<div class="col_3">
							<div class="ui-border_25">
								<ui-text :caption="'Выберите Ваш город'">
								</ui-text>
							</div>
						</div>
						<div class="pg-registration__padding" />
					</div>

					<div class="row">
						<div class="col_12">
							<div class="ui-border_25">
								<hr class="pg-registration__hr" />
								<div class="ui-header_4">3. Защита
								</div>
							</div>
						</div>
						<div class="col_3">
							<div class="ui-border_25">
								<ui-text :value="'mex1986fox'"
								         :caption="'Придумайте логин'">
								</ui-text>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col_3">
							<div class="ui-border_25">
								<ui-text :caption="'Укажите пароль'">
								</ui-text>
							</div>
						</div>
						<div class="col_3">
							<div class="ui-border_25">
								<ui-text :caption="'Повторите пароль еще раз'">
								</ui-text>
							</div>
						</div>
					</div>
					<div class="pg-registration__padding" />

					<div class="row">
						<div class="col_12">
							<div class="ui-border_25">
								<hr class="pg-registration__hr" />
								<div class="ui-header_4">4. Связь
								</div>
							</div>
						</div>
						<div class="col_3">
							<div class="ui-border_25">
								<ui-text :value="'mex1986fox@fox.ru'"
								         :caption="'Укажите ваш Email'">
								</ui-text>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col_3">
							<div class="ui-border_25">
								<ui-text :caption="'Укажите ваш номер телефона'">
								</ui-text>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col_12">
							<div class="ui-border_25">
								<hr class="pg-registration__hr" />

								<button class="ui-button ui-button_blue">Зарегистрироваться</button>
								<button class="ui-button ui-button_flat"
								        @click="showRegistrationCard=!showRegistrationCard">Отмена</button>
							</div>
						</div>
					</div>
				</div>
			</div>

		</ui-blind>
	</layout>
</template>

<script>
export default {
  name: "pg-registration",
  data() {
    return {
      showRegistrationCard: false
    };
  }
};
</script>

<style lang="scss">
.pg-registration {
  &__fon {
    position: fixed;
    height: 100%;
    width: 100%;
    background: url(/public/img/canvas3.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  &__card {
    margin-top: 30px;
    background-color: #fff;
    box-shadow: 0px 2px 8px rgba(100, 124, 137, 0.49);
    padding: 40px;
    overflow: hidden;
  }
  &__logo {
    height: 160px;
    float: left;
    margin-top: 50px;
  }
  &__hr {
    border: 0;
    border-top: 1px dashed #d2d2d2cc;
    margin: 55px 0 10px 0;
    float: left;
    position: relative;
    width: 100%;
  }
  &__padding {
    margin-top: 20px;
    position: relative;
    float: left;
    width: 100%;
  }
  &__remark {
    padding: 100px 279px 100px 70px;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    text-align: left;
    margin-left: 147px;
    margin-top: 172px;
    margin-right: -230px;
    font-size: 18px;
    line-height: 32px;
    &-header {
      color: #fff;
      font-family: "OpenSans";
      font-weight: 600;
      line-height: 32px;
      font-size: 26px;
      display: block;
    }
  }
  &__card-registration {
    margin: 50px 0;
    background-color: #fff;
    box-shadow: 0px 2px 8px rgba(100, 124, 137, 0.49);
    padding: 40px;
    overflow: hidden;
  }
}
@media (min-width: 770px) and (max-width: 990px) {
  .pg-registration {
    &__card {
      margin-top: 30px;
      padding: 40px;
      overflow: hidden;
    }
    &__logo {
      height: 110px;
      margin-top: 85px;
    }
    &__remark {
      padding: 45px 288px 45px 50px;
      margin-left: 103px;
      margin-top: 170px;
      margin-right: -236px;
      font-size: 14px;
      line-height: 21px;

      &-header {
        line-height: 26px;
        font-size: 22px;
      }
    }
  }
}
@media (max-width: 770px) {
  .pg-registration {
    &__card {
      margin-top: -129px;
      padding: 15px;
      overflow: hidden;
    }
    &__logo {
      height: 55px;
      margin: 15px 0px 0px 0px;
    }
    &__hr {
      margin: 25px 0 10px 0;
    }
    &__remark {
      padding: 15px 15px 150px 15px;
      margin: 60px 0 0 50px;
      font-size: 14px;
      line-height: 21px;

      &-header {
        line-height: 26px;
        font-size: 22px;
      }
    }
  }
}
</style>
