<template>
    <layout>
        <div class="container">
            <div class="row">
                <div class="col_12 col-phone_12">
                    <br/>
                    <h1 class="ui-header ui-header_1"> Типография </h1>
                    <span class="ui-header ui-header_2"> Заголовки: </span>
                    <span class="ui-header ui-header_1"> Заголовок 1-ого уровня: </span>
                    <span class="ui-header ui-header_2"> Заголовок 2-ого уровня: </span>
                    <span class="ui-header ui-header_3"> Заголовок 3-ого уровня: </span>
                    <span class="ui-header ui-header_4"> Заголовок 4-ого уровня: </span>
                    <span class="ui-header ui-header_5"> Заголовок 5-ого уровня: </span>
                    <span class="ui-header ui-header_6"> Заголовок 6-ого уровня: </span>
                </div>
                <div class="col_12 col-phone_12">
                    <ui-code value='<span class="ui-header ui-header_1"> Заголовок 1-ого уровня: </span>
<span class="ui-header ui-header_2"> Заголовок 2-ого уровня: </span>
<span class="ui-header ui-header_3"> Заголовок 3-ого уровня: </span>
<span class="ui-header ui-header_4"> Заголовок 4-ого уровня: </span>
<span class="ui-header ui-header_5"> Заголовок 5-ого уровня: </span>
<span class="ui-header ui-header_6"> Заголовок 6-ого уровня: </span>'>

                    </ui-code>
                </div>
                <div class="col_12">
                    <wg-desc-example :classes="[
                        {name:'.ui-header', desc:'Корневой класс для заголовков'},
                        {name:'.ui-header_1, ..., ui-header_6', desc:'Модификаторы размера заголовка.'}
                    ]">
                    </wg-desc-example>
                </div>
                <div class="col_12 col-phone_12">
                    <br/>
                    <span class="ui-header ui-header_2"> Описания </span>
                    <span class="ui-header ui-header_4"> Описание стандартное: </span>
                    <span class="ui-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa recusandae aspernatur accusantium animi cumque dignissimos eligendi. Harum possimus, veniam rem assumenda vel cumque repellat iusto pariatur reiciendis consequatur, quae alias? Sed itaque, reprehenderit amet eum laudantium dignissimos dolorum impedit. Corporis totam odio adipisci debitis repellendus facilis quidem harum quisquam perspiciatis saepe nam ex nostrum, officia sit vero aperiam voluptatibus odit? Dolor unde dolorem cupiditate sed veritatis! Quos possimus ipsam soluta adipisci dolorum numquam iure ipsum laborum similique, ab, beatae saepe in molestias voluptatibus magni aperiam minima exercitationem, animi mollitia! Ab. Eveniet iste quia fugiat blanditiis tempora cum, modi harum tempore reprehenderit, in, porro rerum omnis recusandae veritatis? Molestias laudantium earum, ipsum, nulla numquam asperiores atque quasi, quas ex ducimus quis. Nam vitae, provident, veniam modi esse maxime asperiores saepe tenetur veritatis odio delectus perferendis odit aperiam ad consectetur adipisci? Quisquam inventore iste sapiente eos. Molestias aliquid laborum rem reprehenderit dolorum.
                    </span>
                    <ui-code value='<span class="ui-description"> Текст .... </span>'>
                    </ui-code>
                    <br/>
                    <span class="ui-header ui-header_4"> Описание маленькое: </span>
                    <span class="ui-description ui-description_mini">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa recusandae aspernatur accusantium animi cumque dignissimos eligendi. Harum possimus, veniam rem assumenda vel cumque repellat iusto pariatur reiciendis consequatur, quae alias? Sed itaque, reprehenderit amet eum laudantium dignissimos dolorum impedit. Corporis totam odio adipisci debitis repellendus facilis quidem harum quisquam perspiciatis saepe nam ex nostrum, officia sit vero aperiam voluptatibus odit? Dolor unde dolorem cupiditate sed veritatis! Quos possimus ipsam soluta adipisci dolorum numquam iure ipsum laborum similique, ab, beatae saepe in molestias voluptatibus magni aperiam minima exercitationem, animi mollitia! Ab. Eveniet iste quia fugiat blanditiis tempora cum, modi harum tempore reprehenderit, in, porro rerum omnis recusandae veritatis? Molestias laudantium earum, ipsum, nulla numquam asperiores atque quasi, quas ex ducimus quis. Nam vitae, provident, veniam modi esse maxime asperiores saepe tenetur veritatis odio delectus perferendis odit aperiam ad consectetur adipisci? Quisquam inventore iste sapiente eos. Molestias aliquid laborum rem reprehenderit dolorum.
                    </span>
                    <ui-code value='<span class="ui-description ui-description_mini"> Текст .... </span>'>
                    </ui-code>
                    <br/>
                    <span class="ui-header ui-header_4"> Описание большое: </span>
                    <span class="ui-description ui-description_big">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa recusandae aspernatur accusantium animi cumque dignissimos eligendi. Harum possimus, veniam rem assumenda vel cumque repellat iusto pariatur reiciendis consequatur, quae alias? Sed itaque, reprehenderit amet eum laudantium dignissimos dolorum impedit. Corporis totam odio adipisci debitis repellendus facilis quidem harum quisquam perspiciatis saepe nam ex nostrum, officia sit vero aperiam voluptatibus odit? Dolor unde dolorem cupiditate sed veritatis! Quos possimus ipsam soluta adipisci dolorum numquam iure ipsum laborum similique, ab, beatae saepe in molestias voluptatibus magni aperiam minima exercitationem, animi mollitia! Ab. Eveniet iste quia fugiat blanditiis tempora cum, modi harum tempore reprehenderit, in, porro rerum omnis recusandae veritatis? Molestias laudantium earum, ipsum, nulla numquam asperiores atque quasi, quas ex ducimus quis. Nam vitae, provident, veniam modi esse maxime asperiores saepe tenetur veritatis odio delectus perferendis odit aperiam ad consectetur adipisci? Quisquam inventore iste sapiente eos. Molestias aliquid laborum rem reprehenderit dolorum.
                    </span>
                    <ui-code value='<span class="ui-description ui-description_big"> Текст .... </span>'>
                    </ui-code>

                </div>
                <div class="col_12">
                    <wg-desc-example :classes="[
                        {name:'.ui-description', desc:'Корневой класс для описаний'},
                        {name:'.ui-description_big', desc:'Модификаторы размера описания. Устанавливает большие буквы.'},
                        {name:'.ui-description_mini', desc:'Модификаторы размера описания. Устанавливает маленькие буквы.'}
                    ]">
                    </wg-desc-example>
                </div>
                <div class="col_12 col-phone_12">
                    <br/>
                    <span class="ui-header ui-header_2"> Ссылки </span>
                    <br/>
                    <span class="ui-header ui-header_4"> Ссылка стандартная: </span>
                    <span class="ui-description ui-description">
                        Lorem ipsum dolor sit amet.
                        <router-link to="/checkboxs" class="ui-link">Чекбоксы...</router-link>
                        Unde inventore eius, molestias!
                    </span>
                    <span class="ui-header ui-header_4"> Ссылка маленькая: </span>
                    <span class="ui-description ui-description_mini">
                        Lorem ipsum dolor sit amet.
                        <router-link to="/checkboxs" class="ui-link ui-link_mini">Чекбоксы...</router-link>
                        Unde inventore eius, molestias!
                    </span>
                    <span class="ui-header ui-header_4"> Ссылка большая: </span>
                    <span class="ui-description ui-description_big">
                        Lorem ipsum dolor sit amet.
                        <router-link to="/checkboxs" class="ui-link ui-link_big">Чекбоксы...</router-link>
                        Unde inventore eius, molestias!
                    </span>

                    <ui-code value='<router-link to="/checkboxs" class="ui-link">Чекбоксы...</router-link>
<router-link to="/checkboxs" class="ui-link ui-link_mini">Чекбоксы...</router-link>
<router-link to="/checkboxs" class="ui-link ui-link_big">Чекбоксы...</router-link>'>
                    </ui-code>
                    <div class="col_12">
                        <wg-desc-example 
                            :classes="[
                                {name:'.ui-link', desc:'Корневой класс для ссылок'},
                                {name:'.ui-link_big', desc:'Модификаторы размера ссылки. Устанавливает большие ссылки.'},
                                {name:'.ui-link_mini', desc:'Модификаторы размера ссылки. Устанавливает маленькие ссылки.'}
                            ]">
                        </wg-desc-example>
                    </div>

                    <span class="ui-header ui-header_4"> Ссылки кнопочные: </span>
                    <div class="row">
                        <div class="col_12">
                            <router-link to="/checkboxs" class="ui-button ui-button_mini">
                                Сылка
                            </router-link>
                            <router-link to="/checkboxs" class="ui-button ui-button_blue">
                                Сылка
                            </router-link>
                            <router-link to="/checkboxs" class="ui-button ui-button_big ui-button_red">
                                Сылка
                            </router-link>
                            <router-link to="/checkboxs" class="ui-button ui-button_big ui-button_flat">
                                Сылка
                            </router-link>
                        </div>
                    </div>
                    <ui-code value='<router-link to="/checkboxs" class="ui-button ui-button_mini">
    Сылка
</router-link>
<router-link to="/checkboxs" class="ui-button ui-button_blue">
    Сылка
</router-link> 
<router-link to="/checkboxs" class="ui-button ui-button_big ui-button_red">
    Сылка
</router-link> 
<router-link to="/checkboxs" class="ui-button ui-button_big ui-button_flat">
    Сылка
</router-link>'></ui-code>
                    <span class="ui-header ui-header_4"> Ссылки кнопочные круглые: </span>
                    <div class="row">
                        <div class="col_12">
                            <router-link to="/checkboxs" class="ui-button ui-button_circle ui-button_circle_mini">
                                <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </router-link>
                            <router-link to="/checkboxs" class="ui-button ui-button_circle ui-button_blue">
                                <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </router-link>
                            <router-link to="/checkboxs" class="ui-button ui-button_circle ui-button_circle_big ui-button_red">
                                <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </router-link>
                            <router-link to="/checkboxs" class="ui-button ui-button_circle ui-button_circle_big ui-button_flat">
                                <i class="fa fa-heart-o" aria-hidden="true"></i>
                            </router-link>
                        </div>
                    </div>
                    <ui-code value='<router-link to="/checkboxs" class="ui-button ui-button_circle ui-button_circle_mini">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
</router-link>
<router-link to="/checkboxs" class="ui-button ui-button_circle ui-button_blue">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
</router-link> 
<router-link to="/checkboxs" class="ui-button ui-button_circle ui-button_circle_big ui-button_red">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
</router-link> 
<router-link to="/checkboxs" class="ui-button ui-button_circle ui-button_circle_big ui-button_flat">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
</router-link>'>
                    </ui-code>
                </div>
            </div>
        </div>
    </layout>
</template>
<script>
export default {
  name: "page-typography"
};
</script>