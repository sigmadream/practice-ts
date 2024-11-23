import LineClamp1 from "@/components/lineClamp/1_r";
import LineClamp2 from "@/components/lineClamp/2_r";
import LineClamp3_V from "@/components/lineClamp/3_v";
import cx from "@/components/lineClamp/cx";

const LineClamps = () => (
  <div className={cx("LineClamps")}>
    <h2>여러줄 말줄임</h2>
    <LineClamp1 />
    <LineClamp2 />
    <LineClamp3_V />
  </div>
);

export default LineClamps;
