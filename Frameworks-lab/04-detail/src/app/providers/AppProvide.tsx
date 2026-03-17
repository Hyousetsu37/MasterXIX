import { MemberListProvider } from '@entities/member/model/memberContext';
import type { ReactNode } from 'react';
import { DarkThemeProvider } from './DarkThemeProvider';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MemberListProvider>
      <DarkThemeProvider>{children}</DarkThemeProvider>
    </MemberListProvider>
  );
};
