<template>
    <div class="outer_main_header ">
        <div class="logo_wrapper">
            <logo/>
        </div>
        <div class="social_wrapper">
            <infoHeader/>
        </div>

    </div>
</template>

<script lang="ts">
  import component from 'vue-class-component';
  import  { Vue, Component, Prop} from "vue-property-decorator";
  import logo from './logo.vue'
  import infoHeader from './infoHeader.vue'

  @component({
     components: {
      logo,
      infoHeader,
    },
  })
  export default class myheader extends Vue  {

  }
</script>

<style lang="scss" scoped>
  .outer_main_header {
      background-color:#15243e;
  }
</style>


