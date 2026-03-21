import type { MemberDetailDto, MemberDetailEntity } from '../model/type';

export const memberDetailMapper = (
  member: MemberDetailDto | null | undefined,
): MemberDetailEntity => {
  if (!member) {
    throw new Error('Received empty or invalid member data from API');
  }
  return {
    id: member.id?.toString() ?? '',
    login: member.login ?? 'Unkown User',
    avatarUrl: member.avatar_url ?? '',
    bio: member.bio ?? null,
    company: member.company ?? null,
    name: member.name ?? null,
  };
};
