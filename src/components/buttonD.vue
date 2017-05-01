<template>
	<button class="button button-3d button-highlight" >
		查看规则
	</button>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		props: ['text'],

	}
</script>
<style lang="scss">
.button-3d {
  position: relative;
  width: 140px;
  height: 39px;
  top: 0;
  box-shadow: 0 7px 0 #bbbbbb, 0 8px 3px rgba(0, 0, 0, 0.2);
  font-size: 18px;
 }
.button-3d:hover, .button-3d:focus {
  box-shadow: 0 7px 0 #bbbbbb, 0 8px 3px rgba(0, 0, 0, 0.2);
}
.button-3d:active, .button-3d.active, .button-3d.is-active {
  top: 5px;
  transition-property: all;
  transition-duration: .15s;
  box-shadow: 0 2px 0 #bbbbbb, 0 3px 3px rgba(0, 0, 0, 0.2);
}
.button-highlight,
.button-highlight-flat {
  background-color: #fff55b;
  border-color: #fff55b;
  color: #e13701;
}
.button-highlight:visited,
.button-highlight-flat:visited {
  color: #FFF;
}
.button-highlight:hover, .button-highlight:focus,
.button-highlight-flat:hover,
.button-highlight-flat:focus {
  background-color: #fff55b;
  border-color: #fff55b;
  color: #e13701;
}
.button-highlight:active, .button-highlight.active, .button-highlight.is-active,
.button-highlight-flat:active,
.button-highlight-flat.active,
.button-highlight-flat.is-active {
  background-color: #fff55b;
  border-color: #fff55b;
  color: #f9b500;
}

.button-3d.button-highlight {
  box-shadow: 0 7px 0 #f9b500, 0 8px 3px rgba(0, 0, 0, 0.3);
}
.button-3d.button-highlight:hover, .button-3d.button-highlight:focus {
  box-shadow: 0 7px 0 #f9b500, 0 8px 3px rgba(0, 0, 0, 0.3);
}
.button-3d.button-highlight:active, .button-3d.button-highlight.active, .button-3d.button-highlight.is-active {
  box-shadow: 0 2px 0 #b27401, 0 3px 3px rgba(0, 0, 0, 0.2);
}
</style>