<template>
    <div class="ui-navigation__list">

        <div class="ui-navigation__list__header" @click="show=!show">
            <slot name="header">

            </slot>
            <transition name="ui-navigation__list__angel">
                <span v-if="show" class="ui-navigation__list__angel">
                    <i class="fa fa-angle-up" aria-hidden="true"></i>
                </span>
            </transition>
            <transition name="ui-navigation__list__angel_tranzit">
                <span v-if="!show" class="ui-navigation__list__angel_tranzit">
                    <i class="fa fa-angle-up" aria-hidden="true"></i>
                </span>
            </transition>
        </div>
        <transition name="ui-navigation__list__content">
            <div class="ui-navigation__list__content" v-if="show">
                <slot name="content">

                </slot>
            </div>
        </transition>

    </div>
</template>
<script>
export default {
  name: "ui-navigation-list",
  data() {
    return {};
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>
