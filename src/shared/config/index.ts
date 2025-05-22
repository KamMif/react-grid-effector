export const GRID_CONFIG = {
    COLS: 12,
    ROW_HEIGHT: 100,
    MARGIN: [10, 10] as [number, number],
    CONTAINER_PADDING: [10, 10] as [number, number],
    BREAKPOINTS: {
        lg: 1200,
        md: 996,
        sm: 768,
        xs: 480,
        xxs: 0,
    },
    COLS_BREAKPOINTS: {
        lg: 12,
        md: 10,
        sm: 6,
        xs: 4,
        xxs: 2,
    },
} as const;

