import { PropsWithChildren } from "react";

export const ThemedText = ({ children, ...rest }: PropsWithChildren<any>) => {
    let className = 'text-black dark:text-white';
    if (rest.className) {
        className += ` ${rest.className}`;
    }
    return (
        <p className={className} {...rest}>
            {children}
        </p>
    )
};