import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";

export default function MultiPitch() {
  const url =
    "https://raw.githubusercontent.com/rd-astros/hiring-resources/master/pitches.json";
  const [defaultPitchs, setDefaultPitchs] = useState([]);
  const [pitchs, setPitchs] = useState([]);
  const [buttons, setButtons] = useState([]);
  const [showBtn, setShowBtn] = useState(0);
  const [valueShow, setValueShow] = useState(30);
  const [pitchType, setPitchType] = useState([]);
  const [eventType, setEventType] = useState([]);
  const [pitch, setPitch] = useState("all");
  const [event, setEvent] = useState("all");
  const [plateSpeed, setPlateSpeed] = useState("default");

  useEffect(() => {
    axios
      .get(url)
      .then((d) => {
        setDefaultPitchs(d.data.queryResults.row);
        setPitchs(d.data.queryResults.row);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    const lBtn = pitchs.length / valueShow;
    setButtons([]);
    for (let i = 1; i <= Math.ceil(lBtn); i++) {
      setButtons((prev) => {
        return [...prev, i];
      });
    }
  }, [pitchs, valueShow]);

  useEffect(() => {
    pitchs.forEach((item) => {
      setPitchType((prev) => {
        return [...prev, item.pitch_type];
      });
    });
  }, [pitchs]);

  useEffect(() => {
    pitchs.forEach((item) => {
      setEventType((prev) => {
        return [...prev, item.event_type];
      });
    });
  }, [pitchs]);

  useEffect(() => {
    if (pitch === "all" && event === "all") {
      setPitchs(defaultPitchs);
    } else if (pitch === "all" && event !== "all") {
      let array = [];
      defaultPitchs.forEach((item) => {
        if (item.event_type === event) {
          array.push(item);
        }
      });
      setPitchs(array);
    } else {
      let array = [];
      defaultPitchs.forEach((item) => {
        if (item.pitch_type === pitch) {
          array.push(item);
        }
      });
      setPitchs(array);
    }
  }, [pitch]);

  useEffect(() => {
    if (event === "all" && pitch === "all") {
      setPitchs(defaultPitchs);
    } else if (event === "all" && pitch !== "all") {
      let array = [];
      defaultPitchs.forEach((item) => {
        if (item.pitch_type === pitch) {
          array.push(item);
        }
      });
      setPitchs(array);
    } else {
      let array = [];
      defaultPitchs.forEach((item) => {
        if (item.event_type === event) {
          array.push(item);
        }
      });
      setPitchs(array);
    }
  }, [event]);

  const formatter = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  const buttonHandler = (e) => {
    setShowBtn(e - 1);
  };

  return (
    <div className="multi-pitch">
      <div className="multi-pitch-view">
        <h2>Multi-Pitch View</h2>
        <Filter
          data={{
            pitchs: pitchType,
            events: eventType,
            setEvent,
            setPitch,
            setPlateSpeed,
          }}
        />

        <table className="pitch-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Pitch No.</th>
              <th>Pitch Type</th>
              <th>Pitch Name</th>
              <th>Away Team Name</th>
              <th>Home Team Name</th>
              <th>Batting Team Name</th>
              <th>Fielding Team Name</th>
              <th>Event Number</th>
              <th>Event type</th>
              <th>Batter Name</th>
              <th>Pitcher Name</th>
              <th>Plate Speed</th>
              <th>Date</th>
              <th>Game Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {pitchs &&
              pitchs.length > 0 &&
              ((plateSpeed === "default" &&
                pitchs
                  .sort((a, b) => {
                    return Number(a.event_number) - Number(b.event_number);
                  })
                  .map((pitch, i) => {
                    if (
                      i >= valueShow * showBtn &&
                      i < valueShow * (showBtn + 1)
                    ) {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{pitch.pitch_number}</td>
                          <td>{pitch.pitch_type}</td>
                          <td>{pitch.pitch_name}</td>
                          <td>{pitch.away_team_name}</td>
                          <td>{pitch.home_team_name}</td>
                          <td>{pitch.batting_team_name}</td>
                          <td>{pitch.fielding_team_name}</td>
                          <td>{pitch.event_number}</td>
                          <td>{pitch.event_type}</td>
                          <td>{pitch.batter_name}</td>
                          <td>{pitch.pitcher_name}</td>
                          <td>{pitch.plate_speed}</td>
                          <td>
                            {pitch?.game_date &&
                              formatter.format(new Date(pitch.game_date))}
                          </td>
                          <td>{pitch.game_type}</td>
                          <td>
                            <Link to={pitch.play_id}>view</Link>
                          </td>
                        </tr>
                      );
                    }
                  })) ||
                (plateSpeed === "low" &&
                  pitchs
                    .sort((a, b) => {
                      return Number(a.plate_speed) - Number(b.plate_speed);
                    })
                    .map((pitch, i) => {
                      if (
                        i >= valueShow * showBtn &&
                        i < valueShow * (showBtn + 1)
                      ) {
                        return (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{pitch.pitch_number}</td>
                            <td>{pitch.pitch_type}</td>
                            <td>{pitch.pitch_name}</td>
                            <td>{pitch.away_team_name}</td>
                            <td>{pitch.home_team_name}</td>
                            <td>{pitch.batting_team_name}</td>
                            <td>{pitch.fielding_team_name}</td>
                            <td>{pitch.event_number}</td>
                            <td>{pitch.event_type}</td>
                            <td>{pitch.batter_name}</td>
                            <td>{pitch.pitcher_name}</td>
                            <td>{pitch.plate_speed}</td>
                            <td>
                              {pitch?.game_date &&
                                formatter.format(new Date(pitch.game_date))}
                            </td>
                            <td>{pitch.game_type}</td>
                            <td>
                              <Link to={pitch.play_id}>view</Link>
                            </td>
                          </tr>
                        );
                      }
                    })) ||
                (plateSpeed === "high" &&
                  pitchs
                    .sort((a, b) => {
                      return Number(b.plate_speed) - Number(a.plate_speed);
                    })
                    .map((pitch, i) => {
                      if (
                        i >= valueShow * showBtn &&
                        i < valueShow * (showBtn + 1)
                      ) {
                        return (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{pitch.pitch_number}</td>
                            <td>{pitch.pitch_type}</td>
                            <td>{pitch.pitch_name}</td>
                            <td>{pitch.away_team_name}</td>
                            <td>{pitch.home_team_name}</td>
                            <td>{pitch.batting_team_name}</td>
                            <td>{pitch.fielding_team_name}</td>
                            <td>{pitch.event_number}</td>
                            <td>{pitch.event_type}</td>
                            <td>{pitch.batter_name}</td>
                            <td>{pitch.pitcher_name}</td>
                            <td>{pitch.plate_speed}</td>
                            <td>
                              {pitch?.game_date &&
                                formatter.format(new Date(pitch.game_date))}
                            </td>
                            <td>{pitch.game_type}</td>
                            <td>
                              <Link to={pitch.play_id}>view</Link>
                            </td>
                          </tr>
                        );
                      }
                    })))}
          </tbody>
        </table>
      </div>
      <div className="navigator">
        {buttons?.length > 0 &&
          buttons.map((d, i) => {
            if (d === buttons.length) {
              return (
                <button
                  onClick={() => buttonHandler(d)}
                  disabled={(d === showBtn + 1 && true) || false}
                  key={i}
                >
                  {(d <= 9 && "0" + d) || d}
                </button>
              );
            } else if (d > showBtn - 2 && d < showBtn + 4) {
              return (
                <button
                  onClick={() => buttonHandler(d)}
                  disabled={(d === showBtn + 1 && true) || false}
                  key={i}
                >
                  {(d <= 9 && "0" + d) || d}
                </button>
              );
            }
          })}
      </div>
    </div>
  );
}
