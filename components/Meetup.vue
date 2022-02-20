<script setup>
const meetup = await useMeetup();
</script>

<template>
  <h1>
    <a :href="meetup.url">{{ meetup.name }}</a>
  </h1>
  <p v-sanitize="meetup.description"></p>
</template>
