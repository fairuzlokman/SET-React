function MyButton({children = "Default", size, ...restProps}) {
    
    // logic for sizing, then return height and fontSize
    let height;
    let fontSize;
    let borderRadius;

    switch (size) {
        case 'large':
            height = '65px'
            fontSize = '30px'
            borderRadius = '20px'
            break;

        case 'standard':
            height = '45px'
            fontSize = '16px'
            borderRadius = '10px'
            break;

        case 'small':
            height = '35px'
            fontSize = '16'
            borderRadius = '10px'
            break;

        case 'tiny':
            height = '25px'
            fontSize = '16px'
            borderRadius = '10px'
            break;
    
        default:
            height = '45px'
            fontSize = '16px'
            borderRadius = '10px'
            break;
    }

    return (
        <button
            style={{
                all: "unset",
                backgroundColor: "green",
                color: "white",
                borderRadius: borderRadius,
                padding: "5px 20px",
                cursor: "pointer",
                height: height,
                fontSize: fontSize,
            }}
            {...restProps}
        >
            {/* {props.children || "Default"} */}
            {children}
        </button>
    );
}

export default MyButton;