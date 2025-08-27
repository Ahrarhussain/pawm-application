import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase.config";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Button, Card, CardContent, Typography } from "@mui/material";

export function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(
        collection(db, "users"),
        where("uid", "==", user == null ? "" : user.uid)
      );
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occurred while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardContent className="flex flex-col items-center gap-4 p-6">
          <Typography variant="h6" className="font-semibold text-gray-800">
            Logged in as
          </Typography>
          <Typography variant="body1" className="text-gray-700">
            {name}
          </Typography>
          <Typography variant="body2" className="text-gray-500">
            {user == null ? "" : user.email}
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={logout}
            className="mt-4"
          >
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
