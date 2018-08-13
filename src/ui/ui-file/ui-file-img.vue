<template>
	<div class="ui-file-img"
	     tabindex="0">
		<input class="ui-file-img__input"
		       ref="file"
		       type="file"
		       name="file"
		       multiple>
		<span class="ui-file-img__caption"
		      :class="{ 'ui-file-img__caption_completed':modCompleted}">
			{{captionCompleted!="" && modCompleted?captionCompleted:caption}}
		</span>
		<div class="ui-file-img__files">
			<div class="ui-file-img__files-file"
			     v-for="(val, key) in dFiles"
			     :key="key">
				<div class="ui-file-img__files-icon">
					<i class="fa fa-file-o"
					   aria-hidden="true"></i>
				</div>
				<div class="ui-file-img__files-type">
					{{val.type.split("/")[1]}}
				</div>
				<div class="ui-file-img__files-src">
					{{val.name}}
				</div>
			</div>

		</div>

		<hr class="ui-file-img__border">
		<div class="ui-file-img__buttons">
			<button v-if="dFiles.length==0"
			        @click="isClickAddFile"
			        class="ui-button ui-button_circle ui-button_circle_mini">
				<i class="fa fa-plus"
				   aria-hidden="true"></i>

			</button>
			<button v-if="dFiles.length>0"
			        @click="isClickAddFile"
			        class="ui-button ui-button_circle ui-button_circle_mini">
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
      dPath: undefined,
      modCompleted: false
    };
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    caption: {
      type: String,
      default: ""
    },
    caption: {
      type: String,
      default: ""
    },
    captionCompleted: {
      type: String,
      default: ""
    },
    readonly: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: ""
    }
  },

  methods: {
    isClickAddFile() {
      this.$el.focus();
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
      if (this.dFiles.length > 0) {
        this.modCompleted = true;
      }
    });
  }
};
</script>