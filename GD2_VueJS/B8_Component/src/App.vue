<script setup>
import { ref } from 'vue'
import ButtonComponent from './component/ButtonComponent.vue'

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
    <ButtonComponent countValue="das" :count1Value="number1" />
    <p>Cha: <ComponetA /></p>
  </div>
</template>
