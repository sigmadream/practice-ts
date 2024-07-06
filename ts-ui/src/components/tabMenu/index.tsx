import cx from './cx'
import TabMenu1 from "@/components/tabMenu/1_r";
import TabMenu2 from "@/components/tabMenu/2_r";
import TabMenu3 from "@/components/tabMenu/3_r";
import TabMenu4V from "@/components/tabMenu/4_v";
import TabMenu5 from "@/components/tabMenu/5_r";
import TabMenu6 from "@/components/tabMenu/6_r";

const TabMenus = () => {
    return (
        <div className={cx('TabMenus')}>
            <h2>탭메뉴</h2>
            <TabMenu1/>
            <TabMenu2/>
            <TabMenu3/>
            <TabMenu4V/>
            <TabMenu5/>
            <TabMenu6/>
        </div>
    )
}

export default TabMenus