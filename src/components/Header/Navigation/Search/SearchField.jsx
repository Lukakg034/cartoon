import { useContext } from "react";
import MovieDataContext from "../../../../contexts/context";
import { Autocomplete, TextField } from "@mui/material";

export default function Search() {
  const { data } = useContext(MovieDataContext);
  console.log(data);
  // console.log(data[7].episodes[5].videoURL);
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data}
      sx={{ width: 450 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search..."
          variant="filled"
          color="primary"
        />
      )}
    />
  );
}
