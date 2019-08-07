import { Gymnast } from './models/gymnast.model';

const JsonGymnasts = [
  {
    injuries: ["rug", "schouder", "voet"],
    id: 9,
    firstName: "Ward",
    lastName: "Claeys",
    birthDate: "2001-03-08",
    email: "ward.claeys@hotmail.com",
    isAdmin: false
  },
  {
    injuries: ["schouder", "Achillespees","voorarmen"],
    id: 6,
    firstName: "Florian",
    lastName: "Landuyt",
    birthDate: "1996-05-10T00:00:00",
    email: "florian.landuyt@hotmail.com",
    isAdmin: true
  }
];
export const GYMNASTS: Gymnast[] = JsonGymnasts.map(Gymnast.fromJSON);