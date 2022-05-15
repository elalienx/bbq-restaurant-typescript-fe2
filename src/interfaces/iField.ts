// Project files
import eInputType from "./eInputType";

export default interface iField {
  key: string;
  autoFocus: boolean;
  label: string;
  placeholder: string;
  required: boolean;
  type: eInputType;
}
