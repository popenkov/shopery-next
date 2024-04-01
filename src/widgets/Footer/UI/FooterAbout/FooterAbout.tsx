import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { Text } from '@/shared';

import cls from './FooterAbout.module.scss';
import Link from 'next/link';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FooterAbout: FC<Props> = () => {
  return (
    <div className={cls.about}>
      <Text variant="body_xl" as="h2" className={cls.aboutTitle}>
        About Shopery
      </Text>
      <Text variant="body_s" className={cls.aboutText}>
        Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui,
        eget bibendum magna congue nec.
      </Text>

      <div className={cls.aboutContact}>
        <Link className={cls.aboutLink} href="tel:(219)555-0114">
          (219) 555-0114
        </Link>
        <Text variant="body_s" as="span" className={cls.separator}>
          or
        </Text>
        <Link className={cls.aboutLink} href="mailto:proxy@gmail.com">
          Proxy@gmail.com
        </Link>
      </div>
    </div>
  );
};
