<!-- <script setup>
import { ref, onMounted } from 'vue'

const pElementRef = ref(null)

onMounted(() => {
  pElementRef.value.textContent = 'こんばんは'
})
</script>

<template>
  <p ref="pElementRef">Hello</p>
</template> -->



<script setup>
import { ref, onMounted, useTemplateRef } from 'vue'

const pElementRef = useTemplateRef('pElementRef');

onMounted(() => {
  pElementRef.value.textContent = 'こんばんは'
})
</script>

<template>
  <p ref="pElementRef">Hello</p>
</template>

<!-- 難しめ？ -->