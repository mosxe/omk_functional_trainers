﻿export interface Error {
  isError: boolean;
  errorMessage: string;
}

export interface Material {
  type: string;
  title: string;
  desc: string;
  is_download: boolean;
  link: string;
}

export interface Event {
  id: string;
  title: string;
  start_date_name: string;
  start_date_desc: string;
  time_name: string;
  time_desc: string;
  photo: string;
  fullname: string;
  position_name: string;
  desc: string;
}

export interface Contact {
  photo: string;
  fullname: string;
  position_name: string;
  email: string;
}

export interface ResponseData extends Error {
  data: {
    materials: Material[];
    events: Event[];
    contacts: Contact;
    link_model_competence: string;
    link_development_plan: string;
    link_events: string;
  };
}