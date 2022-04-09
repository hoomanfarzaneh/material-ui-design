import {Grid} from "@material-ui/core";
import Navbar from "./components/Navbar";
import Feed from './components/Feed';
import Sidebar from "./components/Sidebar";

 const App = () => {
  return (
    <div>
      <Grid container>
        <Grid  xs={2}>
            <Sidebar />
          </Grid>
        <Grid xs={10} >
            <Navbar />
            <Feed />
        </Grid>
      </Grid>
    </div>
  )
}
export default App;
