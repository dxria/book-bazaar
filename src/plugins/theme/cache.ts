import cache from "@emotion/cache";

import type { EmotionCache } from "@emotion/react";

function createCache(): EmotionCache {
    return cache({ key: "css" });
}

export default createCache;
