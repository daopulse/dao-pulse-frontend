import { Pageable } from '@/typesUtils/page';
import { Id } from '@/typesUtils/idType';

export type NewsItem = {
  // author (NewsAuthorDto, optional),
  content: string,
  coverImageUrl: string,
  createdAt: string,
  // dataProvider (string, optional): Provider for imported data = ['SYSTEM', 'COINMARKETCAP', 'COINGECKO', 'DEFILLAMA', 'GLASSNODE', 'BITQUERY', 'SNAPSHOT', 'BOARDROOM'],
  id: Id,
  importedAt: string,
  isVisible: boolean,
  languageSymbol: string,
  maxChar: number,
  newsSlug: string,
  publishedAt: string,
  // relatedDAOIdsList (Array[integer], optional),
  relatedDAONameList?: string[],
  relatedDAOLogoUrlListRaw?: string[],
  // sourceCollectorType (string, optional) = ['NONE', 'ALEXANDRIA', 'GRAVITY'],
  sourceId:  Id,
  sourceName: string,
  sourceUrl: string,
  // status (string, optional) = ['CREATED', 'PUBLISHED', 'DELETED'],
  subTitle: string,
  tags: string[],
  title: string,
  // type (string, optional) = ['NEWS', 'PROPOSAL', 'EVENTS'],
  updatedAt: string,
}

export type News = Pageable<NewsItem>;

export type NewsQueries = {
  page?: number,
  size?: number;
  daoNames?: string[];
  sources?: string[];
  fromDate?: string;
  toDate?: string;
  sort: string
}
