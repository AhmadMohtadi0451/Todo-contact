import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const SingleContact = () => {
  const { ContactId } = useParams();
  const contacts = useSelector((state) => state.contacts);
  useEffect(() => {
    const contact = contacts.filter((c) => c.id === Number(contactId()));
  }, [0]);
  return (
    <Grid>
      <Grid></Grid>
    </Grid>
  );
};

export default SingleContact;
