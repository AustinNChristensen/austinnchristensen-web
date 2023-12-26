import { HomeBlogPreview } from '@/components/HomeBlogPreview/HomeBlogPreview';
import { HomeIntro } from '@/components/HomeIntro/HomeIntro';
import { HomePersonalHighlights } from '@/components/HomePersonalHighlights/HomePersonalHighlights';
import { HomeServices } from '@/components/HomeServices/HomeServices';
import { HomeTechStack } from '@/components/HomeTechStack/HomeTechStack';

export default function Home() {
    return (
        <div>
            <HomeIntro />
            <HomePersonalHighlights />
            <HomeTechStack />
            <HomeServices />
            <HomeBlogPreview />
        </div>
    );
}
