import { FormGroup, InputLabel, TextField } from "@mui/material";
import React from "react";

type Props = {};

const Sendout = (props: Props) => {
  return (
    <div>
      <div className="flex justify-start mt-20 mx-auto w-4/5 mb-[-60px]">
        <h2>Sendout</h2>
      </div>
      <div className="flex justify-start mt-20 mx-auto w-4/5 space-x-4">
        <div>
          <FormGroup>
            <div>
              <div className="flex space-x-4 mb-4">
                <div>
                  <InputLabel shrink htmlFor="lastname">
                    Lastname*
                  </InputLabel>
                  <TextField
                    id="lastname"
                    variant="outlined"
                    type="text"
                    name="lastname"
                  />
                </div>
                <div>
                  <InputLabel shrink htmlFor="firstname">
                    Firstname*
                  </InputLabel>
                  <TextField
                    id="firstname"
                    variant="outlined"
                    type="text"
                    name="firstname"
                  />
                </div>
                <div>
                  <InputLabel shrink htmlFor="middlename">
                    Middlename*
                  </InputLabel>
                  <TextField
                    id="middlename"
                    variant="outlined"
                    type="text"
                    name="middlename"
                  />
                </div>
              </div>
              <div className="flex space-x-4 mb-4">
                <div className="mb-4">
                  <InputLabel shrink htmlFor="address">
                    Address*
                  </InputLabel>
                  <TextField
                    id="address"
                    variant="outlined"
                    type="text"
                    name="address"
                  />
                </div>
              </div>
              <div className="flex space-x-4 mb-4">
                <div>
                  <InputLabel shrink htmlFor="birthdate">
                    Birthdate*
                  </InputLabel>
                  <TextField
                    id="birthdate"
                    variant="outlined"
                    type="date"
                    name="birthdate"
                  />
                </div>
                <div>
                  <InputLabel shrink htmlFor="contactNumber">
                    Contact Number*
                  </InputLabel>
                  <TextField
                    id="contactNumber"
                    variant="outlined"
                    type="number"
                    name="contactNumber"
                  />
                </div>
              </div>
              <div className="flex justify-start">
                <button className="px-2 py-1 text-md rounded-md bg-red-700 text-white">
                  Submit
                </button>
              </div>
            </div>
          </FormGroup>
        </div>
        <div className="bg-gray-100">
          <div className="p-4">
            <h5>Other Information</h5>
          </div>
          <FormGroup>
            <div className="flex space-x-4 mb-4 p-4">
              <div>
                <InputLabel shrink htmlFor="PurposeOfTransaction">
                  Purpose of Transaction*
                </InputLabel>
                <TextField
                  id="PurposeOfTransaction"
                  variant="outlined"
                  type="text"
                  name="PurposeOfTransaction"
                />
              </div>
              <div>
                <InputLabel shrink htmlFor="relationToCustomer">
                  Relation to Customer*
                </InputLabel>
                <TextField
                  id="firstnrelationToCustomerame"
                  variant="outlined"
                  type="text"
                  name="relationToCustomer"
                />
              </div>
            </div>
            <div className="p-4">
              <h5>Sendout Information</h5>
            </div>
            <div className="flex space-x-4 p-4">
              <div className="mb-4">
                <InputLabel shrink htmlFor="principalAmount">
                  Principal Amount*
                </InputLabel>
                <TextField
                  id="principalAmount"
                  variant="outlined"
                  type="number"
                  name="principalAmount"
                />
              </div>
            </div>

            <div className="flex justify-end p-4 space-x-2">
              <button className="px-2 py-1 text-md rounded-md bg-gray-700 text-white">
                Cancel
              </button>
              <button className="px-2 py-1 text-md rounded-md bg-red-700 text-white">
                Submit Sendout
              </button>
            </div>
          </FormGroup>
        </div>
      </div>
    </div>
  );
};
// dfhfgh
export default Sendout;
