import {Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled} from "@mui/material";
import {useState} from "react";
import HelpIcon from '@mui/icons-material/Help';
import StarIcon from '@mui/icons-material/Star';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import {Link} from "react-router-dom";

const MyDrawer = styled(Drawer)(({theme}) => ({
  '.MuiPaper-root': {
    [theme.breakpoints.up('md')]: {
      position: 'static',
    },
    [theme.breakpoints.down('md')]: {
      top: theme.mixins.toolbar.minHeight,
      [theme.breakpoints.up('xs')]: {
        '@media (orientation: landscape)': {
          top: theme.mixins.toolbar[theme.breakpoints.up('xs')]['@media (orientation: landscape)'].minHeight,
        },
      },
      [theme.breakpoints.up('sm')]: {
        top: theme.mixins.toolbar[theme.breakpoints.up('sm')].minHeight,
      },
    },
  },
}));

type SidebarProps = {
  width: number,
};

function Sidebar(props: SidebarProps) {
  const [open, setOpen] = useState(true);

  return (
    <MyDrawer
      variant="permanent"
      open={open}
      sx={{
        '.MuiPaper-root': {
          width: props.width
        },
      }}
    >
      <List sx={{
        'a:hover': {
          color: 'unset',
        },
      }}>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <HelpIcon/>
            </ListItemIcon>
            <ListItemText>About</ListItemText>

          </ListItemButton>

        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/order">

            <ListItemIcon>
              <StarIcon/>
            </ListItemIcon>

            <ListItemText>Featured</ListItemText>

          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LunchDiningIcon/>
            </ListItemIcon>
            <ListItemText>Burgers</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LunchDiningIcon/>
            </ListItemIcon>
            <ListItemText>Burgers</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LunchDiningIcon/>
            </ListItemIcon>
            <ListItemText>Burgers</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LunchDiningIcon/>
            </ListItemIcon>
            <ListItemText>Burgers</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LunchDiningIcon/>
            </ListItemIcon>
            <ListItemText>Burgers</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LunchDiningIcon/>
            </ListItemIcon>
            <ListItemText>Burgers</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LunchDiningIcon/>
            </ListItemIcon>
            <ListItemText>Burgers</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LunchDiningIcon/>
            </ListItemIcon>
            <ListItemText>Burgers</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LunchDiningIcon/>
            </ListItemIcon>
            <ListItemText>Burgers</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LunchDiningIcon/>
            </ListItemIcon>
            <ListItemText>Burgers</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LunchDiningIcon/>
            </ListItemIcon>
            <ListItemText>Burgers</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LunchDiningIcon/>
            </ListItemIcon>
            <ListItemText>Burgers</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LunchDiningIcon/>
            </ListItemIcon>
            <ListItemText>Burgers</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LunchDiningIcon/>
            </ListItemIcon>
            <ListItemText>Burgers</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LunchDiningIcon/>
            </ListItemIcon>
            <ListItemText>Burgers</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Button onClick={() => setOpen(!open)}>awd</Button>
    </MyDrawer>
  );
}

export default Sidebar;