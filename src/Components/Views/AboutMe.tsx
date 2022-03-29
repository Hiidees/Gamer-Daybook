import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { ButtonMenuStyle } from "../Portables/Styles/ButtonStyle";

export interface IAboutMeProps {}

export function AboutMe(props: IAboutMeProps) {
  return (
    <React.Fragment>
      <Drawer
        variant="permanent"
        anchor="left"
        PaperProps={{
          style: {
            backgroundImage: "none",
            backgroundColor: "none",
            boxShadow: "none",
            background: "none",
            borderRight: "none",
          },
        }}
      >
        <Toolbar />

        <List>
          {[
            "General Information",
            "My studies",
            "My hobby",
            "My actual position",
          ].map((text, index) => (
            <ListItem button key={text} disableRipple sx={ButtonMenuStyle}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text} disableRipple sx={ButtonMenuStyle}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
