import * as React from "react";
import styled from "styled-components";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { font_light_gray_color } from "constants/ColorSet";

const BasicPopover = React.forwardRef(() => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <PopoverWrapper>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        <MoreVertOutlinedIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          horizontal: "right",
        }}
      >
        <div
          style={{
            padding: "0 18px",
          }}
        >
          <Typography
            sx={{ p: 2 }}
            style={{
              cursor: "pointer",
            }}
          >
            삭제
          </Typography>
          <Typography
            sx={{ p: 2 }}
            style={{
              borderTop: "1px solid #e0e0e0",
              cursor: "pointer",
            }}
          >
            게시글 보기
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "240px",
            padding: "14px 16px",
            borderTop: "1px solid #e0e0e0",
          }}
          className="closeButton"
        >
          <Typography
            onClick={handleClose}
            style={{
              cursor: "pointer",
            }}
          >
            닫기 ⨉
          </Typography>
        </div>
      </Popover>
    </PopoverWrapper>
  );
});
export default BasicPopover;

const PopoverWrapper = styled.div`
  position: relative;
  button {
    position: absolute;
    top: -100px;
    right: 20px;
    span {
      display: none;
    }
  }
  button,
  button:hover {
    box-shadow: none;
    background-color: transparent;
    color: ${font_light_gray_color};
  }
`;
