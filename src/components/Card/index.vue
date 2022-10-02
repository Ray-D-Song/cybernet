<template>
  <div class="page">
      <img :src=coverLink alt="封面">
    <span>{{name}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  props: ['name', 'coverLink'],
};
</script>

<style scoped lang="scss">
.page {
display: flex;
flex-direction: column;
color: #97e3fe;
width: 13.5vw;
height: 30vh;
justify-content: center;
align-items: center;
}

img {
  border-radius: 0.5em;
  width: 13.5vw;
}
</style>
