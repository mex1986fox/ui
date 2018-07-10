<template>
  <div class="ui-avatar-block">
    <slot>
      <span v-if="avatarBlockObject">
      <ui-avatar class="ui-avatar-block__avatar">
        <img class="ui-avatar__img" :src="avatarBlockObject.avatar">
      </ui-avatar>
      <div class="ui-avatar-block__active" v-if="avatarBlockObject.active">
      </div>
      <div class="ui-avatar-block__nickname">
        <ui-link>
          <router-link :to="avatarBlockObject.src">
            {{avatarBlockObject.nickName}}
          </router-link>
        </ui-link>
      </div>
      <div class="ui-avatar-block__date" v-if="!avatarBlockObject.remark">
        {{avatarBlockObject.visitDate}}
      </div>
      <div class="ui-avatar-block__remark" v-else>
        {{avatarBlockObject.remark}}
      </div>
      </span>

    </slot>
  </div>
</template>
<script>
export default {
  name: "ui-avatar-block",
   data() {
    return {

    };
  },
  props:{
    avatarBlockObject: Object
  }
};
// // avatarBlockObject: {
//         nickName:"Максим Понамарев",
//         visitDate: "21/10/2015",
//         avatar: "/static/img/avatar2.jpg",
//         remark: "Кому на руси жить хорошо?",
//         src: "http://google.ru",
//         active: true
//       }
</script>
