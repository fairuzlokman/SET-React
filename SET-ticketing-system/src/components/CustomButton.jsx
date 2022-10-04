const CustomButton = ({children="Default", ...restProps}) => {
    return (
        <button
            style={{
                all: 'unset',
                fontSize: '16px',
                cursor: 'pointer'
            }}
            {...restProps}
        >
            {children}
        </button>
    )
}

export default CustomButton;