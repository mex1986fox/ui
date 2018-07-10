<template>
    <div class="ui-code">
        <div ref="code"></div>
    </div>
</template>
<script>
export default {
    name:"ui-code",
    data(){
        return{
            code:this.value
        }
    },
    props: ['value'],
    mounted(){
                let code = this.value;
        

        code = code.replace(new RegExp("<",'g'), '&lt');
        code = code.replace(new RegExp(">",'g'), '&gt');

        code = code.replace(/\n/g, '<br/>');
        code = code.replace(/\s/g, '&nbsp;');
        console.log(code);
        this.$refs.code.innerHTML=code;

    }
}
</script>
