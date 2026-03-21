export interface CharacterDto {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Location {
  name: string;
  url: string;
}

export interface CharacterListEntity {
  id: string;
  name: string;
  status: string;
  imageUrl: string;
}

export interface CharacterContextValues {
  characters: CharacterListEntity[];
  isLoading: boolean;
  totalPages: number;
  searchedCharacter: string;
  loadCharacter: (character?: string) => void;
  page: number;
  changePage: (newPage: number) => void;
}

export interface APIResponseInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface APIResponse {
  info: APIResponseInfo;
  results: CharacterDto[];
}

export interface CharacterDetailEntity {
  id: string;
  name: string;
  status: string;
  imageUrl: string;
  location: string;
  species: string;
}
