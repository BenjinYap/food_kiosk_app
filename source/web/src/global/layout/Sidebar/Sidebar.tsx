import {Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled} from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import StarIcon from '@mui/icons-material/Star';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import {Link} from "react-router-dom";
import CoffeeIcon from '@mui/icons-material/Coffee';
import {ReactElement} from "react";

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
        // @ts-ignore
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
  categories: Array<any> | undefined,
};

const CATEGORY_ICONS = {
  3: <StarIcon/>,
  1: <LunchDiningIcon/>,
  2: <CoffeeIcon/>,
};

type CategoryLink = {
  id: number,
  name: string,
  icon: ReactElement,
};

const Sidebar = (props: SidebarProps) => {
  //build an array of categories to be rendered in the sidebar
  let categoryLinks: Array<CategoryLink> | undefined;
  const buildCategories = () => {
    if (props.categories !== undefined) {
      categoryLinks = [];

      for (const i of props.categories) {
        categoryLinks.push({
          id: i.id,
          name: i.name,
          icon: CATEGORY_ICONS[i.id],
        });
      }
    }

  };
  buildCategories();

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
        {categoryLinks === undefined ? (
          <h1>hi</h1>
        ) : (
          categoryLinks.map((cat) => (
            <ListItem
              key={cat.id}
              disablePadding
            >
              <ListItemButton component={Link} to={`/order/category/${cat.id}`}>
                <ListItemIcon>
                  {cat.icon}
                </ListItemIcon>
                <ListItemText>{cat.name}</ListItemText>

              </ListItemButton>
            </ListItem>
          ))
        )}
      </List>
    </MyDrawer>
  );
};

export default Sidebar;