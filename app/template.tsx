import Transition from '@/shared/ui/Transition/Transition';
import React from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  return <Transition> {children} </Transition>;
}
