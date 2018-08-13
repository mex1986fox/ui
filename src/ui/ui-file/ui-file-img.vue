<template>
    <div class="ui-file-img">
        <input class="ui-file-img__input"
            ref="file"
            type="file"
            name="file"
            multiple>
        <div v-for="(val, key) in dFiles"
            :key="key"
            class="ui-file-img__file">
            <div class="ui-file-img__file-icon">
                <i class="fa fa-file-o"
                    aria-hidden="true"></i>
            </div>
            <div class="ui-file-img__file-type">
                {{val.type.split("/")[1]}}
            </div>
            <div class="ui-file-img__file-src">
                {{val.name}}
            </div>
        </div>

        <div class="ui-file-img__buttons">
            <button v-if="dFiles.length==0"
                @click="isClickAddFile"
                class="ui-button ui-button_circle ui-button_mini ui-button_flat">
                <i class="fa fa-plus"
                    aria-hidden="true"></i>

            </button>
            <button v-if="dFiles.length>0"
                @click="isClickAddFile"
                class="ui-button ui-button_circle ui-button_circle__mini ui-button_flat">
                <i class="fa fa-pencil"
                    aria-hidden="true"></i>
            </button>
        </div>
        
    </div>
</template>

<script>
export default {
  name: "ui-file-img",
  data() {
    return {
      dFiles: [],
      dPath: undefined
    };
  },
  methods: {
    isClickAddFile() {
      this.$refs.file.click();
    },
    isClickDelFile(number) {}
  },
  mounted() {
    this.$refs.file.addEventListener("change", event => {
      let split = event.target.value.split("\\");
      let newstring = "";
      for (let k in split) {
        if (k < split.length - 1) {
          newstring = newstring + split[k] + "\\";
        }
      }
      console.log(event.target);
      this.dPath = newstring;
      this.dFiles = [];
      this.dFiles = event.target.files;
    });
  }
};
</script>