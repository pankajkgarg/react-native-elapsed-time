// Type definitions for react-native-elapsed-time
export interface ElapsedTimeModule {
  getRelativeTime: () => Promise<number>
}

declare const elapsedTimeModule: ElapsedTimeModule;
export default elapsedTimeModule;
