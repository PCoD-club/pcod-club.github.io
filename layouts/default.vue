<script setup></script>

<template>
  <div class="w-full h-screen flex flex-col justify-center">
    <NavBar class="flex-none" />
    <div class="p-2 overflow-y-scroll">
      <slot />
    </div>
  </div>
</template>
