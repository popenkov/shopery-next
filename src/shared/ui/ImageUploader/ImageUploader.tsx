'use client';

import { FC, forwardRef, useState } from 'react';

import cn from 'classnames';

import cls from './ImageUploader.module.scss';
import Image from 'next/image';
import { ChangeHandler } from 'react-hook-form';
import { Button } from '../Buttons';

type Props = {
  onChange: ChangeHandler;
  imageSrc: string;
  className?: string;
  accept?: string;
  maxSize?: number;
};

export const ImageUploader: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ imageSrc, onChange, className, accept = 'image/*', maxSize = 1024 * 1024, ...rest }, ref) => {
    const [preview, setPreview] = useState<string>(imageSrc);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      console.log('file', file);
      if (!file) return;

      if (file.size > maxSize) {
        setError(`File size exceeds ${maxSize / 1024}KB`);
        return;
      }

      onChange(event);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        console.log('reader.result ', reader.result);
        setPreview(reader.result as string);
      };
    };

    return (
      <div className={cn(cls.ImageUploader, className)}>
        {/* {preview && ( */}
        <div className={cls.ImageUploaderPreviewWrapper}>
          <Image className={cls.ImageUploaderPreview} fill src={preview} alt="image preview" />
        </div>
        {/* )} */}
        <input
          ref={ref}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className={cls.ImageUploaderInput}
          id="file"
          {...rest}
        />
        <label htmlFor="file" className={cls.ImageUploaderLabel}>
          Choose Image
        </label>
        {error && <span className={cls.ImageUploaderError}>{error}</span>}
      </div>
    );
  },
);
