import { FormFieldProps } from "@/shared/types/form"
import { FieldWrapper } from "./field-wrapper"
import { Input } from "../ui/input"

export function TextField({ field, label, styles, ...props }: FormFieldProps) {
  if (!props.id) props.id = field.name

  return (
    <FieldWrapper field={field} label={label} id={props.id} styles={styles}>
      <Input
        {...props}
        id={props.id}
        name={field.name}
        value={field.state.value || ""}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        className={styles?.input}
      />
    </FieldWrapper>
  )
}

// export function TextField<F extends Form<any>>({ form, label, styles, ...props }: FormFieldProps<F>) {

//   return (
//     <form.Field
//       validators={{}}
//       name={props.name as string}
//       children={(field) => {
//         if (!props.id) props.id = field.name

//         return (
//           <FieldWrapper field={field} label={label} id={props.id} styles={styles}>
//             <Input
//               {...props}
//               id={props.id}
//               name={field.name}
//               value={field.state.value || ""}
//               onBlur={field.handleBlur}
//               onChange={(e) => field.handleChange(e.target.value)}
//               className={styles?.input}
//             />
//           </FieldWrapper>
//         )
//       }}
//     />
//   )
// }
