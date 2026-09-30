import {
  Box,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

import { processSteps } from "../../data/immigrationData";

export function ProcessStepper() {
  return (
    <Box>
      <Stepper
        alternativeLabel
        activeStep={-1}
        sx={{
          "& .MuiStepConnector-line": {
            borderColor: "#D6DEE8",
          },

          "& .MuiStepIcon-root": {
            color: "#D6DEE8",
          },

          "& .MuiStepIcon-root.Mui-active": {
            color: "primary.main",
          },

          "& .MuiStepIcon-root.Mui-completed": {
            color: "secondary.main",
          },
        }}
      >
        {processSteps.map((step) => (
          <Step key={step.number}>
            <StepLabel>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 700,
                  color: "text.primary",
                }}
              >
                {step.title}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, 1fr)",
          },
          gap: 2,
          mt: 5,
        }}
      >
        {processSteps.map((step) => (
          <Box
            key={step.number}
            sx={{
              p: 2.5,
              border: "1px solid #E5E7EB",
              borderRadius: 2,
              backgroundColor: "#FFFFFF",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "primary.main",
                fontWeight: 800,
              }}
            >
              ETAPA {step.number}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mt: 0.5,
                mb: 1,
                fontWeight: 700,
              }}
            >
              {step.title}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {step.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}