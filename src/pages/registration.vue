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
						<br/> Мы нацелены на объединение автомобилистов, автолюбителей, автоманьяков и всех кто хоть как-то связан с автомобилями.
					</div>
				</div>
				<div class="col_5 col-phone_6">
					<div class="pg-registration__card">

						<div class="ui-header_1 pg-registration__header">Вход на Drovito.ru

						</div>
						<!-- <hr class="pg-registration__hr" /> -->
						<ui-text :value="'mex1986fox@mail.ru'"
						         :caption="'Email или логин'">
						</ui-text>
						<ui-password :caption="'Пароль'">
						</ui-password>

						<div class="pg-registration__padding" />
						<div class="pg-registration__buttons">
							<button class="ui-button ">Войти</button>
							<button class="ui-button ui-button_red"
							        @click="showRegistrationCard=true">Регистрация</button>
						</div>
						<hr class="pg-registration__hr" />

						<span style="font-size: 12px; float: left; margin-bottom:10px;">Если вы забыли свой пароль, попробуйте его восстановить!</span><br/><br/>
						<a style="font-size: 12px; float: left; width: 100%;"
						   class="ui-link"
						   href="http://www.google.com">Восстановить пароль</a>

					</div>
				</div>

			</div>

		</div>
		<ui-blind @onHide="showRegistrationCard=!showRegistrationCard"
		          :show="showRegistrationCard"
		          animate="right"
		          class="pg-registration__blind">
			<div class="container">
				<div class="row">
					<div class="col_5 col_offset-7 col-phone_6 col-phone_offset-0">
						<div class="pg-registration__card-registration">
							<div class="row">
								<div class="col_12">
									<span class="ui-header_2">
										Первый раз на Drovito?
									</span>
									<br/>
									<p class="ui-description">
										Здесь Вам рады. Регистрируйтесь!
									</p>

								</div>
								<div class="col_12">

									<span class="pg-registration__hr">
										<div class="ui-header_4">1. Личные данные
										</div>
									</span>
								</div>
								<div class="col_5 col-phone_6">
									<ui-text value=""
									         caption="Имя">
									</ui-text>
								</div>
								<div class="col_5 col_offset-2 col-phone_6 col-phone_offset-0">
									<ui-text value=""
									         caption="Фамилия">
									</ui-text>
								</div>
								<div class="col_4">
									<ui-datepicker :disabled="false"
									               name="datepicker"
									               caption="Дата рождения">
									</ui-datepicker>

								</div>
								<div class="col_12">

									<span class="pg-registration__hr">
										<div class="ui-header_4">2. Безопасность
										</div>
									</span>

								</div>
								<div class="row">
									<div class="col_5 col-phone_6">
										<ui-text value=""
										         caption="Логин">
										</ui-text>
									</div>
								</div>
								<div class="row">
									<div class="col_5 col-phone_6">
										<ui-password caption="Пароль">
										</ui-password>
									</div>
									<div class="col_6 col_offset-1 col-phone_6 col-phone_offset-0">
										<ui-password caption="Повторите пароль">
										</ui-password>
									</div>
								</div>

								<!-- <div class="col_12">

									<span class="pg-registration__hr">
										<div class="ui-header_4">3. Для восстановления пароля
										</div>
									</span>
								</div>
								<div class="col_12">
									<ui-text value=""
									         caption="Придумайте вопрос">
									</ui-text>
								</div>
								<div class="col_12">
									<ui-text caption="Ответ на вопрос">
									</ui-text>
								</div> -->
								<div class="col_12">
									<div class="pg-registration__buttons">
										<button class="ui-button ui-button_blue">готово</button>
										<button class="ui-button ui-button_flat"
										        @click="showRegistrationCard=!showRegistrationCard">Отмена</button>
									</div>
								</div>
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
    background: url(http://s1.fotokto.ru/photo/full/13/130568.jpg) no-repeat
      center center fixed;
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
    margin-bottom: 30px;
  }
  &__card-registration {
    margin: 30px 0;
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
  &__header {
    margin-bottom: 38px !important;
    line-height: 30px;
  }
  &__hr {
    border: 0;
    border-bottom: 1px dashed #d2d2d2cc;
    margin: 35px 0 0 0;
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
  &__blind {
    background-color: rgba(255, 255, 255, 0) !important;
  }
  &__buttons {
    margin: 50px 0 20px -4px;
  }
}
@media (min-width: 770px) and (max-width: 990px) {
  .pg-registration {
    &__card {
      margin-top: 30px;
      padding: 40px;
      //   overflow: hidden;
      margin-bottom: 30px;
    }
    &__card-registration {
      padding: 40px;
      //   overflow: hidden;
      margin: 30px 0;
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
      margin-bottom: 15px;
    }
    &__card-registration {
      padding: 15px;
      //   overflow: hidden;
      margin: 15px 0;
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
