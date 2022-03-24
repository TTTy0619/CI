<template>
  <div>
    <button ref="a" @click="handleClick">emit</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('z');
      this.$emit('change');
    },
  },
};
</script>
<style scoped>
.madeup {
  position: relative;
  top: 0;
  width: 10px;
  height: 100px;
  color: red;
}
</style>
