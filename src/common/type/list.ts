export type ListQueryParam = {
  take?: number;
  skip?: number;
};

export type ListOutput<T extends unknown> = {
  count: number;
  rows: T[];
};
