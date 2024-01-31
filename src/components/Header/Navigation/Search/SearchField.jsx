import { useContext } from "react";
import MovieDataContext from "../../../../contexts/context";
import { Autocomplete, TextField } from "@mui/material";

export default function Search() {
  const { data } = useContext(MovieDataContext);
  // console.log(data);
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data}
      sx={{ width: 450 }}
      renderInput={(params) => <TextField {...params} label="Search..." />}
    />
  );
}
