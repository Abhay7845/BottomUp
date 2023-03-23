import { useDropzone } from "react-dropzone";
import { Button } from "@material-ui/core";

function DropBox(props, { onDrop }) {
  const btqId = props.btqId;
  const { getRootProps, getInputProps, acceptedFiles, open, fileRejections } =
    useDropzone({
      accept: "image/*",
      onDrop,
      noClick: true,
      noKeyboard: true,
      maxFiles: 3,
    });

  acceptedFiles.namechnage = btqId;
  const lists = acceptedFiles.map((list) => (
    <li key={list.name}>
      {list.name} - {list.size} bytes
    </li>
  ));
  console.log("lists==>", lists);
  const fileRejectionItems = fileRejections.map(({ list, errors }) => {
    return (
      <li key={list.path}>
        {list.path} - {list.size} bytes
        <ul>
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    );
  });
  return (
    <>
      <div {...getRootProps()} className="DragImage">
        <input {...getInputProps()} />
        <p>Drag/Select Image </p>
        <Button
          variant="contained"
          style={{ backgroundColor: "#832729", color: "#ffff" }}
          onClick={open}
        >
          file
        </Button>
      </div>
      <aside>
        <p>{lists}</p>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </>
  );
}

export default DropBox;
