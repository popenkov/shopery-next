import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import cls from './FooterAbout.module.scss';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FooterAbout: FC<Props> = () => {
  return (
    <div className={cls.about}>
      <h2 className={cls.aboutTitle}>About Shopery</h2>
      <p className={cls.aboutText}>
        Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui,
        eget bibendum magna congue nec.
      </p>
      <div className={cls.aboutContact}>
        <a className={cls.aboutLink} href="tel:(219)555-0114">
          (219) 555-0114
        </a>
        <span className={cls.separator}>or</span>
        <a className={cls.aboutLink} href="mailto:proxy@gmail.com">
          Proxy@gmail.com
        </a>
      </div>
    </div>
  );
};
