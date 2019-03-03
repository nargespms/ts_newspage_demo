<template>
    <img class="HeaderPicImg" src="../../images/logo.png">
</template>

<script lang="ts">
import component from 'vue-class-component';
import  { Vue, Component, Prop} from "vue-property-decorator";

  @component({})
  export default class logo extends Vue {

  }
</script>

<style lang="scss">
  .logo_wrapper {
    float: right;
    img {
        width: 100px;
        height: 100px;
    }
  }
</style>

