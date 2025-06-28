export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  likes: number;
  description: string | null;
}

export interface ModalImage {
  url: string;
  alt: string;
  author: string;
  likes: number;
  description: string;
}

export interface Errors {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
}
