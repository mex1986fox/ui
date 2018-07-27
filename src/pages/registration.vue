<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col_12 col-phone_6">
                    <div class="pg-registration">
                        <div class="row">
                            <div class="ui-col_8">
                            <img class="pg-registration__logo" src="/static/img/icon.png" alt="" srcset="">
                            <div class="pg-registration__remark">
                                <span class="pg-registration__remark-header" >
                                    Первая социальная сеть для автомобилистов
                                </span>
                                <br/>
                                Мы нацелены на объединение авомобилистов, автолюбителей, автоманьяков и всех кто хоть
                                как-то связан с автомобилями.
                            </div>
                            </div>
                            <div class="ui-col_4">
                            <div>
                                <div class="ui-border_25">
                                <div class="ui-header_1">Вход на Drovito.ru
                                <hr class="pg-registration__hr" />

                                </div>
                                <ui-text
                                    :value="'mex1986fox@mail.ru'"
                                    :caption="'Email или логин'"
                                    >
                                </ui-text>
                                <ui-text
                                    :caption="'Пароль'"
                                    >
                                </ui-text>

                                <div class="pg-registration__padding" />
                                <button class="ui-button ui-button_red">Войти</button>
                                <button class="ui-button ui-button_flat"
                                        @click="showRegistrationCard=!showRegistrationCard">Регистрация</button>

                                <hr class="pg-registration__hr" />

                                    <span style="font-size: 12px; float: left; margin-bottom:10px;">Если вы забыли свой пароль, попробуйте его восстановить!</span><br/><br/>
                                    <ui-link><a href="http://www.google.com">Восстановить пароль</a></ui-link>

                                </div>
                            </div>
                            </div>

                        </div>

                            <ui-blackout @click-blacout="showRegistrationCard=!showRegistrationCard"
                                        :show="showRegistrationCard"
                                        v-if="showRegistrationCard">
                                <ui-container>
                                <div class="row">
                                    <div class="pg-registration__card-registration">
                                        <div class="row">
                                        <div class="ui-col_12">
                                            <div class="ui-border_25">
                                            <div class="ui-header_2">Регистрация нового пользователя
                                            </div>
                                            </div>
                                            <div class="pg-registration__padding" />
                                        </div>
                                        </div>
                                        <div class="row">

                                        <div class="ui-col_12">
                                            <div class="ui-border_25">
                                            <hr class="pg-registration__hr" />
                                            <div class="ui-header_4">1. Личные данные
                                            </div>
                                            </div>
                                        </div>
                                        <div class="ui-col_4">
                                            <div class="ui-border_25">
                                            <ui-text
                                            :caption="'Укажите Ваше Имя'"
                                            >
                                            </ui-text>
                                            </div>
                                        </div>
                                        <div class="ui-col_4">
                                            <div class="ui-border_25">
                                            <ui-text
                                                :caption="'Укажите Вашу Фамилию'"
                                                >
                                            </ui-text>
                                            </div>
                                        </div>

                                        </div>

                                        <div class="row">
                                        <div class="ui-col_3">
                                            <div class="ui-border_25">
                                            <ui-text
                                                :caption="'Укажите Вашу дату рождения'"
                                                >
                                            </ui-text>
                                            </div>
                                        </div>
                                        <div class="pg-registration__padding" />
                                        </div>

                                        <div class="row">
                                        <div class="ui-col_12">
                                            <div class="ui-border_25">
                                            <hr class="pg-registration__hr" />
                                            <div class="ui-header_4">2. Местоположение
                                            </div>
                                            </div>
                                        </div>
                                        <div class="ui-col_3">
                                            <div class="ui-border_25">
                                            <ui-text
                                                :caption="'Выберите Ваш регион'"
                                                >
                                            </ui-text>
                                            </div>
                                        </div>
                                        <div class="ui-col_3">
                                            <div class="ui-border_25">
                                            <ui-text
                                                :caption="'Выберите Ваш город'"
                                                >
                                            </ui-text>
                                            </div>
                                        </div>
                                        <div class="pg-registration__padding" />
                                        </div>

                                        <div class="row">
                                        <div class="ui-col_12">
                                            <div class="ui-border_25">
                                            <hr class="pg-registration__hr" />
                                            <div class="ui-header_4">3. Защита
                                            </div>
                                            </div>
                                        </div>
                                        <div class="ui-col_3">
                                            <div class="ui-border_25">
                                            <ui-text
                                                :value="'mex1986fox'"
                                                :caption="'Придумайте логин'"
                                                >
                                            </ui-text>
                                            </div>
                                        </div>
                                        </div>

                                        <div class="row">
                                        <div class="ui-col_3">
                                            <div class="ui-border_25">
                                            <ui-text
                                                :caption="'Укажите пароль'"
                                                >
                                            </ui-text>
                                            </div>
                                        </div>
                                        <div class="ui-col_3">
                                            <div class="ui-border_25">
                                            <ui-text
                                                :caption="'Повторите пароль еще раз'"
                                                >
                                            </ui-text>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="pg-registration__padding" />

                                        <div class="row">
                                        <div class="ui-col_12">
                                            <div class="ui-border_25">
                                            <hr class="pg-registration__hr" />
                                            <div class="ui-header_4">4. Связь
                                            </div>
                                            </div>
                                        </div>
                                        <div class="ui-col_3">
                                            <div class="ui-border_25">
                                            <ui-text
                                                :value="'mex1986fox@fox.ru'"
                                                :caption="'Укажите ваш Email'"
                                                >
                                            </ui-text>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="row">
                                        <div class="ui-col_3">
                                            <div class="ui-border_25">
                                            <ui-text
                                                :caption="'Укажите ваш номер телефона'"
                                                >
                                            </ui-text>
                                            </div>
                                        </div>
                                        </div>


                                        <div class="row">
                                        <div class="ui-col_12">
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
                                </ui-container>
                            </ui-blackout>
                        </div>
                </div>
            </div> 
        </div>
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
  position: absolute;
  padding-top: 5%;
  height: 100%;
  width: 100%;
  overflow: hidden;
  text-align: center;
  background-color: aqua;
  background: url(/static/img/registration/fon.png) no-repeat center center
    fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  &__logo {
    height: 160px;
    float: left;
    margin-top: 50px;
  }
  &__hr {
    border: 0;
    border-top: 1px dashed #fcfc;
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
    background-color: rgba(0, 0, 0, 0.7);
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
  }
}
</style>
