"use client";

import { useOnScreen } from "../hooks/useOnScreen";
import StackSection from "./StackSection";

const TechnologySection = () => {
  const { ref, visible } = useOnScreen<HTMLDivElement>();
  return <div ref={ref}>{visible && <StackSection />}</div>;
};

export default TechnologySection;
