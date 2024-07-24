import logoHyatt from '@/images/logos/hyatt.svg';
import logoKin from '@/images/logos/kin.svg';
import logoHCSC from '@/images/logos/hcsc.svg';
import logoDiscover from '@/images/logos/discover.svg';
import logoSmartLocker from '@/images/logos/smartLocker.svg';
import { type ImageProps } from 'next/image';

import image1 from '@/images/photos/image-1.jpeg';
import image2 from '@/images/photos/image-2.jpeg';
import image3 from '@/images/photos/image-3.jpeg';
import image4 from '@/images/photos/image-4.jpeg';
import image5 from '@/images/photos/image-5.jpeg';
import { GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from './components/SocialIcons';

export const switchThemeDuration = 0.5;

export interface NavigationItem {
    name: string;
    href: string;
    visible: boolean;
    external?: boolean;
}

export const navigationItems: NavigationItem[] = [
    { name: 'About', href: '/about', visible: true  },
    { name: 'Projects', href: '/projects', visible: false  },
    { name: 'Speaking', href: '/speaking', visible: false },
    { name: 'Uses', href: '/uses', visible: true  },
];

export const socialNavigation = [
    {
        name: 'Facebook',
        visible: false,
        href: '#',
        icon: (props: any) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        visible: false,
        href: '#',
        icon: InstagramIcon
    },
    {
        name: 'X',
        visible: false,
        href: 'https://twitter.com/theAustinNC',
        icon: XIcon
    },
    {
        name: 'GitHub',
        visible: true,
        href: 'https://github.com/AustinNChristensen',
        icon: GitHubIcon
    },
    {
        name: 'YouTube',
        visible: false,
        href: '#',
        icon: (props: any) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        visible: true,
        href: 'https://www.linkedin.com/in/austinnchristensen/',
        icon: LinkedInIcon
    }
];

export interface Role {
    company: string;
    title: string;
    logo: ImageProps['src'];
    start: string | { label: string; dateTime: string };
    end: string | { label: string; dateTime: string };
}

export const resumeItems: Array<Role> = [
        {
            company: 'Hyatt',
            title: 'Senior Software Engineer',
            logo: logoHyatt,
            start: '2020',
            end: {
                label: 'Present',
                dateTime: new Date().getFullYear().toString(),
            },
        },
        {
            company: 'Smart Locker USA',
            title: 'CTO',
            logo: logoSmartLocker,
            start: '2021',
            end: '2023',
        },

        {
            company: 'Discover Financial Services',
            title: 'Senior Software Consultant',
            logo: logoDiscover,
            start: '2020',
            end: '2020',
        },
        {
            company:
                'HCSC - Blue Cross Blue Shield of Illinois, Montana, New Mexico, Oklahoma & Texas',
            title: 'Senior Software Engineer',
            logo: logoHCSC,
            start: '2019',
            end: '2020',
        },
        {
            company: 'Kin + Carta',
            title: 'Senior Software Consultant',
            logo: logoKin,
            start: '2019',
            end: '2020',
        },
];

export const homeImages = [image2, image3, image1, image5, image4 ];