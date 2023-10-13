import { FormGroup, InputLabel, TextField } from "@mui/material";
import React from "react";

type Props = {};

const Kyc = (props: Props) => {
  return (
    <div className="flex justify-start mt-20 mx-auto w-4/5">
      <FormGroup>
        <div>
          <div className="flex justify-start pb-[20px]">
            <h2>KYC</h2>
          </div>
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
            <div>
              <InputLabel shrink htmlFor="contactnumber">
                Contact Number*
              </InputLabel>

              <TextField
                id="contactnumber"
                variant="outlined"
                type="number"
                name="contact number"
              />
            </div>
            <div className="mb-4">
              <InputLabel shrink htmlFor="middlename">
                Birthdate*
              </InputLabel>
              <TextField
                id="middlename"
                variant="outlined"
                type="date"
                name="birthdate"
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
  );
};

export default Kyc;
