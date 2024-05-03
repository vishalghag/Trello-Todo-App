import React, { useEffect } from "react";
import Header from "./Header";
import TrelloBoard from "./TrelloBoard";
import { useAtomValue } from "jotai";
import { formEntriesAtom } from "../store/board";

const TrelloTodo = () => {
  const formEntries = useAtomValue(formEntriesAtom);
  return (
    <div>
      <Header />
      <TrelloBoard />
    </div>
  );
};

export default TrelloTodo;
