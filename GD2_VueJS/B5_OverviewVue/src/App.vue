<!--
 1. Cu phap trong vue, Binding du lieu
 2.Composttion API & Option API(Khong dung)
 3. Ref & Reactive
 SFC: Sigle File Component: ca code logic, ca code giao dien, Ca css
 trong 1 file. Khac vs cac Framework khac:
  -->
<script setup>
// Logic
const mess = 'Helloworld'
const button = '<button type="button" class="btn">Base class</button>'
const idButton = 'buttonId'
const classButton = 'btn'
const tableContent = `
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>`
//  Function JS co ban
// function a() {}
// Arrow function : ES5, ES6
const clickMe = () => {
  // Noi dung function
  console.log('demo')
}
</script>

<template>
  <p>aaaa</p>
  <p>{{ mess }}</p>
  <div>{{ button }}</div>
  <!-- {{ gia tri }} : Hien thi dung gia tri len giao dien
      Hien thi html: v-html
     -->
  <div v-html="button"></div>
  <div v-html="tableContent"></div>
  <!--
      C1: v-bind:id/classs..
      C2: :id / :class ...
    -->
  <button :id="idButton" :class="classButton">Click here</button>
  <!-- C1: v-on:suj kien
      C2: @sk: @click, @change
    -->
  <!-- <button v-on:click="clickMe">Click</button> -->
  <!-- Alt Shif mui ten => dupilicate code  -->
  <button @click="clickMe">Click</button>
</template>
<style>
/* Chua CSS/SCSS */
</style>
