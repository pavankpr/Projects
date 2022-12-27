import "./App.css";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Whoweare from "./components/Whoweare";
import Wherewestarted from "./components/Wherewestarted";
import Cardsection from "./components/Cardsection";
import Table from "./components/Table";
import Aboutus from "./components/Aboutus";
import Home from "./components/Home";
import Footer from "./components/Footer";

const whoWeAreText1 =
  "Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.";
const whoWeAreText2 =
  "Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.";
const whoWeAreHeader = "who we are";
const whereWeStartedHeader = "where we started";
const whereWeStartedText =
  "Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.";

function App() {
  return (
    <div className="App">
      <Box>
        <Navbar />
        <Home />
        <Whoweare
          content={{ whoWeAreHeader, whoWeAreText1, whoWeAreText2 }}
        ></Whoweare>
        <Wherewestarted
          content={{ whereWeStartedHeader, whereWeStartedText }}
        ></Wherewestarted>
        <Cardsection />
        <Table />
        <Aboutus />
        <Footer />
      </Box>
    </div>
  );
}

export default App;
