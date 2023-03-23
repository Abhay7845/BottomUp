import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Grid, Button } from "@material-ui/core";
import { SelectOfMUI, TextFieldOfMUI } from "./component/ComponentFroAdmin";
import ReadOnlyRow from "./ReadOnlyRow";
import DropBox from "./DragDrop";

export default function Content(props) {
  const { btqId, region, rsoName } = props;
  const [contacts, setContacts] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState("");
  const [getNeedState, setGetNeedState] = useState([]);
  const [needState, setNeedState] = useState("");
  const [getGroup, setGetGroup] = useState([]);
  const [group, setGroup] = useState("");
  const [getCategory, setGetCategory] = useState([]);
  const [category, setCategory] = useState("");
  const [getCatPB, setGetCatPB] = useState([]);
  const [catPB, setCatPB] = useState("");
  const [lengthSize, setLengthSize] = useState("");
  const [reqWeight, setReqWeight] = useState("");
  const [range, setRange] = useState("");
  const [concept, setConcept] = useState("");
  console.log("props==>", props);

  const [addFormData, setAddFormData] = useState({
    Collection: "",
    getNeedState: "",
    group: "",
    Category: "",
    CatPB: "",
    DesiredLength: "",
    RequiredWeight: "",
    range: "",
    concept: "",
  });
  const collection_options = ["core24"];
  const date = new Date();

  const id = Math.floor(Math.random() * 9999 + 1000);
  const id2 = Math.random().toString(30).substring(2, 7);
  const id3 = Math.floor(Math.random() * 99 + 1000);
  const id4 = Math.random().toString(36).substring(2, 7);

  // NEED STATE API -1
  useEffect(() => {
    axios
      .get(
        `https://tanishqdigitalnpim.titan.in:8443/bottomUp/BottomUp/getNeedState/${selectedCollection}/collection`
      )
      .then((response) => response)
      .then((result) => setGetNeedState(result.data.value))
      .catch((error) => console.log("error123==>", error));
  }, [selectedCollection]);

  // NEED GROUP API -2
  useEffect(() => {
    axios
      .get(
        `https://tanishqdigitalnpim.titan.in:8443/bottomUp/BottomUp/getGroup/${selectedCollection}/${needState}/needstate`
      )
      .then((response) => response)
      .then((result) => setGetGroup(result.data.value))
      .catch((error) => console.log("error321==>", error));
  }, [needState, selectedCollection]);

  // GET CATEGORY API-3
  useEffect(() => {
    axios
      .get(
        `https://tanishqdigitalnpim.titan.in:8443/bottomUp/BottomUp/getCategory/${selectedCollection}/${needState}/${group}/group`
      )
      .then((response) => response)
      .then((result) => setGetCategory(result.data.value))
      .catch((error) => console.log("error==>", error));
  }, [group, needState, selectedCollection]);

  // GET CAT PB API-4
  useEffect(() => {
    axios
      .get(
        `https://tanishqdigitalnpim.titan.in:8443/bottomUp/BottomUp//getCatpb/${selectedCollection}/${needState}/${group}/${category}/category`
      )
      .then((response) => response)
      .then((result) => setGetCatPB(result.data.value))
      .catch((error) => console.log("error==>", error));
  }, [category, group, needState, selectedCollection]);

  // GET DESIRED LENGTH API-5
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "x",
    "Y",
    "Z",
  ];
  function addChange(e) {
    setRange(range);
    const name = e.target.name;
    const newFormData = { ...addFormData };
    newFormData[name] = e.target.value;
    setAddFormData(newFormData);
  }

  const handleAddFormChange = (e) => {
    setSelectedCollection(e.target.value);
    addChange(e);
  };

  const handleAndNeedStateFormChange = (e) => {
    setNeedState(e.target.value);
    addChange(e);
  };

  const handleGroupChange = (e) => {
    setGroup(e.target.value);
    addChange(e);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    addChange(e);
  };

  const handleCatpbChange = (e) => {
    setCatPB(e.target.value);
    addChange(e);
  };

  const handleDesiredLength = (e) => {
    setLengthSize(e.target.value);
    addChange(e);
  };

  const handleWeight = (e) => {
    setReqWeight(e.target.value);
    addChange(e);
    const y = Math.ceil(e.target.value / 5) * 5;
    const x = y - 5;
    setRange(`${x}-${y}`);
  };

  const handleAddFormSubmit = (e) => {
    if (rsoName === "") {
      alert("Rso Name is Required");
      return;
    }
    e.preventDefault();
    const newContact = {
      id: `NAT100${id}${id2}${id3}${id4}`,
      date,
      btqId,
      region,
      rsoName,
      Collection: addFormData.Collection,
      getNeedState: addFormData.getNeedState,
      group: addFormData.group,
      Category: addFormData.Category,
      CatPB: addFormData.CatPB,
      DesiredLength: addFormData.DesiredLength,
      RequiredWeight: addFormData.RequiredWeight,
      range: range,
      concept: addFormData.concept,
      image: "image url",
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    console.log("newContacts==>", newContacts);
    console.log("contacts==>", contacts);
    handleReset();
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  const handleReset = () => {
    setSelectedCollection("");
    setGetNeedState([]);
    setNeedState("");
    setGetGroup([]);
    setGroup("");
    setGetCategory([]);
    setCategory("");
    setGetCatPB([]);
    setCatPB("");
    setLengthSize("");
    setReqWeight("");
    setRange("");
    setConcept("");
  };

  const lastSubmit = () => {
    const newContact = {
      id: `NAT100${id}${id2}${id3}${id4}`,
      date,
      btqId,
      region,
      rsoName,
      Collection: addFormData.Collection,
      getNeedState: addFormData.getNeedState,
      group: addFormData.group,
      Category: addFormData.Category,
      CatPB: addFormData.CatPB,
      DesiredLength: addFormData.DesiredLength,
      RequiredWeight: addFormData.RequiredWeight,
      range: range,
      concept: addFormData.concept,
    };

    const config = {
      method: "POST",
      url: "https://tanishqdigitalnpim.titan.in:8443/bottomUp/BottomUp/item/details/submit",
      data: newContact,
    };
    axios(config)
      .then((response) => response)
      .catch((error) => console.log("error==>", error));
  };

  return (
    <>
      <form className="formDisplay">
        <div style={{ padding: 20 }} className="grid-container">
          <Grid>
            <SelectOfMUI
              placeholder="Collection"
              optionList={collection_options}
              value={selectedCollection}
              selectHandleChange={handleAddFormChange}
              name="Collection"
              required="required"
            />
          </Grid>
          <Grid>
            <SelectOfMUI
              placeholder="Need State"
              optionList={getNeedState}
              selectHandleChange={handleAndNeedStateFormChange}
              value={needState}
              name="getNeedState"
            />
          </Grid>
          <Grid>
            <SelectOfMUI
              placeholder="Group"
              optionList={getGroup}
              selectHandleChange={handleGroupChange}
              value={group}
              name="group"
            />
          </Grid>
          <Grid>
            <SelectOfMUI
              placeholder="Category"
              optionList={getCategory}
              selectHandleChange={handleCategoryChange}
              value={category}
              name="Category"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <SelectOfMUI
              placeholder="CatPB"
              optionList={getCatPB}
              selectHandleChange={handleCatpbChange}
              value={catPB}
              name="CatPB"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <SelectOfMUI
              placeholder="DesiredLength/Size"
              optionList={alphabet}
              selectHandleChange={handleDesiredLength}
              value={lengthSize}
              name="DesiredLength"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextFieldOfMUI
              label="Required Weight"
              type="text"
              value={reqWeight}
              textFieldHandlerChange={handleWeight}
              name="RequiredWeight"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextFieldOfMUI label="Range" value={range} name="Range" />
          </Grid>
        </div>
        <div className="content">
          <input
            name="concept"
            id="label-fileComment-upload"
            type="text"
            placeholder="Concept please explain in detail(max 100 characters)"
            onChange={(e) => {
              setConcept(e.target.value);
              addChange(e);
            }}
            value={concept}
          />
          <DropBox btqId="MAM_01" />
        </div>
        <div className="d-flex justify-content-between my-3 mx-5">
          <Button
            variant="contained"
            style={{ backgroundColor: "#832729", color: "#ffff" }}
            onClick={handleAddFormSubmit}
          >
            SUBMIT
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#832729",
              color: "#ffff",
              marginLeft: "10px",
            }}
            onClick={handleReset}
          >
            RESET
          </Button>
        </div>
      </form>
      <div className="table table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Collection</th>
              <th>Need State</th>
              <th>Group</th>
              <th>Category</th>
              <th>CatPB</th>
              <th>DesiredLength</th>
              <th>RequiredWeight</th>
              <th>Range</th>
              <th>Concept</th>
              <th>Images File</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, i) => (
              <ReadOnlyRow
                contact={contact}
                key={i}
                handleDeleteClick={handleDeleteClick}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end my-3 mx-3">
        <Button
          variant="contained"
          style={{ backgroundColor: "#832729", color: "#ffff" }}
          onClick={lastSubmit}
        >
          SUBMIT
        </Button>
      </div>
    </>
  );
}
