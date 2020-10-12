import { ADD_TO_CART, REMOVE_FROM_CART } from '../../types/actionsTypes.js';
import reducer from '../../reducers/index';
import { default as ProductMock } from '../../__mocks__/productMock.js';
import initialState from '../../initialState.js';
import ProviderMock from '../../__mocks__/providerMock.js';

describe('Reducers', () => {
  test('should return initial value', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('add to card', () => {
    const initialState = { cart: [] };
    const payload = ProductMock;
    const action = {
      type: ADD_TO_CART,
      payload,
    };
    const expected = {
      cart: [ProductMock],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
