import { api } from '@shared/api/baseClient';
import { mapMemberDtoToModel } from '../lib/mapper';
import type { Member, MemberDto } from '../model/types';

export const getOrganizationMembers = async (
  orgName: string,
): Promise<Member[]> => {
  const rawData: MemberDto[] = await api.get<MemberDto[]>(`${orgName}/members`);
  return rawData.map(mapMemberDtoToModel);
};
