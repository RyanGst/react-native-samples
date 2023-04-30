import { Platform } from "react-native"
import {
    FiraMono_500Medium as firaMonoMedium,
    FiraMono_700Bold as firaMonoBold,
    OverpassMono_400Regular as overpassMonoRegular,
    Poppins_400Regular as poppinsRegular,
} from "@expo-google-fonts/dev"

export const customFontsToLoad = {
    firaMonoMedium,
    firaMonoBold,
    poppinsRegular,
    overpassMonoRegular,
}

const fonts = {
    overpassMonoRegular: 'overpassMonoRegular',
    firaMonoMedium: 'firaMonoMedium',
    firaMonoBold: 'firaMonoBold',
    poppinsRegular: 'poppinsRegular',
}

export const typography = {
    /**
     * The fonts are available to use, but prefer using the semantic name.
     */
    fonts,
    /**
     * The primary font. Used in most places.
     */
    heading: fonts.firaMonoMedium,
    subheading: fonts.poppinsRegular,
    body: fonts.overpassMonoRegular,
}