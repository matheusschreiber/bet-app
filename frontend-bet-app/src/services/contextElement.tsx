import React, { ReactNode, useContext, useEffect, useState } from "react";
import { User, GameProps, Bet } from "../@types/navigation";
import api, { USER_ID } from "./api";

const contextDefaultValues = {
  selected: 1,
  setSelected: (n: number) => {},
  isBetting: false,
  setIsBetting: (b: boolean) => {},
  isNewBetWindowCollapsed: true,
  setIsNewBetWindowCollapsed: (b: boolean) => {},
  isNewGroupWindowCollapsed: true,
  setIsNewGroupWindowCollapsed: (b: boolean) => {},
  isNewBetOrGroupWindowCollapsed: true,
  setIsNewBetOrGroupWindowCollapsed: (b: boolean) => {},
  user: {
    id: "1",
    name: "Carregando Usuário",
    picture: "...",
    rank: 0,
    wins: 0,
    points: 0,
    bets: [
      {
        id: "...",
        id_user: "...",
        id_match: "...",
        status: "...",
        score_1: 0,
        score_2: 0,
        date: "...",
        points: 0,
      },
    ],
    groups: [
      {
        group: {
          id: "...",
          id_admin: "...",
          name: "...",
          participants: [],
        },
      },
    ],
  },
  setUser: (u: User) => {},
  globalUsers: [
    {
      user: {
        id: "1",
        name: "Carregando Usuários",
        picture: "...",
        rank: 0,
        wins: 0,
        points: 0,
      },
    },
  ],
  setGlobalUsers: (g: { user: User }[]) => {},
  incomingGames: [
    {
      match: {
        id: "...",
        team_1_name: "...",
        team_1_icon: "...",
        team_2_name: "...",
        team_2_icon: "...",
        date: "...",
      },
    },
  ],
  gamesFinished: [
    {
      match: {
        id: "...",
        team_1_name: "...",
        team_1_icon: "...",
        team_2_name: "...",
        team_2_icon: "...",
        date: "...",
      },
    },
  ],
  setIncomingGames: (i: { match: GameProps }[]) => {},
  setGamesFinished: (i: { match: GameProps }[]) => {},
  bets: [
    {
      bet: {
        id: "...",
        id_user: "...",
        id_match: "...",
        status: "...",
        score_1: 0,
        score_2: 0,
        date: "...",
        points: 0,
      },
    },
  ],
  setBets: (b: { bet: Bet }[]) => {},
};

export const ContextElement = React.createContext(contextDefaultValues);

export function useContextValue() {
  return useContext(ContextElement);
}

type Props = {
  children: ReactNode;
};

export function ContextProvider({ children }: Props) {
  const [selected, setSelected] = useState<number>(0);
  const [isBetting, setIsBetting] = useState<boolean>(false);
  const [isNewBetWindowCollapsed, setIsNewBetWindowCollapsed] =
    useState<boolean>(true);
  const [isNewGroupWindowCollapsed, setIsNewGroupWindowCollapsed] =
    useState<boolean>(true);
  const [isNewBetOrGroupWindowCollapsed, setIsNewBetOrGroupWindowCollapsed] =
    useState<boolean>(true);
  const [user, setUser] = useState<User>(contextDefaultValues.user);
  const [globalUsers, setGlobalUsers] = useState<{ user: User }[]>([]);
  const [incomingGames, setIncomingGames] = useState<{ match: GameProps }[]>(
    []
  );
  const [gamesFinished, setGamesFinished] = useState<{ match: GameProps }[]>(
    []
  );
  const [bets, setBets] = useState<{ bet: Bet }[]>([]);

  async function fetchUser() {
    try {
      const response = await api.get("/user/" + USER_ID);
      setUser(response.data.user);
    } catch (err) {
      console.log(err);
    }

    try {
      const response = await api.get("/user");
      let aux: { user: User }[] = [];
      response.data.users.map((user: User) => {
        aux.push({ user: { ...user } });
      });
      setGlobalUsers(aux);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchGames() {
    try {
      const response = await api.get("/match");
      let incoming: { match: GameProps }[] = [];
      let results: { match: GameProps }[] = [];
      response.data.matches.map((match: GameProps) => {
        if (match.team_1_score || match.team_2_score)
          results.push({ match: { ...match } });
        else incoming.push({ match: { ...match } });
      });
      setIncomingGames(incoming);
      setGamesFinished(results);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchBets() {
    try {
      const response = await api.get("/bet");

      let aux: { bet: Bet }[] = [];
      response.data.bets.map((bet: Bet) => {
        aux.push({ bet: { ...bet } });
      });
      setBets(aux);
    } catch (err) {
      console.log(err);
    }
  }

  const value = {
    selected,
    setSelected,
    isBetting,
    setIsBetting,
    isNewBetWindowCollapsed,
    setIsNewBetWindowCollapsed,
    isNewGroupWindowCollapsed,
    setIsNewGroupWindowCollapsed,
    isNewBetOrGroupWindowCollapsed,
    setIsNewBetOrGroupWindowCollapsed,
    user,
    setUser,
    globalUsers,
    setGlobalUsers,
    incomingGames,
    gamesFinished,
    setIncomingGames,
    setGamesFinished,
    bets,
    setBets,
  };

  useEffect(() => {
    fetchUser();
    fetchGames();
    fetchBets();
  }, []);

  return (
    <>
      <ContextElement.Provider value={value}>
        {children}
      </ContextElement.Provider>
    </>
  );
}
