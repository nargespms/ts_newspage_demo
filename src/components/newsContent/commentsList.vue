<template>
    <div class="commentsList_wrapper">
        <div class="commentsList_Header">
            <span>
                users comments
            </span>
        </div>
        <ul class="commentsList">
            <li v-for="comment in comments" :key="comment.index">
                <div class="cm_inner_wrapp">
                    <h3>
                        name:  {{comment.name}}
                    </h3>
                    <time>
                        date: {{comment.date}}
                    </time>
                    <h4>
                        {{comment.content}}
                    </h4>

                </div>

            </li>
        </ul>
    </div>
</template>

<script lang="ts">
  import component from 'vue-class-component';
  import  { Vue, Component, Prop} from "vue-property-decorator";


  import comments from '../../data/comments.json'
  @component({})

  export default class commentsList extends Vue {
    comments = comments;
  }
</script>

<style lang="scss">
  .commentsList_Header {
    background-color: #2ab7ae;
    border: 1px solid #2ab7ae;
    padding: 6px 8px;
    color: #fff;
    -webkit-box-shadow: inset 0 1px 2px 2px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: inset 0 1px 2px 2px rgba(0, 0, 0, 0.35);
    box-shadow: inset 0 1px 2px 1px rgba(0, 0, 0, 0.35);
  }
  .commentsList_wrapper {
      margin-top: 24px;
      .commentsList {
          li {
            margin-top: 16px;
              h3 {
                float: left;
                padding: 4px 8px;
              }
              time {
                float: right;
              }
              h4 {
                width: 100%;
                float: left;
                color: #083f4b;
                padding: 4px 8px;
                box-sizing: border-box;
                border-top: 1px solid #baabab;
              }
          }
      }
      .cm_inner_wrapp {
        border: 1px solid rgb(126, 123, 123);
        border-top: none;
        padding: 4px 8px;
        overflow: auto;
      }
  }

</style>

