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

export interface CharacterEntity {
  id: string;
  name: string;
  status: string;
  imageUrl: string;
}

export interface CharacterContextValues {
  characters: CharacterEntity[];
  isLoading: boolean;
  searchedCharacter: string | undefined;
  loadCharacter: (character?: string) => void;
  page: number;
  changePage: (newPage: number) => void;
}

interface APIResponseInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface APIResponse {
  info: APIResponseInfo;
  results: CharacterDto[];
}
