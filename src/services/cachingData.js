export const key = "weatherdata";

export function cacheData(data) {
  const cachedData = {
    data,
    timestamp: new Date().getTime(),
  };

  localStorage.setItem(key, JSON.stringify(cachedData));
}

export function getCachedData() {
  const cachedItem = localStorage.getItem(key);

  if (cachedItem) {
    const { data, timestamp } = JSON.parse(cachedItem);
    const currTime = new Date().getTime();
    const timeDiff = Math.floor(currTime - timestamp / 60000);

    if (timeDiff <= 5) {
      return data;
    } else {
      delete localStorage.removeItem(key);
    }
  }
  return null;
}
