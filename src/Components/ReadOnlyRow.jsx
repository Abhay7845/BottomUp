import React from "react";
import "../Style/App.css";
import * as Icon from "react-bootstrap-icons";
import { Button } from "@material-ui/core";

const ReadOnlyRow = ({ contact, handleDeleteClick, i }) => {
  console.log("contact=>", contact);
  return (
    <tr key={i}>
      <td>{contact.collection}</td>
      <td>{contact.needState}</td>
      <td>{contact.group}</td>
      <td>{contact.category}</td>
      <td>{contact.catPB}</td>
      <td>{contact.lengthSize}</td>
      <td>{contact.reqWeight}</td>
      <td>{contact.range}</td>
      <td>{contact.concept}</td>
      <td>{contact.url}</td>
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
