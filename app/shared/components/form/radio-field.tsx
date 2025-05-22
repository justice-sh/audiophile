import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { FormFieldProps } from "@/shared/types/form"
import { FieldWrapper } from "./field-wrapper"
import { Label } from "../ui/label"

type Item = { value: string; label: string }

interface Props extends FormFieldProps {
  list: Item[]
}

export function RadioField({ field, label, styles, list, ...props }: Props) {
  if (!props.id) props.id = field.name

  return (
    <FieldWrapper field={field} label={label} id={props.id} styles={styles}>
      <RadioGroup id={props.id} value={field.state.value || ""} onValueChange={field.handleChange} className={styles?.input}>
        {list.map((item) => (
          <RadioItemField key={item.value} value={item.value} label={item.label} />
        ))}
      </RadioGroup>
    </FieldWrapper>
  )
}

function RadioItemField({ value, label }: Item) {
  return (
    <Label htmlFor={value} className="input-container flex cursor-pointer items-center space-x-2">
      <RadioGroupItem value={value} id={value} />
      <Label htmlFor={value} className="cursor-pointer">
        {label}
      </Label>
    </Label>
  )
}
