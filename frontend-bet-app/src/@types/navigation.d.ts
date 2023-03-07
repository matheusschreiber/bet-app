declare module "../routes/app.routes";

export interface GameProps {
  team1: string;
  team1Icon: string;
  team1Score?: number;
  team2: string;
  team2Icon: string;
  team2Score?: number;
  date: Date;
  amount: string;
  desc?: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      games: undefined;
      account: undefined;
      add: undefined;
      rankings: undefined;
      gamebet: GameProps;
    }
  }
}
