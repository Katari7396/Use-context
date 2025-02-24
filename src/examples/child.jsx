import { InfoContext } from "./parent"

const Child=()=>{
    return(
        <div>
            <InfoContext.Consumer>
                {value => <>{value}</>}
            </InfoContext.Consumer>
        </div>
    )
}
export default Child