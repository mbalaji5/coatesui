import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import {
  TextAreaField,
  InputField,
  LabelField,
  SelectField,
  ErrorLabel
} from "../../common.style";
import {
  addToErrorList,
  removeFromErrorList,
  validateEmail
} from "../../utils";

const Email = ({ sendEmail, isEmailSent, isAPIError }) => {
  let navigate = useNavigate();
  const [provider, setProvider] = useState("");
  const [to, setTo] = useState([]);
  const [cc, setCC] = useState([]);
  const [bcc, setBCC] = useState([]);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [errorList, setErrorList] = useState([]);
  const [isEmailtriggered, setIsEmailtriggered] = useState(false);

  useEffect(() => {
    if (isEmailtriggered && isEmailSent) {
      navigate("/confirmation");
    } else if (isEmailtriggered && !isEmailSent) {
    }
  }, [isEmailtriggered, isEmailSent, navigate]);

  const onBlur = (value, setValue, name) => {
    const errormessage = `Please enter valid ${name} email`;
    if (validateEmail(value)) {
      removeFromErrorList(errormessage, errorList, setErrorList);
      setValue(value.split(";"));
    } else {
      addToErrorList(errormessage, errorList, setErrorList);
    }
  };
  const onBlurBodySubjectProvider = (value, setValue, name) => {
    const errormessage = `Please enter ${name}`;

    if (value || value !== "") {
      removeFromErrorList(errormessage, errorList, setErrorList);
      setValue(value);
    } else {
      addToErrorList(errormessage, errorList, setErrorList);
    }
  };

  const OnSubmit = () => {
    const error = "Please enter all mandatory fields";
    if (!to || !provider || !subject) {
      addToErrorList(error, errorList, setErrorList);
    } else {
      const errors = [...errorList];
      const index = errors && errors.indexOf(error);
      if (index >= 0) {
        errors.splice(index, 1);
        setErrorList(errors);
      }
      if (errors && errors.length > 0) return;

      sendEmail({ provider, to, cc, bcc, subject, body });
      setIsEmailtriggered(true);
    }
  };

  return (
    <>
      {errorList &&
        errorList.map((item) => {
          return (
            <>
              <ErrorLabel>{item}</ErrorLabel>
              <br />
            </>
          );
        })}
      <br />
      <LabelField>Provider*</LabelField>
      <SelectField
        onChange={({ target: { value } }) => {
          setProvider(value);
        }}
      >
        <option value="">Select Provider</option>
        <option value="MailChimp">MailChimp</option>
        <option value="SendGrid">SendGrid</option>
      </SelectField>
      <br />
      <LabelField>TO*</LabelField>
      <InputField
        type="text"
        onBlur={({ target: { value } }) => {
          onBlur(value, setTo, "TO");
        }}
      />
      <br />
      <LabelField>CC*</LabelField>
      <InputField
        type="text"
        onBlur={({ target: { value } }) => {
          onBlur(value, setCC, "CC");
        }}
      />
      <br />
      <LabelField>BCC*</LabelField>
      <InputField
        type="text"
        onBlur={({ target: { value } }) => {
          onBlur(value, setBCC, "BCC");
        }}
      />
      <br />
      <LabelField>Subject*</LabelField>
      <InputField
        type="text"
        onBlur={({ target: { value } }) => {
          onBlurBodySubjectProvider(value, setSubject, "Subject");
        }}
      />
      <br />
      <LabelField>Body*</LabelField>
      <TextAreaField
        type="text"
        onBlur={({ target: { value } }) => {
          onBlurBodySubjectProvider(value, setBody, "Body");
        }}
      />

      <br />
      <button onClick={OnSubmit}>Submit </button>
    </>
  );
};

export default Email;
