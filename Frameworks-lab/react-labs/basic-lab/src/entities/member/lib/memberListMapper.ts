import type { MemberListDto, MemberListEntity } from '../model/type';

export const memberListMapper = (
  memberList: MemberListDto[],
): MemberListEntity[] => {
  if (!Array.isArray(memberList)) {
    console.warn(
      'memberListMapper expexted an array but received: ',
      memberList,
    );
    return [];
  }
  return memberList.map((member) => ({
    id: member?.id?.toString() ?? '',
    login: member?.login ?? 'Unknown',
    avatarUrl: member?.avatar_url ?? '',
  }));
};
