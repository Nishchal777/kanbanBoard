import Column from "../Column/Column";
import "./Board.css";
import PropTypes from "prop-types";

const Board = ({ columns, onAddCard, onDeleteCard }) => {
  return (
    <div className="board">
      {columns.map((column) => (
        <Column
          key={column.id}
          column={column}
          onAddCard={onAddCard}
          onDeleteCard={onDeleteCard}
        />
      ))}
    </div>
  );
};
Board.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddCard: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};

export default Board;
