<template>
    <ul>
        <li class="hot" v-for="item in myjson" v-bind:key="item._id">
           age: {{item.age}}
        </li>
    </ul>
</template>

<script lang="ts">
  import component from 'vue-class-component';
  import  { Vue, Component, Prop} from "vue-property-decorator";
  import generated from '../../data/generated.json'

  @component({})
  export default class hotest extends Vue  {
    myjson = generated;
  }
</script>
