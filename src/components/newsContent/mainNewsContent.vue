<template>
    <div class="main_news_content">
        <newsInfo/>
        <news/>
        <sendComment/>
        <commentsList/>
    </div>
</template>

<script lang="ts">
  import component from 'vue-class-component';
  import  { Vue, Component, Prop} from "vue-property-decorator";

  import newsInfo from './newsInfo.vue';
  import news from './news.vue';
  import sendComment from './sendComment.vue';
  import commentsList from './commentsList.vue';

  @component({
    components: {
        newsInfo,
        news,
        sendComment,
        commentsList,
    }
  })

  export default class mainNewsContent extends Vue {
  }
</script>

