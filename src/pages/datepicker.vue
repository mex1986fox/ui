<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col_12 col-phone_6">
                    <h1 class="ui-header ui-header_1"> Датапикер </h1>
                    <br/>
                </div>
                <div class="col_2">
                   <ui-datepicker
                        name="datepicker"
                        caption="Выбрать дату">
                   </ui-datepicker> 
                </div>
                <div class="col_12">
                    <ui-code value='<ui-datepicker
    name="datepicker"
    caption="Выбрать дату">
</ui-datepicker>'>

                   </ui-code>
                </div>
            </div>
        </div>
    </layout>
</template>
<script>
export default {
  name: "page-datepicker"
};
</script>