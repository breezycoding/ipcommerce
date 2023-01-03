import { makeStyles } from "tss-react/mui";
import { alpha } from "@mui/material/styles";

const useStyles = makeStyles()((theme) => {
  return {
    imageContainer: {
      position: "relative",
      "&:after": {
        content: '""',
        display: "block",
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        paddingBottom: "100%",
      },
    },
    imageContainerMain: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
    },
    title: {
      textOverflow: "ellipsis",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
      display: "-webkit-box",
      overflow: "hidden",
      fontSize: "1.25rem",
      minHeight: "53px",
    },
    price: {
      color: theme.palette.primary.main,
    },
  };
});

export default useStyles;
