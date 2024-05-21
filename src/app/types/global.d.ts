declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  export const ReactComponent: FC<SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
