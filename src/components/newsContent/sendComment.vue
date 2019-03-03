<template>
    <form class="sendForm" action="" method="post" @submit.prevent="onSubmit">
        <fieldset>
            <legend>Send Your Opinions:</legend>
            <input  v-model="Name" placeholder="Name" type="text">
            <input v-model="email" type="email" placeholder="emailaddress">
            <textarea v-model="opinion" name="opinion"  cols="40" rows="4"></textarea>
            <input  type="submit" value="send" class="sendButton" >
            <p v-if="errors.length">
                <span>
                    please correct the folowing error(s) :
                </span>
                <ul>
                    <li class="error_wrap" v-for="error in errors" v-bind:key="error.index"> {{error}}</li>
                </ul>
            </p>
           <div class="sucmsg">{{ message }}</div>
           <div class="sucmsg">{{ Secmessage }}</div>
           <div class="sucmsg">{{ thirdmessage }}</div>
        </fieldset>


    </form>

</template>

<script lang="ts">
  import component from 'vue-class-component';
  import  { Vue, Component, Prop} from "vue-property-decorator";

  @component({})
export default class sendComment extends Vue {
          Name :string= '';
          opinion:string= '';
          email :string= '';
          errors :Array<string>= [];
          message:string= '';
          Secmessage:string= '';
          thirdmessage:string= '';

        onSubmit () {
            if (this.opinion.length !== 0 && this.email.length !== 0 && this.errors.length == 0) {
                let formData = {
                    firstName : this.Name,
                    email : this.email,
                    opinion : this.opinion,
                }
                //successfull message
                this.message = "'your message has succesfully sent'";
                //for resetting form
                this.Name = '',
                this.email = '',
                this.opinion = '';
            }
            else if (!this.opinion) {
                this.errors = [];
                this.errors.push("your opinion is important for us!");
            }
            else if (!this.email) {
                this.errors = [];
                this.errors.push("enter your email please ,so we could reply ");
            }
            else if (this.opinion.length !== 0 && this.email.length !== 0 && this.errors.length !== 0){
                let formData = {
                    firstName : this.Name,
                    email : this.email,
                    opinion : this.opinion,
                }
                //successfull message
                this.Secmessage = "'congrats! your message has succesfully sent'";
                //for resetting form
                this.Name = '',
                this.email = '',
                this.opinion = '';
                this.errors = [];
            }
        }
}
</script>

<style lang="scss">
.sendForm {
    input ,  textarea {
        background-color: #f7f7f7;
        border: none;
        -webkit-box-shadow: inset 0 1px 2px 2px rgba(0, 0, 0, 0.35);
        -moz-box-shadow: inset 0 1px 2px 2px rgba(0, 0, 0, 0.35);
        box-shadow: inset 0 1px 2px 1px rgba(0, 0, 0, 0.35);
        margin-bottom: 4px;
        padding: 8px;
        box-sizing: border-box;
        width: 49%;
    }
    textarea {
        width: 100%;
        resize: vertical;
        box-sizing: border-box;
    }
    .sendButton {
        background-color: #2ab7ae;
        border: 1px solid #2ab7ae;
        color: white;
        margin-left: 2px;
        margin-top: 6px;
    }
}
</style>
