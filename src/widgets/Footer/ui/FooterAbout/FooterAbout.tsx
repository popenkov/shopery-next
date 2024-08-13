import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/Text';

import cls from './FooterAbout.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const FooterAbout: FC<Props> = () => {
  const t = useTranslations('Footer');
  const tCommon = useTranslations('common');
  return (
    <div className={cls.about}>
      <Text variant="body_xl" as="h2" className={cls.aboutTitle}>
        {t('aboutTitle')}
      </Text>
      <Text variant="body_s" className={cls.aboutText}>
        {t('aboutText')}
      </Text>

      <div className={cls.aboutContact}>
        <Link className={cls.aboutLink} href="tel:(219)555-0114">
          (219) 555-0114
        </Link>
        <Text variant="body_s" as="span" className={cls.separator}>
          {tCommon('or')}
        </Text>
        <Link className={cls.aboutLink} href="mailto:proxy@gmail.com">
          Proxy@gmail.com
        </Link>
      </div>
    </div>
  );
};
