import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";
import { getLogs } from "../../actions/logActions";
import "./index.css";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  const [isOpened, setIsOpened] = useState([]);
  const [toggleAll, setToggleAll] = useState(false);

  useEffect(() => {
    getLogs();
  }, []);

  useEffect(() => {
    if (isOpened.length === 0 && logs) {
      setIsOpened(new Array(logs.length).fill(false));
    }
  }, [logs]);

  if (loading || logs === null) {
    return <Preloader />;
  }

  const onToggle = (id) => {
    let newArr = [...isOpened]; // copying the old datas array
    newArr[id] = !newArr[id]; // replace e.target.value with whatever you want to change it to
    setIsOpened(newArr);
  };

  return (
    <ul className="collection">
      <li className="header">
        <button
          onClick={() => {
            setIsOpened(new Array(isOpened.length).fill(!toggleAll));
            setToggleAll(!toggleAll);
          }}
        >
          {toggleAll ? "COLLAPSE ALL" : "EXPAND ALL"}
        </button>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((log) => {
          return (
            <LogItem
              log={log}
              key={log.id}
              isOpened={isOpened[log.id]}
              onToggle={onToggle}
            />
          );
        })
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
