import { mount } from "marketing/MarketingApp";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function MarketingApp() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      mount(ref.current);
    }
  }, []);

  return <div ref={ref}>kkhjghfg</div>;
}
