import {TBadge} from "@/types";
import badgeStyle, {borderStyle, paragraphBadgeStyle} from "@/ui/Badge/badge.css.ts";
import classNames from "classnames";
import {borderSize} from "@s/generalBehaviour.css.ts";

const Badge: TBadge = ({text, border = false, sizeBorder}) => {
    const style = classNames(badgeStyle, (border && classNames(borderStyle, borderSize[sizeBorder ? sizeBorder : "none"])))
    return <div className={style}>
        <p className={paragraphBadgeStyle}>
            {text}
        </p>
    </div>
}
export default Badge;