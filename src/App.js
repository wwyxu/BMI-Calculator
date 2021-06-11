import "./App.css";
import Bmi from "./views/bmi";
import Logs from "./views/log";
import { getData, storeData } from "./utils/localstorage";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const getInitialMode = () => {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    return isReturningUser ? savedMode : false;
  };

  const allLogs = () => getData("data") || [];
  const [logs, setLogs] = useState(allLogs);
  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    storeData("data", logs);
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [logs, darkMode]);

  const onSubmit = (log) => {
    log.id = uuidv4();
    let newLogs = [log, ...logs];
    if (newLogs.length > 10) {
      newLogs = newLogs.slice(0, newLogs.length - 1);
    }
    setLogs(newLogs);
  };

  const onDelete = (id) => {
    let newLogs = logs.filter((item) => {
      return item.id !== id;
    });
    setLogs(newLogs);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="full-height p-0 mx-4">
        <div className="container p-0">
          <div className="row">
            <div className="content col-12 p-0">
              <Bmi submit={onSubmit} darkMode={darkMode} setDark={setDarkMode} />
            </div>
            <div className="container-fluid p-0 pb-3">
              {logs.map((log) => (
                <Logs
                  key={log.id}
                  id={log.id}
                  weight={log.weight}
                  height={log.height}
                  date={log.date}
                  bmi={log.bmi}
                  phrase={log.phrase}
                  deleteCard={onDelete}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
