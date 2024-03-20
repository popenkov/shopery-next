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
      {/* <AppLink href={'#'}>gsdfgdfg</AppLink>
      <Button>321132</Button>

      <Text text="test" weight={TextWeight.SEMIBOLD} size={TextSize.L} />

      <Logo size={LogoSize.SMALL} />
      <Logo />

      <StarRating value={3} />
      <Tag content="tag" variant={TagVariant.ORANGE} />

      <ProductPreview
        href={'#'}
        img="/images/product-big-potatos.jpg"
        title="Potatos"
        price="$14.99"
        priceOld="$19.99"
        rating={5}
      />

      <Product
        href={'#'}
        img="/images/product-big-potatos.jpg"
        title="Potatos"
        price="$14.99"
        priceOld="$19.99"
        rating={4}
      />

      <ProductLarge
        href={'#'}
        img="/images/product-big-potatos.jpg"
        title="Potatos"
        price="$14.99"
        priceOld="$19.99"
        rating={3}
      />

      <Input type="search" />

      <Radio name="test" value="1" />
      <Radio name="test" value="2" />
      <Checkbox name="test-check" value="1" />
      <Checkbox name="test-check" value="2" />

      <Video
        src="https://www.youtube.com/embed/2eX2TCfiFuY"
        background="/images/video-preview.jpg"
        title="We’re the Best Organic Farm in the World"
      />

      <InstagramCard />

      
      <AppSelect
        options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' },
        ]}
      />
      <Banner
        background="/images/banner-s-2.jpg"
        subtitle="test"
        title="test"
      /> */}
      <RangeSlider min={50} max={2000} />
      <Tabs<ProductInterface> tabs={productTabs} />
    </>
  );
}
