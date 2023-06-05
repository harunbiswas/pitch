import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SinglePitch() {
  const url =
    "https://raw.githubusercontent.com/rd-astros/hiring-resources/master/pitches.json";

  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(url)
      .then((d) => {
        d.data.queryResults.row?.length > 0 &&
          d.data.queryResults.row.forEach((item) => {
            if (item.play_id === id) {
              setData(item);
            }
          });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="single-pitch-view">
      <h2>Single Pitch View</h2>
      <div className="pitch-info">
        <p>
          <strong>Game PK: </strong> {data?.game_pk}
        </p>
        <p>
          <strong>away team name: </strong> {data?.away_team_name}
        </p>
        <p>
          <strong>away team code: </strong> {data?.away_team_code}
        </p>
        <p>
          <strong>home team name :</strong> {data?.home_team_name}
        </p>
        <p>
          <strong>sequence number :</strong> {data?.sequence_number}
        </p>
        <p>
          <strong>at bat number :</strong> {data?.at_bat_number}
        </p>
        <p>
          <strong>pitch number :</strong> {data?.pitch_number}
        </p>
        <p>
          <strong>event pitch number :</strong> {data?.event_pitch_number}
        </p>
        <p>
          <strong>inning :</strong> {data?.inning}
        </p>
        <p>
          <strong>inning half :</strong> {data?.inning_half}
        </p>
        <p>
          <strong>batting team name :</strong> {data?.batting_team_name}
        </p>
        <p>
          <strong>batting team code :</strong> {data?.batting_team_code}
        </p>
        <p>
          <strong>fielding team name :</strong> {data?.fielding_team_name}
        </p>
        <p>
          <strong>fielding team code :</strong> {data?.fielding_team_code}
        </p>
        <p>
          <strong>event number :</strong> {data?.event_number}
        </p>
        <p>
          <strong>event type :</strong> {data?.event_type}
        </p>
        <p>
          <strong>pbp number :</strong> {data?.pbp_number}
        </p>
        <p>
          <strong>event result :</strong> {data?.event_result}
        </p>

        <p>
          <strong>umpire call :</strong> {data?.umpire_call}
        </p>
        <p>
          <strong>batter name :</strong> {data?.batter_name}
        </p>
        <p>
          <strong>bat side :</strong> {data?.bat_side}
        </p>
        <p>
          <strong>p bat side :</strong> {data?.p_bat_side}
        </p>

        <p>
          <strong>pitcher name :</strong> {data?.pitcher_name}
        </p>
        <p>
          <strong>pitcher throws :</strong> {data?.pitcher_throws}
        </p>
        <p>
          <strong>sz top :</strong> {data?.sz_top}
        </p>
        <p>
          <strong>sz bottom :</strong> {data?.sz_bottom}
        </p>
        <p>
          <strong>inning at bat number :</strong> {data?.inning_at_bat_number}
        </p>
        <p>
          <strong>pitcher at bat number :</strong> {data?.pitcher_at_bat_number}
        </p>
        <p>
          <strong>balls :</strong> {data?.balls}
        </p>
        <p>
          <strong>strikes :</strong> {data?.strikes}
        </p>
        <p>
          <strong>outs :</strong> {data?.outs}
        </p>
        <p>
          <strong>initial speed :</strong> {data?.initial_speed}
        </p>
        <p>
          <strong>init pos x :</strong> {data?.init_pos_x}
        </p>
        <p>
          <strong>init pos y :</strong> {data?.init_pos_y}
        </p>
        <p>
          <strong>init pos z :</strong> {data?.init_pos_z}
        </p>
        <p>
          <strong>init vel x :</strong> {data?.init_vel_x}
        </p>
        <p>
          <strong>init vel y :</strong> {data?.init_vel_y}
        </p>
        <p>
          <strong>init vel z :</strong> {data?.init_vel_z}
        </p>
        <p>
          <strong>init accel x :</strong> {data?.init_accel_x}
        </p>
        <p>
          <strong>init accel y :</strong> {data?.init_accel_y}
        </p>
        <p>
          <strong>init accel z :</strong> {data?.init_accel_z}
        </p>
        <p>
          <strong>plate speed :</strong> {data?.plate_speed}
        </p>
        <p>
          <strong>plate x :</strong> {data?.plate_x}
        </p>
        <p>
          <strong>plate y :</strong> {data?.plate_y}
        </p>
        <p>
          <strong>plate z :</strong> {data?.plate_z}
        </p>
        <p>
          <strong>break x :</strong> {data?.break_x}
        </p>
        <p>
          <strong>break z :</strong> {data?.break_z}
        </p>
        <p>
          <strong>break x :</strong> {data?.break_x}
        </p>
        <p>
          <strong>pitch type :</strong> {data?.pitch_type}
        </p>
        <p>
          <strong>pitch name :</strong> {data?.pitch_name}
        </p>
        <p>
          <strong>time stamp :</strong> {data?.time_stamp}
        </p>
        <p>
          <strong>game date :</strong> {data?.game_date}
        </p>
        <p>
          <strong>game nbr :</strong> {data?.game_nbr}
        </p>
        <p>
          <strong>year :</strong> {data?.year}
        </p>
        <p>
          <strong>game type :</strong> {data?.game_type}
        </p>
      </div>

      <div className="pitch-visualization"></div>
    </div>
  );
}
