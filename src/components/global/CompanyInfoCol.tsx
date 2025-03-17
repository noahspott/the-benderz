import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { EMAIL_ADDRESS, PHONE_NUMBER, LOCATION } from "../../data/consts";

export default function CompanyInfoCol() {
  return (
    <div className="grid grid-cols-1 gap-4 py-2">
      <div className="flex items-center gap-4">
        <BiEnvelope className="size-6 flex-none" />
        <p>{EMAIL_ADDRESS}</p>
      </div>
      <div className="flex items-center gap-4">
        <BiPhone className="size-6 flex-none" />
        <p>{PHONE_NUMBER}</p>
      </div>
      <div className="flex items-center gap-4">
        <BiMap className="size-6 flex-none" />
        <p>{LOCATION}</p>
      </div>
    </div>
  );
}
