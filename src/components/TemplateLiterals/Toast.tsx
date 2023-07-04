/**
 * Position prop can one of the:
 * "left-center"| "left-top" |"left-bottom" |"Center" | "center-top"
 * "center-bottom" | "Right-center" | "Right-Top" | "Right-Bottom"
 */

type HorizontalPosition= "Right" | "Center" | "Left"
type VerticalPosition= "Top" | "Center" | "Bottom"

type ToastProps={
    position:`${HorizontalPosition}-${VerticalPosition}`
}
export const Toast=({Position})=>{
    return (
        <div>Toast Notification Position - {Position}</div>
    )
}