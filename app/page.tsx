import { ProductInterface } from '@/src/shared/interfaces/common';
import { MAIN_PAGE_DATA } from '@/src/shared/mock/mainPage';
import {
  AppLink,
  Button,
  Logo,
  LogoSize,
  StarRating,
  Tag,
  TagVariant,
  Text,
  TextSize,
  TextWeight,
  Product,
  ProductLarge,
  ProductPreview,
  Input,
  Radio,
  Checkbox,
  Video,
  InstagramCard,
  AppSelect,
  Banner,
  Tabs,
  TabItem,
  PhoneLink,
  RangeSlider,
} from '@/src/shared/ui';

export default async function Home() {
  const productTabs = MAIN_PAGE_DATA.productTabs;

  return (
    <>
      <RangeSlider />
      <AppSelect
        options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' },
        ]}
      />
    </>
  );
}
