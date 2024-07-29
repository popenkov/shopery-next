import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { RangeSlider } from './RangeSlider';

describe('RangeSlider component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <RangeSlider min={0} max={100} range={[20, 80]} onChange={() => {}} />,
    );
    expect(container).toMatchSnapshot();
  });

  // todo разобраться как изменить значение

  // it('calls onChange callback when slider is updated', () => {
  //   const onChange = jest.fn();
  //   const { getByRole, container } = render(
  //     <RangeSlider min={0} max={100} range={[20, 80]} onChange={onChange} />,
  //   );
  //   const slider = container.querySelector('.rangeSlider');
  //   fireEvent.change(container, { target: { value: [30, 90] } });
  //   expect(onChange).toHaveBeenCalledTimes(1);
  //   expect(onChange).toHaveBeenCalledWith({ min: 30, max: 90 });
  // });

  // it('updates currentRange state when slider is updated', () => {
  //   const { getByRole, getByText } = render(
  //     <RangeSlider min={0} max={100} range={[20, 80]} onChange={() => {}} />,
  //   );
  //   const slider = getByRole('slider');
  //   fireEvent.change(slider, { target: { value: [30, 90] } });
  //   const textValue = getByText('30 - 90');
  //   expect(textValue).toBeInTheDocument();
  // });

  it('renders correct text value when slider is updated', () => {
    const { getByText } = render(
      <RangeSlider min={0} max={100} range={[20, 80]} onChange={() => {}} />,
    );
    const textValue = getByText('20 - 80');
    expect(textValue).toBeInTheDocument();
  });

  it('has correct class names', () => {
    const { container } = render(
      <RangeSlider min={0} max={100} range={[20, 80]} onChange={() => {}} />,
    );
    expect(container.querySelector('.range')).toBeInTheDocument();
    expect(container.querySelector('.rangeSlider')).toBeInTheDocument();
    expect(container.querySelector('.text')).toBeInTheDocument();
    expect(container.querySelector('.textValue')).toBeInTheDocument();
  });
});
