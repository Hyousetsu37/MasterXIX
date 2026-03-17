import { baseClient } from '@shared/api/baseClient';
import { memberDetailMapper } from '../lib/memberDetailMapper';
import type { MemberDetailDto } from '../model/type';

export const getSingleMember = async (memberUsername: string) => {
  const rawData = await baseClient<MemberDetailDto>(
    `/users/${memberUsername}`,
    { method: 'GET' },
  );
  return memberDetailMapper(rawData);
};
