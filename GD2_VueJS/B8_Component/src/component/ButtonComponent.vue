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
// event : defindEmits
// B1: Liet ke cac event
const eventButton = defineEmits('increaseValueNumber', 'increaseValueUpTo2')
// B2: Viet ham tu cha -> con
const callFunctionIncreaseValueNumber = () => {
  eventButton('increaseValueNumber')
}
const callFunctionIncreaseValueNumberUpTo2 = () => {
  eventButton('increaseValueUpTo2')
}
</script>
<template>
  <h1>Component Con</h1>
  <p>Gia tri component con duoc truyen tu cha:{{ test.das }}</p>
  <p>{{ test.count1Value }}</p>
  <p>Con</p>
  <button @click="callFunctionIncreaseValueNumber">Click tang 1 don vi</button>
  <br />
  <button @click="callFunctionIncreaseValueNumberUpTo2">Click tang 2 don vi</button>
  <!-- <ComponetA /> -->
</template>
