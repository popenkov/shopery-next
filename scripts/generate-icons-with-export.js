const fs = require('fs');
const path = require('path');

const inputDir = path.resolve(__dirname, '../public/icons'); // Replace with the path to your output directory
const outputFile = path.resolve(__dirname, '../src/shared/ui/icons/index.tsx'); // Replace with the path to the output directory

const generateIconName = (id) => {
  const type = id.split('__')[0];
  const names = id.split('__')[1].split('-');
  const nameWithUpperCase = names
    .map((elem) => {
      return elem.charAt(0).toUpperCase() + elem.slice(1);
    })
    .join('');
  return `${nameWithUpperCase}${type.charAt(0).toUpperCase() + type.slice(1)}`;
};

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const components = files.map((file) => {
    if (path.extname(file) !== '.svg') {
      return;
    }

    const filePath = path.join(inputDir, file);
    const svgContent = fs.readFileSync(filePath, 'utf-8');
    const id = file.replace(/\.svg$/, '');
    const componentName = generateIconName(id);
    const updatedSvgContent = [
      '<svg' + ' className={className} onClick={onClick}' + svgContent.split('<svg')[1],
    ]
      .join('<svg')
      .replace('fill-rule', 'fillRule')
      .replace('stroke-linecap', 'strokeLinecap')
      .replace('stroke-linejoin', 'strokeLinejoin')
      .replace('stroke-width', 'strokeWidth')
      .replace('clip-rule', 'clipRule');

    return `
export const ${componentName}: FC<{className?:string, onClick?: () => void}> = ({className, onClick}) => {
  return (
    ${updatedSvgContent}
  );
};

`;
  });

  const outputContent = `
import {FC} from 'react';

${components.join('\n\n')}
`;

  fs.writeFileSync(outputFile, outputContent);
  console.log(`Generated ${outputFile}`);
});
