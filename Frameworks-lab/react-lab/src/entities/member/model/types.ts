export interface MemberDto {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
}

export interface Member {
  login: string;
  id: number;
  avatar_url: string;
}

export interface MemberContextValue {
  members: Member[];
  isLoading: boolean;
  error: string | null;
  currentOrg: string | null;
  loadOrganization: (orgName: string) => Promise<void>;
  getUserFromCacheOrApi: (username: string) => Promise<Member | null>;
}
