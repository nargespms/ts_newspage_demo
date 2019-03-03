<template>
    <form class="survey_wrap clear"  @submit.prevent="countPerson()">
        <div class="clear">
            <span class="survey_question">
                choose one them :)
            </span>
            <div class="choices">
                <input type="radio" id="one" value="One" v-model="choosed">
                <label for="one">One</label>

                <input type="radio" id="two" value="Two" v-model="choosed">
                <label for="two">Two</label>
            </div>
        </div>
        <p class="choosed_item">you chosed : {{ choosed }}</p>
        <p class="numpart"> participated people : {{counter }}</p>
        <!-- button for submitting -->
        <input class="survey_but" type="submit" value="send">
        <div class="survey_msg"><span class="eeee"> {{showMe}}</span></div>
    </form>
</template>

<script lang ="ts">
import component from 'vue-class-component';
import  { Vue, Component, Prop} from "vue-property-decorator";
  @component({})
  export default class survey extends Vue {
      choosed:Array<number>= [];
      counter:number= 0;
      showMe:string = '';

       countPerson () {
          if (this.choosed.length !== 0 ){
            this.counter = this.counter +1;
            this.showMe = "thank you :)";

          }
          else if (this.choosed.length == 0) {
            //  console.log(this.choosed.length);
              this.showMe = "please choose one the above & try again!"
          }
      }
  }
</script>

<style lang="scss" scoped>
.survey_wrap {
    background-color: #ccccc6;
    margin-top: 16px;
    padding: 12px;
}
.survey_question {
    float: left;
}
.choices {
    float: left;
    padding-left: 12px;
}
.survey_but {
	background-color: #e7582a;
	border: 1px solid #df7e56;
	color: #fff;
	border-radius: 2px;
    padding: 4px 12px;
    float: left;
    margin-top: 12px;
}
.survey_msg {
	color: #ea3b16;
	float: right;
	padding-left: 32px;
	padding-top: 6px;
}
</style>


