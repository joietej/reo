<script setup lang="ts">
import { Folder } from "../hooks/useFolders";
import { ChevronRightIcon, FolderIcon } from "@heroicons/vue/outline";

// eslint-disable-next-line no-undef
defineProps<{
  folder: Folder;
  isVisited: boolean;
}>();

// eslint-disable-next-line no-undef
defineEmits<{
  (e: "select"): void;
}>();
</script>
<template>
  <li
    data-testid="folderContainer"
    :class="isVisited ? 'bg-blue-100' : 'bg-white'"
    class="
      flex
      rounded
      p-2
      mt-2
      gap-2
      align-middle
      justify-between
      cursor-pointer
      hover:bg-blue-50
    "
    @click="$emit('select')"
  >
    <div class="flex gap-4 align-middle">
      <FolderIcon data-testid="folderIcon" class="h-6 w-6" />
      <span class="text-sm font-light text-gray-600">{{ folder?.name }}</span>
    </div>
    <div class="flex gap-4 align-middle">
      <ChevronRightIcon class="h-6 w-6" />
    </div>
  </li>
</template>
