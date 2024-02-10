import React from "react";
import {
   Box,
   Button,
   Grid,
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   Paper,
   Stack,
   Typography,
} from "@mui/material";
import { BsFolder } from "react-icons/bs";
import { currencyFormat } from "../../App";
import { blue, green, grey, orange } from "../../colors";
import dayjs from "dayjs";

interface expense {
   name: string,
   cash: number,
   color: any,
   precent: number
}

const Statistic = () => {
   const data:expense[] = [
      {
         name: "Крупные",
         cash: 30000,
         color: orange,
         precent: 0,
      },
      {
         name: "Квартира",
         cash: 25000,
         color: green,
         precent: 0,
      },
      {
         name: "Повседневные",
         cash: 45000,
         color: blue,
         precent: 0,
      },
   ];
   let dataash: number = 0;

   data.map((el: expense) => {
      return (dataash += el.cash);
   });
   data.map((el: expense) => {
      return (el.precent = Math.floor(el.cash / (dataash / 100)));
   });

   const miniChart = (arr: expense[]) => {
      return (
         <Grid
            container
            // Из-за процентов съезжает
            // gap={'1px'}
            sx={{
               minWidth: "100%",
               margin: 0,
               borderRadius: "100px",
               overflow: "hidden",
               m: "8px 0 4px",
            }}
         >
            {arr.map((el: expense, index: any) => {
               return (
                  <Grid
                     item
                     key={index}
                     width={`${el.precent}%`}
                     height={"20px"}
                     sx={{ background: el.color.main }}
                  />
               );
            })}
         </Grid>
      );
   };

   return (
      <Paper
         className="Statistic"
         variant="big"
         elevation={4}
         sx={{ p: "16px 18px 8px", m: "16px" }}
      >
         <Box
            sx={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
            }}
         >
            <Typography variant="headlineMini">Статистика</Typography>
            <Typography variant="footnote" color={grey[400]}>
               {/* 1 нед. июля */}
               {dayjs(new Date()).format('MMMM [(1 нед.)]')}
            </Typography>
         </Box>
         {miniChart(data)}
         <List>
            {data.map((el: any, index: any) => (
               <ListItem key={index} sx={{ p: "4px 0" }}>
                  <ListItemIcon sx={{ marginRight: "12px" }}>
                     <Stack
                        spacing={6}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                           background: el.color.light,
                           boxSizing: "border-box",
                           width: 70,
                           height: 28,
                           borderRadius: "8px",
                           overflow: "hidden",
                           p: "0 6px 0 0",
                        }}
                     >
                        <Box
                           sx={{
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex",
                              minWidth: "28px",
                              height: "28px",
                              borderRadius: "8px",
                              background: el.color.main,
                           }}
                        >
                           <BsFolder color={grey[50]} />
                        </Box>
                        <Typography
                           variant="footnoteMedium"
                           sx={{ color: el.color.main }}
                        >
                           {el.precent}%
                        </Typography>
                     </Stack>
                  </ListItemIcon>
                  <ListItemText>
                     <Typography variant="body">{el.name}</Typography>
                  </ListItemText>
                  <Typography variant="bodyMedium">
                     {currencyFormat(el.cash, "ru")}
                  </Typography>
               </ListItem>
            ))}
         </List>
         <Button fullWidth>Открыть</Button>
      </Paper>
   );
};

export default Statistic;
