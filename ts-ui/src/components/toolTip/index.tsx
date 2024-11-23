import Tooltip1 from "@/components/toolTip/1_r";
import Tooltip2 from "@/components/toolTip/2_r";
import Tooltip3 from "@/components/toolTip/3_r";
import Tooltip4 from "@/components/toolTip/4_r";
import Tooltip5V from "@/components/toolTip/5_v";
import cx from "@/components/toolTip/cx";

const Tooltips = () => {
  return (
    <div className={cx("Tooltips")} style={{ marginBottom: 500 }}>
      <h2>툴팁</h2>
      <Tooltip1 />
      <Tooltip2 />
      <Tooltip3 />
      <Tooltip4 />
      <Tooltip5V />
    </div>
  );
};

export default Tooltips;
