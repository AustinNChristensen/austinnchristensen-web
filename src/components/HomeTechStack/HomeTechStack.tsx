import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import { ThemedText } from '../ThemedText';

export const HomeTechStack = () => {
    return (
        <ContentWrapper>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Tech Stack
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                <div className="lg:flex-auto">
                    <ThemedText className="text-xl leading-8">
                        My Tech Stack of choice is NextJS, MongoDB, and Vercel.
                        <br />I have extensive experience working with React,
                        NodeJS, Amazon Web Services, and Google Cloud Platform,
                        but for most projects Vercel is the best choice due to
                        simplicity and the plethora of features it offers.
                    </ThemedText>
                </div>
            </div>
        </ContentWrapper>
    );
};
