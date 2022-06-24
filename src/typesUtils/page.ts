export type Sort = {
  empty: boolean,
  sorted: boolean,
  unsorted: boolean,
}

export type Page = {
  offset: number,
  pageNumber: number,
  pageSize: number,
  paged: boolean,
  sort: Sort,
  unpaged: boolean
}

export type Pageable<T> = {
  content: T[],
  empty?: boolean,
  first?: boolean,
  last?: boolean,
  number?: number,
  numberOfElements?: number,
  pageable?: Page,
  size?: number,
  totalElements?: number,
  totalPages?: number,
  sort?: Sort,
}
