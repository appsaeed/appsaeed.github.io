import { Route, Routes } from "@solidjs/router";
import Nopage from "./pages/404";
import Homepage from "./pages/index";
import License from "./pages/license";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/license" element={<License />} />
      <Route path="/*" element={<Nopage />} />
    </Routes>
  );
}
