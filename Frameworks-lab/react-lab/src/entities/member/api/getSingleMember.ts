import { api } from '@shared/api/baseClient';
import { mapMemberDtoToModel } from '../lib/mapper';
import type { Member, MemberDto } from '../model/types';

export const getSingleUser = async (user: string): Promise<Member> => {
  const rawUser = await api.get<MemberDto>(`users/${user}`);
  return mapMemberDtoToModel(rawUser);
};
