<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text"> Welcome </h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter Your Name</label>
          <input type="text" id="name" name="name" v-model="name">
          <p v-if="feedback" class="red-text"> {{ feedback }} </p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat () {
      if (this.name) {
        // console.log(this.name)
        this.$router.push({
          name: 'Chat',
          params: {
            name: this.name
          }
        })
      } else {
        this.feedback = 'Please Enter Your Name !!'
      }
    }
  }
}
</script>


<style scoped>
  .welcome {
    display: flex;
    align-items: center;
    justify-content: center
  }
  .card {
    margin: auto;
    width: 55%;
  }
  .card-content {
    padding: 2rem;
  }
  h2 {
    margin-top: 0;
  }
  form {
    width: 80%;
    margin: auto
  }
  label {
    font-size: 1.2rem
  }
  input {
    margin-bottom: 1rem !important
  }
  p {
    margin-bottom: 1rem !important
  }
  button {
    margin-top: 1rem
  }
  @media (max-width: 767px) {
    .card {
      width: 100%;
    }
  }
</style>
