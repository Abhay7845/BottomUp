import React, { useEffect, useState } from "react";
import "../Style/App.css";
import axios from "axios";
import { Grid, Button } from "@material-ui/core";
import { SelectOfMUI, TextFieldOfMUI } from "./ComponentFroAdmin";
import ReadOnlyRow from "./ReadOnlyRow";
import DropBox from "./DragDrop";
import moment from "moment";
import { alphabet } from "../Data/DataList";

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
  const [counter, setCounter] = useState(1);
  const [loading, setLoading] = useState(false);

  const [addFormData, setAddFormData] = useState({
    rsoName: "",
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
  const date = moment().format("YYYY-MM-DD");
  const id1 = Math.random().toString(36).substring(2, 4);

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
  const handleCatPBChange = (e) => {
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
  const handleReset = () => {
    addFormData.rsoName = "";
    addFormData.Collection = "";
    addFormData.getNeedState = "";
    addFormData.group = "";
    addFormData.Category = "";
    addFormData.CatPB = "";
    addFormData.DesiredLength = "";
    addFormData.RequiredWeight = "";
    addFormData.range = "";
    addFormData.concept = "";
  };
  const handleResetFiled = () => {
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
  const handleAddFormSubmit = (e) => {
    if (rsoName === "") {
      alert("RSO Name is Required");
      return;
    } else if (addFormData.Collection === "") {
      alert("Collection is Required");
      return;
    } else if (addFormData.getNeedState === "") {
      alert("NeedState is Required");
      return;
    } else if (addFormData.group === "") {
      alert("Group is Required");
      return;
    } else if (addFormData.Category === "") {
      alert("Category is Required");
      return;
    } else if (addFormData.CatPB === "") {
      alert("CatPB is Required");
      return;
    } else if (addFormData.DesiredLength === "") {
      alert("Desired Length is Required");
      return;
    } else if (addFormData.RequiredWeight === "") {
      alert("Desired Length is Required");
      return;
    } else if (addFormData.concept === "") {
      alert("Concent is Required");
      return;
    }
    const incrementCounter = () => setCounter(counter + 1);
    incrementCounter();
    const newContact = {
      id: `${btqId}2400${id1}${counter}`,
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
    handleReset();
    handleResetFiled();
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  const lastSubmit = () => {
    setLoading(true);
    const newContact = {
      id: `${btqId}2400${id1}${counter}`,
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
    console.log("newContact==>", newContact);
    const config = {
      method: "POST",
      url: "https://tanishqdigitalnpim.titan.in:8443/bottomUp/BottomUp/item/details/submit",
      data: newContact,
    };
    axios(config)
      .then((response) => response)
      .then((result) => console.log("result==>", result))
      .catch((error) => console.log("error==>", error));
    setLoading(false);
  };

  return (
    <>
      <form className="formDisplay">
        <div className="grid-container">
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
              selectHandleChange={handleCatPBChange}
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
        <Button
          variant="contained"
          style={{
            backgroundColor: "#832729",
            color: "#ffff",
            float: "right",
            marginTop: "2%",
          }}
          onClick={handleAddFormSubmit}
        >
          SUBMIT
        </Button>
      </form>
      <div className="table table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Collection</th>
              <th>NeedState</th>
              <th>Group</th>
              <th>Category</th>
              <th>CatPB</th>
              <th>DesiredLength</th>
              <th>RequiredWeight</th>
              <th>Range</th>
              <th>Concept</th>
              <th>Image</th>
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
      <div className="d-flex justify-content-end mx-2">
        <button type="submit" className="CButton" onClick={lastSubmit}>
          {loading ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            <span className="sr-only">SUBMIT</span>
          )}
        </button>
      </div>
      <br />
    </>
  );
}
