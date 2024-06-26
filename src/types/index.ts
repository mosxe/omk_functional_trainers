export interface Error {
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
  link: string;
  title: string;
  start_date: string;
  start_time: string;
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

export interface Entry {
  id: string;
  title: string;
}

export interface Poll {
  id: string;
  title: string;
  entries: Entry[];
  type: 'select' | 'text';
  is_comment: boolean;
}

export interface ResponseData extends Error {
  data: {
    materials: Material[];
    events: Event[];
    contacts: Contact;
    link_model_competence: string;
    link_development_plan: string;
    link_events: string;
    model_competence_video: string;
  };
}

export interface ResponseForm extends Error {
  data: Poll[];
}

export interface FormData {
  id: string;
  entries: Record<string, string | boolean>[];
  comments: string;
}

export type Type = 'diagnostics' | 'training' | 'certification';

export interface Request {
  type: Type;
  text: string;
}
