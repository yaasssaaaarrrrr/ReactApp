import "./App.css";
import Header from "./header.js";
import Dashboard from "./dashboard.js";
import ReferCode from "./referCode.js";
import Introguide from "./introguide.js";
import SecondHeader from "./secondheader.js";
function App() {
  return (
    <div className="App">
      <Header />
      <SecondHeader />
      <div className="dashrefer">
        <Dashboard />
        <ReferCode />
      </div>
      <div>
        <Introguide />
      </div>
      <div className="friendsEnrolled">
        <h1>Friends Who Enrolled</h1>
      </div>
      <div className="privacy">
        <h1>Terms & Conditions</h1>
      </div>
    </div>
  );
}

export default App;
