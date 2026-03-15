import type { Member, MemberDto } from '../model/types';

export const mapMemberDtoToModel = (dto: MemberDto): Member => {
  return {
    id: dto.id,
    login: dto.login,
    avatar_url: dto.avatar_url,
  };
};
