<script setup lang="ts">
import { Folder } from "../hooks/useFolders";
import { ChevronLeftIcon, XIcon } from "@heroicons/vue/outline";

// eslint-disable-next-line no-undef
defineProps<{
  defaultTitle: string;
  currentFolder: Folder | null;
}>();

// eslint-disable-next-line no-undef
defineEmits<{
  (e: "goToParent"): void;
  (e: "reset"): void;
}>();
</script>

<template>
  <div class="flex p-2 gap-4 align-middle justify-between">
    <div class="flex gap-4 align-middle">
      <button v-show="!!currentFolder?.name" @click="$emit('goToParent')">
        <ChevronLeftIcon class="h-6 w-6" />
      </button>
      <span class="text-sm font-semibold text-gray-600">
        {{ currentFolder?.name || defaultTitle }}
      </span>
    </div>
    <button @click="$emit('reset')">
      <XIcon class="h-6 w-6" />
    </button>
  </div>
</template>
