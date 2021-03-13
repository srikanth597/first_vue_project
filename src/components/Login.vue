<template>
  <div class="main">
    <form @submit.stop.prevent="validateCredentials()">
      <h2>Login</h2>
      <div class="row">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          v-model="email"
        />
      </div>
      <div class="row">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          v-model="password"
        />
      </div>
      <div class="row">
        <button type="submit">
          Login
        </button>
      </div>
      <div class="row" v-if="notFound">
        <h4>{{ notFound }}</h4>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import users from '@/assets/users.json'
import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

type User = {
  email: string
  password: string
}
export default defineComponent({
  setup(_, { emit }) {
    const usersList = reactive(users as User[])
    const email = ref<string>('')
    const password = ref<string>('')
    const notFound = ref<string>('')
    const router = useRouter()

    function validateCredentials() {
      const foundUserIndex = usersList.findIndex(
        user => user.email === email.value && user.password === password.value
      )
      if (foundUserIndex !== -1) {
        router.push('/address')
        emit('logMeIn')
      } else {
        notFound.value = 'Invalid Credentials,Please Try again'
      }
    }

    return { email, password, validateCredentials, notFound }
  }
})
</script>

<style lang="scss">
.main {
  width: 100%;
  height: 100%;
  display: flex;
  form {
    margin: auto;
    h2 {
      text-align: center;
    }
    .row {
      text-align: center;
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      label {
        margin-right: 2rem;
      }
      button {
        margin: auto;
      }
    }
  }
}
</style>
