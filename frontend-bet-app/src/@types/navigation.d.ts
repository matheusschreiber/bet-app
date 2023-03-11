declare module "../routes/app.routes";

export interface GameProps {
  team1: string;
  team1Icon: string;
  team1Score?: number;
  team2: string;
  team2Icon: string;
  team2Score?: number;
  date: string;
  amount: string;
  desc?: string;
}

export interface User {
  id: number;
  name: string;
  picture: ImageData;
  wins: number;
  points: number;
}

export interface GroupProps {
  id: number;
  id_admin: number;
  name: string;
  prize?: string;
  participants: User[];
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
      group: GroupProps;
    }
  }
}
