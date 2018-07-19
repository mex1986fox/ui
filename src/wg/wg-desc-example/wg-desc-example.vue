<template>
    <div class="wg-desc-example">
        <span class="ui-header ui-header_3"> API </span>

        <button @click="isShow('classes')" class="ui-button ui-button_flat ui-button_mini" 
        :class="{'wg-desc-example__button_active':dDescShow.classes.show}"
        v-if="dClasses.length>0">
            Classes
        </button>
        <button @click="isShow('props')" class="ui-button ui-button_flat ui-button_mini"
            :class="{'wg-desc-example__button_active':dDescShow.props.show}"
            v-if="dProps.length>0">
            Props
        </button>
        <button @click="isShow('events')" class="ui-button ui-button_flat ui-button_mini"
            :class="{'wg-desc-example__button_active':dDescShow.events.show}"
            v-if="dEvents.length>0">
            & Events
        </button>
        <div class="wg-desc-example__description" v-if="dDescShow.classes.show">
            <table class="wg-desc-example__table">
                <tr class="wg-desc-example__tr">
                    <th class="wg-desc-example__th">Name</th>
                    <th class="wg-desc-example__th">Description</th>
                </tr>
                <tr class="wg-desc-example__tr" v-for="(val,key) in dClasses" :key="key">
                    <td class="wg-desc-example__td">{{val.name}}</td>
                    <td class="wg-desc-example__td">{{val.desc}}</td>
                </tr>
            </table>
        </div>
        <div class="wg-desc-example__description" v-if="dDescShow.props.show">
            <table class="wg-desc-example__table">
                <tr class="wg-desc-example__tr">
                    <th class="wg-desc-example__th">Name</th>
                    <th class="wg-desc-example__th">Description</th>
                    <th class="wg-desc-example__th">Default</th>
                </tr>
                <tr class="wg-desc-example__tr" v-for="(val,key) in dProps" :key="key">
                    <td class="wg-desc-example__td">{{val.name}}</td>
                    <td class="wg-desc-example__td">{{val.desc}}</td>
                    <td class="wg-desc-example__td">{{val.def}}</td>
                </tr>
            </table>
        </div>
        <div class="wg-desc-example__description" v-if="dDescShow.events.show">
            <table class="wg-desc-example__table">
                <tr class="wg-desc-example__tr">
                    <th class="wg-desc-example__th">Name</th>
                    <th class="wg-desc-example__th">Description</th>
                    <th class="wg-desc-example__th">Value</th>
                </tr>
                <tr class="wg-desc-example__tr" v-for="(val,key) in dEvents" :key="key">
                    <td class="wg-desc-example__td">{{val.name}}</td>
                    <td class="wg-desc-example__td">{{val.desc}}</td>
                    <td class="wg-desc-example__td">{{val.val}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
  name: "wg-desc-example",
  data() {
    return {
      dClasses:this.classes,
      dProps:this.props,
      dEvents:this.events,  
      dDescShow: {
        classes:{ name: "classes", show: true },
        props:{ name: "props", show: false },
        events:{ name: "events", show: false }
      }
    };
  },
  props:{
      classes:{
          type:Array,
          default:() => [] //[{name:"", desc:""}]
      },
      props:{
          type:Array,
          default:() =>[]//[{name:"", desc:"",def:""}]
      },
      events:{
          type:Array,
          default:() =>[]//[{name:"", desc:"",val:""}]
      }
  },
  methods: {
    isShow(nameDesc) {
      for (let k in this.dDescShow) {
        this.dDescShow[k].name == nameDesc
          ? (this.dDescShow[k].show = true)
          : (this.dDescShow[k].show = false);
      }
    }
  }
};
</script>
