import actions from '../../actions/index';
import { default as ProductMock } from '../../__mocks__/productMock';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../types/actionsTypes.js';

describe('Actions', () => {
  test('should add to card', () => {
    const payload = ProductMock;
    const expected = {
      type: ADD_TO_CART,
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });
});
