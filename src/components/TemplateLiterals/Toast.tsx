/**
 * Position prop can one of the:
 * "left-center"| "left-top" |"left-bottom" |"Center" | "center-top"
 * "center-bottom" | "Right-center" | "Right-Top" | "Right-Bottom"
 */

type HorizontalPosition= "Right" | "Center" | "Left"
type VerticalPosition= "Top" | "Center" | "Bottom"

type ToastProps={
    // position:`${HorizontalPosition}-${VerticalPosition}`
    //You can add Exclude
    position: | Exclude<`${HorizontalPosition}-${VerticalPosition}`,"Center-Center"> | 'Center'
}
const Toast=({position}:ToastProps)=>{
    return (
        <div>Toast Notification Position - {position}</div>
    )
}

export default Toast 