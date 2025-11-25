<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'

const childMsg = ref('No child msg yet')

function res(fromChildText) {
  childMsg.value = fromChildText;
}
</script>

<template>
  <ChildComp @response="res" />
  <p>{{ childMsg }}</p>
</template>
<!-- 難しめ？ -->