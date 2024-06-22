import { FormData } from 'types';

export const getValidForm = (values: any) => {
  let isValid = true;
  for (const value in values) {
    if (!isValid) {
      break;
    }
    const obj = values[value];
    if (typeof obj === 'string') {
      if (obj.trim() === '') {
        isValid = false;
        break;
      }
    } else {
      isValid = obj.some((val: Record<string, string | boolean>) => {
        if (
          val.other !== undefined &&
          val.other &&
          val.text !== undefined &&
          String(val.text).trim() !== ''
        ) {
          return true;
        } else if (val.other === undefined && Object.values(val)[0]) {
          return true;
        }
        return false;
      });
    }
  }

  return isValid;
};

export const transformData = (data: any): FormData[] => {
  const results = [];
  for (const value in data) {
    const obj = data[value];
    if (typeof obj === 'string') {
      results.push({
        id: value,
        entries: [],
        comments: obj
      });
    } else {
      results.push({
        id: value,
        entries: obj,
        comments: ''
      });
    }
  }
  return results;
};
