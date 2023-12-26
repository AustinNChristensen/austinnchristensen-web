import { ContentWrapper } from '../ContentWrapper/ContentWrapper';

export const HomePersonalHighlights = () => {
    const stats = [
        { name: 'Years of Experience', value: '8+' },
        { name: 'Users Served', value: '100+ million' },
        { name: 'Days Skied Last Year', value: '46' },
    ];
    return (
        <ContentWrapper>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="mx-auto flex max-w-xs flex-col gap-y-4"
                    >
                        <dt className="font-bold text-xl leading-7">
                            {stat.name}
                        </dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                            {stat.value}
                        </dd>
                    </div>
                ))}
            </dl>
        </ContentWrapper>
    );
};
