<template>
    <ul>
        <li class="mostcomments" v-for="item in myjson" v-bind:key="item._id">
           friend's name: {{item.friends[0].name}}
        </li>
    </ul>
</template>

<script lang="ts">
  import component from 'vue-class-component';
  import  { Vue, Component, Prop} from "vue-property-decorator";
  import generated from '../../data/generated.json'

  @component({})

  export default class mostcoments extends Vue {
    myjson = generated;

  }
</script>
