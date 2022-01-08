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
      locales={['rok','miesiąc','dzień','godzina','minuta','sekunda']}
      locales_plural={['lata','miesiące','dni','godzin','minut','sekund']}
    />
  );
}

export default CoutingDownEl;
