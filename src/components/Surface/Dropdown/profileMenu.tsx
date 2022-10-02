import {
  DeleteIcon,
  DownloadIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteModal from "../Modal/deleteModal";

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen((state) => !state);
  };
  const testAvatarImg =
    "https://i.postimg.cc/ZKC1ykyk/Whats-App-Image-2022-05-28-at-16-38-52.jpg";
  const avatarAlt =
    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png";

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          className="-m-8 self-end"
          color="skyblue"
        />
        <MenuList>
          <MenuOptionGroup title="Profile Actions">
            <Link to="/profile/edit">
              <MenuItem icon={<EditIcon />}>Edit Profile</MenuItem>
            </Link>
            <MenuItem icon={<ExternalLinkIcon />}>Donwload Profile</MenuItem>
            <MenuItem icon={<DownloadIcon />}>Import Profile</MenuItem>
            <MenuItem onClick={openModal} icon={<DeleteIcon />} color="red.600">
              Delete Profile
            </MenuItem>
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup title="Switch Account">
            <MenuItem
              icon={
                <img
                  className="rounded-full h-7 aspect-square object-cover"
                  src={testAvatarImg ?? avatarAlt}
                ></img>
              }
            >
              User 1
            </MenuItem>
            <MenuItem
              icon={
                <img
                  className="rounded-full h-7 aspect-square object-cover"
                  src={avatarAlt}
                ></img>
              }
            >
              User 2
            </MenuItem>
            <MenuItem
              icon={
                <img
                  className="rounded-full h-7 aspect-square object-cover"
                  src={avatarAlt}
                ></img>
              }
            >
              User 3
            </MenuItem>
            <MenuItem>List all users</MenuItem>
          </MenuOptionGroup>
        </MenuList>
      </Menu>

      <DeleteModal open={open} setOpen={setOpen} />
    </>
  );
};

export default ProfileMenu;
