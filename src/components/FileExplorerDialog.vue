<script setup lang="ts">
import useFolders, { Folder, File, searchFolder } from "../hooks/useFolders";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";
import FileExplorerContent from "./FileExplorerContent.vue";
import FileExplorerTitle from "./FileExolorerTitle.vue";
import { ref } from "@vue/reactivity";
import { getCurrentInstance, watchEffect } from "vue";

// eslint-disable-next-line no-undef
defineProps<{
  open: boolean;
}>();

// eslint-disable-next-line no-undef
defineEmits<{
  (e: "select", files: Array<File | null>): void;
  (e: "close"): void;
}>();

const { data } = useFolders();

const selectedFolder = ref<Folder | null>(null);
const parentFolderId = ref<string | null>(null);
const selectedFiles = ref<Array<File | null>>([]);
const visitedFolderIds = ref<Array<string>>([]);

watchEffect(() => {
  selectedFolder.value = data.value;
});

const goToFolder = (folder: Folder | null) => {
  if (folder) {
    parentFolderId.value = folder.parentFolderId;
    selectedFolder.value = folder;
    visitedFolderIds.value = [
      ...visitedFolderIds.value.filter((id) => id !== folder.id),
      folder.id,
    ];
  }
};

const goToParentFolder = () => {
  const folder = searchFolder(
    parentFolderId.value,
    null,
    data?.value as Folder
  );
  if (folder) {
    parentFolderId.value = folder.parentFolderId;
    selectedFolder.value = folder;
  } else {
    selectedFolder.value = data?.value;
    parentFolderId.value = null;
  }
};

const selectFile = (checked: boolean, file: File) => {
  if (checked) {
    selectedFiles.value = [
      ...selectedFiles.value.filter((x) => x?.id !== file.id),
      file,
    ];
  } else {
    selectedFiles.value = [
      ...selectedFiles.value.filter((x) => x?.id !== file.id),
    ];
  }
};

const instance = getCurrentInstance();

const reset = () => {
  selectedFiles.value = [];
  selectedFolder.value = data?.value as Folder;
  parentFolderId.value = null;
  visitedFolderIds.value = [];
  instance?.emit("close");
};
</script>

<template>
  <TransitionRoot :show="open">
    <Dialog
      data-testid="dialog"
      class="fixed inset-0 z-10 overflow-hidden"
      @close="reset"
    >
      <div class="flex min-h-screen justify-center items-center">
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75" />
        </TransitionChild>

        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="
              w-64
              max-w-sm
              sm:w-96 sm:max-w-lg
              p-2
              bg-white
              rounded-lg
              overflow-hidden
              shadow-xl
              transform
              transition-all
            "
          >
            <DialogTitle>
              <FileExplorerTitle
                defaultTitle="Root"
                :currentFolder="selectedFolder"
                @goToParent="goToParentFolder"
                @reset="reset"
              />
            </DialogTitle>
            <FileExplorerContent
              :currentFolder="selectedFolder"
              :selectedFiles="selectedFiles"
              @fileSelect="selectFile"
              @folderSelect="goToFolder"
              @select="$emit('select', [...selectedFiles])"
              @close="$emit('close')"
              :visitedFolderIds="visitedFolderIds"
            />
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
