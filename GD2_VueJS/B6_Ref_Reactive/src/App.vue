<script setup>
import { reactive, ref } from 'vue'

// Dung Js binh thuong => vo dung => khong the cap nhat duoc dom
// let number = 0 // Khai bao bien Js binh thuong
// C1: ref
// let number = ref(0)
// C2: reactive: chi nhan vao 1 Object
let number = reactive({
  // Co the nhan nhieu thuoc tinh
  count: 0,
  count1: 1,
})
const clickButton = () => {
  // number++
  // Khi dung ref => muon lay gia tri .value
  // number.value++
  // reactive => muon lay gia tri => ten bien ( KHONG CAN .VALUE)
  number.count++
  console.log(number)
}

const sinhVien = ref({
  mssv: 'PH1234',
  ten: 'Doan Phong',
  tuoi: 18,
  diaChi: 'Cao dang fpt',
})
const listString = ref(['Str1', 'Str2'])
const nhanVien = reactive({
  msnv: 'p889',
  ten: 'Abc',
  tuoi: '28',
  diaChi: 'trung tam',
})
// Mang SV
const listSinhVien = ref([
  {
    mssv: 'ph99999',
    ten: 'shshshs',
    tuoi: '99',
    diachi: 'camau',
  },
  {
    mssv: 'ph9898',
    ten: ' hshshs',
    tuoi: '88',
    diachi: 'hd',
  },
  {
    mssv: 'ph98765',
    ten: ' abccc',
    tuoi: '77',
    diachi: 'hggg',
  },
])
</script>

<template>
  <!-- De co the thay doi gia tri va cap nhat lai vao dom
   => reactivity(phan ung): VUE se theo doi thay doi cua tung state
   => neu gia tri cua bien(state) thay doi => dom se cap nhat
   => Vue theo doi de cap nhat:
    1. ref : Trong composition API khuyen khich dung
    2. reactive
    Ref => Lay gia tri .value
    Tai sao phai ref:
      1. Ref: co the dung duoc trong template
      => Neu gt ref thay doi => template co duoc thay doi
      2. View se giup cac ban co the tu dong phat hien
      thay doi cua cac state => tu dong cap nhat dom tuong ung
      3. Neu k dung ref => Khai bao giong js thong thuong
      => Vue se k the theo doi duoc cac bien de cap nhat
      4. Vue theo doi duoc dua vao:
        1. Khi co 1 component/ 1 ref duoc tap ra
        => Vue se theo doi lien tuc de cap nhat dom khi can thiet
      ref co theo tao: so, chuoi, doi tuong {}, mang []..
        -->
  <h1>Buoi 6 - Ref & Reactiver & For</h1>
  <p>{{ number.count }}</p>
  <button @click="clickButton">Click here</button>
  <!-- VD: Tao 1 Object SV gom cac thuoc mssv, ten, tuoi , dia chuoi
   => Hien thi no len template
    -->
  <p>{{ sinhVien.mssv }}</p>
  <p>{{ sinhVien.ten }}</p>
  <p>{{ sinhVien.tuoi }}</p>
  <p>{{ sinhVien.diaChi }}</p>
  <p>{{ listString[0] }}</p>
  <p>{{ nhanVien.msnv }}</p>
  <p>{{ nhanVien.ten }}</p>
  <p>{{ nhanVien.tuoi }}</p>
  <p>{{ nhanVien.diaChi }}</p>
  <!-- Hien thi danh sach  -->
  <p>V-For trong VueJS</p>
  <!-- Cu phap:
    v-for = (value,key,index) in ds mang :key=truyen key vao day
     -->
  <p>Danh sach list SV</p>
  <ul>
    <!-- Thuong key: Khoa chinh  -->
    <li v-for="sv in listSinhVien" :key="sv.mssv">{{ sv.ten }} - {{ sv.tuoi }}</li>
  </ul>
  <table>
    <thead>
      <tr>
        <th>STT</th>
        <th>Ten</th>
        <th>Tuoi</th>
        <th>Dia chi</th>
      </tr>
    </thead>
    <tbody>
      <!-- Bat buoc phai them key :
       - La duy nhat
       - Toi uu trong qua trinh cap nhat dom
        -->
      <template v-for="(sv, index) in listSinhVien" :key="sv.mssv">
        <tr>
          <td>{{ index }}</td>
          <td>{{ sv.mssv }}</td>
          <td>{{ sv.ten }}</td>
          <td>{{ sv.tuoi }}</td>
          <td>{{ sv.diachi }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>
