import React, { useState, useEffect } from "react";

const NotFound = () => {
  const [isTimeOut, setTimeOut] = useState(false);

  useEffect(() => {
    const timehandler = () => {
      setTimeout(() => setTimeOut(true), 5000);
    };
    timehandler();
  }, [isTimeOut]);

  return (
    <div>
      <h1>404</h1>
    </div>
  );
};

export default NotFound;
