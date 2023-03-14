declare module "../routes/app.routes";

export interface GameProps {
  id: string;
  team1: string;
  team1Icon: string;
  team1Score?: number;
  team2: string;
  team2Icon: string;
  team2Score?: number;
  date: string;
  desc?: string;
  bets?: Bet[];
}

export interface User {
  id: string;
  name: string;
  picture: ImageData;
  wins: number;
  points: number;
  rank: number;
  myGroups?: GroupProps[];
  bets?: Bet[];
}

export interface Bet {
  id: string;
  user: User;
  match: string;
  status: string;
  score_1: number;
  score_2: number;
  date: string;
  score_win?: boolean;
  result_win?: boolean;
  points?: number;
}

export interface GroupProps {
  id: string;
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
      rankings: undefined;
      gamebet: GameProps;
      group: GroupProps;
    }
  }
}
