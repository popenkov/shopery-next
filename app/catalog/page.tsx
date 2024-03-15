import { Breadcrumbs } from '@/src/shared/ui';

export default function Catalog() {
  const crumbs = ['Home', 'Catalog', 'Item'];
  return (
    <>
      <h1>Catalog</h1>
      <Breadcrumbs items={crumbs} />
    </>
  );
}
