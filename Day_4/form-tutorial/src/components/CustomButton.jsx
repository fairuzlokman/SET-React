export const CustomButton = ({children="Default", ...restProps}) => {
    return (
        <button {...restProps}>
            {children}
        </button>
    )
}