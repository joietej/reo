<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { File } from "./hooks/useFolders";
import FileExplorerDialog from "./components/FileExplorerDialog.vue";

const showFileExplorer = ref<boolean>(false);
const selectedFiles = ref<Array<File | null>>([]);

const handleSelect = (files: Array<File | null>) => {
  selectedFiles.value = files;
  showFileExplorer.value = false;
};

const handleClose = () => {
  selectedFiles.value = [];
  showFileExplorer.value = false;
};
</script>

<template>
  <div class="h-screen p-16">
    <div class="flex flex-col items-center align-middle">
      <button
        class="bg-blue-600 rounded px-4 py-2 text-white text-xs font-lighht"
        @click="showFileExplorer = true"
      >
        Select Files
      </button>
      <ul>
        <li :key="f?.id" v-for="f in selectedFiles">{{ f?.name }}</li>
      </ul>
    </div>
    <FileExplorerDialog
      :open="showFileExplorer"
      @select="handleSelect"
      @close="handleClose"
    />
  </div>
</template>
