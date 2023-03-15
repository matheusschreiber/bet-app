declare module "../routes/app.routes";

export interface GameProps {
  id: string;
  team_1_name: string;
  team_1_icon: string;
  team_1_score?: number;
  team_2_name: string;
  team_2_icon: string;
  team_2_score?: number;
  date: string;
  desc?: string;
  bets?: Bet[];
}

export interface User {
  id: string;
  name: string;
  picture: string;
  wins: number;
  points: number;
  rank: number;
  bets?: Bet[];
  groups?: { group: GroupProps }[];
}

export interface Bet {
  id: string;
  id_user: string;
  id_match: string;
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
  id_admin: string;
  name: string;
  prize?: string;
  participants?: { user: User }[];
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      games: undefined;
      account: undefined;
      rankings: undefined;
      gamebet: { game: GameProps; bets: { bet: Bet }[] };
      group: GroupProps;
    }
  }
}
