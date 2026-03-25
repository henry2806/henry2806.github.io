import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToHash – scrollt nach Navigation zum Anker-Element (z.B. /#projects).
 * Bei Navigation ohne Hash wird zum Seitenanfang gescrollt.
 */
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}

export default ScrollToHash;
