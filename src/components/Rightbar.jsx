import React from "react";
import Box from "@mui/material/Box";
import { Avatar, AvatarGroup, Typography } from "@mui/material";

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography>Online Friends</Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia_profile_image.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85yjygS-Mup0S3Y83QzTlzv05scSfXrR1Gw&usqp=CAU"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://media-exp1.licdn.com/dms/image/C5603AQFOUl3HN-h6jg/profile-displayphoto-shrink_200_200/0/1648520584142?e=2147483647&v=beta&t=YFRAKz3gQkqM67nA3h-ag7UafAkp7xRDy_4a_-S1qFk"
          />
          <Avatar
            alt="Travis Howard"
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Wikipedia_Profile_picture.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS12PGbtbON-6dSSFFl2nnBGg2Z25ImkEbEUHYMxaczLok4evzx_5c6BMhaSGYt7EG5v1M&usqp=CAU"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://www.thecityceleb.com/wp-content/uploads/2021/03/Toyboy-Biography-Age-Songs-Profile-Net-Worth-Wiki-Pictures-1080x641.jpg"
          />
          <Avatar alt="Cindy Baker" src="" />
          <Avatar
            alt="Cindy Baker"
            src="https://www.thecityceleb.com/wp-content/uploads/2021/03/Toyboy-Biography-Age-Songs-Profile-Net-Worth-Wiki-Pictures-1080x641.jpg"
          />
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default Rightbar;
