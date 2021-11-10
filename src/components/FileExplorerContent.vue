<script setup lang="ts">
import {
  File,
  Folder,
  isChecked,
  isVisited,
  isValidFile,
} from "../hooks/useFolders";
import FolderInfo from "./FolderInfo.vue";
import FileInfo from "./FileInfo.vue";

// eslint-disable-next-line no-undef
const props = defineProps<{
  selectedFiles: Array<File | null>;
  currentFolder: Folder | null;
  visitedFolderIds: Array<string>;
}>();

// eslint-disable-next-line no-undef
defineEmits<{
  (e: "fileSelect", checked: boolean, file: File): void;
  (e: "folderSelect", folder: Folder): void;
  (e: "select", files: Array<File | null>): void;
}>();

const isFileChecked = (id: string) => isChecked(id, props.selectedFiles);

const isFolderVisited = (id: string) => isVisited(id, props.visitedFolderIds);
</script>

<template>
  <div class="flex flex-col justify-between align-middle">
    <ul class="overflow-y-scroll">
      <FolderInfo
        :key="folder.id"
        v-for="folder in currentFolder?.folders"
        :folder="folder"
        :isVisited="isFolderVisited(folder.id)"
        @select="$emit('folderSelect', folder)"
      />
      <FileInfo
        :key="file.id"
        v-for="file in currentFolder?.files?.filter((f) => isValidFile(f))"
        :file="file"
        :isChecked="isFileChecked(file.id)"
        @change="$emit('fileSelect', $event, file)"
      />
    </ul>
    <div class="flex justify-end pt-8 mr-2">
      <button
        :disabled="!selectedFiles.length"
        class="
          bg-blue-600
          disabled:bg-gray-200
          text-white
          rounded-md
          px-4
          py-2
          text- text-sm
          font-light
        "
        @click="$emit('select', [...selectedFiles])"
      >
        {{ `Select ${selectedFiles.length || ""} Files` }}
      </button>
    </div>
  </div>
</template>
