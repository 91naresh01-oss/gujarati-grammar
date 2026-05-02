/**
 * Smart Prefetch Utility
 * Browser idle time માં data prefetch કરે છે
 */

// Global cache for prefetched data
const prefetchCache = new Map();

/**
 * Data prefetch કરે છે અને cache માં store કરે
 * @param {string} key - Cache key (e.g., 'theory-1', 'test-3')
 * @param {Function} loader - Dynamic import function
 * @returns {Promise} - Loaded data
 */
export const prefetchData = (key, loader) => {
    if (prefetchCache.has(key)) {
        return Promise.resolve(prefetchCache.get(key));
    }

    const promise = loader()
        .then(data => {
            prefetchCache.set(key, data);
            return data;
        })
        .catch(err => {
            // Failed prefetch is not critical - remove failed entry
            prefetchCache.delete(key);
            throw err;
        });

    // Store promise itself to prevent duplicate fetches
    prefetchCache.set(key, promise);
    return promise;
};

/**
 * Cache માંથી data get કરે
 * @param {string} key - Cache key
 * @returns {any|null} - Cached data or null
 */
export const getCachedData = (key) => {
    return prefetchCache.get(key) || null;
};

/**
 * Browser idle time માં nearby chapters prefetch કરે
 * @param {Array} chapters - chaptersData array
 * @param {number} currentId - Current chapter ID (optional)
 */
export const prefetchNearbyChapters = (chapters, currentId = null) => {
    const schedule = (fn) => {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(fn, { timeout: 3000 });
        } else {
            setTimeout(fn, 200);
        }
    };

    // If on chapters page, prefetch first few chapters
    const targetChapters = currentId
        ? chapters.filter(c => Math.abs(c.id - currentId) <= 2)
        : chapters.slice(0, 4);

    targetChapters.forEach((chapter, index) => {
        schedule(() => {
            if (chapter.loadTheory) {
                prefetchData(`theory-${chapter.id}`, () =>
                    chapter.loadTheory()
                );
            }
            if (chapter.loadTests) {
                prefetchData(`tests-${chapter.id}`, () =>
                    chapter.loadTests()
                );
            }
        });
    });
};

/**
 * Specific chapter data prefetch (hover/touch par use)
 * @param {object} chapter - Chapter object from chaptersData
 */
export const prefetchChapter = (chapter) => {
    if (!chapter) return;

    if (chapter.loadTheory) {
        prefetchData(`theory-${chapter.id}`, () => chapter.loadTheory());
    }
    if (chapter.loadTests) {
        prefetchData(`tests-${chapter.id}`, () => chapter.loadTests());
    }
};

/**
 * Check if data is already cached
 * @param {string} key - Cache key
 * @returns {boolean}
 */
export const isCached = (key) => prefetchCache.has(key);

export default {
    prefetchData,
    getCachedData,
    prefetchNearbyChapters,
    prefetchChapter,
    isCached
};
