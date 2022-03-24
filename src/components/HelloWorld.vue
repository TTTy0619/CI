<template>
  <div>
    <span class="count">{{ count }}</span>
    <button @click="increment">Increment</button>
    <Child-com @change="handleChange" />
  </div>
</template>

<script>
import ChildCom from './ChildCom.vue';
export default {
  name: 'HelloWorld',
  components: {
    ChildCom,
  },
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      emitted: false,
      count: 0,
      age: 1,
    };
  },
  methods: {
    increment() {
      this.count++;
    },

    handleChange() {
      this.emitted = true;
    },
  },
};
</script>
