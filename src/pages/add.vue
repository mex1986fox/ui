<template>
    <layout>
        <div class="pg-add">
            <div class="container">
                <div class="row">
                    <div class="col_12">
                        <div class="ui-header ui-header_1 pg-add__header">
                            Продажа FAW Besturn X80, 2018 год в Кемерово
                        </div>
                    </div>
                    <div class="col_7 col-phone_6">
                        <wg-slider class="pg-add__slider"
                            :slide='[
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen1200_305852445.jpg"},
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen1200_305852304.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen1200_305852320.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen1200_305852338.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen1200_305852364.jpg"},
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen1200_305852393.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen1200_305852424.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen1200_305852445.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen1200_305852304.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen1200_305852320.jpg" }
                        ]'
                            :select="numberPhoto"
                            @onSelect="isSelectPhoto"
                            @onZoom="isZoomPhoto">
                        </wg-slider>
                        <wg-slider-navig class="pg-add__slider-navig"
                            :slide='[
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen115_305852445.jpg"},
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen115_305852304.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen115_305852320.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen115_305852338.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen115_305852364.jpg"},
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen115_305852393.jpg" , },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen115_305852424.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen115_305852445.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen115_305852304.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen115_305852320.jpg" }
                        ]'
                            :select="numberPhoto"
                            @onSelect="isSelectPhoto">
                        </wg-slider-navig>

                        <wg-slider-zoom :slide='[
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen1200_305852445.jpg"},
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen1200_305852304.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen1200_305852320.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen1200_305852338.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen1200_305852364.jpg"},
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen1200_305852393.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen1200_305852424.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen1200_305852445.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen1200_305852304.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen1200_305852320.jpg" }
                        ]'
                            :slideNavigation='[
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen115_305852445.jpg"},
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen115_305852304.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen115_305852320.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen115_305852338.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen115_305852364.jpg"},
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen115_305852393.jpg" , },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen115_305852424.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen115_305852445.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen115_305852304.jpg" },
                            { src: "https://s.auto.drom.ru/i24223/s/photos/30552/30551169/gen115_305852320.jpg" }
                        ]'
                            :select="numberZoomPhoto"
                            :show="showZoomSlider"
                            @onHide="showZoomSlider=false">
                        </wg-slider-zoom>
                        <div class="wg-comment__buttons">
                            <button class="ui-button ui-button_circle ui-button_circle_mini ui-button_flat">
                                <i aria-hidden="true"
                                    class="fa fa-thumbs-o-up"></i>
                            </button>
                            <div class="ui-counter">
                                123 369
                            </div>
                            <button class="ui-button ui-button_circle ui-button_circle_mini ui-button_flat">
                                <i aria-hidden="true"
                                    class="fa fa-thumbs-o-down"></i>
                            </button>
                            <div class="ui-counter">
                                123 369
                            </div>
                        </div>
                        <div class="pg-add__contacts">
                            <span class="pg-add__contacts-param">
                                <span class="pg-add__contacts-title">
                                    <i class="fa fa-mobile"
                                        aria-hidden="true"></i>
                                </span>
                                <span class="pg-add__contacts-value">8-904-990-94-80</span>
                            </span>
                            <span class="pg-add__contacts-param">
                                <span class="pg-add__contacts-title">
                                    <i class="fa fa-envelope-o"
                                        aria-hidden="true"></i>
                                </span>
                                <span class="pg-add__contacts-value">mex1986fox@mail.ru</span>
                            </span>

                        </div>
                    </div>
                    <div class="col_5 col-phone_6">
                        <div class="pg-add__info">
                            <div class="ui-header ui-header_2 pg-add__info-header">
                                2 000 000 руб.
                            </div>
                            <span class="pg-add__info-param">
                                <span class="pg-add__info-title">Двигатель</span>
                                <span class="pg-add__info-value">бензин/2.3</span>
                            </span>

                            <span class="pg-add__info-param">
                                <span class="pg-add__info-title">Руль</span>
                                <span class="pg-add__info-value">левый</span>
                            </span>
                            <span class="pg-add__info-param">
                                <span class="pg-add__info-title">Пробег</span>
                                <span class="pg-add__info-value">250 000 км.</span>
                            </span>
                            <span class="pg-add__info-param">
                                <span class="pg-add__info-title">Коробка</span>
                                <span class="pg-add__info-value">автомат</span>
                            </span>
                            <span class="pg-add__info-param">
                                <span class="pg-add__info-title">Привод</span>
                                <span class="pg-add__info-value">передний</span>
                            </span>
                            <span class="ui-description pg-add__description">
                                Мы находимся в г. Новосибирск. Наш сайт: https://fawnsk. china- faw. ru ГАРАНТИЯ 5 ЛЕТ!!! ПРИЕЗЖАЙТЕ НА ТЕСТ- ДРАЙВ - ВЫ БУДЕТЕ ПРИЯТНО УДИВЛЕНЫ! Стоимость 1 049 000 указана с учетом бонуса 50 000 при сдаче а/м в трейд ин + 50 000 выгода при покупке в кредит.* Подробности у менеджеров отдела продаж. Предложение действует до 31.08.2018!!! АТМОСФЕРНЫЙ ДВИГАТЕЛЬ - MAZDA!!! ЯПОНСКАЯ 6- ст АКПП - AISIN!!! БЕНЗИН - АИ-92!!! ДОРОЖНЫЙ ПРОСВЕТ - 21см!!! Современный, стильный, просторный, комфортный и безопасный кроссовер! Комплектация КОМФОРТ: ~ Системы безопасности: • Антиблокировочная система тормозов (ABS) • Функция электронного распределения тормозного усилия (EBD) • Антипробуксовочная или противопробуксовочная система (TCS) • Система помощи при экстренном торможении (EBA) • Система курсовой устойчивости (ESP) • Система помощи при трогании на уклоне (HSA) • Иммобилайзер • Центральный замок • Подушка безопасности водителя и переднего пассажира • Трехточечные ремни безопасности для передних и задних пассажиров • Сигнализация о непристегнутом ремне безопасности водителя и переднего пассажира • Ремни безопасности передних сидений с регулировкой высоты • Автоматическая блокировка (при движении) и разблокировка (при столкновении) дверей • Блокировка открытия задних боковых дверей изнутри («детский замок») • Устройство вызова экстренных служб «Эра- Глонасс» • Травмобезопасные подголовники
                            </span>
                        </div>

                    </div>
                    <!-- <div class="col_8">
                        <span class="ui-description pg-add__description">
                            Мы находимся в г. Новосибирск. Наш сайт: https://fawnsk. china- faw. ru ГАРАНТИЯ 5 ЛЕТ!!! ПРИЕЗЖАЙТЕ НА ТЕСТ- ДРАЙВ - ВЫ БУДЕТЕ ПРИЯТНО УДИВЛЕНЫ! Стоимость 1 049 000 указана с учетом бонуса 50 000 при сдаче а/м в трейд ин + 50 000 выгода при покупке в кредит.* Подробности у менеджеров отдела продаж. Предложение действует до 31.08.2018!!! АТМОСФЕРНЫЙ ДВИГАТЕЛЬ - MAZDA!!! ЯПОНСКАЯ 6- ст АКПП - AISIN!!! БЕНЗИН - АИ-92!!! ДОРОЖНЫЙ ПРОСВЕТ - 21см!!! Современный, стильный, просторный, комфортный и безопасный кроссовер! Комплектация КОМФОРТ: ~ Системы безопасности: • Антиблокировочная система тормозов (ABS) • Функция электронного распределения тормозного усилия (EBD) • Антипробуксовочная или противопробуксовочная система (TCS) • Система помощи при экстренном торможении (EBA) • Система курсовой устойчивости (ESP) • Система помощи при трогании на уклоне (HSA) • Иммобилайзер • Центральный замок • Подушка безопасности водителя и переднего пассажира • Трехточечные ремни безопасности для передних и задних пассажиров • Сигнализация о непристегнутом ремне безопасности водителя и переднего пассажира • Ремни безопасности передних сидений с регулировкой высоты • Автоматическая блокировка (при движении) и разблокировка (при столкновении) дверей • Блокировка открытия задних боковых дверей изнутри («детский замок») • Устройство вызова экстренных служб «Эра- Глонасс» • Травмобезопасные подголовники
                        </span>
                    </div> -->
                </div>

            </div>
        </div>
    </layout>
</template>

<script>
export default {
  name: "pg-add",
  data() {
    return {
      numberPhoto: 1,
      showZoomSlider: false
    };
  },
  methods: {
    isSelectPhoto(numberPhoto) {
      this.numberPhoto = numberPhoto;
    },
    isZoomPhoto(numberPhoto) {
      //   console.log(numberPhoto);
      this.showZoomSlider = true;
      this.numberZoomPhoto = numberPhoto;
    }
  }
};
</script>

<style lang="scss">
.pg-add {
  margin: 20px 0;
  &__header {
    margin: 0 0 26px 0 !important;
  }
  &__slider {
    height: 400px !important;
  }
  &__slider-navig {
    height: 40px !important;
    margin: 10px 0;
  }
  &__contacts {
    width: auto;
    position: relative;
    margin-bottom: 25px;
    font-size: 18px;
    &-param {
      display: block;
      font-size: 18px;
      overflow: hidden;
      margin: 7px 0 0 0;
    }
    &-title {
      float: left;
      font-size: 30px;
      margin-left: 15px;
      color: #2495ce;
    }
    &-value {
      float: left;
      color: #adafbc;
      line-height: 30px;
      margin-left: 25px;
    }
  }
  &__info {
    height: 168px;
    width: auto;
    padding: 0 0 0 30px;
    position: relative;
    margin-bottom: 15px;
    &-header {
      margin: 0 0 24px 0 !important;
    }
    &-param {
      display: block;
      font-size: 15px;
      overflow: hidden;
      margin: 7px 0 0 0;
    }
    &-title {
      float: left;
    }
    &-value {
      float: right;
    }
  }

  &__description {
    font-size: 14px !important;
    margin: 33px 0;
    display: inline-block;
  }
}
@media (max-width: 770px) {
  .pg-add {
    &__slider {
      height: 250px !important;
    }
    &__contacts {
      &-title {
        margin-left: 10px;
      }
    }
    &__info {
      padding: 10px;
    }
  }
}
</style>
