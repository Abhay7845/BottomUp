import { useDropzone } from "react-dropzone";
import styled from "styled-components";

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return " #b55f5f63";
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: black;
  font-weight: bold;
  outline: none;
  margin: 30px;
  float: left;
  height: 180px;
  width: 30%;
  margin-left: 20px;
  transition: border 0.24s ease-in-out;
`;

function DropBox(props, { onDrop }) {
  const btqId = props.btqId;
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    open,
    fileRejections,
    isDragAccept,
    isFocused,
    isDragReject,
  } = useDropzone({
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
      <Container
        className="dropbox"
        {...getRootProps({ isDragAccept, isFocused, isDragReject })}
      >
        <input {...getInputProps()} />
        <p>Drag some images here</p>
        <button type="button" className="btn" onClick={open}>
          Click to select file
        </button>
      </Container>
      <aside>
        <p>{lists}</p>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </>
  );
}

export default DropBox;
