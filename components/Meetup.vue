<script setup>
const resp = await useLazyFetch("/api/meetup", { method: "POST" });
const meetup = resp.data;
</script>

<template>
  <span>
    {{ meetup }}
  </span>
</template>
