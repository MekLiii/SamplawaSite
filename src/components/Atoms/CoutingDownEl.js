import React from "react";
import DateCountdown from "react-date-countdown-timer";

function CoutingDownEl({dateTo}) {
  return (
    <DateCountdown
      dateTo={dateTo}
      style={{
        fontSize: "clamp(12px,2vw,30px)",
        color: "white",
        fontFamily: "poppins",
      }}
    />
  );
}

export default CoutingDownEl;
