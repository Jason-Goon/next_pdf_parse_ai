import { AppProps } from 'next/app';
import { ThemeProvider } from '@/context/themeContext';
import 'tailwindcss/tailwind.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
                <ThemeProvider>
                    <Component {...pageProps} />
                </ThemeProvider>
        </QueryClientProvider>
    );
}