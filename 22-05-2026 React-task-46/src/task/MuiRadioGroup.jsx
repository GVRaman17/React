import React, { useState } from "react";
import {FormControl,FormControlLabel,FormLabel,Radio,RadioGroup,Typography,} from "@mui/material";
function MuiRadioGroup(){
  const [gender, setGender] = useState("");
  function handleChange (e) {
    setGender(e.target.value);
  };
  return (
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup row value={gender} onChange={(e)=>handleChange(e)}>
        <FormControlLabel
          value="male"
          control={<Radio />}
          label="Male"
        />
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="Female"
        />
      </RadioGroup>
      <Typography>
        Selected Gender: {gender}
      </Typography>
    </FormControl>
  );
};
export default MuiRadioGroup;