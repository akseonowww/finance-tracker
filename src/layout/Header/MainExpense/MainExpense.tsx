import React from "react";
import { Button, Typography } from "@mui/material"
import { grey } from "../../../colors";

const MainExpense = () => {
   const [closeExpenses, setCloseExpenses] = React.useState(false);

   return (
      <>
      <Button
				onClick={() => setCloseExpenses(true)}
				sx={{
					display: closeExpenses ? 'none' : 'flex',
					justifyItems: 'center',
					flexDirection: 'column',
					textAlign: 'center',
					gap: '-2px',
					color: 'black',
					p: '6px 12px',
					m: '0 auto',
				}}
				style={{
					height: 'auto',
					padding: '0'
				}}
			>
				<Typography variant="headline">123 ₽</Typography>
				<Typography variant="body" color={grey[600]}>
					расходы за сегодня
				</Typography>
			</Button>
			{/* Потраченая сумма (сокращенная) */}
			<Button
				onClick={() => setCloseExpenses(false)}
				sx={{
					display: closeExpenses ? 'block' : 'none',
					color: 'black',
					width: '100%',
					borderRadius: '100px',
					p: '0',
					m: '0 auto',
				}}
			>
				<Typography variant="footnote" color={grey[600]}>
					123 ₽ (сегодня)
				</Typography>
			</Button></>
   )
}

export default MainExpense;