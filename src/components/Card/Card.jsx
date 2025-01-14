import PropTypes from "prop-types";
import { useDraggable } from "@dnd-kit/core";
import "./Card.css";

const Card = ({ card, onDelete }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: card.id.toString(),
  });

  return (
    <div
      ref={setNodeRef}
      className="card"
      {...attributes}
      {...listeners}
      draggable="true"
    >
      <span>{card.text}</span>
      <button onClick={onDelete}>&times;</button>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Card;
