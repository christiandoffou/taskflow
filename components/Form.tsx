import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
  SelectSeparator,
} from "@/components/ui/select";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Button from "./Button";

const Form = () => {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col gap-[20px] mb-[20px]">
        <Input type="text" placeholder="Nom" className="mb-4" />
        <Input type="email" placeholder="Email" className="mb-4" />
        <div className="flex flex-col xl:flex-row gap-[20px]">
          <Input type="text" placeholder="Téléphone" className="mb-4" />
          <Select>
            <SelectTrigger className="w-full rounded-none h-[54px] text-secondary outline-none">
              <SelectValue placeholder="Sélectionner un service" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Catégories</SelectLabel>
                <SelectItem value="1">Catégorie 1</SelectItem>
                <SelectItem value="2">Catégorie 2</SelectItem>
                <SelectSeparator />
                <SelectLabel>Autres</SelectLabel>
                <SelectItem value="3">Catégorie 3</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <Textarea
          placeholder="Entrer votre message"
          className="h-[180px] resize-none rounded-none"
        />
        <Button text="Envoyer" />
      </div>
    </form>
  );
};

export default Form;
