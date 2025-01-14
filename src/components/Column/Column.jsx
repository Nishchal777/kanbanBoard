import { useState } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import "./Column.css";

const Column = ({ column, onAddCard, onDeleteCard }) => {
  const [cardText, setCardText] = useState("");

  const handleAdd = () => {
    if (cardText.trim()) {
      onAddCard(column.id, cardText);
      setCardText("");
    }
  };

  return (
    <div className="column">
      <h2>{column.title}</h2>
      <div className="cards">
        {column.cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onDelete={() => onDeleteCard(column.id, card.id)}
          />
        ))}
      </div>
      <div className="add-card">
        <input
          type="text"
          value={cardText}
          onChange={(e) => setCardText(e.target.value)}
          placeholder="Add a card"
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};
Column.propTypes = {
  column: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onAddCard: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};

export default Column;
