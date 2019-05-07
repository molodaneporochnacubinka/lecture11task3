import GameSavingData from './GameSavingData';
import readGameSaving from './readGameSaving';

export default class GameSavingLoader {
  async load() {
    try {
      const buffer = await readGameSaving();
      const saveData = new GameSavingData(buffer);
      const data = await saveData.json();
      return JSON.parse(data);
    } catch (error) {
      throw new Error('ошибка загрузки данных');
    }  
  }
}