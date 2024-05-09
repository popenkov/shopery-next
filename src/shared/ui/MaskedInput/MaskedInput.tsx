import { IMaskMixin } from 'react-imask';
import { Input } from '../Input';

export const MaskedInput = IMaskMixin<HTMLInputElement>(({ inputRef, ...props }) => {
  return <Input type="text" inputMode="numeric" ref={inputRef} {...props} />;
});
