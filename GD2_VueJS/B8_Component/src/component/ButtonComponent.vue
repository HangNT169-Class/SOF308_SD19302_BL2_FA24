<script setup>
// B1: Lay gia tri tu component cha truyen sang => props
// C1: defineProps(["truyen ten duoc truyen sang"])
// const propValue = defineProps(['countValue'])
// C2: Object : defineProps({
//  ten bien: kieu du lieu
// })
// 1 fle: 1 defineProps
const test = defineProps({
  countValue: String,
  count1Value: Number,
})
</script>
<template>
  <h1>Component Con</h1>
  <p>Gia tri component con duoc truyen tu cha:{{ test.countValue }}</p>
  <p>{{ test.count1Value }}</p>
  <p>Con</p>
  <ComponetA />
</template>
