/**
 * Computes selector container alignment based on navbar position:
 * - left navbar → push to bottom with marginTop:auto
 * - right navbar → top (no margin needed)
 * - top/bottom → push to right with marginLeft:auto
 */
export const getSelectorContainerStyle = (position: string): React.CSSProperties => {
    const common: React.CSSProperties = {
        display: 'flex',
        padding: '10px',
    };

    if (position === 'navbar-left') {
        return { ...common, flexDirection: 'column', marginTop: 'auto' };
    } else if (position === 'navbar-right') {
        return { ...common, flexDirection: 'column' };
    } else {
        return { ...common, flexDirection: 'row', marginLeft: 'auto' };
    }
};
