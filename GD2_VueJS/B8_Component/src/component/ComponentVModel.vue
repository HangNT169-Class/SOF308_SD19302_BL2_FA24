<template>
  <p>Component con</p>
  Email: <input v-model="email" /> <br />
  Username: <input v-model="username" /> <br />
  <p>Gia tri cua component con:</p>
  <p>Con: {{ email }} - {{ username }}</p>
  <button @click="setUpDefaultCon()">Setup value default</button>
</template>
<script setup>
// emits
// Neu truyen bien bt => defineProps
// 2 chieu => defineModel
const email = defineModel('email')
const username = defineModel('username')
// const props = defineProps({
//   username: String,
//   email: String,
// })
const setUpDefaultCon = () => {
  ;(email.value = 'con@gmail.com'), (username.value = 'con')
}
</script>
