import { AppLink, Button, Text, TextSize, TextWeight } from '@/src/shared/ui';

export default function Home() {
  return (
    <>
      <AppLink href={'#'}>gsdfgdfg</AppLink>
      <Button>321132</Button>

      <Text text="test" weight={TextWeight.SEMIBOLD} size={TextSize.L} />
    </>
  );
}
