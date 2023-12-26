import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import { ThemedText } from '../ThemedText';

const blogPosts = [
    {
        id: 1,
        title: 'Vel expedita assumenda placeat aut nisi optio voluptates quas',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Austin Christensen',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'Vel expedita assumenda placeat aut nisi optio voluptates quas',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Austin Christensen',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'Vel expedita assumenda placeat aut nisi optio voluptates quas',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Austin Christensen',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
];

export const HomeBlogPreview = () => {
    return null;
    return (
        <ContentWrapper>
            <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    From the blog
                </h2>
                <ThemedText className="mt-2 text-lg leading-8 ">
                    A look in to my thoughts and ideas. Views are my own.
                </ThemedText>
            </div>
            <div className="mt-16 grid auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-3">
                {blogPosts.map((post) => (
                    <article
                        key={post.id}
                        className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                    >
                        <img
                            src={post.imageUrl}
                            alt=""
                            className="absolute inset-0 -z-10 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                        <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                        <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6">
                            <time dateTime={post.datetime} className="mr-8">
                                {post.date}
                            </time>
                            <div className="-ml-4 flex items-center gap-x-4">
                                <svg
                                    viewBox="0 0 2 2"
                                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                                >
                                    <circle cx={1} cy={1} r={1} />
                                </svg>
                                <div className="flex gap-x-2.5">
                                    <img
                                        src={post.author.imageUrl}
                                        alt=""
                                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                                    />
                                    {post.author.name}
                                </div>
                            </div>
                        </div>
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                            <a href={post.href}>
                                <span className="absolute inset-0" />
                                {post.title}
                            </a>
                        </h3>
                    </article>
                ))}
            </div>
        </ContentWrapper>
    );
};
