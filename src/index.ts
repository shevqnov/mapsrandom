import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();

console.log("user", { name: user.name, location: user.location });
console.log("company", {
  name: company.name,
  location: company.location,
  cp: company.catchPhrase
});
