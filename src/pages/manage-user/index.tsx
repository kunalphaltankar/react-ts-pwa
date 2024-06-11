import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { ReactElement, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateHeaderTitle } from "../../redux/reducers/global.reducer";
import { Stores } from "../../shared/db";
import {
  addData,
  deleteData,
  getData,
  getIndexValues,
  updateData,
} from "../../shared/db/operations";

interface FormValues {
  [key: string]: { value: string };
}

const initialFormValues: FormValues = {
  name: { value: "" },
  email: { value: "" },
  password: { value: "" },
  country: { value: "" },
};

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  country: string;
}

function ManageUser(): ReactElement {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateHeaderTitle({ title: "Manage User" }));
  }, []);

  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState("");

  useEffect(() => {
    // Function to fetch data from IndexedDB and set it in the state
    const fetchDataFromIndexedDB = async () => {
      // Fetch your data from IndexedDB, e.g., using your `getData` function
      const data: User[] = await getData<User>(Stores.Users); // Replace with your actual function and store name

      // Update the state with the fetched data
      setUsers(data);
    };

    fetchDataFromIndexedDB(); // Call the data fetching function on page load
  }, []);

  // Function to populate the form with existing user data for update
  const populateFormForUpdate = (user: User) => {
    setSelectedUserId(user.id);
    setFormValues({
      name: { value: user.name },
      email: { value: user.email },
      password: { value: user.password },
      country: { value: user.country },
    });
  };

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: {
        ...formValues[name],
        value,
      },
    });
  };

  const getUsers = async () => {
    const users = await getData<User>(Stores.Users);
    setUsers(users);
  };

  const handleSubmit = async (id: string) => {
    try {
      const name = formValues.name.value;
      const email = formValues.email.value;
      const password = formValues.password.value;
      const country = formValues.country.value;
      // Check if the email already exists in the users array
      const existingUser = users.find((user) => user.id === id);

      if (existingUser) {
        // If the email exists, update the user's data
        await updateData(Stores.Users, existingUser.id, {
          name,
          email,
          password,
          country,
        });
        setSelectedUserId("");
      } else {
        // If the email doesn't exist, add a new user
        const id = Date.now();
        await addData(Stores.Users, { name, email, password, country, id });
      }

      // Clear the form
      setFormValues(initialFormValues);
      getUsers();
    } catch (err: unknown) {
      console.log({ err });
    }
  };

  const handleRemoveUser = async (id: string) => {
    try {
      await deleteData(Stores.Users, id);
      // refetch users after deleting data
      getUsers();
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <Stack maxWidth={330} textAlign="center" spacing={2} pt={3}>
      <TextField
        fullWidth
        required
        label="Name"
        name="name"
        onChange={handleChange}
        value={formValues.name.value}
      />

      <TextField
        fullWidth
        required
        label="Email"
        type="email"
        onChange={handleChange}
        name="email"
        value={formValues.email.value}
      />

      <TextField
        fullWidth
        required
        label="Password"
        type="password"
        onChange={handleChange}
        name="password"
        value={formValues.password.value}
      />

      <TextField
        fullWidth
        required
        label="Country"
        onChange={handleChange}
        name="country"
        value={formValues.country.value}
      />

      <Button
        color="secondary"
        size="large"
        variant="contained"
        disabled={
          !(
            formValues.name.value &&
            formValues.email.value &&
            formValues.password.value &&
            formValues.country.value
          )
        }
        onClick={() => {
          if (selectedUserId) {
            handleSubmit(selectedUserId); // Update the existing user
          } else {
            handleSubmit(""); // Add a new user
          }
        }}
      >
        {selectedUserId ? "Update User" : "Add User"}
      </Button>

      <Button
        onClick={async () => {
          setUsers(
            await getIndexValues<User>(Stores.Users, "UserCountryIDX", "BR")
          );
        }}
      >
        Get all BR users
      </Button>
      <Button
        onClick={async () => {
          setUsers(await getData<User>(Stores.Users));
        }}
      >
        Get all users
      </Button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && (
            <tr>
              <td colSpan={4}>No Users found!</td>
            </tr>
          )}

          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.country}</td>
              <td>
                <button onClick={() => handleRemoveUser(user.id)}>
                  Delete
                </button>
              </td>
              <td>
                <button onClick={() => populateFormForUpdate(user)}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Stack>
  );
}

export default ManageUser;
