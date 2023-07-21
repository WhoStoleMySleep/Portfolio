import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ApolloClientProvider from './apollo/ApolloClientProvider';
import './variables.scss';
import './globals.scss'
import '@/assets/font/font.scss'

export const metadata = {
  title: 'WhoStoleMySleep',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <ApolloClientProvider>
          <Header />
          <div className="wrapper">
            {children}
          </div>
          <Footer />
        </ApolloClientProvider>
      </body>
    </html>
  )
}
