import { baseClient } from '@shared/api/baseClient';
import { memberDetailMapper } from '../lib/memberDetailMapper';
import type { MemberDetailDto, MemberDetailEntity } from '../model/type';

export const getSingleMember = async (
  memberUsername: string,
): Promise<MemberDetailEntity> => {
  const rawData = await baseClient<MemberDetailDto>(
    `/users/${memberUsername}`,
    { method: 'GET' },
  );
  return memberDetailMapper(rawData);
};
