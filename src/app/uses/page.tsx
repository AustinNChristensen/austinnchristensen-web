import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

function ToolsSection({
    children,
    ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
    return (
        <Section {...props}>
            <ul role="list" className="space-y-16">
                {children}
            </ul>
        </Section>
    );
}

function Tool({
    title,
    href,
    children,
}: {
    title: string;
    href?: string;
    children: React.ReactNode;
}) {
    return (
        <Card as="li">
            <Card.Title as="h3" href={href}>
                {title}
            </Card.Title>
            <Card.Description>{children}</Card.Description>
        </Card>
    );
}

export const metadata = {
    title: 'Uses',
    description:
        'Software and products I love and use + other gadgets I recommend.',
};

const UsesItems = [
    {
        category: 'Workstation',
        items: [
            {
                title: '14” MacBook Pro, M1 Pro, 16GB RAM (2021)',
                description:
                    'I switched from an Intel-based 13” MacBook Pro prior to this and the upgrade as been well worth it. The perfromance is great and the battery life is even better. I never hear the fans come on and the base Pro chip with 16GB of RAM is more than enough for web development',
            },
            {
                title: 'LG 34" Ultrawide Curved WHQD Monitor',
                link: 'https://amzn.to/3SnlMyO',
                description:
                    'This monitor is a game changer for me. I can have multiple windows open side by side and still have plenty of room to work. The curve is a nice touch too as it keeps your focal length consistent all the way to the edges.',
            },
            {
                title: 'CODE V3 104-Key Mechanical Keyboard',
                link: 'https://www.wasdkeyboards.com/code-v3-104-key-mechanical-keyboard-cherry-mx-green.html',
                description:
                    'I’ve been using this keyboard for a few years now and I love it. The Cherry MX Green switches are a bit heavier than the more common Cherry MX Blue switches but I like the tactile feel and the sound they make. The build quality is top notch and the keycaps are made of PBT plastic which is more durable than the ABS plastic used in most keyboards.',
            },
            {
                title: 'Apple Magic Trackpad',
                description:
                    'While this isn’t a must have, I find it to be a nice addition to my setup. It’s the only way to maintain the same gestures I use on my MacBook Pro when I’m at my desk with my external monitor.',
            },
            {
                title: 'Autonomous Chair Ergo',
                link: 'https://www.autonomous.ai/office-chairs/ergonomic-chair',
                description:
                    'This chair is a great value for the price. It’s comfortable and has a lot of adjustments to get it just right for you. The mesh back is breathable and the lumbar support is adjustable.',
            },
            {
                title: 'Autonomous Desk Expanse',
                link: 'https://www.autonomous.ai/standing-desks/autonomous-desk-expanse-xl',
                description:
                    'Similar to the chair, this desk is a great value for the price. It’s a sit/stand desk with a motorized lift. It’s sturdy and has a nice finish. I have the 70” version and it has plenty of room for my monitor, keyboard, and other desk accessories.',
            },
            {
                title: 'Caldigit TS3 Plus Thunderbolt 3 Dock',
                link: 'https://amzn.to/3YiW6ai',
                description:
                    'When Apple removed all of my ports from my MacBook Pro, I needed a way to connect all of my peripherals. This dock has been great. It has a ton of ports and the build quality is top notch. The big bonus is that it enables me to connect my entire setup with a single USB-C cable.',
            },
            {
                title: 'Razer Kiyo Webcam',
                link: 'https://amzn.to/3WB569s',
                description:
                    'A simple webcam that has a built in ring light. The quality is great and the light is adjustable. It’s a great value for the price.',
            },
            {
                title: 'Fluid Stance Balance Board',
                link: 'https://amzn.to/3WB569s',
                description:
                    'While I initially though that this was a gimmick, I’ve found that it is really great for reducing back pain as it allows you to easily stretch while working.',
            },
        ],
    },
    {
        category: 'Sleep',
        items: [
            {
                title: 'Eight Sleep Pod 3',
                link: 'https://refer.eight.sl/bkg7xcxs',
                description:
                    'I take my sleep extremely seriously and this bed has been a game changer for me. The temperature control is amazing and the sleep tracking is super interesting. I’ve been able to make a lot of improvements to my sleep quality simply by controlling the temperature of the bed.',
            },
            {
                title: 'Manta Sleep Mask Pro',
                link: 'https://amzn.to/3WB569s',
                description:
                    'I’ve tried a lot of sleep masks and this is by far the best. It’s comfortable and the adjustable eye cups are great for side sleepers.',
            },
        ],
    },
    {
        category: 'Bank Products',
        items: [
            {
                title: 'YNAB - You Need A Budget',
                description:
                    'I’ve been using YNAB for years and it’s been a game changer for me. It’s a zero-based budgeting system that helps you give every dollar a job. It’s great for tracking spending and saving for the future.',
            },
            {
                title: 'Wealthfront Cash Account',
                link: 'https://www.wealthfront.com/c/affiliates/invited/AFFD-CBF6-EJKK-76ZZ',
                description:
                    'I’ve been using Wealthfront for years as well. Wealthfront is an online-only bank which means they don’t have any physical branches. They offer a checking account that has rates competing with high-yield savings accounts with a great interest rate and no fees. I use this account for my emergency fund and other short-term savings goals.',
            },
            {
                title: 'Schwab Investor Checking Account',
                description:
                    'I use this account for my day-to-day spending. It has no fees, no minimums, and unlimited ATM fee rebates worldwide. It’s a great account for traveling as well because you can use any ATM in the world and Schwab will reimburse you for the fees. I also use this account for my direct deposit and bill pay.',
            },
            {
                title: 'Wealthfront Index Investment Account',
                link: 'https://www.wealthfront.com/c/affiliates/invited/AFFD-MTCM-PBV1-WQIQ',
                description:
                    'From the same provider as my cash account, Wealthfront also provides a robo-advisor that invests your money in a diversified portfolio of low-cost index funds. It’s great for long-term investing and has a lot of great features like tax-loss harvesting and direct indexing.',
            },
        ],
    },
    {
        category: 'Credit Cards',
        items: [
            {
                title: 'American Express Gold Card',
                link: 'https://americanexpress.com/en-us/referral/gold-card?ref=AUSTICGtFC&XL=MIANS',
                description:
                    'This is my primary credit card. It earns 4x on Dining and Groceries which is my biggest recurring spend category after rent.',
            },
            {
                title: 'American Express Platinum Card',
                description:
                    'They don’t call it the little metal coupon book for nothing. This card has a lot of great benefits like lounge access, hotel status, and a lot of other perks and discounts. I rarely spend money on this card but the benefits are worth the annual fee.',
            },
            {
                title: 'Capital One Venture X Card',
                link: 'https://capital.one/3ZcwrNZ',
                description:
                    'The Venture X is a great starter card for most people. 2x on everything and a great sign up bonus make it simple and straightforward to use.',
            },
            {
                title: 'Bilt Rewards Mastercard',
                link: 'https://bilt.page/r/X9OS-Y8JZ',
                description:
                    'The only card that allows you to earn points on rent payments. It’s a great way to earn points on a big expense that you otherwise wouldn’t. I also line up recurring expenses to hit on the 1st of the month when this card has 2x on all purchases.',
            },
        ],
    },
    {
        category: 'Other',
        items: [
            {
                title: 'Bambu Labs P1S 3D Printer',
                link: 'https://us.store.bambulab.com/products/p1s',
                description:
                    "I've been having a lot of fun with this 3D printer. It's a great way to make custom parts for projects and it's a great way to learn about 3D modeling and printing.",
            },
        ],
    },
];

export default function Uses() {
    return (
        <SimpleLayout
            title="Things I ❤️ & Use"
            intro="Those that know me well often refer to me as a gadget guy and as such I often get asked a lot about the things I use to build software, stay productive, or just because. Here’s a big list of all of my favorite stuff."
            disclaimer="*Some of the links on this page are affiliate links. If you click on them and make a purchase, I may earn a small commission. Thank you for your support!"
        >
            <div className="space-y-20">
                {UsesItems.map(({ category, items }) => (
                    <ToolsSection key={category} title={category}>
                        {items.map(({ title, link, description }) => (
                            <Tool key={title} title={title} href={link}>
                                {description}
                            </Tool>
                        ))}
                    </ToolsSection>
                ))}
            </div>
        </SimpleLayout>
    );
}
