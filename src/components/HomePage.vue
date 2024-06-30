<template>
    <div class="flex flex-row gap-3 flex-wrap items-center justify-center h-screen">
      <TeamCard v-for="item in data" :key="item.id" :name="item.name" :email="item.email" :company="item.company" :address="item.address" :id="item.id" />
    </div>
</template>

<script>
import axios from 'axios';
import TeamCard from './TeamCard.vue';

export default {
  name: 'HomePage',
  components: {
    TeamCard,
  },
  data() {
    return {
      data: []
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.data = response.data;
      });
  }
};
</script>
  