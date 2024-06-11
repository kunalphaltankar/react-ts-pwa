export const version = 4;
export const name = "AppDB";

export enum Stores {
  Users = "users",
  Employees = "employees",
}

type CreateIndexParams = {
  name: string;
  keyPath: string;
  options: IDBIndexParameters;
};

export const initDB = (): Promise<boolean> => {
  const Indices: Record<Stores, CreateIndexParams[]> = {
    users: [
      {
        name: "UserCountryIDX",
        keyPath: "country",
        options: { unique: false },
      },
    ],
    employees: [],
  };
  const StoreKeys = Object.keys(Indices);

  return new Promise((resolve) => {
    // open the connection
    const dbOpenRequest = indexedDB.open(name, version);

    dbOpenRequest.onupgradeneeded = () => {
      const db = dbOpenRequest?.result;

      StoreKeys.forEach((storeKey) => {
        // if the data object store doesn't exist, create it
        if (!db.objectStoreNames.contains(storeKey)) {
          console.log("Creating store: " + storeKey);
          const store = db.createObjectStore(storeKey, {
            keyPath: "id",
            autoIncrement: true,
          });

          Indices[storeKey as keyof typeof Indices].forEach((storeIndex) => {
            console.log("Adding store index: " + store.name);
            store.createIndex(
              storeIndex.name,
              storeIndex.keyPath,
              storeIndex.options
            );
          });
        }
      });

      // no need to resolve here
    };

    dbOpenRequest.onsuccess = () => resolve(true);
    dbOpenRequest.onerror = () => resolve(false);
  });
};
