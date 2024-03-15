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
} from '@/src/shared/ui';
import { Product, ProductLarge, ProductPreview } from '@/src/shared/ui/Product';

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
        rating={3}
      />

      <Product
        href={'#'}
        img="/images/product-big-potatos.jpg"
        title="Potatos"
        price="$14.99"
        priceOld="$19.99"
        rating={3}
      />

      <ProductLarge
        href={'#'}
        img="/images/product-big-potatos.jpg"
        title="Potatos"
        price="$14.99"
        priceOld="$19.99"
        rating={3}
      />
    </>
  );
}
