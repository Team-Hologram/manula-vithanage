'use client';

import { createContext, useState, ReactNode } from 'react';

export const FilmGrainContext = createContext<{
    grainEnabled: boolean;
    setGrainEnabled: (val: boolean) => void;
}>({
    grainEnabled: true,
    setGrainEnabled: () => { },
});

export function FilmGrainProvider({ children }: { children: ReactNode }) {
    const [grainEnabled, setGrainEnabled] = useState(true);

    return (
        <FilmGrainContext.Provider value={{ grainEnabled, setGrainEnabled }}>
            {children}
            {grainEnabled && (
                <>
                    <div className="film-grain" aria-hidden="true" />
                    <div className="vignette" aria-hidden="true" />
                </>
            )}
        </FilmGrainContext.Provider>
    );
}
