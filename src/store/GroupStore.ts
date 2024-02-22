import { makeAutoObservable } from "mobx";
import { blue, green, orange } from "../theme/colors";

export interface Group {
   id: number;
   title: string;
   name: string;
   color: any;
}

class GroupStore {
   groups: Group[] = [
      {
         id: 1,
         title: "Повседневные",
         name: "everyday",
         color: blue,
      },
      {
         id: 2,
         title: "Квартира",
         name: "apartment",
         color: green,
      },
      {
         id: 3,
         title: "Крупные",
         name: "large",
         color: orange,
      },
   ];

   constructor() {
      makeAutoObservable(this);
   }
}

const groupStore = new GroupStore();

export default groupStore;
