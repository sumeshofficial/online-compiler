import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useCompilerStore } from '../../store/compilerStore';

export default function LanguageSelector() {
  const language = useCompilerStore((state) => state.language);
  const setLanguage = useCompilerStore((state) => state.setLanguage);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Box
      sx={{
        minWidth: 140,
        "& .MuiInputLabel-root": { color: "#b0bec5" },
        "& .MuiOutlinedInput-root": {
          color: "#ffffff",
          "& fieldset": { borderColor: "#b0bec5" },
          "&:hover fieldset": { borderColor: "#ffffff" },
          "&.Mui-focused fieldset": { borderColor: "#00e5ff" }
        },
        "& .MuiSvgIcon-root": { color: "#ffffff" }
      }}
    >
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Lang</InputLabel>
        <Select
          size="medium"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="lang"
          onChange={handleChange}
          defaultValue="javascript"
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "#1E1E1E",
                color: "#ffffff",
                "& .MuiMenuItem-root:hover": {
                  backgroundColor: "#2a2a2a"
                }
              }
            }
          }}
          sx={{
            "& .MuiSelect-select": {
              paddingTop: "8px",
              paddingBottom: "8px",
            }
          }}
        >
          <MenuItem value={"javascript"}>Javascript</MenuItem>
          <MenuItem value={"python"}>Python</MenuItem>
          <MenuItem value={"cpp"}>C++</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
