import React, { Fragment, useEffect, useState } from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const LogItem = ({ log, onToggle, isOpened }) => {
  const {
    author,
    scores,
    message: { content, reviewer },
    data: { date, type },
  } = log;
  const [messageParsed, setMessageParsed] = useState(null);

  useEffect(() => {
    if (content) {
      var temp = "";
      content.forEach((line) => {
        temp += line + "\n";
        setMessageParsed(temp);
      });
    }
  }, []);
  return (
    <li
      className="contentContainer"
      style={{
        backgroundColor: isOpened
          ? log.id % 2 === 0
            ? "#F9F9F9"
            : "#F4F4F4"
          : "white",
      }}
      onClick={() => {
        onToggle(log.id);
      }}
    >
      <span className="author">
        <strong>{author}</strong>
      </span>

      <div className="messageContainer">
        {scores && (
          <span className="scoresContainer">
            {scores.map((score) => {
              return (
                <span
                  className={
                    "badge " + `badge-${score.value > 0 ? score.value : null}`
                  }
                >
                  {score.name +
                    " " +
                    (score.value > 0 ? "+" + score.value : "")}
                </span>
              );
            })}
          </span>
        )}
        {!isOpened && content && (
          <Fragment>
            <span>{messageParsed}</span>
            {reviewer && (
              <span className="badge badge-reviewer">{reviewer}</span>
            )}
          </Fragment>
        )}
      </div>

      <span className="dataContainer">
        {type && <span className="type">{type}</span>}
        <span>
          <Moment format="MMM DD HH:mm">{date}</Moment>
        </span>
        <div className={`icon ${isOpened ? "icon-flip" : ""}`}></div>
      </span>

      {isOpened && (
        <div className="messageContainer-expanded">
          {content && messageParsed.includes("http")
            ? content.map((line) => {
                return line.includes("http") ? (
                  <a href={line}>{line}</a>
                ) : (
                  <p>{line}</p>
                );
              })
            : content.map((line) => {
                return <span>{line}</span>;
              })}
          {reviewer && <span className="badge badge-reviewer">{reviewer}</span>}
        </div>
      )}
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default connect(null, {})(LogItem);
