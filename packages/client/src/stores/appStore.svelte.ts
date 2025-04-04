import { setLocale, type Locale, locales } from "$lib/paraglide/runtime";

export function createAppSlice() {
    let activeLocale: Locale = "fr";

    function isValidLocale(value: string): value is Locale {
        return locales.includes(value as Locale);
    }

    return {
        get activeLocale() { return activeLocale; },

        set activeLocale(value: string) {
            if (!isValidLocale(value)) return;

            setLocale(value);
            localStorage.setItem("locale", value);
            activeLocale = value;
        }
    }
}