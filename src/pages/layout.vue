<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col_12">
                    <router-link to="/grid" class="ui-link">Сетка</router-link>
                    <router-link to="/buttons" class="ui-link">Кнопки</router-link>
                    <router-link to="/selects" class="ui-link">Селекты</router-link>
                    <router-link to="/texts" class="ui-link">Тексты</router-link>
                </div>
            </div>
        </div>
        <slot>

        </slot>
    </div>
</template>
<script>
export default {
  name: "layout"
};
</script>
