import { ContentWrapper } from '../ContentWrapper/ContentWrapper';

export const HomeIntro = () => {
    return (
        <ContentWrapper className="relative isolate overflow-hidden">
            <div className="gap-x-14 lg:flex lg:items-center">
                <div className="w-full lg:shrink-0">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        Hi, I&apos;m Austin.
                    </h1>
                    <p className="relative mt-6 text-lg leading-8">
                        I&apos;m a software engineer and thrill-seeker.
                        <br />
                        When I&apos;m not building awesome web apps, you can
                        find me cycling, playing tennis, or skiing in the
                        mountains of Utah.
                    </p>
                </div>
            </div>
        </ContentWrapper>
    );
};
