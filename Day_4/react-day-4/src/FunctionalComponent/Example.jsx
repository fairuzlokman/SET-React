import React from 'react'

export const Example = ({...restProps}) => {
    return (
        <div>
            <img
            style={{width: "250px", height: "250px"}}
            src={restProps.image}/>
        </div>
    );
}

/**
 * Example 1
 */
// export class ExampleOne extends React.Component{
//     render() {
//         return (
//             <div>
//                 <img
//                 style={{width: "250px", height: "250px"}}
//                 src="Rectangle1.png" />
//             </div>
//         );
//     }
// }

/**
 * Example 2
 */
// export class