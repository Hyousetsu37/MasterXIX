import { MemberListProvider } from '@entities/member/model/memberContext';
import { CharacterListProvider } from '@entities/character/model/characterContext';
import type { ReactNode } from 'react';
import { DarkThemeProvider } from './DarkThemeProvider';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MemberListProvider>
      <CharacterListProvider>
        <DarkThemeProvider>{children}</DarkThemeProvider>
      </CharacterListProvider>
    </MemberListProvider>
  );
};
