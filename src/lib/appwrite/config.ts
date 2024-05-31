import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: "https://cloud.appwrite.io/v1",
  projectId: "6655f3ef00115407a40f",
  databaseId: "66571c6a00144afb10f3",
  storageId: "66571c96000dd2157e06",
  userCollectionId: "665727850031bca6bae3",
  postCollectionId: "665727120035faf9fd32",
  savesCollectionId: "665727a0001f53249600",
};

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
