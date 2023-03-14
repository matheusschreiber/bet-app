import teste from "../../assets/teste.jpg";
import teste2 from "../../assets/teste2.jpg";
import teste3 from "../../assets/teste3.jpg";
import teste4 from "../../assets/teste4.jpg";
import teste5 from "../../assets/teste5.jpg";
import teste6 from "../../assets/teste6.jpg";
import teste7 from "../../assets/teste7.jpg";
import teste8 from "../../assets/teste8.jpg";
import teste9 from "../../assets/teste9.jpg";
import { GameProps, User } from "../@types/navigation";

// prettier-ignore
const user1:User = {id: "2",  rank: 1,  name: "Lana",  picture: teste2,  wins: 65,  points: 24000,};
// prettier-ignore
const user2:User = {id: "3",  rank: 3,  name: "Carlos",  picture: teste3,  wins: 30,  points: 1500,};
// prettier-ignore
const user3:User = {id: "4",  rank: 4,  name: "Jonas",  picture: teste4,  wins: 20,  points: 100,};
// prettier-ignore
const user4:User = {id: "5",  rank: 5,  name: "Jorge",  picture: teste5,  wins: 15,  points: 70,};
// prettier-ignore
const user5:User = {id: "6",  rank: 6,  name: "Elisa",  picture: teste6,  wins: 15,  points: 70,};
// prettier-ignore
const user6:User = {id: "7",  rank: 7,  name: "Luisa",  picture: teste7,  wins: 15,  points: 70,};
// prettier-ignore
const user7:User = {id: "8",  rank: 8,  name: "Marcos",  picture: teste8,  wins: 15,  points: 70,};
// prettier-ignore
const user8:User = {id: "9",  rank: 9,  name: "Ana",  picture: teste9,  wins: 15,  points: 70,};

export let mainUser: User = {
  id: "1",
  name: "Fernanda",
  picture: teste,
  rank: 2,
  wins: 45,
  points: 10350,
  myGroups: [
    {
      id: "123",
      name: "Amigos do trabalho",
      participants: [user1, user2, user3, user4, user5, user6, user7, user8],
    },
    {
      id: "124",
      name: "Família",
      participants: [user1, user2, user3, user4, user5],
    },
    {
      id: "125",
      name: "Bairro",
      participants: [user1, user2, user3, user4, user5],
    },
    {
      id: "126",
      name: "Intercâmbio",
      participants: [user1, user2, user3, user4, user5],
    },
  ],
};

export const bets = [
  {
    id: "1",
    user: mainUser,
    match: "5",
    status: "finished",
    score_1: 1,
    score_2: 2,
    date: "2023-06-05T00:00:00.000Z",
    score_win: true,
    result_win: true,
    points: 30,
  },
  {
    id: "2",
    user: user1,
    match: "5",
    status: "finished",
    score_1: 2,
    score_2: 2,
    date: "2023-06-05T00:00:00.000Z",
    score_win: false,
    result_win: false,
    points: 0,
  },
  {
    id: "3",
    user: user2,
    match: "5",
    status: "finished",
    score_1: 3,
    score_2: 1,
    date: "2023-06-05T00:00:00.000Z",
    score_win: true,
    result_win: true,
    points: 30,
  },
  {
    id: "4",
    user: user3,
    match: "5",
    status: "finished",
    score_1: 1,
    score_2: 0,
    date: "2023-06-05T00:00:00.000Z",
    score_win: false,
    result_win: true,
    points: 25,
  },
  {
    id: "5",
    user: user4,
    match: "5",
    status: "finished",
    score_1: 0,
    score_2: 1,
    date: "2023-06-05T00:00:00.000Z",
    score_win: true,
    result_win: false,
    points: 10,
  },
  {
    id: "6",
    user: user5,
    match: "5",
    status: "finished",
    score_1: 1,
    score_2: 0,
    date: "2023-06-05T00:00:00.000Z",
    score_win: false,
    result_win: true,
    points: 25,
  },
];

mainUser.bets = bets.filter((bet) => bet.user.id === mainUser.id);

export const IncomingGames: GameProps[] = [
  {
    id: "1",
    date: "2023-06-06T12:00:00.000Z",
    desc: "QUARTAS DE FINAL",
    team1: "Holanda",
    team1Icon: "🇳🇱",
    team2: "Argentina",
    team2Icon: "🇦🇷",
    bets: bets.filter((bet) => bet.match == "1"),
  },
  {
    id: "2",
    date: "2023-06-06T12:00:00.000Z",
    desc: "QUARTAS DE FINAL",
    team1: "Brasil",
    team1Icon: "🇧🇷",
    team2: "Croácia",
    team2Icon: "🇭🇷",
    bets: bets.filter((bet) => bet.match == "2"),
  },
  {
    id: "3",
    date: "2023-06-06T12:00:00.000Z",
    desc: "QUARTAS DE FINAL",
    team1: "França",
    team1Icon: "🇫🇷",
    team2: "Inglaterra",
    team2Icon: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    bets: bets.filter((bet) => bet.match == "3"),
  },
  {
    id: "4",
    date: "2023-06-06T12:00:00.000Z",
    desc: "QUARTAS DE FINAL",
    team1: "Marrocos",
    team1Icon: "🇲🇦",
    team2: "Portugal",
    team2Icon: "🇵🇹",
    bets: bets.filter((bet) => bet.match == "4"),
  },
];

export const GamesFinished: GameProps[] = [
  {
    id: "5",
    date: "2023-06-05T12:00:00.000Z",
    desc: "OITAVAS DE FINAL",
    team1: "Brasil",
    team1Icon: "🇧🇷",
    team1Score: 5,
    team2: "Coréia do Sul",
    team2Icon: "🇰🇷",
    team2Score: 1,
    bets: bets.filter((bet) => bet.match == "5"),
  },
  {
    id: "6",
    date: "2023-06-05T12:00:00.000Z",
    desc: "OITAVAS DE FINAL",
    team1: "Japão",
    team1Icon: "🇯🇵",
    team1Score: 0,
    team2: "Croácia",
    team2Icon: "🇭🇷",
    team2Score: 1,
    bets: bets.filter((bet) => bet.match == "6"),
  },
  {
    id: "7",
    date: "2023-06-05T12:00:00.000Z",
    desc: "OITAVAS DE FINAL",
    team1: "Austrália",
    team1Icon: "🇦🇺",
    team1Score: 0,
    team2: "Argentina",
    team2Icon: "🇦🇷",
    team2Score: 2,
    bets: bets.filter((bet) => bet.match == "7"),
  },
  {
    id: "8",
    date: "2023-06-05T12:00:00.000Z",
    desc: "OITAVAS DE FINAL",
    team1: "Holanda",
    team1Icon: "🇳🇱",
    team1Score: 2,
    team2: "EUA",
    team2Icon: "🇺🇸",
    team2Score: 0,
    bets: bets.filter((bet) => bet.match == "8"),
  },
  {
    id: "9",
    date: "2023-06-05T12:00:00.000Z",
    desc: "OITAVAS DE FINAL",
    team1: "Inglaterra",
    team1Icon: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    team1Score: 3,
    team2: "Senegal",
    team2Icon: "🇸🇳",
    team2Score: 2,
    bets: bets.filter((bet) => bet.match == "9"),
  },
  {
    id: "10",
    date: "2023-06-05T12:00:00.000Z",
    desc: "OITAVAS DE FINAL",
    team1: "França",
    team1Icon: "🇫🇷",
    team1Score: 0,
    team2: "Polônia",
    team2Icon: "🇵🇱",
    team2Score: 1,
    bets: bets.filter((bet) => bet.match == "10"),
  },
  {
    id: "11",
    date: "2023-06-05T12:00:00.000Z",
    desc: "OITAVAS DE FINAL",
    team1: "Espanha",
    team1Icon: "🇪🇸",
    team1Score: 2,
    team2: "Marrocos",
    team2Icon: "🇲🇦",
    team2Score: 3,
    bets: bets.filter((bet) => bet.match == "11"),
  },
  {
    id: "12",
    date: "2023-06-05T12:00:00.000Z",
    desc: "OITAVAS DE FINAL",
    team1: "Suiça",
    team1Icon: "🇨🇭",
    team1Score: 0,
    team2: "Portugal",
    team2Icon: "🇵🇹",
    team2Score: 1,
    bets: bets.filter((bet) => bet.match == "12"),
  },
];

//prettier-ignore
export const globalUsers = [mainUser, user1, user2, user3, user4, user5, user6, user7, user8];

export const Contacts: User[] = [user1, user2, user3, user4, user5];
