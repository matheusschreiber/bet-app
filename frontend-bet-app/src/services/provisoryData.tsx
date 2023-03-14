import teste from "../../assets/teste.jpg";
import teste2 from "../../assets/teste2.jpg";
import teste3 from "../../assets/teste3.jpg";
import teste4 from "../../assets/teste4.jpg";
import teste5 from "../../assets/teste5.jpg";
import teste6 from "../../assets/teste6.jpg";
import teste7 from "../../assets/teste7.jpg";
import teste8 from "../../assets/teste8.jpg";
import teste9 from "../../assets/teste9.jpg";

const user1 = {
  id: "2",
  rank: 1,
  name: "Anakyn Skywalker",
  picture: teste2,
  wins: 15,
  points: 25,
};
const user2 = {
  id: "3",
  rank: 3,
  name: "Karla",
  picture: teste3,
  wins: 15,
  points: 15,
};
const user3 = {
  id: "4",
  rank: 4,
  name: "Jonas",
  picture: teste4,
  wins: 15,
  points: 10,
};
const user4 = {
  id: "5",
  rank: 5,
  name: "Jorge",
  picture: teste5,
  wins: 15,
  points: 7,
};
const user5 = {
  id: "6",
  rank: 6,
  name: "Elisa",
  picture: teste6,
  wins: 15,
  points: 7,
};
const user6 = {
  id: "7",
  rank: 7,
  name: "George",
  picture: teste7,
  wins: 15,
  points: 7,
};
const user7 = {
  id: "8",
  rank: 8,
  name: "Klaus",
  picture: teste8,
  wins: 15,
  points: 7,
};
const user8 = {
  id: "9",
  rank: 9,
  name: "Louella",
  picture: teste9,
  wins: 15,
  points: 7,
};

export const User = {
  id: "1",
  name: "Skyler Walker",
  picture: teste,
  rank: 2,
  wins: 45,
  points: 10350,
  bets: [1, 2, 3],
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

export const Contacts = [
  { id: "1", name: "João", picture: teste2, wins: 15, points: 25 },
  { id: "2", name: "Karla", picture: teste3, wins: 15, points: 15 },
  { id: "3", name: "Jonas", picture: teste4, wins: 15, points: 10 },
  { id: "4", name: "Jorge", picture: teste5, wins: 15, points: 7 },
  { id: "5", name: "Elisa", picture: teste6, wins: 15, points: 7 },
  { id: "7", name: "Elisa", picture: teste6, wins: 15, points: 7 },
  { id: "8", name: "Elisa", picture: teste6, wins: 15, points: 7 },
  { id: "9", name: "Elisa", picture: teste6, wins: 15, points: 7 },
  { id: "10", name: "Elisa", picture: teste6, wins: 15, points: 7 },
  { id: "11", name: "Elisa", picture: teste6, wins: 15, points: 7 },
  { id: "12", name: "Elisa", picture: teste6, wins: 15, points: 7 },
  { id: "13", name: "Elisa", picture: teste6, wins: 15, points: 7 },
];

export const IncomingGames = [
  {
    id: "1",
    amount: "250 apostas para este jogo",
    date: "2023-06-06T12:00:00.000Z",
    desc: "QUARTAS DE FINAL",
    team1: "Holanda",
    team1Icon: "🇳🇱",
    team2: "Argentina",
    team2Icon: "🇦🇷",
    //TODO: add bet field
  },
  {
    id: "2",
    amount: "250 apostas para este jogo",
    date: "2023-06-06T12:00:00.000Z",
    desc: "QUARTAS DE FINAL",
    team1: "Brasil",
    team1Icon: "🇧🇷",
    team2: "Croácia",
    team2Icon: "🇭🇷",
  },
  {
    id: "3",
    amount: "250 apostas para este jogo",
    date: "2023-06-06T12:00:00.000Z",
    desc: "QUARTAS DE FINAL",
    team1: "França",
    team1Icon: "🇫🇷",
    team2: "Inglaterra",
    team2Icon: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  },
  {
    id: "4",
    amount: "250 apostas para este jogo",
    date: "2023-06-06T12:00:00.000Z",
    desc: "QUARTAS DE FINAL",
    team1: "Marrocos",
    team1Icon: "🇲🇦",
    team2: "Portugal",
    team2Icon: "🇵🇹",
  },
];

export const GamesFinished = [
  {
    id: "5",
    amount: "250 apostas para este jogo",
    date: "2023-06-05T12:00:00.000Z",
    desc: "OITAVAS DE FINAL",
    team1: "Brasil",
    team1Icon: "🇧🇷",
    team1Score: 5,
    team2: "Coréia do Sul",
    team2Icon: "🇰🇷",
    team2Score: 1,
  },
  {
    id: "6",
    amount: "250 apostas para este jogo",
    date: "2023-06-05T12:00:00.000Z",
    desc: "OITAVAS DE FINAL",
    team1: "Japão",
    team1Icon: "🇯🇵",
    team1Score: 0,
    team2: "Croácia",
    team2Icon: "🇭🇷",
    team2Score: 1,
  },
  {
    id: "7",
    amount: "250 apostas para este jogo",
    date: "2023-06-05T12:00:00.000Z",
    desc: "OITAVAS DE FINAL",
    team1: "Austrália",
    team1Icon: "🇦🇺",
    team1Score: 0,
    team2: "Argentina",
    team2Icon: "🇦🇷",
    team2Score: 2,
  },
  {
    id: "8",
    amount: "250 apostas para este jogo",
    date: "2023-06-05T12:00:00.000Z",
    desc: "OITAVAS DE FINAL",
    team1: "Holanda",
    team1Icon: "🇳🇱",
    team1Score: 2,
    team2: "EUA",
    team2Icon: "🇺🇸",
    team2Score: 0,
  },
  {
    id: "9",
    amount: "250 apostas para este jogo",
    date: "2023-06-05T12:00:00.000Z",
    desc: "OITAVAS DE FINAL",
    team1: "Inglaterra",
    team1Icon: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    team1Score: 3,
    team2: "Senegal",
    team2Icon: "🇸🇳",
    team2Score: 2,
  },
  {
    id: "10",
    amount: "250 apostas para este jogo",
    date: "2023-06-05T12:00:00.000Z",
    desc: "OITAVAS DE FINAL",
    team1: "França",
    team1Icon: "🇫🇷",
    team1Score: 0,
    team2: "Polônia",
    team2Icon: "🇵🇱",
    team2Score: 1,
  },
  {
    id: "11",
    amount: "250 apostas para este jogo",
    date: "2023-06-05T12:00:00.000Z",
    desc: "OITAVAS DE FINAL",
    team1: "Espanha",
    team1Icon: "🇪🇸",
    team1Score: 2,
    team2: "Marrocos",
    team2Icon: "🇲🇦",
    team2Score: 3,
  },
  {
    id: "12",
    amount: "250 apostas para este jogo",
    date: "2023-06-05T12:00:00.000Z",
    desc: "OITAVAS DE FINAL",
    team1: "Suiça",
    team1Icon: "🇨🇭",
    team1Score: 0,
    team2: "Portugal",
    team2Icon: "🇵🇹",
    team2Score: 1,
  },
];

export const globalUsers = [User, user1, user2, user3, user4, user5];
