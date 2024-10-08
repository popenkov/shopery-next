'use client';

import { FC, forwardRef, useEffect, useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';

import cls from './ImageUploader.module.scss';

type Props = {
  onChange: (value: string) => void;
  imageSrc: string;
  className?: string;
  accept?: string;
  errorText?: string;
  maxSize?: number;
};

export const ImageUploader: FC<Props> = forwardRef<HTMLInputElement, Props>(
  (
    {
      imageSrc,
      onChange,
      className,
      accept = 'image/*',
      maxSize = 1024 * 1024,
      errorText,
      ...rest
    },
    ref,
  ) => {
    const [preview, setPreview] = useState<string>(imageSrc);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      setPreview(imageSrc);
    }, [imageSrc]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (!file) return;

      if (file.size > maxSize) {
        setError(`File size exceeds ${maxSize / 1024}KB`);
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreview(reader.result as string);
        onChange(reader.result as string);
      };
    };

    return (
      <div className={cn(cls.ImageUploader, className)}>
        <div className={cls.ImageUploaderPreviewWrapper}>
          <Image
            className={cls.ImageUploaderPreview}
            fill
            src={preview}
            alt="image preview"
            data-testid="ImageUploader.preview"
          />
        </div>

        <input
          ref={ref}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className={cls.ImageUploaderInput}
          id="file"
          data-testid="ImageUploader.input"
          {...rest}
        />
        <label htmlFor="file" className={cls.ImageUploaderLabel}>
          Choose Image
        </label>
        {error && <span className={cls.ImageUploaderError}>{error}</span>}
        {errorText && <span className={cls.ImageUploaderError}>{errorText}</span>}
      </div>
    );
  },
);

ImageUploader.displayName = 'ImageUploader';
