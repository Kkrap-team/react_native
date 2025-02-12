// models/TutorialModel.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

export class TutorialModel {
  private static readonly STORAGE_KEY = 'hasLaunched';

  // Ʃ�丮�� ���� ���� Ȯ��
  static async checkFirstLaunch(): Promise<boolean> {
    const hasLaunched = await AsyncStorage.getItem(this.STORAGE_KEY);
    return hasLaunched === 'true'; // ó�� ���� �� true ��ȯ
  }

  // Ʃ�丮�� �Ϸ� ���� ����
  static async completeTutorial(): Promise<void> {
    await AsyncStorage.setItem(this.STORAGE_KEY, 'true');
  }
}
