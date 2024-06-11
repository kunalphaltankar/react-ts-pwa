import { Stores, name, version } from ".";

export const getStore = (
  storeName: Stores,
  mode: IDBTransactionMode = "readonly"
) => {
  const storePromise = new Promise<IDBObjectStore>((resolve, reject) => {
    const request = indexedDB.open(name, version);

    request.onsuccess = () => {
      const db = request.result;
      const tx = db.transaction(storeName, mode);
      const store = tx.objectStore(storeName);
      resolve(store);
    };

    request.onerror = () => {
      const error = request.error?.message;
      if (error) {
        reject(new Error(error));
      } else {
        reject(new Error("Unknown error"));
      }
    };
  });

  return storePromise;
};

export const addData = async <T>(storeName: Stores, data: T) => {
  const store = await getStore(storeName, "readwrite");
  const addRequest = store.add(data);

  return new Promise<T>((resolve, reject) => {
    addRequest.onsuccess = () => resolve(data);
    addRequest.onerror = () => reject(addRequest.error);
  });
};

export const getData = async <T>(storeName: Stores) => {
  const store = await getStore(storeName, "readwrite");
  const getRequest = store.getAll();

  const getRequestPromise = new Promise<T[]>((resolve, reject) => {
    getRequest.onsuccess = () => resolve(getRequest.result as T[]);
    getRequest.onerror = () => reject(getRequest.error);
  });

  return getRequestPromise;
};

export const deleteData = async (
  storeName: Stores,
  key: string
): Promise<boolean> => {
  const store = await getStore(storeName, "readwrite");
  const deleteRequest = store.delete(key);

  return new Promise<boolean>((resolve) => {
    deleteRequest.onsuccess = () => resolve(true);
    deleteRequest.onerror = () => resolve(false);
  });
};

export const updateData = async <T>(
  storeName: Stores,
  id: string,
  newData: T
) => {
  const store = await getStore(storeName, "readwrite");
  // Use a get request to retrieve the existing data by ID
  const getRequest = store.get(id);

  return new Promise<boolean>((resolve, reject) => {
    getRequest.onsuccess = () => {
      const existingData = getRequest.result;

      if (existingData) {
        // Update the existing data with the new data
        for (const key in newData) {
          existingData[key] = newData[key];
        }

        // Use a put operation to store the updated data back into the object store
        const updateRequest = store.put(existingData);
        updateRequest.onsuccess = () => resolve(true);
        updateRequest.onerror = () => reject(updateRequest.error);
      } else {
        // Handle the case where the data with the specified ID does not exist
        reject(new Error("Data not found"));
      }
    };

    getRequest.onerror = () => reject(getRequest.error);
  });
};

export const getIndexValues = async <T>(
  storeName: Stores,
  storeIndexKey: string,
  value: string
) => {
  const store = await getStore(storeName, "readwrite");
  const storeIndex = store.index(storeIndexKey);
  return new Promise<T[]>((resolve, reject) => {
    const keyRange = IDBKeyRange.only(value);
    const keyRangeRequest = storeIndex.getAll(keyRange);
    keyRangeRequest.onsuccess = () => resolve(keyRangeRequest.result);
    keyRangeRequest.onerror = () => reject(keyRangeRequest.error);
  });
};
