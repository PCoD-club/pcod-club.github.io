<script setup>
const meetup = useMeetup();
</script>

<template>
  <div class="bg-slate-900 text-white rounded-lg p-4 ring-1 shadow-xl max-w-lg">
    <a
      :href="meetup.url"
      class="grid grid-flow-row grid-cols-12 gap-x-2 md:gap-x-4 auto-rows-fr"
    >
      <div
        :style="`background-image: url(${meetup.logo.url({
          size: [240, 240],
        })})`"
        class="col-span-2 md:col-span-3 row-span-2 md:row-span-5 bg-left md:bg-top bg-contain bg-no-repeat"
      />
      <div
        class="col-span-10 md:col-span-9 text-lg font-semibold font-display flex flex-row justify-between items-center"
      >
        {{ meetup.name }}
        <v-icon
          name="fa-meetup"
          class="pb-1 pr-1 fill-gray-400 h-full w-auto"
        />
      </div>
      <div class="col-span-12 md:col-span-9 row-span-4">
        <div
          v-snip="4"
          v-sanitize.strip="meetup.description"
          class="text-gray-400"
        />
      </div>
    </a>
    <hr class="border-gray-700" />
    <div v-for="event in meetup.events" :key="event.id" class="col-span-full">
      <MeetupEvent :event="event" />
    </div>
  </div>
</template>
