import React from 'react';
import { render } from '@testing-library/react';

import { AdvantageCard } from './AdvantageCard';
import * as utils from './getAdvantageIcon';

describe('AdvantageCard', () => {
  it('renders the advantage card with icon, title, and text', () => {
    const icon = 'DeliveryTruckIcon';
    const title = 'Advantage Title';
    const text = 'Advantage Text';
    const isHighlighted = false;

    const { getByText, container } = render(
      <AdvantageCard
        id="test"
        icon={icon}
        title={title}
        text={text}
        isHighlighted={isHighlighted}
      />,
    );

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(text)).toBeInTheDocument();
    expect(container.querySelector('.icon')).toBeInTheDocument();
  });

  it('renders the highlighted advantage card with highlighted class', () => {
    const icon = 'DeliveryTruckIcon';
    const title = 'Advantage Title';
    const text = 'Advantage Text';
    const isHighlighted = true;

    const { container } = render(
      <AdvantageCard
        id="test"
        icon={icon}
        title={title}
        text={text}
        isHighlighted={isHighlighted}
      />,
    );

    expect(container.querySelector('.highlighted')).toBeInTheDocument();
  });

  it('calls getAdvantageIcon with the correct icon prop', () => {
    const icon = 'DeliveryTruckIcon';
    const title = 'Advantage Title';
    const text = 'Advantage Text';
    const isHighlighted = false;

    const getAdvantageIconSpy = jest.spyOn(utils, 'getAdvantageIcon');

    render(
      <AdvantageCard
        id="test"
        icon={icon}
        title={title}
        text={text}
        isHighlighted={isHighlighted}
      />,
    );

    expect(getAdvantageIconSpy).toHaveBeenCalledTimes(1);
    expect(getAdvantageIconSpy).toHaveBeenCalledWith(icon);
  });
});
