import 'styles/global.scss';
import { FullpageLockingProvider } from 'context/FullpageLockingContext';

function PortfolioApp({ Component, pageProps }) {
  return (
    <FullpageLockingProvider>
      <Component {...pageProps} />
    </FullpageLockingProvider>
  );
}

export default PortfolioApp;
