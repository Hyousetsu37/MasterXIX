import { MemberProvider } from '@entities/member/model/memberContext';
import { SessionProvider } from '@entities/session/model/sessionContext';
import type { ReactNode } from 'react';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <MemberProvider>{children}</MemberProvider>
    </SessionProvider>
  );
};
