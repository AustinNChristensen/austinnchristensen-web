import { ContentWrapper } from '../ContentWrapper/ContentWrapper';

const services = [
    { name: 'Blog', visible: true, ctaLink: 'https://paragraph.xyz/@austinchristensen.eth' },
    { name: 'Podcast', visible: false, ctaLink: '' },
    { name: 'Courses', visible: false, ctaLink: '' },
];

export const HomeServices = () => {
    return (
        <ContentWrapper className="flex-col align-center">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Connect with me
                </h2>
                <p className="mt-4 text-lg leading-8">
                    I&apos;m always looking to connect with new people. If
                    you&apos;re interested in working together, please reach out
                    to me!
                </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
                {services.map(({ visible, ctaLink, name }, index) => visible && (
                    <a
                        key={index}
                        href={ctaLink}
                        className="flex flex-col bg-white/5 p-8 dark:bg-white/5 order-first text-3xl font-semibold tracking-tight"
                    >
                        {name}
                    </a>
                ))}
            </dl>
        </ContentWrapper>
    );
};
