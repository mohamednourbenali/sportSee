import calories from "../images/calories.png";
import glucides from "../images/glucides.png";
import proteines from "../images/proteines.png";
import lipides from "../images/lipides.png";

export const imageSet = (title) => {
    switch (title) {
        case 'Calories':
            return calories;
        case 'Proteines':
            return proteines;
        case 'Glucides':
            return glucides;
        case 'Lipides':
            return lipides;
        default:
            return "";
    }
};