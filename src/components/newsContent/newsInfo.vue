<template >
    <div class="news_info">
        <span>
            newscode : {{mynews._id}}  /
        </span>
        <span>
            newsCategory : {{ mynews.newsCategory }}  /
        </span>
        <time>newsPublisheDate : {{mynews.datePublished }}</time>
    </div>
</template>

<script lang="ts">
  import component from 'vue-class-component';
  import  { Vue, Component, Prop} from "vue-property-decorator";

  import mainNewsData from '../../data/mainNewsData.json'
  @component({})
  export default class newsInfo extends Vue {
    mynews = mainNewsData;
  }
</script>

<style lang="scss" scoped>
  .news_info {

      background-color: #2ab7ae;
      padding: 6px;
      margin-bottom: 4px;
  }
</style>

