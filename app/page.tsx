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
} from '@/src/shared/ui';

export default function Home() {
  return (
    <>
      <AppLink href={'#'}>gsdfgdfg</AppLink>
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
    </>
  );
}
