<template>
    <div class="ui-radio" @click="isClick()">
        <span class="ui-radio__radio"
            :class="{'ui-radio__radio_active':dChecked}">
            <transition name="ui-radio__radio-point">
                <span class="ui-radio__radio-point" v-if="dChecked">
                
                </span>
            </transition>
        </span>
        <input class="ui-radio__input" type="radio" :name="dName" :checked="dChecked" :value="dValue">
        <span  class="ui-radio__caption" 
               :class="{'ui-radio__caption_disabled': dDisabled}">
            <slot></slot>
        </span>
    </div>
</template>
<script>
export default {
    data(){
        return{
            dValue: this.value,
            dName: this.name,
            dChecked: this.checked,
            dDisabled: this.disabled 
        }
    },
    methods:{
        isClick(){
            this.dChecked=!this.dChecked;
        }
    },
    props:{
        value:{
            type: String,
            default: ""
        },
        name:{
            type: String,
            default: ""
        },
        checked:{
            type: Boolean,
            default: false
        },
        disabled:{
            type: Boolean,
            default: false
        }
    }
}
</script>
