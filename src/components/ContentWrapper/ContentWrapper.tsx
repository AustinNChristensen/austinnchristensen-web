import { PropsWithChildren } from "react"

export const ContentWrapper = ({ children, className }: PropsWithChildren<{ className?: string; }>) => {
    return (
        <div className={`w-full py-8 md:py-12 mx-auto lg:max-w-5xl px-6 lg:px-8 max-w-2xl md:max-w-3xl ${className}`}>
            {children}
        </div>
    )
}