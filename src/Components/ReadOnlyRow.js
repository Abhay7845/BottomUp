import React from "react";
import "../Style/App.css";
import * as Icon from "react-bootstrap-icons";
import { Button } from "@material-ui/core";

const ReadOnlyRow = ({ contact, handleDeleteClick, i }) => {
  console.log("contact=>", contact);
  return (
    <tr key={i}>
      <td>{contact.Collection}</td>
      <td>{contact.getNeedState}</td>
      <td>{contact.group}</td>
      <td>{contact.Category}</td>
      <td>{contact.CatPB}</td>
      <td>{contact.DesiredLength}</td>
      <td>{contact.RequiredWeight}</td>
      <td>{contact.range}</td>
      <td>{contact.concept}</td>
      <td>{contact.ImageFile}</td>
      <td>
        <Button
          type="button"
          onClick={() => handleDeleteClick(contact.id)}
          style={{ color: "red" }}
        >
          <Icon.Trash />
        </Button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
