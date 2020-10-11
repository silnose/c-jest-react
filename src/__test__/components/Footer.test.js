import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer/>', () => {
  const footer = mount(<Footer />);

  test('should render Footer', () => {
    expect(footer.length).toEqual(1);
  });

  test('should display title', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer Snapshot', () => {
  test('should display footer UI', () => {
    const footer = create(<Footer />);
    const footerJson = footer.toJSON();
    expect(footerJson).toMatchSnapshot();
  });
});
