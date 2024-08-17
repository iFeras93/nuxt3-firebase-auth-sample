<template>
  <div>
    Customers List

    <div>
      {{ user }}
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware:['auth'],
})
const user= useCurrentUser();
</script>

<style>

</style>