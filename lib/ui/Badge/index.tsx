import {TBadge} from "@/types";
import badgeStyle, {paragraphBadgeStyle} from "@/ui/Badge/badge.css.ts";

const Badge: TBadge = ({text, borderStyle, borderWidth,}) => {
    const style = badgeStyle({
        borderWidth,
        borderStyle,
    })

    return <div className={style}>
        <p className={paragraphBadgeStyle}>
            {text}
        </p>
    </div>
}
export default Badge;