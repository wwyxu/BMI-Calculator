export const getData = (key: string) => {
  if (!localStorage) {
    return;
  }

  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.log(err);
  }
};

export const storeData = (key: string, item: string) => {
  if (!localStorage) return;

  try {
    return localStorage.setItem(key, JSON.stringify(item));
  } catch (err) {
    console.log(err);
  }
};
