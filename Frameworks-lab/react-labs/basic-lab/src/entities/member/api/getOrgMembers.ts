import { baseClient } from '@shared/api/baseClient';
import { memberListMapper } from '../lib/memberListMapper';
import type { MemberListDto } from '../model/type';

export const getOrgMembers = async (
  orgName: string,
  page: number,
  perPage: number,
) => {
  const rawData = await baseClient<MemberListDto[]>(
    `/orgs/${orgName}/members?page=${page}&per_page=${perPage}`,
    { method: 'GET' },
  );
  const data = memberListMapper(rawData);
  return data;
};
