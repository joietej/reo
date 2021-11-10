import { Folder, searchFolder } from "@/hooks/useFolders";

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

test("it searches the folder by id", () => {
  const id = "3";
  const result = searchFolder(id, folder);
  expect(result?.id).toBe(id);
});
