import { useState } from "react";
import Board from "./components/Board/Board.jsx";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  const initialData = [
    { id: "todo", title: "To Do", cards: [] },
    { id: "in-progress", title: "In Progress", cards: [] },
    { id: "done", title: "Done", cards: [] },
  ];

  const [columns, setColumns] = useState(initialData);

  const handleAddCard = (columnId, text) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.id === columnId
          ? { ...col, cards: [...col.cards, { id: Date.now(), text }] }
          : col
      )
    );
  };

  const handleDeleteCard = (columnId, cardId) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.id === columnId
          ? { ...col, cards: col.cards.filter((card) => card.id !== cardId) }
          : col
      )
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <h1 className="app-title">Kanban Board - BY NISCHAL</h1>
        <Board
          columns={columns}
          onAddCard={handleAddCard}
          onDeleteCard={handleDeleteCard}
        />
      </div>
    </DndProvider>
  );
};

export default App;
