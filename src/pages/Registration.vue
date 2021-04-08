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
        <vs-input v-model="name" placeholder="Name">
          <template #icon>
            <i class='bx bxs-user'></i>
          </template>
        </vs-input>
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
        <vs-input type="password" v-model="password_confirm" placeholder="Password confirmation">
          <template #icon>
            <i class='bx bxs-lock'></i>
          </template>
        </vs-input>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button @click="signup" block>
            Register
          </vs-button>
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
      name: '',
      email: '',
      password: '',
      password_confirm: '',
      remember: false
    }
  },
  methods: {
    ...mapActions(['register']),
    signup () {
      this.register({ name: this.name, email: this.email, password: this.password, password_confirm: this.password_confirm }).then(() => this.$router.push({ name: 'login' }))
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
