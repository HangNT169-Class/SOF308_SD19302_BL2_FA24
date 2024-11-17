<script setup>
import { ref } from 'vue'
import ButtonComponent from './component/ButtonComponent.vue'
import ComponentVModel from './component/ComponentVModel.vue'

const nhanViens = ref([
  {
    msnv: 'ph23',
    ten: 'Hai',
    tuoi: 11,
    gioitinh: 'Nam',
    soNamLV: 2,
  },
  {
    msnv: 'ph98',
    ten: 'Huy',
    tuoi: 19,
    gioitinh: 'Nam',
    soNamLV: 5,
  },
  {
    msnv: 'ph238',
    ten: 'Hau',
    tuoi: 19,
    gioitinh: 'Nam',
    soNamLV: 4,
  },
])
const number1 = ref(5)
const count = ref(0)
const increaseValue = () => {
  count.value++
}
const increaseValue2 = () => {
  count.value += 2
}
const username = ref('HangNT169')
const email = ref('HangNT169@fpt.edu.vn')
const updateCha = () => {
  ;(username.value = 'Cha'), (email.value = 'cha@gmail.com')
}
</script>

<template>
  <div>
    <h1>On tap</h1>
    <!--
  Tao doi tuong NhanVien gom cac truong sau:
    maNV - String,
    ten - String,
    tuoi - Number,
    gioiTinh - String,
    soNamLamViec - Number
    1. Hien thi danh sach NhanVien len table :
    STT, MaNV, Ten, Tuoi, Gioi tinh, SoNamLamViec
    2. Hien thi danh sach Nhan vien co tuoi >=15 len table
    -->
    <table>
      <thead>
        <td>STT</td>
        <td>maNV</td>
        <td>Ten</td>
        <td>Tuoi</td>
        <td>gioiTinh</td>
        <td>SoNamLamViec</td>
      </thead>
      <tbody>
        <template v-for="(nv, index) in nhanViens" :key="nv.msnv">
          <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ nv.msnv }}</td>
            <td>{{ nv.ten }}</td>
            <td>{{ nv.tuoi }}</td>
            <td>{{ nv.gioitinh }}</td>
            <td>{{ nv.soNamLV }}</td>
          </tr>
        </template>
      </tbody>
    </table>
    <p>Bai 2</p>
    <table>
      <thead>
        <td>STT</td>
        <td>maNV</td>
        <td>Ten</td>
        <td>Tuoi</td>
        <td>gioiTinh</td>
        <td>SoNamLamViec</td>
      </thead>
      <tbody>
        <!-- KHONG NEN CHUNG DONG V-IF & V-FOR => TACH CAC DIRECTIVE RA -->
        <template v-for="(nv, index) in nhanViens" :key="nv.msnv">
          <template v-if="nv.tuoi >= 15">
            <tr>
              <td>{{ index + 1 }}</td>
              <td>{{ nv.msnv }}</td>
              <td>{{ nv.ten }}</td>
              <td>{{ nv.tuoi }}</td>
              <td>{{ nv.gioitinh }}</td>
              <td>{{ nv.soNamLV }}</td>
            </tr>
          </template>
        </template>
      </tbody>
    </table>
  </div>
  <div>
    <h1>Component trong Vue JS</h1>
    <!-- Component trong Vue JS
      chia nho giao dien => tach nho cac phan trong giao dien ra
      => Tai su dung
      Component: Bao gom HTML/CSS/JS
      => Tach ra thanh .VUE
      Compoent giup xay dung giao dien phuc tap
      => Tach nho giao dien thanh cac thanh phan be hon
      Co 2 loai component:
      1. Cuc bo => Chi trong file goi dc
      2. Toan cuc => Moi noi deu goi dc (giong static trong Java )
    -->
    <!-- Goi component -->
    <!-- <ButtonComponent /> -->
    <!-- Giong nhu the : Bat dau < => The thieu / -->
    <!-- C1: Goi bang ten file : ButtonComponent -->
    <p>C2:</p>
    <!-- C2: Goi bang dau - : viet thuong het -->
    <!-- <button-component /> -->
    <!-- Chi co the truyen gia tri
     tu cha -> sang con ( KHONG CO CHIEU NGUOC LAI TU VUE 3.4 DO XUONG )
     => DUNG PROPS:
      -->
    <p>Cha: {{ number1 }}</p>
    <!-- Truyen gia tri sang component con -->
    <!-- Khi truyen du lieu => luon luon chuyen sang : String
      Minh muon khai bao kieu khac String => them dau :truoc ten truyen sang
       -->
    <!-- COMPONENT => GIA TRI COMPONENT CHI DC TRUYEN 1 CHIEU => CHA =>CON -->
    <!-- Cha => con: props => KIEU DU LIEU STRING
      PROPS : GIA TRI
       -->
    <!-- Truyen event vao cho tu cha -> con : @tenhamcantruyen
     @tencondung = tenhambo
     -->
    <p>Count = {{ count }}</p>
    <ButtonComponent
      countValue="das"
      :count1Value="number1"
      @increaseValueNumber="increaseValue"
      @increaseValueUpTo2="increaseValue2"
    />
    <p>Cha: <ComponetA /></p>
  </div>
  <div>
    <!-- Ho tro binding nhieu chieu  3.4 tro len -->
    <h1>V-Model - Binding nhieu chieu</h1>
    <p>Cha: {{ username }} - {{ email }}</p>
    <!-- <ComponentVModel :username="username" :email="email" /> -->
    <ComponentVModel v-model:username="username" v-model:email="email" />
    <button @click="updateCha">Update cha</button>
  </div>
</template>
