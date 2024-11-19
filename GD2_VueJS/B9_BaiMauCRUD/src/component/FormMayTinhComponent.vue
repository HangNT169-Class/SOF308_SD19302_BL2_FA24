<template>
  <form>
    Ten may tinh: <input type="text" v-model="mayTinh.name" /> <br />
    Gia: <input type="number" v-model="mayTinh.price" /> <br />
    Mo ta: <input type="text" v-model="mayTinh.descption" /> <br />
  </form>
</template>
<script setup>
defineModel('mayTinh', {
  default: () => ({
    name: '',
    price: '',
    descption: '',
  }),
})
</script>
