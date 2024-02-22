import {
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   Paper,
   Stack,
   Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { currencyFormat } from "../../App";
import { grey } from "../../theme/colors";
import historyStore from "../../store/HistoryStore";
import categoryStore from "../../store/CategoryStore";
import dayjs from "dayjs";

const History = observer(() => {
   return (
      <Paper variant="big">
         <Stack
            direction={"row"}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
         >
            <Typography variant="headlineMini">
               История
            </Typography>
            <Typography variant="footnote" color={grey[400]}>
               {/* сегодня, 1 июля */}
					{dayjs(new Date()).format('[сегодня,] DD MMMM')}
            </Typography>
            <Typography variant="footnoteMedium" color={grey[400]}>
               9 000 ₽
            </Typography>
         </Stack>

         <List sx={{ display: "flex", flexDirection: "column" }}>
            {historyStore.expenses.map((el) => {
               return (
                  <ListItem key={el.id} sx={{ p: 0, gap: "12px" }}>
                     {/* Иконка */}
                     <ListItemIcon
                        sx={{
                           background: "#D1E9F9",
                           height: "44px",
                           width: "44px",
                           minWidth: "auto",
                           boxSizing: "border-box",
                           display: "flex",
                           justifyContent: "center",
                           alignItems: "center",
                           borderRadius: "100px",
                        }}
                     >
                        {categoryStore.categories[el.category - 1].icon(
                           24,
                           "#0190F8"
                        )}
                     </ListItemIcon>
                     {/* Описание */}
                     <ListItemText
                        // sx={{ m: 0 }}
                        primary={
                           <Typography
                              variant="bodyMedium"
                              sx={{ display: "flex" }}
                           >
                              {categoryStore.categories[el.category - 1].title}
                           </Typography>
                        }
                        secondary={
                           <Typography
                              variant="footnoteMedium"
                              color={grey[400]}
                           >
                              {dayjs(el.date).format("DD MMMM YYYY (HH:mm)")}
                           </Typography>
                        }
                     />
                     {/* Сумма */}
                     <Typography variant="bodyMedium">
                        {currencyFormat(el.cash, "ru")}
                     </Typography>
                  </ListItem>
               );
            })}
         </List>
      </Paper>
   );
});

export default History;
