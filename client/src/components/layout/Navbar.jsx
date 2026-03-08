import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import LanguageSelector from "../editor/LanguageSelector";
import Buttons from "../common/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useCompilerStore } from "../../store/compilerStore";
import { useRunCode } from "../../hooks/useRunCode";
import Loader from "../common/Loader";

function ResponsiveAppBar() {
  const { isMain, setIsMain, code, language, setOutput } = useCompilerStore();

  const { runCode, isLoading } = useRunCode();

  const handleChange = (event, newValue) => {
    setIsMain(newValue)
  };

  const handleSubmit = () => {
    setOutput("")
    runCode({ code, language });
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1e1e1e"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Compiler
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "right",
              alignItems: "center",
              gap: 2,
            }}
          >
            <LanguageSelector />
            <Buttons
              content={isLoading ? "" : "RUN"}
              bg="green"
              startIcon={isLoading ? <Loader size={24} /> : <PlayArrowIcon />}
              onClick={handleSubmit}
              disabled={isLoading || !code}
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <Tabs
              value={isMain}
              onChange={handleChange}
              aria-label="nav tabs example"
              role="navigation"
              sx={{
                minHeight: 36,
                "& .MuiTabs-indicator": {
                  backgroundColor: "#00e5ff",
                },
              }}
            >
              <LinkTab label="Main" />
              <LinkTab label="Output" />
            </Tabs>
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              ml: "auto",
              alignItems: "center",
            }}
          >
            <Buttons
              content=""
              bg="green"
              startIcon={isLoading ? <Loader size={18} /> : <PlayArrowIcon />}
              onClick={handleSubmit}
              disabled={isLoading || !code}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

function LinkTab(props) {
  return (
    <Tab
      sx={{
        color: "#b0bec5",
        minHeight: 36,
        minWidth: 70,
        fontSize: "0.75rem",
        padding: "4px 8px",
        "&.Mui-selected": {
          color: "#ffffff",
        },
      }}
      {...props}
    />
  );
}

LinkTab.propTypes = {
  selected: PropTypes.bool,
};
