import Label, { LabelProps } from "@/components/Label";
import ButtonSelect, {
  type ButtonSelectProps,
} from "@/components/Input/ButtonSelect";
import Seperator from "@/components/Seperator";

export default function LabelledButtonSelect({
  label,
  ...props
}: Omit<LabelProps, "children"> & { label: string } & ButtonSelectProps) {
  return (
    <div>
      <Label htmlFor={props.htmlFor}>{label}</Label>
      <Seperator height={14} />
      <ButtonSelect {...props} />
    </div>
  );
}
