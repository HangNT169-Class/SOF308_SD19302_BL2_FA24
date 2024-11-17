<template>
  <section>
    <h1 style="text-align: center">Day la may tinh</h1>
    <FormMayTinhComponent />
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
  {
    id: '4',
    name: 'name 4',
    price: 83,
    descption: 'descption 4',
  },
  {
    id: '5',
    name: 'name 5',
    price: 18,
    descption: 'descption 5',
  },
  {
    id: '6',
    name: 'name 6',
    price: 86,
    descption: 'descption 6',
  },
  {
    id: '7',
    name: 'name 7',
    price: 16,
    descption: 'descption 7',
  },
  {
    id: '8',
    name: 'name 8',
    price: 99,
    descption: 'descption 8',
  },
  {
    id: '9',
    name: 'name 9',
    price: 45,
    descption: 'descption 9',
  },
  {
    id: '10',
    name: 'name 10',
    price: 30,
    descption: 'descption 10',
  },
  {
    id: '11',
    name: 'name 11',
    price: 1,
    descption: 'descption 11',
  },
  {
    id: '12',
    name: 'name 12',
    price: 67,
    descption: 'descption 12',
  },
  {
    id: '13',
    name: 'name 13',
    price: 43,
    descption: 'descption 13',
  },
  {
    id: '14',
    name: 'name 14',
    price: 64,
    descption: 'descption 14',
  },
  {
    id: '15',
    name: 'name 15',
    price: 78,
    descption: 'descption 15',
  },
  {
    id: '16',
    name: 'name 16',
    price: 40,
    descption: 'descption 16',
  },
  {
    id: '17',
    name: 'name 17',
    price: 33,
    descption: 'descption 17',
  },
  {
    id: '18',
    name: 'name 18',
    price: 26,
    descption: 'descption 18',
  },
  {
    id: '19',
    name: 'name 19',
    price: 59,
    descption: 'descption 19',
  },
  {
    id: '20',
    name: 'name 20',
    price: 3,
    descption: 'descption 20',
  },
  {
    id: '21',
    name: 'name 21',
    price: 11,
    descption: 'descption 21',
  },
  {
    id: '22',
    name: 'name 22',
    price: 30,
    descption: 'descption 22',
  },
  {
    id: '23',
    name: 'name 23',
    price: 59,
    descption: 'descption 23',
  },
  {
    id: '24',
    name: 'name 24',
    price: 10,
    descption: 'descption 24',
  },
  {
    id: '25',
    name: 'name 25',
    price: 42,
    descption: 'descption 25',
  },
  {
    id: '26',
    name: 'name 26',
    price: 7,
    descption: 'descption 26',
  },
  {
    id: '27',
    name: 'name 27',
    price: 17,
    descption: 'descption 27',
  },
  {
    id: '28',
    name: 'name 28',
    price: 38,
    descption: 'descption 28',
  },
  {
    id: '29',
    name: 'name 29',
    price: 93,
    descption: 'descption 29',
  },
  {
    id: '30',
    name: 'name 30',
    price: 17,
    descption: 'descption 30',
  },
  {
    id: '31',
    name: 'name 31',
    price: 80,
    descption: 'descption 31',
  },
  {
    id: '32',
    name: 'name 32',
    price: 75,
    descption: 'descption 32',
  },
  {
    id: '33',
    name: 'name 33',
    price: 17,
    descption: 'descption 33',
  },
  {
    id: '34',
    name: 'name 34',
    price: 80,
    descption: 'descption 34',
  },
  {
    id: '35',
    name: 'name 35',
    price: 65,
    descption: 'descption 35',
  },
  {
    id: '36',
    name: 'name 36',
    price: 20,
    descption: 'descption 36',
  },
  {
    id: '37',
    name: 'name 37',
    price: 97,
    descption: 'descption 37',
  },
  {
    id: '38',
    name: 'name 38',
    price: 58,
    descption: 'descption 38',
  },
  {
    id: '39',
    name: 'name 39',
    price: 53,
    descption: 'descption 39',
  },
  {
    id: '40',
    name: 'name 40',
    price: 21,
    descption: 'descption 40',
  },
  {
    id: '41',
    name: 'name 41',
    price: 89,
    descption: 'descption 41',
  },
  {
    id: '42',
    name: 'name 42',
    price: 34,
    descption: 'descption 42',
  },
  {
    id: '43',
    name: 'name 43',
    price: 73,
    descption: 'descption 43',
  },
  {
    id: '44',
    name: 'name 44',
    price: 94,
    descption: 'descption 44',
  },
  {
    id: '45',
    name: 'name 45',
    price: 94,
    descption: 'descption 45',
  },
  {
    id: '46',
    name: 'name 46',
    price: 23,
    descption: 'descption 46',
  },
  {
    id: '47',
    name: 'name 47',
    price: 16,
    descption: 'descption 47',
  },
  {
    id: '48',
    name: 'name 48',
    price: 90,
    descption: 'descption 48',
  },
  {
    id: '49',
    name: 'name 49',
    price: 54,
    descption: 'descption 49',
  },
  {
    id: '50',
    name: 'name 50',
    price: 77,
    descption: 'descption 50',
  },
  {
    id: '51',
    name: 'name 51',
    price: 47,
    descption: 'descption 51',
  },
  {
    id: '52',
    name: 'name 52',
    price: 16,
    descption: 'descption 52',
  },
  {
    id: '53',
    name: 'name 53',
    price: 8,
    descption: 'descption 53',
  },
  {
    id: '54',
    name: 'name 54',
    price: 66,
    descption: 'descption 54',
  },
  {
    id: '55',
    name: 'name 55',
    price: 99,
    descption: 'descption 55',
  },
  {
    id: '56',
    name: 'name 56',
    price: 92,
    descption: 'descption 56',
  },
  {
    id: '57',
    name: 'name 57',
    price: 11,
    descption: 'descption 57',
  },
  {
    id: '58',
    name: 'name 58',
    price: 45,
    descption: 'descption 58',
  },
  {
    id: '59',
    name: 'name 59',
    price: 36,
    descption: 'descption 59',
  },
  {
    id: '60',
    name: 'name 60',
    price: 39,
    descption: 'descption 60',
  },
  {
    id: '61',
    name: 'name 61',
    price: 75,
    descption: 'descption 61',
  },
  {
    id: '62',
    name: 'name 62',
    price: 76,
    descption: 'descption 62',
  },
  {
    id: '63',
    name: 'name 63',
    price: 87,
    descption: 'descption 63',
  },
])
const removeMayTinh = (id) => {
  const index = listMayTinh.value.findIndex((mt) => mt.id === id)
  listMayTinh.value.splice(index, 1)
}
</script>
