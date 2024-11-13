import { StrapiPictureType } from './index';

export type CategoryAttr = {
  name: string;
  slug: string;
  description: string;
  updatedAt: Date;
};

type CategoryType = {
  data: {
    id: number;
    attributes: CategoryAttr;
  };
};

export interface BlogData {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    cover: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
    authorsBio?: {
      data: {
        attributes: {
          name: string;
          avatar: StrapiPictureType;
        };
      };
    };
    category: CategoryType;
    updatedAt: Date;
  };
}
