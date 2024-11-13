export interface Page {
  name: string;
  link: string;
}

export interface StrapiPictureType {
  data: {
    attributes: {
      name: string;
      url: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
    };
  };
}
export interface StrapiPicturesType {
  data: {
    attributes: {
      name: string;
      url: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
    };
  }[];
}
