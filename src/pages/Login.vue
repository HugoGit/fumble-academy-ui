<template>
  <div class="center">
    <vs-dialog
      prevent-close
      not-close
      blur
      v-model="active"
    >
      <template #header>
        <h4 class="not-margin">
          Welcome to <b>Vuesax</b>
        </h4>
      </template>

      <div class="con-form">
        <vs-input v-model="email" placeholder="Email">
          <template #icon>
            @
          </template>
        </vs-input>
        <vs-input type="password" v-model="password" placeholder="Password">
          <template #icon>
            <i class='bx bxs-lock'></i>
          </template>
        </vs-input>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button @click="signin" block>
            Sign In
          </vs-button>

          <vs-button
            color="rgb(59,222,200)"
            gradient
            @click="facebook" block>
            Login/Register with facebook
          </vs-button>

          <div class="new">
            New Here? <a href="/register">Create New Account</a>
          </div>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      active: true,
      email: '',
      password: '',
      remember: false
    }
  },
  methods: {
    ...mapActions(['login']),
    signin () {
      this.login({ email: this.email, password: this.password }).then(() => this.$router.push({ name: 'Home' }))
    },
    facebook () {
      window.location = 'http://api.fumble-academy.local/redirect/facebook'
    }
  }
}
</script>

<style scoped>
.container {
  width: 350px;
  margin: auto;
}
.form {
  width: 100%;
}
.form-input {
  margin-top: 15px;
}
</style>
