import React from 'react'
import {render, screen} from '@testing-library/react'
import {ImageWithEmptyAlt} from '../'

test('ImageWithEmptyAlt should not render an img role because the img has alt="" - this fails', () => {
  render(<ImageWithEmptyAlt />)
  expect(screen.queryByRole('img')).not.toBeInTheDocument();
});

test('ImageWithEmptyAlt should render presentation role because the img has alt="" - this fails', () => {
  render(<ImageWithEmptyAlt />)
  expect(screen.getByRole('presentation')).toBeInTheDocument();
});

