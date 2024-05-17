import { Table, TableHead, TableCell, TableRow, TableBody } from "@mui/material";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUserDataTable, setFaq} from "../redux/app.reducer";


const UserPage = () => {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const userDataTable = useSelector((state) => state.app.userDataTable);
  const faq = useSelector((state) => state.app.faq);

  useEffect(() => {
    getData();
    getFaq();
  }, []);

  const getData = async () => {
    const response = await axios({
      method: "GET",
      url: "https://sandbox.practical.me/api/user/profile",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(setUserDataTable(response.data.data));
  };

  const getFaq = async () => {
    const response = await axios({
      method: "GET",
      url: "https://sandbox.practical.me/api/faq",
      headers: { },
    });
    dispatch(setFaq(response.data.data));
  };

  return (
    <>
    <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Surname</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        

      </Table>
   
         
      </Table>
    </>
  );
};

export default UserPage;
