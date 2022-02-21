<script setup lang="ts">
import { MeetupEvent } from "~~/composables/useMeetup/meetup";
const props = defineProps<{
  event: MeetupEvent;
}>();

const cleanDescription = computed(() =>
  props.event.description
    .split("\n\n")
    .filter((p) => !p.match(/^\*|www\./g))
    .join("\n\n")
);
</script>

<template>
  <a
    :href="event.url.href"
    class="bg-slate-700 rounded-md mt-4 p-2 grid grid-cols-8 gap-x-2"
  >
    <div
      class="col-span-1 row-span-3 bg-top bg-contain bg-no-repeat"
      :style="`background-image: url(${event.image.url({ size: [120, 120] })})`"
    />
    <div class="col-span-7 font-display">
      {{ event.title }}
    </div>
    <div
      v-snip="3"
      v-sanitize.strip="cleanDescription"
      class="col-span-7 row-span-2 text-sm text-gray-400 italic break-words"
    />
  </a>
</template>
