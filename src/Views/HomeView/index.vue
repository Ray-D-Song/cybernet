<!-- eslint-disable max-len -->
<!-- eslint-disable vue/valid-v-for -->
<template>
    <div class="page">
        <Card v-for="res in result" name="res.name" coverLink="cover/res.name" episode="res.episode"/>
    </div>
</template>

<script>
import axios from 'axios';
import Card from '@/components/Card/index.vue';

export default {
  data() {
    return {
      result: [],
    };
  },
  mounted() {
    axios.get('http://127.0.0.1:7070/getHomepageData').then((response) => {
      this.result = response.data;
      console.log(this.result);
    }).catch((error) => {
      console.log(error);
    });
  },
  components: { Card },
};
</script>

<style scoped lang="scss">

</style>
