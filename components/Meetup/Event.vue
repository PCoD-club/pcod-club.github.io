<script setup lang="ts">
import { MeetupEvent, MeetupEventType } from "~~/composables/useMeetup/meetup";
import { DateTime } from "luxon";

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
  <div class="bg-slate-700 rounded-md mt-4 p-2 space-y-1">
    <a :href="event.url.href" class="grid grid-cols-8 gap-x-2">
      <div
        class="col-span-1 row-span-3 bg-top bg-contain bg-no-repeat"
        :style="`background-image: url(${event.image.url({
          size: [120, 120],
        })})`"
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
    <div v-if="event.type == MeetupEventType.ONLINE">
      <v-icon name="fa-video" />
      <span class="ml-2">Online Event</span>
    </div>
    <a v-else class="block" :href="event.venue.gmaps.href">
      <v-icon name="fa-map-marker-alt" />
      <span class="ml-2"
        >{{ event.venue.name }}, {{ event.venue.address }}</span
      >
    </a>
    <a class="block" href="#" @click="event.ical.download()">
      <v-icon name="fa-calendar-plus" />
      <span class="ml-2">{{
        event.datetime.toLocaleString({
          ...DateTime.DATETIME_FULL,
          weekday: "short",
          timeZoneName: undefined,
        })
      }}</span>
    </a>
  </div>
</template>
