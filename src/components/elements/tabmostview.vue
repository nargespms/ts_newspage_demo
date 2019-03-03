<template>
     <ul>
        <li class="mostview" v-for="item in myjson" v-bind:key="item._id">
            email : {{item.email}}
        </li>
    </ul>
</template>

<script lang="ts">
  import component from 'vue-class-component';
  import  { Vue, Component, Prop} from "vue-property-decorator";
  import generated from '../../data/generated.json'

  @component({})

export default class mostview extends Vue {
    myjson = generated
}
</script>

