'use client';

import { ThemeProvider as NextThemesProvide } from 'next-themes';

export function ThemeProvider({ children, ...props }) {
    return <NextThemesProvide {...props}>{children}</NextThemesProvide>;
}