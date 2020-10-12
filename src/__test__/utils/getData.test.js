import getData from '../../utils/getData';

describe('fetch api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('should call API and return data', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '123456' }));
    getData('http://google.com').then((response) => {
      expect(response.data).toEqual('123456');
    });

    expect(fetch.mock.calls[0][0]).toEqual('http://google.com');
  });
});
