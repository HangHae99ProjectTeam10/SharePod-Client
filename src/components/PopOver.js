import * as React from "react";
import styled from "styled-components";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { font_light_gray_color } from "constants/ColorSet";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import MyPageService from "services/myPage";

const BasicPopover = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const onHandleDelete = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      console.log("삭제");
      dispatch(MyPageService.deleteProduct(props.boardId));
    } else {
      handleClose();
    }
  };

  return (
    <PopoverWrapper>
      <MoreVertOutlinedIcon
        aria-describedby={id}
        onClick={handleClick}
        className={classes.moreBtn}
      />

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
          vertical: "bottom",
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
            onClick={onHandleDelete}
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
  position: absolute;
  top: 0px;
  right: 0px;
`;
const useStyles = makeStyles(() => ({
  moreBtn: {
    position: "absolute",
    top: "0px",
    right: "0px",
    marginTop: "20px",
    color: "#999",
    cursor: "pointer",
  },
}));
