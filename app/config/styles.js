const { Platform } = require("react-native")

import colors from "./colors"

export default {
    text: {
        fontSize: 18,
        color: colors.dark,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        width: '100%'
    },
    colors
}


