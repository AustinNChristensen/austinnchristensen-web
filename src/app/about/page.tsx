import clsx from 'clsx';
import { type Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/Container';
import { socialNavigation } from '@/constants';
import portraitImage from '@/images/portrait.jpeg';

function SocialLink({
    className,
    href,
    children,
    icon: Icon,
}: {
    className?: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    children: React.ReactNode;
}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    );
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
    );
}

export const metadata: Metadata = {
    title: 'About',
    description:
        'I’m Austin Christensen. I live in Salt Lake City, where I build the future.',
};

export default function About() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={portraitImage}
                            alt=""
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        I’m Austin Christensen. I live in Salt Lake City, where
                        I build amazing apps and websites.
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                            During high school, I balanced academics with my
                            love for football, earning recognition as Academic
                            All-State. These formative years instilled in me
                            discipline and teamwork—qualities that continue to
                            shape my professional approach.
                        </p>
                        <p>
                            I graduated from Drake University with a Bachelor of
                            Science in Computer Science, where I actively
                            participated in extracurricular activities like Phi
                            Gamma Delta and Delta Sigma Pi. These experiences
                            nurtured my leadership and teamwork skills.
                        </p>
                        <p>
                            Currently, I specialize in TypeScript, NextJS, and
                            React, leading transformative projects that
                            challenge me to deliver scalable solutions using
                            technologies like GraphQL, MongoDB, and AWS.
                        </p>
                        <p>
                            Outside of work, I enjoy staying active with hobbies
                            such as tennis, pickleball, skiing, and cycling.
                            These activities not only keep me physically fit but
                            also provide a balance to my professional life,
                            fostering creativity and well-being.
                        </p>
                    </div>
                </div>
                <div className="lg:pl-20">
                    <ul role="list">
                        {socialNavigation.map(
                            (item) =>
                                item.visible && (
                                    <SocialLink
                                        key={item.href}
                                        href={item.href}
                                        icon={item.icon}
                                        className="my-4"
                                    >
                                        Follow on {item.name}
                                    </SocialLink>
                                ),
                        )}
                        <SocialLink
                            href="mailto:austin@christensen.onl"
                            icon={MailIcon}
                            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                        >
                            austin@christensen.onl
                        </SocialLink>
                    </ul>
                </div>
            </div>
        </Container>
    );
}
