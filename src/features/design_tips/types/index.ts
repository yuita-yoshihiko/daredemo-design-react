export type DesignTip = {
  title: string;
  guidance: string;
  url: string;
  media: string;
  categories: { name: string }[];
};

export type DesignTips = {
  design_tips: DesignTip[];
};

export type Category = {
  name: string;
};

export type Categories = {
  categories: Category[];
};

export type DesignTipType = {
  id: string;
  attributes: {
    title: string;
    guidance: string;
    url: string;
    media: string;
    categories: Category[];
  };
  type: 'design_tip';
};
