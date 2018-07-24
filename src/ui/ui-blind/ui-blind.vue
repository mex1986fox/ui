<template>
    <transition name="ui-blind">
        <div class="ui-blind" v-if="dShow" @click="isClick">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
export default {
    name:"UiBlind",
    data(){
        return{
            dShow:this.show
        }
    },
    props:{
        show:{
            type:Boolean,
            default: false
        }
    },
    watch:{
        show(newQ){
            this.dShow=newQ;
        }
    },
    methods:{
        isClick(event){
            if (event.target == this.$el) {
                this.dShow=false;
                this.$emit("onHide");
            }
  
        }
    }
}
</script>
