import React from "react";
import UserForm from "../Form/UserForm";
import { useParams } from "react-router-dom";

export default function UserManage() {
  const { id } = useParams(); 

  return (
    <>
      <UserForm mode="EDIT" id={id ? Number(id) : undefined} />
    </>
  );
}
