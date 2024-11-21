<template>
  <section>
    <h2>Day la Sinh vien</h2>
    <table>
      <thead>
        <tr>
          <th>Stt</th>
          <th>id</th>
          <th>ten</th>
          <th>tuoi</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="sv in listSinhVien" :key="sv.mssv">
          <tr>
            <td>{{ sv.mssv }}</td>
            <td>{{ sv.ten }}</td>
            <td>{{ sv.tuoi }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </section>
</template>
<script setup>
import { ref } from 'vue'

const listSinhVien = ref([
  {
    mssv: 1,
    tuoi: 22,
    ten: 'hoanf',
  },
])
</script>
