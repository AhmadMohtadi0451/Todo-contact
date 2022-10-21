import { Button, Grid, Typography } from "@mui/material";
import rowTable from "../../Data/Home/TableData";
import { deleteContact } from "../../Redux/Slice/ContactReducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const TableRow = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <Grid container alignItems={"center"} flexDirection={"row"} p={2}>
      {rowTable.map((row) => (
        <Grid key={row.id}>
          <Grid item xs={1.5} p={2}>
            <Typography>
              {row.title.toUpperCase()}: {contact[row.title]}
            </Typography>
          </Grid>
        </Grid>
      ))}
      <Grid p={2}>
        <Button
          variant={"outlined"}
          color={"error"}
          onClick={() => handleDelete(contact.id)}
          sx={{ borderRadius: 2 }}
        >
          DELETE
        </Button>
      </Grid>
      <Grid p={2}>
        <Button variant={"outlined"} sx={{ borderRadius: 2 }}>
          INFO
        </Button>
      </Grid>
      <Grid p={2}>
        <Link to={`/updateContact/${contact.id}`}>
          <Button
            variant={"outlined"}
            color={"secondary"}
            sx={{ borderRadius: 2 }}
          >
            UPDATE
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default TableRow;
