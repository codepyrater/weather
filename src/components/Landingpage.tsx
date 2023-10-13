import { Box } from "@mui/system";
import { Navbar } from "./Navbar/navbar";
import { Grid, Paper, Typography} from "@mui/material";
import { useState, useEffect } from "react";
import mockdata from "./mock-data.json";
interface employeedata {
  id: string;
  firstName: string;
  lastName: string;
}

interface transactionsdata {
  id: string;
  amount: number;
  employee: {
    id: string;
    firstName: string;
    lastName: string;
    extras: number;
  };
  merchant: string;
  date: string;
  approved: boolean;
}

interface AboutMeData {
  employees: Array<employeedata>;
  transactions: Array<transactionsdata>;
}

export const LandingPage = () => {
  const [data, setData] = useState<AboutMeData | null>(null);

  useEffect(() => {
    setData(mockdata);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar></Navbar>
      <Box>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper>
                <img src="path/to/your/image.jpg" alt="Your Description"/>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper>
                <Typography variant="h4">About Me</Typography>
                <Typography variant="body1">
                  I am a software engineer intern with experience in various technologies such as React, TypeScript, FastAPI, and AWS S3. Passionate about coding, I enjoy working on innovative projects and collaborating with talented teams to create outstanding digital products.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper>
                <Typography variant="h4">Transactions</Typography>
                <ul>
                  {data.transactions.map((transaction, index) => (
                    <li key={index}>{transaction.amount}</li>
                  ))}
                </ul>
                <Typography variant="h4">Employees</Typography>
                <ul>
                  {data.employees.map((employee, index) => (
                    <li key={index}>{employee.firstName} {employee.lastName}</li>
                  ))}
                </ul>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
}
