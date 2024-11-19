<template>
  <section>
    <h1 style="text-align: center">Day la may tinh</h1>
    <h1 style="text-align: center">{{ !isUpdate ? 'Them may tinh' : 'Update may tinh' }}</h1>
    <!-- Mapping 2 chieu => v-model -->
    <FormMayTinhComponent v-model:mayTinh="newMayTinh" />
    <button @click="addMayTinh" v-show="!isUpdate">Add may tinh</button>
    <button @click="updateMayTinh" v-if="isUpdate">Update may tinh</button>
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(mt, index) in listMayTinh" :key="mt.id">
          <tr>
            <td>{{ index }}</td>
            <td>{{ mt.id }}</td>
            <td>{{ mt.name }}</td>
            <td>{{ mt.price }}</td>
            <td>{{ mt.descption }}</td>
            <td>
              <button @click="removeMayTinh(mt.id)">Xoa</button>
              <button @click="detailMayTinh(mt)">Detail</button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import FormMayTinhComponent from '../component/FormMayTinhComponent.vue'

// C1: Tu tao list may tinh
const listMayTinh = ref([
  {
    id: '1',
    name: 'name 1',
    price: 89,
    descption: 'descption 1',
  },
  {
    id: '2',
    name: 'name 2',
    price: 34,
    descption: 'descption 2',
  },
  {
    id: '3',
    name: 'name 3',
    price: 17,
    descption: 'descption 3',
  },
])
const removeMayTinh = (id) => {
  const index = listMayTinh.value.findIndex((mt) => mt.id === id)
  listMayTinh.value.splice(index, 1)
}
// Tao ra doi tuong may Tinh => PHUC VU HAM ADD/UPDATE/DETAIL
const newMayTinh = ref({
  name: '',
  price: '',
  descption: '',
})
// Ham add
const addMayTinh = () => {
  listMayTinh.value.push({
    id: listMayTinh.value.length + 1,
    ...newMayTinh.value, /// SAO CHEP DU LIEU TU OBJECT NEW MAY TINH VE OBJECT MOI
  })
  resertData()
}
const resertData = () => {
  newMayTinh.value = {
    name: '',
    price: '',
    descption: '',
  }
}
// isUpdate = true => UPDATE MAY TINH.
// isUpdate = false => ADD MAY TINH
const isUpdate = ref(false)
// VI TRI CUA DOI TUONG KHI DETAIL
const viTriUpdate = ref(-1)
// Detail
const detailMayTinh = (item) => {
  newMayTinh.value = { ...item }
  isUpdate.value = true
  // Vi tri
  viTriUpdate.value = listMayTinh.value.findIndex((mt) => mt.id === item.id)
}
// Update
const updateMayTinh = () => {
  listMayTinh.value[viTriUpdate.value] = { ...newMayTinh.value }
  resertData
  isUpdate.value = false
  viTriUpdate.value = -1
}
</script>
