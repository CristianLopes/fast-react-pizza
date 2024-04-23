import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import LoaderIndicator from './LoaderIndicator';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]'>
      {isLoading && <LoaderIndicator />}

      <Header />

     <div className='overflow-scroll'>
        <main className='flex h-full items-center justify-center'>
            <Outlet />
          </main>
     </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
