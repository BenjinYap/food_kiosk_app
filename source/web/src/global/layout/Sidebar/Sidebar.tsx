import {Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled} from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import StarIcon from '@mui/icons-material/Star';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import {Link} from "react-router-dom";
import CoffeeIcon from '@mui/icons-material/Coffee';

const MyDrawer = styled(Drawer)(({theme}) => {
  const stupidPositionTopHack = {
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
  };

  return {
    ...stupidPositionTopHack,
    '.MuiBackdrop-root': stupidPositionTopHack,
    '.MuiPaper-root': {
      [theme.breakpoints.up('md')]: {
        position: 'static',
      },
      ...stupidPositionTopHack,
    },
  };
});

type SidebarProps = {
  width: number,
  mdDown: boolean,
  mobileSidebarOpen: boolean,
  onMobileSidebarToggle: () => void,
};

function Sidebar(props: SidebarProps) {
  return (
    <MyDrawer
      variant={props.mdDown ? 'temporary' : 'permanent'}
      open={props.mobileSidebarOpen}
      onClose={() => props.onMobileSidebarToggle()}
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
              <CoffeeIcon/>
            </ListItemIcon>
            <ListItemText>Beverages</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </MyDrawer>
  );
}

export default Sidebar;