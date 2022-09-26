function RandomButton({children = "Default", ...restProps}) {
    
    // let width = "100px";
    // let height = "100%";
    
    return (
        <button
            style={{
                all: "unset",
                width: "100px",
                height: "100%",
                textAlign: "center",
                cursor: "pointer",
                height: "30px",
                border: "2px solid black",
                // background: "aqua",
                marginRight: "5px"
            }}
            {...restProps}>
            {children}
        </button>
    )
}

export default RandomButton;