import PropTypes from "prop-types";
import React, { memo, useState, useCallback } from "react";

import { HomeSection2Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionTabs from "@/components/section-tabs";
import SectionList from "@/components/section-list";
import SectionFooter from "@/components/section-footer";

const HomeSection2 = memo((props) => {
  const { infoData } = props;
  const initialName = Object.keys(infoData?.dest_list)[0] || "";
  const [name, setName] = useState(initialName);
  const tabNames = infoData.dest_address?.map((item) => item.name);
  const tabClickHandle = useCallback(function (index, name) {
    setName(name);
  }, []);
  return (
    <HomeSection2Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionList roomList={infoData.dest_list?.[name]} itemWidth="33.33%" />
      <SectionFooter name={name} />
    </HomeSection2Wrapper>
  );
});

HomeSection2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSection2;
