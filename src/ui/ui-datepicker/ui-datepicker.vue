<template>
    <div class="ui-datepicker">
        <ui-text :name="dName" :caption="dCaption" :readonly="true" :value="dSelectDate" @onFocus="isFocus" @onBlur="isBlur">
        </ui-text>
        <div class="ui-datepicker__arrow" @click="dFocus=!dFocus">
            <i class="fa fa-calendar" aria-hidden="true"></i>
        </div>

        <transition name="ui-datepicker__menu">
            <div class="ui-datepicker__menu" v-if="dFocus">
                <div class="ui-datepicker__header">
                    <div @click="clickLeft()" class="ui-button ui-button_circle ui-button_circle_mini ui-button_flat ui-datepicker__button_left">
                        <i class="fa fa-angle-left" aria-hidden="true"></i>
                    </div>
                    <div @click="clickRight()" class="ui-button ui-button_circle ui-button_circle_mini ui-button_flat ui-datepicker__button_right">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                    {{compMonth.name +" "+compYear}}
                </div>
                <div class="ui-datepicker__day">
                    Пн
                </div>
                <div class="ui-datepicker__day">
                    Вт
                </div>
                <div class="ui-datepicker__day">
                    Ср
                </div>
                <div class="ui-datepicker__day">
                    Чт
                </div>
                <div class="ui-datepicker__day">
                    Пт
                </div>
                <div class="ui-datepicker__day">
                    Сб
                </div>
                <div class="ui-datepicker__day">
                    Вс
                </div>
                <div class="ui-datepicker__number-day ui-datepicker__number-day_flat" v-for="keyn in compNumberDay" :key="'n'+keyn">

                </div>
                <div @click="clickNumber(key)" class="ui-datepicker__number-day" v-for="key in compSumDays" :key="key">
                    {{key}}
                </div>
                <div class="ui-datepicker__footer">
                    <button class="ui-button ui-button_flat ui-datepicker__button" @click="dActiveMenyYear=true">
                        Выбрать год
                    </button>
                </div>
                <transition name="ui-datepicker__menu-yaer">
                    <div class="ui-datepicker__menu-yaer" v-if="dActiveMenyYear">
                        <ul class="ui-datepicker__menu-yaer__select">
                            <li class="ui-datepicker__menu-yaer__option" v-for="key in 400" :key="key" @click="clickYear(dPresentYear-key+1)">
                                {{dPresentYear-key+1}}
                            </li>
                        </ul>
                    </div>
                </transition>

            </div>

        </transition>

    </div>
</template>
<script>
export default {
  data() {
    return {
      dPresentYear: new Date().getFullYear(),
      dActiveMenyYear: false,
      dFocus: false,
      dCaption: this.caption,
      dName: this.name,
      dSelectDate: "",
      dDate: new Date(),
      dMonth: [
        { id: "01", name: "Январь", leapDays: 31, days: 31 },
        { id: "02", name: "Февраль", leapDays: 29, days: 28 },
        { id: "03", name: "Март", leapDays: 31, days: 31 },
        { id: "04", name: "Апрель", leapDays: 30, days: 30 },
        { id: "05", name: "Май", leapDays: 31, days: 31 },
        { id: "06", name: "Июнь", leapDays: 30, days: 30 },
        { id: "07", name: "Июль", leapDays: 31, days: 31 },
        { id: "08", name: "Август", leapDays: 31, days: 31 },
        { id: "09", name: "Сентябрь", leapDays: 30, days: 30 },
        { id: "10", name: "Октябрь", leapDays: 31, days: 31 },
        { id: "11", name: "Ноябрь", leapDays: 30, days: 30 },
        { id: "12", name: "Декабрь", leapDays: 31, days: 31 }
      ]
    };
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    caption: {
      type: String,
      default: ""
    }
  },
  methods: {
    isFocus() {
      this.dFocus = true;
    },
    isBlur() {
      // this.dFocus=false
    },
    //определяет количество дней в месяце с учетом високоснокго года
    sumDays(year, month) {
      return this.year % 4 == 0
        ? this.dMonth[month].leapDays
        : this.dMonth[month].days;
    },
    clickLeft() {
      let prevMouth = this.dDate.getMonth() - 1;
      let prevYear = this.compYear;
      if (prevMouth < 0) {
        prevMouth = 11;
        --prevYear;
      }
      this.dDate = new Date(
        prevYear,
        prevMouth,
        this.sumDays(prevYear, prevMouth)
      );
    },
    clickRight() {
      let prevMouth = this.dDate.getMonth() + 1;
      let prevYear = this.compYear;
      if (prevMouth == 12) {
        prevMouth = 0;
        ++prevYear;
      }
      this.dDate = new Date(
        prevYear,
        prevMouth,
        this.sumDays(prevYear, prevMouth)
      );
    },
    clickNumber(number) {
      this.dSelectDate =
        this.compYear +
        "-" +
        this.compMonth.id +
        "-" +
        (number > 9 ? number : "0" + number);
      this.dFocus = false;
    },
    clickYear(yaer) {
      this.dDate = new Date(
        yaer + "-" + this.compMonth.id + "-" + this.compDay
      );
      this.dActiveMenyYear = false;
    }
  },
  computed: {
    compMonth() {
      return this.dMonth[this.dDate.getMonth()];
    },
    compYear() {
      return this.dDate.getFullYear();
    },
    compDay() {
      return this.dDate.getDate();
    },
    compSumDays() {
      return this.sumDays(this.compYear, this.dDate.getMonth());
    },
    compNumberDay() {
      //jghеделить предыдущий месяц
      let prevMouth = this.dDate.getMonth() - 1;
      let prevYear = this.compYear;
      if (prevMouth < 0) {
        prevMouth = 11;
        --prevYear;
      }
      let nDay = new Date(
        prevYear,
        prevMouth,
        this.sumDays(prevYear, prevMouth)
      ).getDay();
      return nDay;
    }
  },
  mounted() {
    window.addEventListener(
      "click",
      event => {
        let ev = event.target;
        let flCl = false;
        while (ev) {
          if (ev == this.$el) {
            flCl = true;
            break;
          }
          if (ev == undefined) {
            flCl = false;
            break;
          }
          ev = ev.parentNode;
        }
        if (!flCl) {
          this.dFocus = false;
        }
      },
      true
    );
  }
};
</script>
