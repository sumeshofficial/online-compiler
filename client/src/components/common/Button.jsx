import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Buttons({content, bg, startIcon, onClick, disabled}) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={onClick}
        variant="contained"
        startIcon={startIcon}
        sx={{
          backgroundColor: bg,
          px: { xs: 1.5, md: 2 },
          py: { xs: 0.7, md: 0.8 },
          minWidth: { xs: 50, md: 64 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 0.5,
          "& .MuiButton-startIcon": {
            marginRight: 0,
            marginLeft: 0
          },
          "&.Mui-disabled": {
            backgroundColor: bg,
            color: "#ffffff",
            opacity: 1,
            cursor: "not-allowed"
          }
        }}
        disabled={disabled}
      >
        {content}
      </Button>
    </Stack>
  );
}
