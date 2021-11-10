import { File } from "../../src/hooks/useFolders";
import { mount } from "@vue/test-utils";
import FileInfo from "@/components/FileInfo.vue";

const file = {
  id: "file1",
  name: "file1.jpg",
  mimeType: "image/jpeg",
} as File;

test("renders file with name", () => {
  const wrapper = mount(FileInfo, { props: { file: file, isChecked: false } });
  expect(wrapper.text()).toContain("file1");
});
