import {TBadge} from "@/types";
import badgeStyle, {paragraphBadgeStyle} from "@/ui/Badge/badge.css.ts";

const Badge: TBadge = ({text, borderStyle, borderWidth,}) => {
    return <div className={badgeStyle({
        borderWidth,
        borderStyle,
    })}>
        <p className={paragraphBadgeStyle}>
            {text}
        </p>
    </div>
}
export default Badge;