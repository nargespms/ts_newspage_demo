<template>
    <div class="tab_component_wrapper">
        <div id="tab_component" class="demo">
            <button class="tab_component_but"
                v-for="tab in tabs"
                v-bind:key="tab"
                v-bind:class="['tab-button', { active: currentTab === tab }]"
                v-on:click="currentTab = tab">
                    {{ tab }}
            </button>
            <component v-bind:is="currentTabComponent" class="tab"></component>
        </div>
    </div>
</template>

<script lang="ts">
  import component from 'vue-class-component';
  import  { Vue, Component, Prop} from "vue-property-decorator";

  import tabhotest from './tabhotest.vue';
  import tabmostview from './tabmostview.vue';
  import tabmostcoments from './tabmostcoments.vue';

  @component({
    components: {
      tabmostview,
      tabmostcoments,
      tabhotest,
    }
  })
  export default class wrappertab extends Vue {
    currentTab:string = 'hotest';
    tabs:Array<string> = ['hotest', 'mostview', 'mostcoments'];

      get currentTabComponent() {
          return 'tab' + this.currentTab.toLowerCase()
      }
  }

</script>

<style lang="scss" scoped>
  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #2ab7ae;
    margin-bottom: -1px;
    margin-right: -1px;
    color: #fff;
  }
  .tab-button:hover {
    background: #1a7a74;
  }
  .tab-button.active {
    background: #1a7a74;
  }
  .tab {
      background-color: #ccccc6;
      border: 1px solid #ccc;
      padding: 10px;
  }
  .tab li {
    line-height: 24px;
  }
</style>
