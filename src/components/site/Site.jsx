import English from "../translate/english/English"
import Portugues from "../translate/portugues/Portugues"


function Site(props) {
    if (props.translate == false) {
    return (
        <>
            <English/>
        </>
    )}
    else{
    return (
        <>
            <Portugues/>
        </>
    )}
}
export default Site