
/**
 * Computes flex direction for menu links based on navbar position.
 * Left/right navbars → vertical, top/bottom → horizontal.
 */
export const getMenuStyle = (position: string): React.CSSProperties => {
    const common: React.CSSProperties = {
        display: 'flex',
        padding: '10px',
    };

    if (position === 'navbar-left' || position === 'navbar-right') {
        return { ...common, flexDirection: 'column' };
    } else {
        return { ...common, flexDirection: 'row' };
    }
};
