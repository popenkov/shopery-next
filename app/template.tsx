import React from 'react';

import Transition from '@/shared/ui/Transition/Transition';

export default function Template({ children }: { children: React.ReactNode }) {
  return <Transition> {children} </Transition>;
}
