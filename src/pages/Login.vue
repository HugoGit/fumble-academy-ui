<template>
  <div class="container">
    <div class="center content-inputs">
      <vs-input class="form-input" v-model="email" placeholder="Email">
        <template #icon>
          @
        </template>
      </vs-input>
      <vs-input class="form-input" type="password" v-model="password" placeholder="Password">
        <template #icon>
          <i class='bx bxs-lock'></i>
        </template>
      </vs-input>
      <div class="flex">
        <vs-checkbox class="form-input" v-model="remember">Remember me</vs-checkbox>
        <a href="#">Forgot Password?</a>
      </div>
    </div>

    <div class="footer-dialog">
      <vs-button block>
        Sign In
      </vs-button>

      <div class="new">
        New Here? <a href="#">Create New Account</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      remember: false
    }
  }
}
</script>

<style scoped>
.container {
  width: 30%;
  margin: auto;
}
.form {
  width: 100%;
}
.form-input {
  margin-top: 15px;
}
</style>
