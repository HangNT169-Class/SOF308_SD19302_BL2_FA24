<script setup>
import { ref } from 'vue'

const isLogin = ref(true)

const toggleEvent = () => {
  isLogin.value = !isLogin.value
  console.log(isLogin.value)
}
// status nguoi dung
const userStatus = ref('Online')

const changeStatus = () => {
  if (userStatus.value === 'Online') {
    userStatus.value = 'away'
  } else if (userStatus.value === 'away') {
    userStatus.value = 'busy'
  } else {
    userStatus.value = 'Online'
  }
}
const isShow = ref(false)
const checkHienThiNoiDung = () => {
  isShow.value = !isShow.value
}
const mess1 = ref('')
const number1 = ref(0)
const number2 = ref(0)
const tong = ref(0)
const tinhTong = () => {
  tong.value = Number(number1.value) + Number(number2.value)
}
const gioiTinh = ref('')
</script>

<template>
  <!--
  Directive - Re nhanh: v-if & v-show
  v-if: Muon hien thi/loai bo phan tu => Dom se duoc cap nhat (render lai)
  v-show: Cap nhat them thuoc tinh CSS => Dom k thay doi (khong duoc render lai)
  Bai toan (render lai nhieu )=> v-if.
  Chi can hien thi bat/tat css => v-show
   -->
  <div>
    <!-- Hien thi ve trang thai dang nhap -->
    <h1>V -If/else</h1>
    <h1>Kiem tra dang nhap</h1>
    <!-- C1: Toan tu 3 ngoi -->
    <p>Cach 1: Toan tu 3 ngoi</p>
    <p>{{ isLogin == true ? 'Xin chao nguoi dung ' : 'Nguoi dung chua dang nhap' }}</p>
    <!-- C2: If-else -->
    <p>Cach 2: Ifelse</p>
    <p v-if="isLogin">Xin chao nguoi dung - C2</p>
    <p v-else>Nguoi dung chua dang nhap</p>
    <button @click="toggleEvent()">{{ isLogin ? 'Đăng nhập' : 'Đăng xuất' }}</button>
    <!-- Button - hien thi ve trang thai cua nguoi dung  -->
    <!-- Toan tu 3 ngoi
    dk1 ? gia tri cua dk1 : dk2 ? gia tri cua dk2 : dk3 ?...
     -->
    <p>
      {{
        userStatus === 'Online'
          ? 'Nguoi dung dang hoat dong'
          : userStatus === 'away'
            ? 'Nguoi dung khong hoat dong'
            : 'Nguoi dung dang ban'
      }}
    </p>
    <p>Cach 2</p>
    <h1 v-if="userStatus === 'Online'">Dang hoat dong</h1>
    <h1 v-else-if="userStatus === 'away'">Nguoi dung khong hoat dong</h1>
    <h1 v-else>Nguoi dung ban</h1>
    <button @click="changeStatus()">Thay đổi trạng thái người dùng</button>
  </div>
  <div>
    <h1>Noi dung v-show</h1>
    <h1 v-show="isShow">NOI DUNG NAY DUOC AN HOAC HIEN</h1>
    <button @click="checkHienThiNoiDung">Click an/hien noi dung</button>
  </div>
  <div>
    <h1>Form Data Binding - Binding du lieu - Binding 2 chieu</h1>
    Messs: <input type=" text" v-model="mess1" />
    <p>Messs vua nhap la: {{ mess1 }}</p>
    <!-- Co 2 o input  => button cong => tong cua 2 gia tri nhap vao 2 o input -->
    Number 1 : <input type="text" v-model="number1" />
    <br />
    Number 2:<input type="text" v-model="number2" />
    <br />
    <button @click="tinhTong">Tinh tong</button>
    <p>Toong = {{ tong }}</p>
    <input type="radio" v-model="gioiTinh" value="Nam" name="gt" /> Nam
    <input type="radio" v-model="gioiTinh" value="Nu" name="gt" /> Nu
    <p>{{ gioiTinh }}</p>
  </div>
</template>
