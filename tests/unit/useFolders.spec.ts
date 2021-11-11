import { File, Folder, searchFolder, isValidFile } from "@/hooks/useFolders";

const folder: Folder = {
  id: "1",
  parentFolderId: "",
  name: "Folder1",
  files: [],
  folders: [
    {
      id: "2",
      parentFolderId: "1",
      name: "Folder12",
      files: [],
      folders: [],
    },
    {
      id: "3",
      parentFolderId: "1",
      name: "Folder12",
      files: [],
      folders: [],
    },
  ],
};

const file = {
  id: "file1",
  name: "file1",
  mimeType: "image/jpeg",
} as File;

test("searches the folder by id", () => {
  const id = "3";
  const result = searchFolder(id, folder);
  expect(result?.id).toBe(id);
});

test("validates valid file type", () => {
  const result = isValidFile(file);
  expect(result).toBe(true);
});

test("validates invalid file type", () => {
  const result = isValidFile({ ...file, name: "file1.docx" });
  expect(result).toBe(true);
});
