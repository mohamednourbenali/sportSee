export const formatPerformanceData = (data) => {
    return data.map((item) => {
        switch (item.kind) {
            case 1:
                return { ...item, kind: 'Cardio' };
            case 2:
                return { ...item, kind: 'Energie' };
            case 3:
                return { ...item, kind: 'Endurance' };
            case 4:
                return { ...item, kind: 'Force' };
            case 5:
                return { ...item, kind: 'Vitesse' };
            case 6:
                return { ...item, kind: 'Intensité' };
            default:
                return { ...item };
        }
    });
};