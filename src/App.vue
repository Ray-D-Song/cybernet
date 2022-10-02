<template>
  <div class="page">
    <PageHeader />
    <hr />
    <div class="content">
      <Menu />
      <Card name="水星的魔女" coverLink="https://pic-base-1307984077.cos.ap-nanjing.myqcloud.com/202210022222613.webp"/>
    </div>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader/index.vue';
import Menu from './components/Menu/index.vue';
import Card from './components/Card/index.vue';

export default {
  components: {
    PageHeader,
    Menu,
    Card,
  },
};
</script>

<style scoped lang="scss">
hr {
  background-color: #f394f8;
}

.content {
  display: flex;
  flex-direction: row;
}
</style>
