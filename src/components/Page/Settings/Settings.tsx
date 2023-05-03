import { Box, Container, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { BsInbox, BsMailbox } from "react-icons/bs"

const Setting = () => {
   return (
      <Container>
         <Typography variant='headline'>Setting </Typography>
         <Box role="presentation">
						<List>
							{['Inbox', 'Starred', 'Send email', 'Drafts'].map(
								(text, index) => (
									<ListItem key={text} disablePadding>
										<ListItemButton>
											<ListItemIcon>
												{index % 2 === 0 ? <BsInbox /> : <BsMailbox />}
											</ListItemIcon>
											<ListItemText primary={text} />
										</ListItemButton>
									</ListItem>
								)
							)}
						</List>
						<Divider />
						<List>
							{['All mail', 'Trash', 'Spam'].map((text, index) => (
								<ListItem key={text} disablePadding>
									<ListItemButton>
										<ListItemIcon>
											{index % 2 === 0 ? <BsInbox /> : <BsMailbox />}
										</ListItemIcon>
										<ListItemText primary={text} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Box>
      </Container>
   )
}

export default Setting