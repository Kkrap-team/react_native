// models/TutorialModel.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

export class TutorialModel {
  private static readonly STORAGE_KEY = 'hasLaunched';

  // 튜토리얼 실행 여부 확인
  static async checkFirstLaunch(): Promise<boolean> {
    const hasLaunched = await AsyncStorage.getItem(this.STORAGE_KEY);
    return hasLaunched === 'true'; // 처음 실행 시 true 반환
  }

  // 튜토리얼 완료 상태 저장
  static async completeTutorial(): Promise<void> {
    await AsyncStorage.setItem(this.STORAGE_KEY, 'true');
  }
}
