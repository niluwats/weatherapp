import json from "../assets/expiration.json";

export function cacheData(data) {
  const cachedData = {};

  data.forEach((element) => {
    cachedData.data = element;
    cachedData.timestamp = new Date().getTime();

    sessionStorage.setItem(element.id, JSON.stringify(cachedData));
  });
}

export function getCachedData(key) {
  const cachedItem = sessionStorage.getItem(key);

  if (cachedItem) {
    const { data, timestamp } = JSON.parse(cachedItem);
    const currTime = new Date().getTime();
    const timeDiff = Math.floor((currTime - timestamp) / 60000);

    if (timeDiff <= json[key]) {
      return data;
    } else {
      delete sessionStorage.removeItem(key);
    }
  }
  return null;
}
