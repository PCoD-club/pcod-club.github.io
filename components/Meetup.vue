<script setup>
const meetup = await useMeetup();
</script>

<template>
  <div class="bg-slate-900 text-white rounded-lg p-4 ring-1 shadow-xl max-w-lg">
    <a :href="meetup.url" class="grid grid-cols-12 gap-x-4 auto-rows-fr">
      <div
        :style="`background-image: url(${meetup.logo.url({
          size: [240, 240],
        })})`"
        class="col-span-3 row-span-5 bg-top bg-contain bg-no-repeat"
      />
      <div class="col-span-9 text-lg">{{ meetup.name }}</div>
      <div class="col-span-9 row-span-4">
        <div
          v-snip="4"
          v-sanitize.strip="meetup.description"
          class="text-gray-400"
        />
      </div>
    </a>
    <hr class="border-gray-700" />
    <div v-for="event in meetup.events" :key="event.id" class="col-span-full">
      {{ event.title }}
    </div>
  </div>
</template>
