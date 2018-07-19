<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col_12">
                    <span class="ui-header ui-header_2">Сетка адаптивная</span>
                </div>
            </div>
            <div class="row">
                <div class="col_12">
                    <div class="row">
                        <div class="col_1 
                        col-nbook_1 
                        col-tablet_1 
                        col-phone_1">
                            <div class="bit">
                                <p>col_1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col_12">
                    <div class="row">
                        <div class="col_2 col-nbook_2 col-tablet_2 col-phone_2">
                            <div class="bit">
                                <p>col_2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col_12">
                    <div class="row">
                        <div class="col_3 col-nbook_3 col-tablet_3 col-phone_3">
                            <div class="bit">
                                <p>col_3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col_12">
                    <div class="row">
                        <div class="col_4 col-nbook_4 col-tablet_4 col-phone_4">
                            <div class="bit">
                                <p>col_4</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col_12">
                    <div class="row">
                        <div class="col_5 col-nbook_5 col-tablet_5 col-phone_5">
                            <div class="bit">
                                <p>col_5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col_12">
                    <div class="row">
                        <div class="col_6 col-nbook_6 col-tablet_6 col-phone_6">
                            <div class="bit">
                                <p>col_6</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col_12">
                    <div class="row">
                        <div class="col_7 col-nbook_7 col-tablet_7 col-phone_6">
                            <div class="bit">
                                <p>col_7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col_12">
                    <div class="row">
                        <div class="col_8 col-nbook_8 col-tablet_8 col-phone_6">
                            <div class="bit">
                                <p>col_8</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col_12">
                    <div class="row">
                        <div class="col_9 col-nbook_9 col-tablet_9 col-phone_6">
                            <div class="bit">
                                <p>col_9</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col_12">
                    <div class="row">
                        <div class="col_10 col-nbook_10 col-tablet_10 col-phone_6">
                            <div class="bit">
                                <p>col_10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col_12">
                    <div class="row">
                        <div class="col_11 col-nbook_11 col-tablet_11 col-phone_6">
                            <div class="bit">
                                <p>col_11</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col_12">
                    <div class="row">
                        <div class="col_12 col-nbook_12 col-tablet_12 col-phone_6">
                            <div class="bit">
                                <p>col_12</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col_12">
                    <ui-code value='<div class="container">
    <div class="row">
        <div class="col_1 col-nbook_1 col-tablet_1 col-phone_1">
            <p>col_1</p>
        </div>
        <div class="col_2 col-nbook_2 col-tablet_2 col-phone_2">
            <p>col_2</p>
        </div>
        
        ...

        <div class="col_12 col-nbook_12 col-tablet_12 col-phone_6">
            <p>col_12</p>
        </div>
    </div>
</div>'>
                    </ui-code>
                </div>

                <div class="col_12">
                    <wg-desc-example :classes="[
                        {name:'.container', desc:'Класс контейнера. В него помещается адаптивная сетка, а именно классы .row и .coll_ '},
                        {name:'.row', desc:'Класс рядов, помещается в .container или .col_...'},
                        {name:'.col_1, ..., .col_12',desc:'Классы колонок для широких экранов, помещаются в row (всего 12 колонок)'},
                        {name:'.col-nbook_1, ..., .col-nbook_12',desc:'Классы колонок для экранов от 1190px до 990px, помещаются в row (всего 12 колонок)'},
                        {name:'.col-tablet_1, ..., .col-tablet_12',desc:'Классы колонок для экранов от 990px до 770px, помещаются в row (всего 12 колонок)'},
                        {name:'.col-phone_1, ..., .col-phone_6',desc:'Классы колонок для экранов от 770px, помещаются в row (всего 6 колонок)'}
                    ]">
                    </wg-desc-example>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col_12">
                    <h2>Смещение на столбец offset (фальшивый столбец)</h2>
                </div>
            </div>
            <div class="row">
                <div class="col_1 
                        col_offset-1
                        col-nbook_1 
                        col-nbook_offset-2
                        col-tablet_1 
                        col-tablet_offset-3
                        col-phone_1
                        col-phone_offset-5">
                    <div class="bit">
                        <p>col_1</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col_12">
                    <ui-code value='<div class="container">
    <div class="row">
        <div class="col_1 
                col_offset-1
                col-nbook_1 
                col-nbook_offset-2
                col-tablet_1 
                col-tablet_offset-3
                col-phone_1
                col-phone_offset-5">
            <p>col_1</p>
        </div>
    </div>
</div>'>
                    </ui-code>
                </div>
                <div class="col_12">
                    <wg-desc-example :classes="[
                        {name:'col_offset-1, ...,  col_offset-11', desc:'Классы добавляют смещение слева margin-left к классам .coll_1, ...,  col_12 '},
                        {name:' col-nbook_offset-1, ...,  col-nbook_offset-11', desc:'Классы добавляют смещение слева margin-left к классам .col-nbook_1, ..., col-nbook_12 '},
                        {name:' col-tablet_offset-1, ...,  col-tablet_offset-11', desc:'Классы добавляют смещение слева margin-left к классам .col-tablet_1, ..., col-tablet_12'},
                        {name:' col-phone_offset-1, ...,  col-phone_offset-5', desc:'Классы добавляют смещение слева margin-left к классам .col-phone_1, ..., col-phone_6'},
                    ]">
                    </wg-desc-example>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col_12">
                    <span class="ui-header ui-header_2">Вложенность </span>
                </div>
            </div>

            <div class="row">
                <div class="col_6 
                        col-nbook_6 
                        col-tablet_6 
                        col-phone_6">
                    <div class="bit" style="background-color:rgba(18, 174, 174, 0.3)">
                        <p>levele 1</p>
                        <div class="row">
                            <div class="col_6 
                        col-nbook_6 
                        col-tablet_6 
                        col-phone_6">
                                <div class="bit" style="background-color:rgba(168, 109, 109, 0.3)">
                                    <p>levele 2</p>
                                    <div class="row">
                                        <div class="col_6 
                                        col-nbook_6 
                                        col-tablet_6 
                                        col-phone_6">
                                            <div class="bit" style="background-color:rgba(196, 238, 10, 0.3)">
                                                <p>levele 3</p>

                                            </div>
                                        </div>
                                        <div class="col_6 
                                        col-nbook_6 
                                        col-tablet_6 
                                        col-phone_6">
                                            <div class="bit" style="background-color:rgba(23, 5, 221, 0.3)">
                                                <p>levele 3</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col_6 
                        col-nbook_6 
                        col-tablet_6 
                        col-phone_6">
                                <div class="bit" style="background-color:rgba(168, 31, 31, 0.3)">
                                    <p>levele 2</p>
                                    <div class="row">
                                        <div class="col_6 
                                        col-nbook_6 
                                        col-tablet_6 
                                        col-phone_6">
                                            <div class="bit" style="background-color:rgba(12, 201, 128, 0.3)">
                                                <p>levele 3</p>

                                            </div>
                                        </div>
                                        <div class="col_6 
                                        col-nbook_6 
                                        col-tablet_6 
                                        col-phone_6">
                                            <div class="bit" style="background-color:rgba(15, 228, 43, 0.3)">
                                                <p>levele 3</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col_12">
                    <ui-code value='<div class="container">
    <div class="row">
        <div class="col_6">
            <p>levele 1</p>

            <div class="row">
                <div class="col_6">
                    <p>levele 2</p>
                </div>
                <div class="col_6">
                    <p>levele 2</p>
                </div>
            </div>

        </div>
    </div>
</div>'>
                    </ui-code>
                </div>

                <div class="col_12">
                    <wg-desc-example :classes="[
                        {name:'.row', desc:'Класс рядов, помещается в .container или же в классы колонок .col_......'},
                        {name:'.col_1, ..., .col_12',desc:'Классы колонок для широких экранов, помещаются в row. Нельза помещать колоноки в колоноки, только если обернуть в .row'},
                        {name:'.col-nbook_1, ..., .col-nbook_12',desc:'Классы колонок для экранов от 1190px до 990px. Нельза помещать колоноки в колоноки, только если обернуть в .row'},
                        {name:'.col-tablet_1, ..., .col-tablet_12',desc:'Классы колонок для экранов от 990px до 770px. Нельза помещать колоноки в колоноки, только если обернуть в .row'},
                        {name:'.col-phone_1, ..., .col-phone_6',desc:'Классы колонок для экранов от 770px. Нельза помещать колоноки в колоноки, только если обернуть в .row'}
                    ]">
                    </wg-desc-example>
                </div>
            </div>
        </div>
    </layout>
</template>
<script>
export default {
  name: "page-grid"
};
</script>
<style>
ul {
  list-style-position: inside;
}

ol {
  list-style-position: outside;
}

.bit {
  background-color: rgba(0, 75, 255, 0.3);
  border: rgba(95, 95, 95, 0.4) solid 1px;
  height: auto;
  width: auto;
  content: "coll";
}

.bit::after {
  content: "computer display";
}

@media (min-width: 990px) and (max-width: 1190px) {
  .bit::after {
    content: "nbook display";
  }
}

@media (min-width: 770px) and (max-width: 990px) {
  .bit::after {
    content: "tablet display";
  }
}

@media (max-width: 770px) {
  .bit::after {
    content: "phone display";
  }
}
</style>
