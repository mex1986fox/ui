<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col_12">
                    <div class="ui-avatar">
                        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                    </div>
                    <div class="ui-avatar">
                        <img src="/public/img/avatar.jpg" alt="">
                    </div>
                </div>
                <div class="col_12">
                    <ui-code value='<!-- Аватарка с логотипом -->
<div class="ui-avatar">
    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
</div>
<!-- Аватарка с картинкой -->
<div class="ui-avatar">
    <img src="/public/img/canvas.jpg" alt="">
</div>'>
                    </ui-code>
                </div>
            </div>
        </div>
    </layout>
</template>
<script>
export default {
  name: "pg-avatars",
  data() {
    return {};
  },
  methods: {}
};
</script>