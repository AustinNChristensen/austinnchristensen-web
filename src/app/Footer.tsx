import { ThemedText } from '@/components/ThemedText';
import { navigationItems, socialNavigation } from '@/constants';

export const Footer = () => {
    const thisYear = new Date().getFullYear();
    return (
        <footer className="mx-auto mt-24 max-w-7xl overflow-hidden px-6 pb-20 sm:pb-24 lg:px-8">
            <nav
                className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
                aria-label="Footer"
            >
                {navigationItems.map((item) => (
                    <div key={item.name} className="pb-6">
                        <a
                            href={item.href}
                            className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                            {item.name}
                        </a>
                    </div>
                ))}
            </nav>
            <div className="mt-10 flex justify-center space-x-10">
                {socialNavigation.map(
                    (item) =>
                        item.visible && (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-400 hover:text-gray-500"
                                target="_blank"
                            >
                                <span className="sr-only">{item.name}</span>
                                <item.icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </a>
                        )
                )}
            </div>
            <ThemedText className="mt-10 text-center text-xs leading-5 text-gray-500">
                &copy; {thisYear} Austin Christensen. All rights reserved.
            </ThemedText>
        </footer>
    );
};
