import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Confetti from "react-confetti";

function App(props) {
  const [state, setState] = React.useState({
    oui: false,
  });

  const [users, setUsers] = React.useState("");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "OUI" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{ textAlign: "center", padding: "20px 0px" }}>
        Motifs d'invalidation des audios
      </div>
      <List style={{ display: "flex", justifyContent: "space-between" }}>
        {[
          {
            text: "Mauvaise prononciation",
            background: "#B89FBF",
            color: "white",
          },
          {
            text: "Lecture incorrecte",
            background: "#F2CD88",
            color: "#513F59",
          },
          { text: "Abscence de son", background: "#513F59", color: "white" },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <button
                style={{
                  backgroundColor: item.background,
                  color: item.color,
                }}
              >
                {item.text}
              </button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
  //   response = response.json();
  //   response.then((result) => {
  //     console.log(result);
  //     setUsers(name);
  //   });
  // });

  return (
    <div className="App">
      {/* {["oui"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>OUI</Button>
          <Drawer
            anchor="bottom"
            open={state["oui"]}
            onClose={toggleDrawer("oui", false)}
            PaperProps={{
              style: {
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "100%",
              },
            }}
          >
            {list("oui")}
          </Drawer>
        </React.Fragment>
      ))} */}
      {/* <div>
        <p>nom:</p>
        <p>{users.name}</p>
      </div> */}
      <div class="box">
        <h1>Joyeux anniversaire CSS !</h1>
        <div class="cake">
          <div class="candle">
            <div class="fire"></div>
            <div class="fire"></div>
            <div class="fire"></div>
            <div class="fire"></div>
            <div class="fire"></div>
          </div>
        </div>
      </div>
      <Confetti />
    </div>
  );
}

export default App;
