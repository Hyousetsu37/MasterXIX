import { baseClient } from '@shared/api/baseClient';
import { memberListMapper } from '../lib/memberListMapper';
import type { MemberListDto } from '../model/type';

export const getOrgMembers = async (orgName: string) => {
  const rawData = await baseClient<MemberListDto[]>(
    `/orgs/${orgName}/members`,
    { method: 'GET' },
  );
  return memberListMapper(rawData);
};
