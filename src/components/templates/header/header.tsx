import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';

import { LanguageSelector } from '@src/components/features/language-selector';
import { Container } from '@src/components/shared/container';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="py-5">
      <nav>
        <Container className="flex items-center justify-between">
          <Link href="/" title={t('common.homepage')}>
            <Image
              src="/png/logo.png" // Update the path to your image
              alt="Logo"
              width={66} // Specify the desired width
              height={35} // Specify the desired height
            />
          </Link>
          <LanguageSelector />
        </Container>
      </nav>
    </header>
  );
};
