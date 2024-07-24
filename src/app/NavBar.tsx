'use client';
import { ToggleThemeButton } from '@/components/ToggleThemeButton';
import { navigationItems } from '@/constants';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { classNames } from '@/utils';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const scrollPosition = useScrollPosition();

    return (
        <header
            className={classNames(
                'sticky inset-x-0 top-0 z-50',
                scrollPosition > 10 && 'bg-white dark:bg-gray-800',
                'transition-all duration-500'
            )}
        >
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Austin N. Christensen</span>
                        <ToggleThemeButton />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black dark:text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigationItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            target={item?.external ? '_blank' : ''}
                            className="text-sm font-semibold leading-6  text-black dark:text-white"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-black dark:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigationItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        target={item?.external ? '_blank' : ''}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black dark:text-white hover:bg-gray-50 hover:dark:bg-gray-800"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};
