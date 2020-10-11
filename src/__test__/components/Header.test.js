import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from '../../components/Header';
import ProviderMock from '../../__mocks__/providerMock';
import { create } from 'react-test-renderer';

describe('<Header/>', () => {
  test('should render Header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.length).toEqual(1);
  });

  test('Render del Titulo', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Header Snapshot', () => {
  test('should display header UI', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    const headerJson = header.toJSON();
    expect(headerJson).toMatchSnapshot();
  });
});
