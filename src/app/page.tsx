import { ArticlesHomePreview } from '@/components/ArticlesHomePreview/ArticlesHomePreview';
import { Container } from '@/components/Container';
import { PhotosHomeBanner } from '@/components/PhotosHomeBanner/PhotosHomeBanner';
import { SocialLink } from '@/components/SocialLink/SocialLink';
import { socialNavigation } from '@/constants';
import { homePageHeader } from '@/content/homePageContent';
import { getAllArticles } from '@/lib/articles';

export default async function Home() {
    let articles = (await getAllArticles()).slice(0, 4);

    return (
        <>
            <Container className="mt-9">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        {homePageHeader.title}
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        {homePageHeader.content}
                    </p>
                    <div className="mt-6 flex gap-6">
                        {socialNavigation.map((item) =>
                            item.visible ? (
                                <SocialLink
                                    key={item.name}
                                    href={item.href}
                                    aria-label={`Follow on ${item.name}`}
                                    icon={item.icon}
                                />
                            ) : null,
                        )}
                    </div>
                </div>
            </Container>
            <PhotosHomeBanner />
            <ArticlesHomePreview articles={articles} />
        </>
    );
}
