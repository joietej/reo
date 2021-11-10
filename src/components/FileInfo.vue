<script setup lang="ts">
import { File } from "../hooks/useFolders";
import { Switch } from "@headlessui/vue";
import { PhotographIcon, DocumentIcon } from "@heroicons/vue/outline";
import { CheckCircleIcon } from "@heroicons/vue/solid";
import { ref } from "@vue/reactivity";

// eslint-disable-next-line no-undef
const props = defineProps<{
  file: File;
  isChecked: boolean;
}>();

// eslint-disable-next-line no-undef
defineEmits<{
  (e: "change", checked: boolean): void;
}>();

const checked = ref(props.isChecked);
</script>
<template>
  <li
    :class="checked ? 'bg-blue-100' : 'bg-white'"
    class="
      flex
      rounded
      p-2
      gap-2
      mt-2
      justify-between
      align-middle
      hover:bg-blue-50
    "
  >
    <Switch
      data-testid="fileSwitchContainer"
      class="w-full"
      v-model="checked"
      @click="$emit('change', checked)"
    >
      <div class="w-full flex justify-between">
        <div class="flex align-middle">
          <PhotographIcon
            v-if="file?.mimeType?.includes('image')"
            data-testid="fileImageIcon"
            class="w-6 h-6"
          />
          <DocumentIcon v-else data-testid="fileDocIcon" class="w-6 h-6" />
          <span class="ml-4 text-sm font-light text-gray-600">{{
            file?.name
          }}</span>
        </div>
        <CheckCircleIcon
          v-show="checked"
          data-testid="fileCheckIcon"
          class="h-6 w-6 text-blue-600"
        />
      </div>
    </Switch>
  </li>
</template>
