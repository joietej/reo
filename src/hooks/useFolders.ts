import useSWRV from "swrv";
import { IResponse } from "swrv/dist/types";

export type File = {
  id: string;
  name: string;
  parentFolderId: string;
  mimeType: string;
  url: string;
};

export type Folder = {
  id: string;
  parentFolderId: string;
  name: string;
  folders: Folder[];
  files: File[];
};

const validMimeTypes = ["image/png", "image/jpeg", "application/pdf"];

export const isChecked = (
  id: string,
  selectedFiles: Array<File | null>
): boolean => selectedFiles.map((file) => file?.id).includes(id);

export const isVisited = (
  id: string,
  visitedFolderIds: Array<string>
): boolean => visitedFolderIds.includes(id);

export const searchFolder = (
  id: string | null,
  folder: Folder | null = null
): Folder | null => {
  const source = folder?.folders;
  if (id && source?.length) {
    let parent = source.find((f) => f.id === id) || null;
    if (!parent) {
      for (let i = 0; i < source.length; i++) {
        parent = searchFolder(id, source[i]);
        if (parent) {
          return parent;
        }
      }
    }
    return parent;
  }
  return null;
};

export const isValidFile = (file: File): boolean =>
  validMimeTypes.includes(file?.mimeType);

const useFolders = (): IResponse<unknown, unknown> => {
  const url = "https://api-dev.reo.so/api/folderStructure ";
  return useSWRV(url);
};

export default useFolders;
