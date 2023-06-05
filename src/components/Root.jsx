import { Route, Routes } from "react-router-dom";
import MultiPitch from "./MultiPitch";
import SinglePitch from "./SinglePitch";

export default function Root() {
  return (
    <Routes>
      <Route path="/" element={<MultiPitch />} />
      <Route path="/:id" element={<SinglePitch />} />
    </Routes>
  );
}
