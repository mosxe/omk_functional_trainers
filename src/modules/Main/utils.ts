import data from './mockData.json';
import { ResponseData } from 'types';

const mockFetchData = (data: any) => {
  return new Promise((resolve) => {
    return setTimeout(() => resolve(data), 1500);
  });
};

const TEMPLATE_ID = '7020150029849735914';

export const initialData = {
  data: {
    materials: [],
    events: [],
    contacts: {
      photo: '',
      fullname: '',
      position_name: '',
      email: ''
    },
    link_model_competence: '',
    link_development_plan: '',
    link_events: ''
  },
  isError: false,
  errorMessage: ''
};

export const getFetchData = async (): Promise<ResponseData> => {
  const urlParams = new URLSearchParams({
    custom_web_template_id: TEMPLATE_ID,
    action: 'getData'
  });
  const BASE_URL = window.location.origin;
  const API_URL = BASE_URL + '/custom_web_template.html?' + urlParams;

  try {
    if (import.meta.env.DEV) {
      const results = (await mockFetchData(data.fetchData)) as ResponseData;
      return results;
    }

    const response = await fetch(API_URL);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    return json;
  } catch (e) {
    initialData.isError = true;
    return initialData;
  }
};
