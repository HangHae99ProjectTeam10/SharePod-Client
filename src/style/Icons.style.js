import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  favoriteIcon: {
    position: "absolute",
    right: "0",
    margin: "10px",
    fontSize: "1.8rem",
    color: "#4A2FC3",
  },
  searchIcon: {
    color: "#ADB9C8",
    marginRight: "10px",
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translate(50%, -70%)",
  },
}));
