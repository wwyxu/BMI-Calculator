import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const Logs = ({
  weight,
  height,
  id,
  date,
  bmi,
  phrase,
  deleteCard,
  darkMode,
}) => {
  const onDelete = () => {
    deleteCard(id);
  };

  return (
    <div
      className={
        darkMode
          ? "card bg-dark card_" + phrase.split(" ")[0]
          : "card card_" + phrase.split(" ")[0]
      }
    >
      <div className="card-content">
        <div className="card-data p-1 mt-2">
          <div className="row">
            <div className="col-3">
              <p>BMI: {bmi}</p>
            </div>
            <div className="col-3">
              <p>Weight: {weight} kg</p>
            </div>
            <div className="col-3">
              <p>Height: {height} cm</p>
            </div>
            <div className="col-2">
              <p>{date}</p>
            </div>
            <div className="col-1">
              <Button
                className="btn-sm float-right"
                variant="danger"
                onClick={onDelete}
              >
                x
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Logs.propTypes = {
  weight: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.string,
  bmi: PropTypes.string,
  phrase: PropTypes.string,
  deleteCard: PropTypes.func,
};

export default Logs;
