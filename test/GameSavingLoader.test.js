import GameSavingLoader from '../src/js/GameSavingLoader';
import readGameSaving from '../src/js/readGameSaving';

jest.mock('../src/js/readGameSaving');

beforeEach(() => {
  jest.resetAllMocks();
});

jest.setTimeout(7000);

test('test GameSavingLoader mock', () => {
  const gameSavingLoader = new GameSavingLoader();
  readGameSaving.mockReturnValue('{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}');
  async function load() {
    await gameSavingLoader.load();
  }
  expect(load).toThrowError('ошибка загрузки данных');
});

