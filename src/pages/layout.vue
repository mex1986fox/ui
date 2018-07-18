<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col_12">
                    <router-link to="/grid" class="ui-link">Сетка</router-link>
                    <router-link to="/buttons" class="ui-link">Кнопки</router-link>
                    <router-link to="/typography" class="ui-link">Tипография</router-link>
                    <router-link to="/inputs" class="ui-link">Инпуты</router-link>
                    <router-link to="/selects" class="ui-link">Селекты</router-link>
                    <router-link to="/checkboxs" class="ui-link">Чекбоксы</router-link>
                    <router-link to="/datepicker" class="ui-link">Датапикер</router-link>
                    <router-link to="/chips" class="ui-link">chips</router-link>
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
