<template>
    <div class="main_outer_wrapper con12">
        <myheader/>
        <div class="main_news_wrapper ">
            <mainNewsContent/>
        </div>
        <div class="sidebar">
            <wrappertab/>
            <survey/>
        </div>

    </div>
</template>



<script lang="ts">
  import component from 'vue-class-component';
  import  { Vue, Component, Prop} from "vue-property-decorator";

  import myheader from './components/header/myheader.vue';
  import mainNewsContent from './components/newsContent/mainNewsContent.vue';
  import wrappertab from './components/elements/wrappertab.vue';
  import survey from './components/content/survey.vue';

    @component({
      components: {
        myheader,
        mainNewsContent,
        wrappertab,
        survey,
      }
    })
    export default class App extends Vue {

    }

</script>

<style lang="scss" scoped>
.main_outer_wrapper  {
  overflow: auto;
}
.sidebar {
    width: 40%;
    float: right;
    box-sizing: border-box;
    padding-right: 16px;
    margin-top: 24px;
    box-sizing: border-box;

}
.main_news_wrapper {
    width: 60%;
    float: right;
    background-color: #ccccc6;
    padding: 12px;
    box-sizing: border-box;
    margin-top: 24px;
}
</style>



