import { Button } from "@/shared/components/ui/button"

type Props = {
  label: string
  value: number
  maxValue: number
  minValue: number
  onIncrement: (value: number) => void
  onDecrement: (value: number) => void
}

export const Counter = (props: Props) => {
  const label = props.label.replace("s", "")

  const text = label ? (props.value > 1 ? `${label}s` : label) : ""

  const raiseIncrement = () => {
    if (props.value < props.maxValue) props.onIncrement(props.value + 1)
  }

  const raiseDecrement = () => {
    if (props.value > props.minValue) props.onDecrement(props.value - 1)
  }

  const styles = {
    button: "size-[auto] hover:text-app-orange-101 hover:bg-transparent p-1 text-black/50 disabled:text-neutral-700",
  }

  return (
    <div className="bg-app-gray-102 flex min-w-[110px] items-center justify-between gap-2">
      <Button variant="ghost" size="icon" onClick={raiseDecrement} disabled={props.value <= props.minValue} className={styles.button}>
        -
      </Button>

      <div className="font-inter text-sm font-semibold select-none">
        {props.value} <span className="text-neutral-500">{text}</span>
      </div>

      <Button variant="ghost" size="icon" disabled={props.value >= props.maxValue} onClick={raiseIncrement} className={styles.button}>
        +
      </Button>
    </div>
  )
}
